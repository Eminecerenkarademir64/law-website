import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PracticeAreaNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-balance">Practice Area Not Found</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              The practice area you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="default">
                <Link href="/practice-areas">
                  <ArrowLeft className="mr-2" size={20} />
                  View All Practice Areas
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">Go Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
