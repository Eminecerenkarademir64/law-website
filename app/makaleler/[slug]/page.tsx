import { Header } from "@/frontend/components/header"
import { Footer } from "@/frontend/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Makale verileri (gerçek uygulamada veritabanından gelecek)
const articles = [
  {
    id: 1,
    title: "İş Hukukunda İşçi Hakları ve Tazminat Talepleri",
    excerpt:
      "İş hukukunda işçilerin sahip olduğu temel haklar, kıdem ve ihbar tazminatı hesaplamaları ve işten çıkarma süreçlerinde dikkat edilmesi gereken hususlar hakkında detaylı bilgiler.",
    content: `
      <h2>İş Hukukunda İşçi Haklarının Önemi</h2>
      <p>İş hukuku, işçi ve işveren arasındaki ilişkileri düzenleyen, çalışma hayatının temel kurallarını belirleyen önemli bir hukuk dalıdır. İşçilerin sahip olduğu haklar, Türk İş Kanunu ve ilgili mevzuatla güvence altına alınmıştır.</p>
      
      <h2>Kıdem Tazminatı Nedir?</h2>
      <p>Kıdem tazminatı, işçinin en az bir yıl çalıştığı işyerinden belirli koşullar altında ayrılması durumunda hak ettiği tazminattır. İşçinin her çalıştığı tam yıl için 30 günlük brüt ücreti tutarında ödeme yapılır.</p>
      
      <h3>Kıdem Tazminatı Alma Koşulları:</h3>
      <ul>
        <li>En az bir yıl çalışmış olmak</li>
        <li>İşverenin feshi veya haklı nedenle işçinin feshi</li>
        <li>Emeklilik nedeniyle ayrılma</li>
        <li>Askerlik görevi nedeniyle ayrılma</li>
        <li>Kadın işçinin evlilik nedeniyle bir yıl içinde ayrılması</li>
      </ul>
      
      <h2>İhbar Tazminatı</h2>
      <p>İhbar tazminatı, iş sözleşmesinin feshedilmesi durumunda, ihbar öneli tanınmadan işten çıkarılan işçiye ödenen tazminattır. İhbar süreleri, işçinin çalışma süresine göre değişir:</p>
      
      <ul>
        <li>6 aydan az çalışanlarda: 2 hafta</li>
        <li>6 ay - 1.5 yıl arası: 4 hafta</li>
        <li>1.5 yıl - 3 yıl arası: 6 hafta</li>
        <li>3 yıldan fazla: 8 hafta</li>
      </ul>
      
      <h2>İşten Çıkarma Süreçlerinde Dikkat Edilmesi Gerekenler</h2>
      <p>İşveren, işçiyi işten çıkarırken belirli prosedürlere uymak zorundadır. Aksi takdirde işçi, kıdem ve ihbar tazminatı yanında işe iade davası açma hakkına sahiptir.</p>
      
      <h3>İşe İade Davası Koşulları:</h3>
      <ul>
        <li>30 veya daha fazla işçi çalıştıran işyerlerinde</li>
        <li>En az 6 ay çalışmış olmak</li>
        <li>Feshin geçerli bir nedene dayanmaması</li>
        <li>Fesih bildiriminden itibaren 1 ay içinde dava açılması</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>İş hukukunda işçi hakları, çalışma hayatının güvencesidir. İşten çıkarma durumunda haklarınızı bilmek ve gerektiğinde hukuki yollara başvurmak önemlidir. Uzman bir avukattan destek almak, haklarınızı tam olarak almanızı sağlayacaktır.</p>
    `,
    author: "Av. Kadir Taş",
    date: "15 Mart 2024",
    category: "İş Hukuku",
    slug: "is-hukukunda-isci-haklari",
    image: "/i--hukuku-adalet-terazisi-ofis.jpg",
    readTime: "8 dakika",
  },
  {
    id: 2,
    title: "Boşanma Davalarında Mal Paylaşımı ve Nafaka Hakları",
    excerpt:
      "Boşanma sürecinde mal rejimi, edinilmiş mallara katılma, nafaka türleri ve hesaplama yöntemleri konularında kapsamlı bir rehber.",
    content: `
      <h2>Boşanma Sürecinde Mal Paylaşımı</h2>
      <p>Boşanma davalarında en çok tartışılan konulardan biri mal paylaşımıdır. Türk Medeni Kanunu'na göre, eşler arasında yasal mal rejimi "edinilmiş mallara katılma rejimi"dir.</p>
      
      <h2>Edinilmiş Mallara Katılma Rejimi Nedir?</h2>
      <p>Bu rejimde, evlilik süresince edinilen mallar "edinilmiş mal", evlilik öncesi sahip olunan veya miras/bağış yoluyla edinilen mallar ise "kişisel mal" olarak kabul edilir.</p>
      
      <h3>Edinilmiş Mal Sayılan Varlıklar:</h3>
      <ul>
        <li>Evlilik süresince çalışarak kazanılan gelirler</li>
        <li>Sosyal güvenlik ve sosyal yardım kurum ve kuruluşlarının yaptığı ödemeler</li>
        <li>Çalışma gücünün kaybı nedeniyle ödenen tazminatlar</li>
        <li>Kişisel malların gelirleri</li>
        <li>Edinilmiş malların yerine geçen değerler</li>
      </ul>
      
      <h2>Nafaka Türleri</h2>
      <p>Boşanma davalarında üç tür nafaka söz konusudur:</p>
      
      <h3>1. Tedbir Nafakası</h3>
      <p>Boşanma davası devam ederken, ekonomik durumu zayıf olan eşe ödenen nafakadır. Dava sonuçlanana kadar devam eder.</p>
      
      <h3>2. Yoksulluk Nafakası</h3>
      <p>Boşanma sonrası, kusuru daha az olan veya kusursuz olan ve yoksulluğa düşen eşe ödenir. Süresiz veya belirli süreli olabilir.</p>
      
      <h3>3. İştirak Nafakası</h3>
      <p>Çocukların bakım, eğitim ve diğer giderlerine katılım için ödenir. Çocuk reşit olana veya ekonomik bağımsızlığını kazanana kadar devam eder.</p>
      
      <h2>Nafaka Miktarının Belirlenmesi</h2>
      <p>Nafaka miktarı belirlenirken şu faktörler dikkate alınır:</p>
      <ul>
        <li>Tarafların ekonomik ve sosyal durumu</li>
        <li>Kusur durumu</li>
        <li>Evlilik süresi</li>
        <li>Yaş ve sağlık durumu</li>
        <li>Mesleki durumu ve çalışma imkanları</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Boşanma sürecinde mal paylaşımı ve nafaka konuları karmaşık hukuki süreçlerdir. Haklarınızı korumak ve adil bir sonuç elde etmek için deneyimli bir aile hukuku avukatından destek almanız önemlidir.</p>
    `,
    author: "Av. Kadir Taş",
    date: "10 Mart 2024",
    category: "Aile Hukuku",
    slug: "bosanma-davalarinda-mal-paylasimi",
    image: "/aile-hukuku-bo-anma-mahkeme.jpg",
    readTime: "10 dakika",
  },
  {
    id: 3,
    title: "Ceza Hukukunda Savunma Stratejileri ve Haklar",
    excerpt:
      "Ceza davalarında sanık hakları, savunma yöntemleri, delil toplama ve değerlendirme süreçleri hakkında bilmeniz gerekenler.",
    content: `
      <h2>Ceza Hukukunda Sanık Hakları</h2>
      <p>Ceza muhakemesi sürecinde sanığın sahip olduğu haklar, adil yargılanma hakkının temel unsurlarıdır. Bu haklar, Anayasa ve Ceza Muhakemesi Kanunu ile güvence altına alınmıştır.</p>
      
      <h2>Temel Sanık Hakları</h2>
      
      <h3>1. Susma Hakkı</h3>
      <p>Sanık, kendisi aleyhine beyanda bulunmaya zorlanamaz. Susma hakkını kullanması, aleyhine yorumlanamaz.</p>
      
      <h3>2. Müdafi Seçme ve Müdafi İle Görüşme Hakkı</h3>
      <p>Sanık, soruşturma ve kovuşturmanın her aşamasında bir müdafiden yardım alma hakkına sahiptir. Ekonomik durumu müsait değilse, baro tarafından ücretsiz avukat görevlendirilir.</p>
      
      <h3>3. İsnad Edilen Suçu Öğrenme Hakkı</h3>
      <p>Sanık, kendisine yöneltilen suçlamaları ve delilleri öğrenme hakkına sahiptir.</p>
      
      <h3>4. Delilleri İnceleme ve İtiraz Etme Hakkı</h3>
      <p>Sanık, aleyhine sunulan delilleri inceleme ve bunlara itiraz etme hakkına sahiptir.</p>
      
      <h2>Savunma Stratejileri</h2>
      
      <h3>1. Delil Toplama ve Değerlendirme</h3>
      <p>Etkili bir savunma için, olaya ilişkin tüm delillerin toplanması ve hukuki açıdan değerlendirilmesi gerekir. Bu süreçte:</p>
      <ul>
        <li>Tanık beyanları alınmalı</li>
        <li>Bilirkişi raporları incelenmeli</li>
        <li>Fiziki deliller değerlendirilmeli</li>
        <li>Dijital deliller toplanmalı</li>
      </ul>
      
      <h3>2. Hukuki Değerlendirme</h3>
      <p>Suçun unsurları, hukuka uygunluk nedenleri ve kusurluluğu ortadan kaldıran nedenler detaylı olarak incelenmelidir.</p>
      
      <h3>3. Usul Hukuku Denetimleri</h3>
      <p>Soruşturma ve kovuşturma sürecinde usul kurallarına uyulup uyulmadığı kontrol edilmelidir. Usul hatası varsa, bu durum savunmada kullanılabilir.</p>
      
      <h2>Tutuklama ve Adli Kontrol</h2>
      <p>Sanık, belirli koşullar altında tutuklanabilir veya adli kontrol altına alınabilir. Tutuklama kararına itiraz edilebilir ve tahliye talep edilebilir.</p>
      
      <h3>Tutuklama Nedenleri:</h3>
      <ul>
        <li>Kaçma şüphesi</li>
        <li>Delilleri karartma şüphesi</li>
        <li>Katalog suçlar (belirli ağır suçlar)</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Ceza davalarında etkili bir savunma, sanık haklarının bilinmesi ve doğru stratejilerin uygulanmasıyla mümkündür. Deneyimli bir ceza avukatı, sürecin her aşamasında haklarınızı koruyacak ve en iyi savunmayı sunacaktır.</p>
    `,
    author: "Av. Kadir Taş",
    date: "5 Mart 2024",
    category: "Ceza Hukuku",
    slug: "ceza-hukukunda-savunma-stratejileri",
    image: "/ceza-hukuku-mahkeme-savunma.jpg",
    readTime: "9 dakika",
  },
  {
    id: 4,
    title: "Gayrimenkul Alım-Satımında Dikkat Edilmesi Gerekenler",
    excerpt:
      "Gayrimenkul alım-satım işlemlerinde tapu devri, vergi yükümlülükleri, ön inceleme ve sözleşme hazırlama süreçleri hakkında önemli bilgiler.",
    content: `
      <h2>Gayrimenkul Alım-Satımında Ön İnceleme</h2>
      <p>Gayrimenkul satın almadan önce yapılması gereken en önemli adım, tapu kaydının detaylı incelenmesidir. Bu inceleme, gelecekte karşılaşılabilecek birçok sorunu önler.</p>
      
      <h2>Tapu Kaydı İncelemesi</h2>
      
      <h3>Kontrol Edilmesi Gerekenler:</h3>
      <ul>
        <li>Malikin (sahibin) kimlik bilgileri</li>
        <li>Gayrimenkulün yüzölçümü ve sınırları</li>
        <li>İmar durumu ve kullanım amacı</li>
        <li>Takyidat (ipotek, haciz, şerh) olup olmadığı</li>
        <li>Kat irtifakı veya kat mülkiyeti durumu</li>
      </ul>
      
      <h2>Satış Vaadi Sözleşmesi</h2>
      <p>Gayrimenkul alım-satımında genellikle önce satış vaadi sözleşmesi yapılır. Bu sözleşmede şu hususlar yer almalıdır:</p>
      
      <ul>
        <li>Tarafların kimlik bilgileri</li>
        <li>Gayrimenkulün tam adresi ve tapu bilgileri</li>
        <li>Satış bedeli ve ödeme şekli</li>
        <li>Tapu devir tarihi</li>
        <li>Cezai şart ve temerrüt hükümleri</li>
      </ul>
      
      <h2>Vergi ve Harçlar</h2>
      
      <h3>Tapu Harcı</h3>
      <p>Gayrimenkulün beyan edilen değerinin %4'ü kadardır. Alıcı ve satıcı tarafından eşit olarak ödenir (her biri %2).</p>
      
      <h3>Emlak Vergisi</h3>
      <p>Gayrimenkulün bulunduğu yere göre değişir. Belediye sınırları içinde %0.1-0.6, dışında %0.1-0.3 oranındadır.</p>
      
      <h3>Değer Artış Kazancı Vergisi</h3>
      <p>5 yıldan kısa sürede satılan gayrimenkullerde, değer artışı üzerinden gelir vergisi ödenir. 5 yıl sonra satışlarda bu vergi uygulanmaz.</p>
      
      <h2>Tapu Devir İşlemi</h2>
      <p>Tapu devri, tapu müdürlüğünde yapılır. İşlem sırasında:</p>
      
      <ul>
        <li>Alıcı ve satıcının bizzat hazır bulunması veya noter onaylı vekaletname ile temsil edilmesi gerekir</li>
        <li>Kimlik belgeleri ibraz edilir</li>
        <li>Satış bedeli ödenir veya ödendiğine dair belge sunulur</li>
        <li>Tapu harcı ödenir</li>
        <li>Tapu senedi düzenlenir ve teslim edilir</li>
      </ul>
      
      <h2>Dikkat Edilmesi Gereken Özel Durumlar</h2>
      
      <h3>1. Kat Karşılığı İnşaat</h3>
      <p>Arsa sahibi ile müteahhit arasında yapılan kat karşılığı inşaat sözleşmelerinde, kat irtifakı kurulması ve noter onayı önemlidir.</p>
      
      <h3>2. Yabancılara Satış</h3>
      <p>Yabancı uyruklu kişilere gayrimenkul satışında özel düzenlemeler vardır. Askeri yasak bölgelerde satış yapılamaz.</p>
      
      <h3>3. Tarımsal Arazi</h3>
      <p>Tarım arazilerinin satışında Toprak Koruma Kurulu izni gerekebilir.</p>
      
      <h2>Sonuç</h2>
      <p>Gayrimenkul alım-satımı, büyük yatırımlar gerektiren ve hukuki sonuçları olan bir işlemdir. Sürecin her aşamasında uzman bir gayrimenkul avukatından destek almak, haklarınızı koruyacak ve sorunsuz bir devir sağlayacaktır.</p>
    `,
    author: "Av. Kadir Taş",
    date: "28 Şubat 2024",
    category: "Gayrimenkul Hukuku",
    slug: "gayrimenkul-alim-satiminda-dikkat-edilmesi-gerekenler",
    image: "/gayrimenkul-ev-tapu-s-zle-me.jpg",
    readTime: "11 dakika",
  },
  {
    id: 5,
    title: "Miras Hukukunda Saklı Pay ve Tenkis Davaları",
    excerpt:
      "Miras hukukunda saklı pay kavramı, saklı pay oranları, tenkis davası açma koşulları ve süreçleri hakkında detaylı açıklamalar.",
    content: `
      <h2>Saklı Pay Nedir?</h2>
      <p>Saklı pay, mirasbırakanın belirli yasal mirasçılarına ayırmak zorunda olduğu, tasarruf edemeyeceği miras payıdır. Türk Medeni Kanunu, saklı paylı mirasçıları ve oranlarını belirlemiştir.</p>
      
      <h2>Saklı Paylı Mirasçılar ve Oranları</h2>
      
      <h3>1. Altsoy (Çocuklar ve Torunlar)</h3>
      <p>Yasal miras paylarının 1/2'si saklı paydır. Örneğin, iki çocuk varsa her birinin yasal payı 1/2'dir ve saklı payı 1/4'tür.</p>
      
      <h3>2. Ana ve Baba</h3>
      <p>Yasal miras paylarının 1/4'ü saklı paydır. Altsoy yoksa devreye girerler.</p>
      
      <h3>3. Sağ Kalan Eş</h3>
      <p>Altsoy veya ana-baba ile birlikte mirasçı oluyorsa yasal payının 1/4'ü, tek başına mirasçı ise yasal payının 1/2'si saklı paydır.</p>
      
      <h2>Tasarruf Edilebilir Kısım</h2>
      <p>Mirasbırakan, saklı paylar düşüldükten sonra kalan kısım üzerinde serbestçe tasarruf edebilir. Bu kısımla:</p>
      <ul>
        <li>Vasiyet yapabilir</li>
        <li>Bağışlama yapabilir</li>
        <li>Miras sözleşmesi düzenleyebilir</li>
      </ul>
      
      <h2>Tenkis Davası Nedir?</h2>
      <p>Tenkis davası, mirasbırakanın ölümünden önce yaptığı tasarruflar nedeniyle saklı payı zedelenen mirasçının, bu tasarrufların iptali için açtığı davadır.</p>
      
      <h3>Tenkis Davasının Koşulları:</h3>
      <ul>
        <li>Davacının saklı paylı mirasçı olması</li>
        <li>Saklı payın zedelenmiş olması</li>
        <li>Mirasbırakanın ölmüş olması</li>
        <li>Dava süresinin dolmamış olması (mirasbırakanın ölümünü ve zedelemeyi öğrenmeden itibaren 1 yıl, her halükarda 10 yıl)</li>
      </ul>
      
      <h2>Tenkise Tabi Tasarruflar</h2>
      
      <h3>1. Ölüme Bağlı Tasarruflar</h3>
      <ul>
        <li>Vasiyetnameler</li>
        <li>Miras sözleşmeleri</li>
        <li>Ölüm durumunda lehdar tayini (sigorta, emeklilik)</li>
      </ul>
      
      <h3>2. Sağlar Arası Tasarruflar</h3>
      <ul>
        <li>Karşılıksız bağışlamalar</li>
        <li>Emekli ikramiyesinin devri</li>
        <li>Hayat sigortası primleri</li>
        <li>Mirasçılık sıfatıyla yapılan ödemeler</li>
      </ul>
      
      <h2>Tenkis Sırası</h2>
      <p>Tenkis, belirli bir sıra izlenerek yapılır:</p>
      <ol>
        <li>Önce vasiyetler tenkis edilir</li>
        <li>Sonra miras sözleşmeleri</li>
        <li>En son sağlar arası bağışlamalar (en yeniden başlanarak)</li>
      </ol>
      
      <h2>Tenkis Davasının Sonuçları</h2>
      <p>Tenkis davası sonucunda:</p>
      <ul>
        <li>Saklı payı zedeleyen tasarruf iptal edilir</li>
        <li>Lehdar, aldığı fazla miktarı iade etmek zorundadır</li>
        <li>Taşınmazlarda tapu iptali ve tescil kararı verilir</li>
        <li>Paraya ilişkin tasarruflarda iade hükmü verilir</li>
      </ul>
      
      <h2>Mirastan Mal Kaçırma</h2>
      <p>Mirasbırakanın ölümünden önce malvarlığını azaltmak amacıyla yaptığı işlemler, muvazaalı işlem olarak iptal edilebilir. Bu durumda:</p>
      <ul>
        <li>İşlemin gerçek olmadığının ispatlanması gerekir</li>
        <li>Tarafların gerçek iradelerinin farklı olduğu gösterilmelidir</li>
        <li>Muvazaa davası açılabilir</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Miras hukuku, karmaşık ve duygusal yönü ağır basan bir alandır. Saklı pay hakları ve tenkis davaları, uzman bir miras avukatının rehberliğinde yürütülmelidir. Haklarınızı korumak ve adil bir miras paylaşımı sağlamak için profesyonel destek almaktan çekinmeyin.</p>
    `,
    author: "Av. Kadir Taş",
    date: "20 Şubat 2024",
    category: "Miras Hukuku",
    slug: "miras-hukukunda-sakli-pay",
    image: "/miras-hukuku-vasiyet-belge.jpg",
    readTime: "12 dakika",
  },
  {
    id: 6,
    title: "Ticaret Hukukunda Şirket Kuruluşu ve Ortaklık Yapıları",
    excerpt:
      "Türkiye'de şirket kuruluş süreçleri, şirket türleri, ortaklık yapıları ve ticari faaliyete başlama prosedürleri hakkında kapsamlı bilgiler.",
    content: `
      <h2>Türkiye'de Şirket Türleri</h2>
      <p>Türk Ticaret Kanunu'na göre, Türkiye'de kurulabilecek şirket türleri şunlardır:</p>
      
      <h3>1. Anonim Şirket (A.Ş.)</h3>
      <p>Sermayesi belirli ve paylara bölünmüş olan, borçlarından dolayı yalnızca malvarlığıyla sorumlu olan şirket türüdür.</p>
      
      <h4>Özellikleri:</h4>
      <ul>
        <li>Minimum sermaye: 50.000 TL</li>
        <li>En az 1 ortak gerekir</li>
        <li>Ortaklar sadece koydukları sermaye ile sorumludur</li>
        <li>Halka açılabilir</li>
      </ul>
      
      <h3>2. Limited Şirket (Ltd. Şti.)</h3>
      <p>Sermayesi belirli ve esas sermaye paylarına bölünmüş, ortaklarının sorumluluğu koydukları sermaye ile sınırlı olan şirket türüdür.</p>
      
      <h4>Özellikleri:</h4>
      <ul>
        <li>Minimum sermaye: 10.000 TL</li>
        <li>En az 1, en fazla 50 ortak olabilir</li>
        <li>Ortaklar sadece koydukları sermaye ile sorumludur</li>
        <li>Halka açılamaz</li>
      </ul>
      
      <h3>3. Kollektif Şirket</h3>
      <p>Ticari bir işletmeyi bir ticaret unvanı altında işletmek amacıyla gerçek kişiler tarafından kurulan, ortaklarının şirket borçlarından dolayı sınırsız sorumlu oldukları şirket türüdür.</p>
      
      <h3>4. Komandit Şirket</h3>
      <p>Bir veya birden fazla ortağın şirket borçlarından sınırsız sorumlu olduğu, diğer ortakların ise sadece koydukları sermaye ile sorumlu oldukları şirket türüdür.</p>
      
      <h2>Şirket Kuruluş Süreci</h2>
      
      <h3>1. Ön Hazırlık</h3>
      <ul>
        <li>Şirket türünün belirlenmesi</li>
        <li>Ticaret unvanının seçilmesi ve kontrolü</li>
        <li>Ortakların belirlenmesi</li>
        <li>Sermaye yapısının oluşturulması</li>
      </ul>
      
      <h3>2. Ana Sözleşme Hazırlığı</h3>
      <p>Ana sözleşme, şirketin kuruluş belgeleri arasında en önemlisidir. İçermesi gereken hususlar:</p>
      <ul>
        <li>Şirketin ticaret unvanı</li>
        <li>Şirketin merkezi ve şubeleri</li>
        <li>Şirketin faaliyet konusu</li>
        <li>Sermaye miktarı ve ödeme şekli</li>
        <li>Yönetim ve temsil şekli</li>
        <li>Ortakların hak ve yükümlülükleri</li>
      </ul>
      
      <h3>3. Ticaret Sicili Tescili</h3>
      <p>Ana sözleşme noterde onaylandıktan sonra, ticaret siciline tescil için başvurulur. Gerekli belgeler:</p>
      <ul>
        <li>Şirket ana sözleşmesi</li>
        <li>Ortakların kimlik belgeleri</li>
        <li>Sermaye taahhüt beyanı</li>
        <li>Yönetim kurulu veya müdür kararları</li>
        <li>İmza sirküleri</li>
      </ul>
      
      <h3>4. Vergi Dairesi Kaydı</h3>
      <p>Ticaret sicili tescilindensonra, vergi dairesine başvurularak vergi numarası alınır.</p>
      
      <h3>5. Sosyal Güvenlik Kurumu (SGK) Kaydı</h3>
      <p>Şirket, işe alacağı personel için SGK'ya işveren olarak kayıt yaptırmalıdır.</p>
      
      <h2>Ortaklık Yapıları ve Yönetim</h2>
      
      <h3>Anonim Şirketlerde Yönetim</h3>
      <ul>
        <li>Yönetim kurulu en az 1 üyeden oluşur</li>
        <li>Genel kurul en üst karar organıdır</li>
        <li>Denetim, denetçiler tarafından yapılır</li>
      </ul>
      
      <h3>Limited Şirketlerde Yönetim</h3>
      <ul>
        <li>Müdürler tarafından yönetilir</li>
        <li>Ortaklar genel kurulu en üst karar organıdır</li>
        <li>Denetim, denetçi atanmışsa denetçiler tarafından yapılır</li>
      </ul>
      
      <h2>Şirket Kuruluşunda Dikkat Edilmesi Gerekenler</h2>
      
      <h3>1. Faaliyet Konusunun Belirlenmesi</h3>
      <p>Şirketin faaliyet konusu, geniş tutulmalı ancak gerçekçi olmalıdır. İleriye dönük planlar da dikkate alınmalıdır.</p>
      
      <h3>2. Sermaye Yapısı</h3>
      <p>Sermaye, şirketin ihtiyaçlarını karşılayacak düzeyde olmalıdır. Ayni sermaye konulacaksa, değerleme raporu hazırlanmalıdır.</p>
      
      <h3>3. Ortaklar Arası Anlaşma</h3>
      <p>Ana sözleşmeye ek olarak, ortaklar arasında detaylı bir ortaklık anlaşması yapılması önerilir. Bu anlaşmada:</p>
      <ul>
        <li>Kar paylaşımı</li>
        <li>Yönetim şekli</li>
        <li>Ortaklıktan çıkma koşulları</li>
        <li>Uyuşmazlık çözüm yöntemleri</li>
      </ul>
      <p>gibi konular detaylandırılabilir.</p>
      
      <h3>4. Vergi Planlaması</h3>
      <p>Şirket türü seçilirken, vergi yükümlülükleri de dikkate alınmalıdır. Kurumlar vergisi, KDV, stopaj gibi vergilerin etkileri değerlendirilmelidir.</p>
      
      <h2>Yabancı Ortaklı Şirketler</h2>
      <p>Yabancı gerçek veya tüzel kişiler, Türkiye'de şirket kurabilir veya mevcut şirketlere ortak olabilirler. Bazı sektörlerde yabancı ortaklık oranına sınırlama getirilebilir.</p>
      
      <h2>Sonuç</h2>
      <p>Şirket kuruluşu, dikkatli planlama ve hukuki danışmanlık gerektiren bir süreçtir. Doğru şirket türünün seçilmesi, ana sözleşmenin özenle hazırlanması ve tüm yasal yükümlülüklerin yerine getirilmesi, şirketin geleceği için kritik öneme sahiptir. Deneyimli bir ticaret hukuku avukatından destek almak, sürecin sorunsuz ilerlemesini sağlayacaktır.</p>
    `,
    author: "Av. Kadir Taş",
    date: "15 Şubat 2024",
    category: "Ticaret Hukuku",
    slug: "ticaret-hukukunda-sirket-kurulusu",
    image: "/ticaret-hukuku--irket-i--toplant-s-.jpg",
    readTime: "13 dakika",
  },
]

