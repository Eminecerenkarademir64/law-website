import { NextResponse } from "next/server"
import { createArticle } from "@/lib/db/queries"
import { validateArticleData } from "@/lib/validations/article"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validation = validateArticleData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 },
      )
    }

    const article = await createArticle({
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author,
      image_url: body.image_url,
      category: body.category,
    })

    return NextResponse.json(
      {
        success: true,
        article,
        message: "Makale başarıyla oluşturuldu",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Error creating article:", error)
    return NextResponse.json(
      {
        error: "Makale oluşturulurken bir hata oluştu",
      },
      { status: 500 },
    )
  }
}
