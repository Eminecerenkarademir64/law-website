import { Header } from "@/frontend/components/header"
import { Footer } from "@/frontend/components/footer"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"
import Link from "next/link"

export default function MakaleNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto border-2 border-accent/20">
              <FileQuestion className="text-accent" size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light">Makale Bulunamadı</h1>
            <p className="text-xl text-muted-foreground">Aradığınız makale bulunamadı veya kaldırılmış olabilir.</p>
            <div className="flex gap-4 justify-center pt-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/makaleler">Tüm Makalelere Dön</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 bg-transparent">
                <Link href="/">Ana Sayfaya Dön</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
