import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Scale, Briefcase, Users, Award, Shield, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import { getArticles } from "@/lib/db/queries"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative mt-20 min-h-[calc(100vh-80px)] pb-24 lg:pb-36 overflow-hidden">
        <Image
          src="/law-firm-hero-image.jpg"
          alt="Taş Hukuk & Danışmanlık Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 pt-10 lg:pt-16">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4 animate-fade-in-down">
              <span className="text-sm font-medium text-white/90">Profesyonel Hukuki Danışmanlık</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white text-balance leading-[1.05] tracking-tight animate-fade-in-up delay-100 drop-shadow-lg">
              Haklarınızı En İyi Şekilde Korumanın Etkili Çözümler
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200 drop-shadow">
              Yasal sorunlarınıza etkili ve hızlı Çözümler sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all animate-fade-in-up delay-300"
              >
                <Link href="/online-randevu">
                  Hemen Randevu Alın
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-2 hover:bg-secondary/50 bg-transparent"
              >
                <Link href="/calisma-alanlari">Çalışma Alanlarımız</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary opacity-90" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center space-y-3">
              <div className="text-5xl lg:text-6xl font-serif font-semibold">15+</div>
              <div className="text-sm text-primary-foreground/90 uppercase tracking-wider font-medium">
                Yıllık Deneyim
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl lg:text-6xl font-serif font-semibold">350+</div>
              <div className="text-sm text-primary-foreground/90 uppercase tracking-wider font-medium">
                Başarılı Dava
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl lg:text-6xl font-serif font-semibold">95%</div>
              <div className="text-sm text-primary-foreground/90 uppercase tracking-wider font-medium">
                Müvekkil Memnuniyeti
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl lg:text-6xl font-serif font-semibold">7/24</div>
              <div className="text-sm text-primary-foreground/90 uppercase tracking-wider font-medium">
                Destek Hizmeti
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Son Makaleler */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Son Makaleler</h2>
            <p className="text-lg text-muted-foreground">Güncel hukuki içeriklerden öne çıkanlar</p>
          </div>

          <Suspense fallback={<div className="text-center text-muted-foreground">Yükleniyor...</div>}>
            {/* @ts-expect-error Async Server Component */}
            <LatestArticles />
          </Suspense>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-2 bg-transparent">
              <Link href="/makaleler">
                Tüm Makaleler
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-balance">Çalışma Alanlarımız</h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Geniş yelpazede hukuki danışmanlık ve dava takibi hizmetleri sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-serif font-semibold">İş Hukuku</h3>
                <p className="text-muted-foreground leading-relaxed">
                  İşçi ve işveren haklarının korunması, iş sözleşmeleri, tazminat davaları ve iş kazaları konularında
                  uzman hukuki destek.
                </p>
                <Link
                  href="/calisma-alanlari"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:gap-3 gap-2 transition-all"
                >
                  Detaylı Bilgi
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Scale className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Ceza Hukuku</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ceza davalarında savunma, suç duyuruları, şikayetler ve ceza hukuku kapsamındaki tüm hukuki süreçlerde
                  profesyonel temsil.
                </p>
                <Link
                  href="/calisma-alanlari"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:gap-3 gap-2 transition-all"
                >
                  Detaylı Bilgi
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Users className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Aile Hukuku</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Boşanma, velayet, nafaka, mal paylaşımı ve aile içi hukuki sorunların çözümünde deneyimli avukatlık
                  hizmeti.
                </p>
                <Link
                  href="/calisma-alanlari"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:gap-3 gap-2 transition-all"
                >
                  Detaylı Bilgi
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Shield className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Gayrimenkul Hukuku</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tapu işlemleri, kira sözleşmeleri, tahliye davaları ve gayrimenkul alım-satım süreçlerinde hukuki
                  danışmanlık.
                </p>
                <Link
                  href="/calisma-alanlari"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:gap-3 gap-2 transition-all"
                >
                  Detaylı Bilgi
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <FileText className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Miras Hukuku</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Miras paylaşımı, vasiyetname düzenleme, terekenin tespiti ve miras hukukundan kaynaklanan
                  uyuşmazlıkların çözümü.
                </p>
                <Link
                  href="/calisma-alanlari"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:gap-3 gap-2 transition-all"
                >
                  Detaylı Bilgi
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Award className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Ticaret Hukuku</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Şirket kuruluşu, ticari sözleşmeler, ortaklık anlaşmazlıkları ve ticari alacak davalarında hukuki
                  destek.
                </p>
                <Link
                  href="/calisma-alanlari"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:gap-3 gap-2 transition-all"
                >
                  Detaylı Bilgi
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 hover:bg-secondary/50 bg-transparent">
              <Link href="/calisma-alanlari">
                Tüm Çalışma Alanları
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-balance">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Müvekkil memnuniyeti ve başarı odaklı çalışma prensibimizle fark yaratıyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-5">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto border-2 border-accent/20">
                <Award className="text-accent" size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Kanıtlanmış Başarı</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Yılların deneyimi ve yüzlerce başarılı dava ile müvekkillerimize en iyi sonuçları sağlıyoruz.
              </p>
            </div>

            <div className="text-center space-y-5">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto border-2 border-accent/20">
                <Users className="text-accent" size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Müvekkil Odaklı</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Her müvekkilimize özel çözümler üretir, hukuki süreçte yanınızda olur ve haklarınızı sonuna kadar
                savunuruz.
              </p>
            </div>

            <div className="text-center space-y-5">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto border-2 border-accent/20">
                <Scale className="text-accent" size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Uzman Kadro</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Alanında uzman avukatlarımız ile her türlü hukuki konuda profesyonel danışmanlık ve temsil hizmeti
                sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/legal-scales-pattern.jpg')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-balance leading-tight">
              Hukuki Danışmanlığa İhtiyacınız mı Var?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty leading-relaxed">
              Deneyimli avukatlarımızla hemen iletişime geçin. Size özel çözümler üretelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/online-randevu">
                  Online Randevu Al
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/iletisim">Bize Ulaşın</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

async function LatestArticles() {
  const data = await getArticles()
  const articles = (data || []).slice(0, 3)

  if (!articles.length) {
    return (
      <div className="text-center text-muted-foreground">Henüz makale bulunmuyor.</div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <Card key={article.id} className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden">
          <div className="relative h-48 w-full overflow-hidden bg-secondary/20">
            <Image
              src={article.image_url || "/placeholder.jpg"}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-6 flex flex-col flex-1">
            <div className="mb-3">
              {article.category && (
                <span className="inline-block px-3 py-1 bg-accent/10 rounded-full border border-accent/20 text-xs font-medium text-accent">
                  {article.category}
                </span>
              )}
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-accent transition-colors">
              {article.title}
            </h3>
            {article.excerpt && (
              <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
            )}
            <Link
              href={`/makaleler/${article.slug}`}
              className="mt-auto inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:gap-3 gap-2 transition-all"
            >
              Devamını Oku
              <ArrowRight size={16} />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
