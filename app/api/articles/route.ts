import { NextResponse } from "next/server"
import { getArticles } from "@/lib/db/queries"

export async function GET() {
  try {
    const articles = await getArticles()
    return NextResponse.json(articles)
  } catch (error) {
    console.error("[v0] Error fetching articles:", error)
    return NextResponse.json(
      {
        error: "Makaleler yüklenirken bir hata oluştu",
      },
      { status: 500 },
    )
  }
}