export default function MakaleDetayPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/makaleler" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 group">
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Makalelere Dön
            </Link>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20">
                  <span className="text-sm font-medium text-accent">{article.category}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-balance leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t">
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{article.date}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Share2 size={16} />
                  Paylaş
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="container mx-auto px-4 lg:px-8 mb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border-2 border-border">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:font-light
                prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-ul:space-y-2
                prose-li:text-muted-foreground
                prose-strong:text-foreground prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-secondary/30 rounded-2xl border-2 border-border">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-serif font-semibold">Hukuki Danışmanlığa İhtiyacınız mı Var?</h3>
                <p className="text-muted-foreground">
                  Bu makale genel bilgilendirme amaçlıdır. Kişisel durumunuz için uzman görüşü almak isterseniz, bizimle
                  iletişime geçebilirsiniz.
                </p>
                <div className="flex gap-4 justify-center flex-wrap pt-4">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/online-randevu">Online Randevu Al</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 bg-transparent">
                    <Link href="/iletisim">İletişime Geç</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center">İlgili Makaleler</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {articles
                .filter((a) => a.id !== article.id)
                .slice(0, 3)
                .map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/makaleler/${relatedArticle.slug}`} className="group">
                    <div className="border-2 border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 bg-secondary/20">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="px-3 py-1 bg-accent/10 rounded-full border border-accent/20 inline-block mb-3">
                          <span className="text-xs font-medium text-accent">{relatedArticle.category}</span>
                        </div>
                        <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedArticle.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
