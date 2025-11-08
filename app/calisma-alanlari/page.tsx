import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Scale, Users, Shield, FileText, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CalismaAlanlariPage() {
  const practiceAreas = [
    {
      icon: Briefcase,
      title: "İş Hukuku",
      slug: "is-hukuku",
      description:
        "İşçi ve işveren haklarının korunması, iş sözleşmeleri, kıdem ve ihbar tazminatları, iş kazaları, mobbing ve işe iade davaları konularında uzman hukuki destek sunuyoruz.",
      services: [
        "İş Sözleşmeleri Hazırlama ve İnceleme",
        "Kıdem ve İhbar Tazminatı Davaları",
        "İşe İade Davaları",
        "İş Kazası ve Meslek Hastalığı Davaları",
        "Mobbing Davaları",
        "Fazla Mesai ve Ücret Alacağı Davaları",
      ],
    },
    {
      icon: Scale,
      title: "Ceza Hukuku",
      slug: "ceza-hukuku",
      description:
        "Ceza davalarında savunma, suç duyuruları, şikayetler ve ceza hukuku kapsamındaki tüm hukuki süreçlerde profesyonel temsil ve danışmanlık hizmeti veriyoruz.",
      services: [
        "Ceza Davalarında Müdafilik",
        "Suç Duyurusu ve Şikayet Hazırlama",
        "Tutuklama ve Gözaltı İşlemleri",
        "Uzlaşma ve Arabuluculuk",
        "Hükmün Açıklanmasının Geri Bırakılması",
        "Temyiz ve İstinaf Başvuruları",
      ],
    },
    {
      icon: Users,
      title: "Aile Hukuku",
      slug: "aile-hukuku",
      description:
        "Boşanma, velayet, nafaka, mal paylaşımı ve aile içi hukuki sorunların çözümünde deneyimli avukatlık hizmeti sunarak ailelerin haklarını koruyoruz.",
      services: [
        "Boşanma Davaları (Anlaşmalı/Çekişmeli)",
        "Velayet ve Kişisel İlişki Düzenleme",
        "Nafaka Davaları (Tedbir, İştirak, Yoksulluk)",
        "Mal Paylaşımı ve Tazminat Davaları",
        "Nişanın Bozulması Davaları",
        "Soybağının Reddi ve Tanıma Davaları",
      ],
    },
    {
      icon: Shield,
      title: "Gayrimenkul Hukuku",
      slug: "gayrimenkul-hukuku",
      description:
        "Tapu işlemleri, kira sözleşmeleri, tahliye davaları ve gayrimenkul alım-satım süreçlerinde hukuki danışmanlık ve dava takibi hizmeti sunuyoruz.",
      services: [
        "Tapu İptal ve Tescil Davaları",
        "Kira Sözleşmeleri ve Tahliye Davaları",
        "Gayrimenkul Alım-Satım İşlemleri",
        "İmar ve Kamulaştırma Davaları",
        "Kat Mülkiyeti ve Kat İrtifakı",
        "Ortaklığın Giderilmesi Davaları",
      ],
    },
    {
      icon: FileText,
      title: "Miras Hukuku",
      slug: "miras-hukuku",
      description:
        "Miras paylaşımı, vasiyetname düzenleme, terekenin tespiti ve miras hukukundan kaynaklanan uyuşmazlıkların çözümünde profesyonel hukuki destek sağlıyoruz.",
      services: [
        "Miras Paylaşımı ve Taksim Davaları",
        "Vasiyetname Düzenleme ve İptali",
        "Mirasçılık Belgesi İşlemleri",
        "Mirastan Mal Kaçırma Davaları",
        "Tenkis Davaları",
        "Muris Muvazaası Davaları",
      ],
    },
    {
      icon: Award,
      title: "Ticaret Hukuku",
      slug: "ticaret-hukuku",
      description:
        "Şirket kuruluşu, ticari sözleşmeler, ortaklık anlaşmazlıkları ve ticari alacak davalarında hukuki destek ve danışmanlık hizmeti veriyoruz.",
      services: [
        "Şirket Kuruluşu ve Tür Değişikliği",
        "Ticari Sözleşmeler Hazırlama",
        "Ortaklık Anlaşmazlıkları",
        "Ticari Alacak ve İcra Takibi",
        "Konkordato ve İflas Davaları",
        "Franchise ve Distribütörlük Sözleşmeleri",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4 animate-fade-in-down">
              <span className="text-sm font-medium text-accent">Uzmanlık Alanlarımız</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-balance leading-tight animate-fade-in-up delay-100">
              Çalışma Alanlarımız
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
              Geniş yelpazede hukuki danışmanlık ve dava takibi hizmetleri sunarak, müvekkillerimizin haklarını en iyi
              şekilde koruyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {practiceAreas.map((area, index) => (
              <Card
                key={area.slug}
                className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 100}ms` }}
              >
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border-2 border-accent/20">
                        <area.icon className="text-accent" size={32} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif font-semibold mb-3">{area.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold mb-6 text-foreground/90">Sunduğumuz Hizmetler</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {area.services.map((service, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground/80">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">
              Hukuki Danışmanlığa İhtiyacınız mı Var?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Uzman avukatlarımızla hemen iletişime geçin. Size özel çözümler üretelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/online-randevu">
                  Online Randevu Al
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
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
