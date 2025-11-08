import { NextResponse } from "next/server"
import { getArticleBySlug } from "@/lib/db/queries"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const article = await getArticleBySlug(params.slug)

    if (!article) {
      return NextResponse.json(
        {
          error: "Makale bulunamadı",
        },
        { status: 404 },
      )
    }

    return NextResponse.json(article)
  } catch (error) {
    console.error("[v0] Error fetching article:", error)
    return NextResponse.json(
      {
        error: "Makale yüklenirken bir hata oluştu",
      },
      { status: 500 },
    )
  }
}
