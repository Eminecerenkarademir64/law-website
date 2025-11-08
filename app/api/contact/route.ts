import { NextResponse } from "next/server"
import { createContactMessage } from "@/lib/db/queries"
import { validateContactData } from "@/lib/validations/contact"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validation = validateContactData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 },
      )
    }

    await createContactMessage({
      name: body.name,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      message: body.message,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapılacaktır.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error submitting contact form:", error)
    return NextResponse.json(
      {
        error: "Mesaj gönderilirken bir hata oluştu",
      },
      { status: 500 },
    )
  }
}
