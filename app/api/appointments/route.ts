import { NextResponse } from "next/server"
import { createAppointment } from "@/lib/db/queries"
import { validateAppointmentData } from "@/lib/validations/appointment"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validation = validateAppointmentData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 },
      )
    }

    await createAppointment({
      name: body.name,
      email: body.email,
      phone: body.phone,
      practice_area: body.practice_area,
      subject: body.subject,
      message: body.message,
      preferred_date: body.preferred_date,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Randevu talebiniz başarıyla alındı. En kısa sürede size dönüş yapılacaktır.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error scheduling appointment:", error)
    return NextResponse.json(
      {
        error: "Randevu oluşturulurken bir hata oluştu",
      },
      { status: 500 },
    )
  }
}
