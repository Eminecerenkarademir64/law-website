import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Users, Scale } from "lucide-react"
import Image from "next/image"

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-20 min-h-[calc(60vh)] pb-16 lg:pb-24 overflow-hidden">
        <Image
          src="/about-hero-image.jpg"
          alt="Taş Hukuk & Danışmanlık - Hakkımızda"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center justify-center h-[calc(60vh-4rem)] md:h-[calc(60vh-6rem)] lg:h-[calc(60vh-7rem)]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white/90 text-balance leading-[1.05]">
              Hakkımızda
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 text-pretty leading-relaxed">
              Adalet ve müvekkil memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon - Hero sınırını yarı taşan konum */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 -mt-16 md:-mt-24 lg:-mt-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-border">
            <CardContent className="p-8 lg:p-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Target className="text-accent" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">Misyonumuz</h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Müvekkillerimizin haklarını en etkin biçimde korumak ve her dosyada ölçülebilir, sonuç odaklı çözümler
                üretmek için çalışıyoruz. Karmaşık hukuki süreçleri anlaşılır hale getiriyor, net bir yol haritası ve
                risk analizi ile şeffaf ilerliyoruz. İletişimi her zaman önceliklendiriyor; hızlı geri dönüş, düzenli
                bilgilendirme ve sürdürülebilir stratejilerle yanınızda oluyoruz.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-border">
            <CardContent className="p-8 lg:p-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Award className="text-accent" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">Vizyonumuz</h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Hukukun her alanında; etik değerlere bağlı, teknolojiyle güçlendirilmiş ve erişilebilir hizmet
                standartlarıyla güven veren bir çözüm ortağı olmak. Bilgiyi paylaşan, sürekli gelişen ve nitelikli
                ekibiyle yerel ve ulusal ölçekte referans gösterilen bir hukuk bürosu haline gelmek.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Değerlerimiz */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Değerlerimiz</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Çalışma prensipleri ve değerlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Scale className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Adalet</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hukukun üstünlüğü ve hakkaniyet ilkesi tüm süreçlerimizin temelini oluşturur. Tarafsız, özenli ve
                  nesnel değerlendirmelerle en doğru sonuca ulaşmayı hedefleriz.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Users className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Güven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gizlilik ve şeffaflık esastır. Dosyalarınızı düzenli bilgilendirme, açık iletişim ve yazılı onay
                  süreçleriyle yürütür; her adımı birlikte planlarız.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Award className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Profesyonellik</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Uzmanlık, hazırlık ve zamanında dönüş ilkemizdir. Güncel mevzuatı takip eder; teknoloji ve
                  dokümantasyon standartlarıyla hatasız ve hızlı süreç yönetimi sağlarız.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-center text-balance">Hikayemiz</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
              Taş Hukuk & Danışmanlık & Arabuluculuk, 2019 yılında hukuk alanında derin bilgi ve geniş deneyime sahip uzman bir kadro ile müvekkillerine yüksek kalitede ve etkili hukuki hizmetler sunmak amacıyla kurulmuştur. Kuruluşumuzun temel misyonu, her bir müvekkilimizin özel ihtiyaçlarını anlamak ve bu ihtiyaçlara en uygun, etkili çözümleri sağlamaktır. Bu süreçte, müvekkillerimizle kurduğumuz güçlü iletişim ve anlayış, bizim için büyük bir önem taşımaktadır.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                
Ekibimiz, ceza hukuku, aile hukuku, ticaret hukuku, iş hukuku ve sözleşmeler hukuku gibi birçok farklı uzmanlık alanında faaliyet gösteren deneyimli avukatlardan oluşmaktadır. Amacımız, hukuki süreçlerin her aşamasında müvekkillerimizin yanında yer almak ve onların haklarının en etkin şekilde korunmasını sağlamaktır. Her müvekkilimizin durumu kendine özgüdür ve bu nedenle, kişiye özel bir yaklaşım benimseyerek, her bir vakayı en üst düzeyde ele alıyoruz.

              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                
Taş Hukuk & Danışmanlık & Arabuluculuk,  olarak, müvekkillerimizle güvene dayalı bir ilişki kurmayı öncelikli hedefimiz olarak belirliyoruz. Adalet arayışında yanınızda olarak, haklarınızı koruyup, en iyi sonuçları elde etmek için titizlikle çalışıyor ve her aşamada sizinle iletişimde kalıyoruz. Müşteri memnuniyetine verdiğimiz büyük önem, sunduğumuz hizmetin kalitesinin belirleyici unsurlarından biri olarak öne çıkıyor.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                
              Büromuz, her türlü hukuki sorunla başa çıkmak için yenilikçi ve etkili çözümler sunmayı hedeflemektedir. Her müvekkilin durumu benzersiz olduğu için, her biri için özel bir yaklaşım geliştiriyor ve stratejilerimizi müvekkilimizin ihtiyaçlarına göre şekillendiriyoruz. Böylelikle, her müvekkilimize en iyi hizmeti sunmayı amaçlıyoruz.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                
              Sonuç itibarıyla, hukuki sorunlarınızda güvenilir bir danışman arıyorsanız, Taş Hukuk & Danışmanlık &Arabuluculuk  olarak sizin yanınızda olmayı ve size yardımcı olmayı büyük bir mutlulukla karşılıyoruz. Adalet arayışınızda her zaman yanınızdayız ve sizi desteklemek için buradayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
