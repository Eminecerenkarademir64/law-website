import { z } from "zod"

export const appointmentSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  practice_area: z.string().min(1, "Lütfen bir çalışma alanı seçiniz"),
  preferred_date: z.string().min(1, "Lütfen bir tarih seçiniz"),
  preferred_time: z.string().min(1, "Lütfen bir saat seçiniz"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
})

export type AppointmentInput = z.infer<typeof appointmentSchema>
