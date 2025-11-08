import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AvKadirTasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-balance">Av. Kadir Taş</h1>
                <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">Kurucu Avukat</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/online-randevu">
                      Randevu Al
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/iletisim">İletişime Geç</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted border-2 border-border">
                <Image
                  src="/law-firm-avukat-fotoğrafı.jpg"
                  alt="Av. Kadir Taş"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-light">Eğitim</h2>
            </div>
            <Card className="border-2 border-border">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-semibold">Hukuk Fakültesi</h3>
                    <p className="text-muted-foreground">Lorem Ipsum Üniversitesi</p>
                    <p className="text-sm text-muted-foreground">2005 - 2010</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deneyim */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-light">Profesyonel Deneyim</h2>
            </div>
            <div className="space-y-6">
              <Card className="border-2 border-border">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-accent" size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-semibold">Kurucu Avukat</h3>
                      <p className="text-muted-foreground">Av. Kadir Taş Hukuk Bürosu</p>
                      <p className="text-sm text-muted-foreground">2015 - Günümüz</p>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-accent" size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-semibold">Kıdemli Avukat</h3>
                      <p className="text-muted-foreground">Lorem Hukuk Bürosu</p>
                      <p className="text-sm text-muted-foreground">2010 - 2015</p>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-light">Uzmanlık Alanları</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">İş Hukuku</h3>
                  <p className="text-muted-foreground text-sm">
                    İşçi ve işveren haklarının korunması, iş sözleşmeleri ve tazminat davaları
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Ceza Hukuku</h3>
                  <p className="text-muted-foreground text-sm">Ceza davalarında savunma ve suç duyuruları</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Aile Hukuku</h3>
                  <p className="text-muted-foreground text-sm">Boşanma, velayet, nafaka ve mal paylaşımı davaları</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Gayrimenkul Hukuku</h3>
                  <p className="text-muted-foreground text-sm">Tapu işlemleri, kira sözleşmeleri ve tahliye davaları</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
