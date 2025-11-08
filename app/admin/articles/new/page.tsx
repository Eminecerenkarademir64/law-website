import { Card, CardContent } from "@/components/ui/card"
import { ArticleEditor } from "@/components/article-editor"

export default function NewArticlePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-light mb-2">Create New Article</h1>
        <p className="text-muted-foreground">Write and publish a new blog post</p>
      </div>

      <Card>
        <CardContent className="p-8">
          <ArticleEditor />
        </CardContent>
      </Card>
    </div>
  )
}
