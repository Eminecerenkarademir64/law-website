import { NextResponse } from "next/server"
import { getPracticeAreas } from "@/lib/db/queries"

export async function GET() {
  try {
    const practiceAreas = await getPracticeAreas()
    return NextResponse.json(practiceAreas)
  } catch (error) {
    console.error("[v0] Error fetching practice areas:", error)
    return NextResponse.json(
      {
        error: "Çalışma alanları yüklenirken bir hata oluştu",
      },
      { status: 500 },
    )
  }
}
