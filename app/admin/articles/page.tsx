import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { neon } from "@neondatabase/serverless"

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  return neon(url)
}

async function getArticles() {
  try {
    const sql = getSql()
    if (!sql) {
      return []
    }
    const articles = await sql`
      SELECT id, title, slug, category, published, published_at, created_at
      FROM articles
      ORDER BY created_at DESC
    `
    return articles
  } catch (error) {
    console.error("Error fetching articles:", error)
    return []
  }
}

export default async function AdminArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-light mb-2">Articles</h1>
          <p className="text-muted-foreground">Manage your blog posts and legal insights</p>
        </div>
        <Button asChild>
          <Link href="/admin/articles/new">
            <Plus size={16} className="mr-2" />
            New Article
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        {articles.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground mb-4">No articles yet. Create your first one!</p>
              <Button asChild>
                <Link href="/admin/articles/new">
                  <Plus size={16} className="mr-2" />
                  Create Article
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          articles.map((article: any) => (
            <Card key={article.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{article.title}</h3>
                      <Badge variant={article.published ? "default" : "secondary"}>
                        {article.published ? "Published" : "Draft"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-semibold uppercase">
                        {article.category}
                      </span>
                      <span>
                        {article.published_at
                          ? new Date(article.published_at).toLocaleDateString()
                          : new Date(article.created_at).toLocaleDateString()}
                      </span>
                      <span className="text-muted-foreground/60">/{article.slug}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/articles/${article.id}/edit`}>
                        <Edit size={16} className="mr-2" />
                        Edit
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
