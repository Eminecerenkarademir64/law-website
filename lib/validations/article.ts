export function validateArticleData(data: any) {
  const errors: string[] = []

  if (!data.title || data.title.trim().length < 5) {
    errors.push("Başlık en az 5 karakter olmalıdır")
  }

  if (!data.slug || data.slug.trim().length < 3) {
    errors.push("Slug en az 3 karakter olmalıdır")
  }

  if (!data.excerpt || data.excerpt.trim().length < 20) {
    errors.push("Özet en az 20 karakter olmalıdır")
  }

  if (!data.content || data.content.trim().length < 50) {
    errors.push("İçerik en az 50 karakter olmalıdır")
  }

  if (!data.author || data.author.trim().length < 2) {
    errors.push("Yazar adı en az 2 karakter olmalıdır")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}
