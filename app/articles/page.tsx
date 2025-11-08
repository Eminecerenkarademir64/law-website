import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

async function getArticles() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/articles`, {
      cache: "no-store",
    })
    if (!response.ok) return []
    return response.json()
  } catch (error) {
    console.error("Failed to fetch articles:", error)
    return []
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-balance leading-tight">Legal Insights</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Expert analysis, industry updates, and practical guidance from our experienced attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {articles.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <p className="text-lg text-muted-foreground">No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article: any) => (
                <Card key={article.id} className="border-border hover:shadow-lg transition-shadow flex flex-col">
                  <CardContent className="p-8 space-y-4 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} />
                        <span>{new Date(article.published_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={16} />
                        <span>{article.read_time} min read</span>
                      </div>
                    </div>

                    <div className="space-y-3 flex-1">
                      <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded">
                        {article.category}
                      </div>
                      <h3 className="text-2xl font-serif font-semibold leading-tight">{article.title}</h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/articles/${article.slug}`}
                        className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                      >
                        Read article
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Need Legal Guidance?</h2>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Our experienced attorneys are here to help you navigate complex legal matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link href="/appointment">
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
