import { Header } from "@/frontend/components/header"
import { Footer } from "@/frontend/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MakalelerPage() {
  const articles = [
    {
      id: 1,
      title: "İş Hukukunda İşçi Hakları ve Tazminat Talepleri",
      excerpt:
        "İş hukukunda işçilerin sahip olduğu temel haklar, kıdem ve ihbar tazminatı hesaplamaları ve işten çıkarma süreçlerinde dikkat edilmesi gereken hususlar hakkında detaylı bilgiler.",
      author: "Av. Kadir Taş",
      date: "15 Mart 2024",
      category: "İş Hukuku",
      slug: "is-hukukunda-isci-haklari",
      image: "/i--hukuku-adalet-terazisi-ofis.jpg",
    },
    {
      id: 2,
      title: "Boşanma Davalarında Mal Paylaşımı ve Nafaka Hakları",
      excerpt:
        "Boşanma sürecinde mal rejimi, edinilmiş mallara katılma, nafaka türleri ve hesaplama yöntemleri konularında kapsamlı bir rehber.",
      author: "Av. Kadir Taş",
      date: "10 Mart 2024",
      category: "Aile Hukuku",
      slug: "bosanma-davalarinda-mal-paylasimi",
      image: "/aile-hukuku-bo-anma-mahkeme.jpg",
    },
    {
      id: 3,
      title: "Ceza Hukukunda Savunma Stratejileri ve Haklar",
      excerpt:
        "Ceza davalarında sanık hakları, savunma yöntemleri, delil toplama ve değerlendirme süreçleri hakkında bilmeniz gerekenler.",
      author: "Av. Kadir Taş",
      date: "5 Mart 2024",
      category: "Ceza Hukuku",
      slug: "ceza-hukukunda-savunma-stratejileri",
      image: "/ceza-hukuku-mahkeme-savunma.jpg",
    },
    {
      id: 4,
      title: "Gayrimenkul Alım-Satımında Dikkat Edilmesi Gerekenler",
      excerpt:
        "Gayrimenkul alım-satım işlemlerinde tapu devri, vergi yükümlülükleri, ön inceleme ve sözleşme hazırlama süreçleri hakkında önemli bilgiler.",
      author: "Av. Kadir Taş",
      date: "28 Şubat 2024",
      category: "Gayrimenkul Hukuku",
      slug: "gayrimenkul-alim-satiminda-dikkat-edilmesi-gerekenler",
      image: "/gayrimenkul-ev-tapu-s-zle-me.jpg",
    },
    {
      id: 5,
      title: "Miras Hukukunda Saklı Pay ve Tenkis Davaları",
      excerpt:
        "Miras hukukunda saklı pay kavramı, saklı pay oranları, tenkis davası açma koşulları ve süreçleri hakkında detaylı açıklamalar.",
      author: "Av. Kadir Taş",
      date: "20 Şubat 2024",
      category: "Miras Hukuku",
      slug: "miras-hukukunda-sakli-pay",
      image: "/miras-hukuku-vasiyet-belge.jpg",
    },
    {
      id: 6,
      title: "Ticaret Hukukunda Şirket Kuruluşu ve Ortaklık Yapıları",
      excerpt:
        "Türkiye'de şirket kuruluş süreçleri, şirket türleri, ortaklık yapıları ve ticari faaliyete başlama prosedürleri hakkında kapsamlı bilgiler.",
      author: "Av. Kadir Taş",
      date: "15 Şubat 2024",
      category: "Ticaret Hukuku",
      slug: "ticaret-hukukunda-sirket-kurulusu",
      image: "/ticaret-hukuku--irket-i--toplant-s-.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
              <span className="text-sm font-medium text-accent">Hukuki Bilgiler ve Güncel Gelişmeler</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-balance leading-tight">
              Makaleler
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Hukuk alanındaki güncel gelişmeler, önemli kararlar ve bilmeniz gereken hukuki konular hakkında uzman
              görüşleri ve detaylı analizler.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden bg-secondary/20">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                      <span className="text-xs font-medium text-accent">{article.category}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-semibold mb-4 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{article.excerpt}</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <Link
                      href={`/makaleler/${article.slug}`}
                      className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:gap-3 gap-2 transition-all"
                    >
                      Devamını Oku
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Daha fazla makale yakında eklenecektir.</p>
            <Button asChild variant="outline" size="lg" className="border-2 bg-transparent">
              <Link href="/iletisim">
                Soru Sormak İster misiniz?
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto border-2 border-accent/20">
              <BookOpen className="text-accent" size={36} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Hukuki Bilgi Bankası</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Makalelerimiz, hukuki konularda bilgilenmeniz ve haklarınızı öğrenmeniz için hazırlanmıştır. Kişisel
              durumunuz için mutlaka uzman bir avukata danışmanızı öneririz.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/online-randevu">
                Hukuki Danışmanlık Alın
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
