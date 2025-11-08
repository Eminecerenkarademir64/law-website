import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"
import Link from "next/link"

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <FileQuestion className="text-accent" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-balance">Article Not Found</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/articles">Browse All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
