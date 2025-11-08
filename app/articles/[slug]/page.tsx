import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

async function getArticle(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/articles/${slug}`,
      {
        cache: "no-store",
      },
    )
    if (!response.ok) return null
    return response.json()
  } catch (error) {
    console.error("Failed to fetch article:", error)
    return null
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Article Header */}
      <article className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/articles"
              className="inline-flex items-center text-accent hover:text-accent/80 font-medium mb-8"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to articles
            </Link>

            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded">
                {article.category}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-balance leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>
                    {new Date(article.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{article.read_time} min read</span>
                </div>
              </div>

              {article.author && (
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    By <span className="font-semibold text-foreground">{article.author}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="mt-12 prose prose-lg max-w-none">
              <div className="text-xl text-muted-foreground leading-relaxed mb-8">{article.excerpt}</div>
              <div
                className="space-y-6 text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-secondary/30 rounded-lg text-center space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Have Questions About This Topic?</h3>
              <p className="text-muted-foreground">
                Our experienced attorneys are here to provide personalized guidance.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/appointment">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
