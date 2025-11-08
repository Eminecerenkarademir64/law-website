export function validateAppointmentData(data: any) {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push("İsim en az 2 karakter olmalıdır")
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push("Geçerli bir e-posta adresi giriniz")
  }

  if (!data.phone || data.phone.trim().length < 10) {
    errors.push("Geçerli bir telefon numarası giriniz")
  }

  if (!data.practice_area || data.practice_area.trim().length === 0) {
    errors.push("Lütfen bir çalışma alanı seçiniz")
  }

  if (!data.subject || data.subject.trim().length < 5) {
    errors.push("Konu en az 5 karakter olmalıdır")
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push("Mesaj en az 10 karakter olmalıdır")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
