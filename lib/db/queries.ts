import { neon } from "@neondatabase/serverless"

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  return neon(url)
}

export async function getArticles() {
  try {
    const sql = getSql()
    if (!sql) {
      console.warn("[v0] DATABASE_URL is not set; returning empty articles list")
      return []
    }
    const articles = await sql`
      SELECT * FROM articles 
      ORDER BY published_date DESC
    `
    return articles
  } catch (error) {
    console.error("[v0] Error fetching articles:", error)
    return []
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    const sql = getSql()
    if (!sql) {
      console.warn("[v0] DATABASE_URL is not set; returning null article")
      return null
    }
    const articles = await sql`
      SELECT * FROM articles 
      WHERE slug = ${slug}
      LIMIT 1
    `
    return articles[0] || null
  } catch (error) {
    console.error("[v0] Error fetching article:", error)
    return null
  }
}

export async function getPracticeAreas() {
  try {
    const sql = getSql()
    if (!sql) {
      console.warn("[v0] DATABASE_URL is not set; returning empty practice areas")
      return []
    }
    const areas = await sql`
      SELECT * FROM practice_areas 
      ORDER BY order_index ASC
    `
    return areas
  } catch (error) {
    console.error("[v0] Error fetching practice areas:", error)
    return []
  }
}

export async function getPracticeAreaBySlug(slug: string) {
  try {
    const sql = getSql()
    if (!sql) {
      console.warn("[v0] DATABASE_URL is not set; returning null practice area")
      return null
    }
    const areas = await sql`
      SELECT * FROM practice_areas 
      WHERE slug = ${slug}
      LIMIT 1
    `
    return areas[0] || null
  } catch (error) {
    console.error("[v0] Error fetching practice area:", error)
    return null
  }
}

export async function createAppointment(data: {
  name: string
  email: string
  phone: string
  practice_area: string
  subject: string
  message: string
  preferred_date?: string
}) {
  try {
    const sql = getSql()
    if (!sql) {
      throw new Error("DATABASE_URL is not configured; cannot create appointment")
    }
    const result = await sql`
      INSERT INTO appointments (name, email, phone, practice_area, subject, message, preferred_date, status)
      VALUES (${data.name}, ${data.email}, ${data.phone}, ${data.practice_area}, ${data.subject}, ${data.message}, ${data.preferred_date || null}, 'pending')
      RETURNING *
    `
    return result[0]
  } catch (error) {
    console.error("[v0] Error creating appointment:", error)
    throw error
  }
}

export async function createContactMessage(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  try {
    const sql = getSql()
    if (!sql) {
      throw new Error("DATABASE_URL is not configured; cannot create contact message")
    }
    const result = await sql`
      INSERT INTO contact_messages (name, email, phone, subject, message, status)
      VALUES (${data.name}, ${data.email}, ${data.phone || null}, ${data.subject}, ${data.message}, 'new')
      RETURNING *
    `
    return result[0]
  } catch (error) {
    console.error("[v0] Error creating contact message:", error)
    throw error
  }
}

export async function getAppointments() {
  try {
    const sql = getSql()
    if (!sql) {
      console.warn("[v0] DATABASE_URL is not set; returning empty appointments")
      return []
    }
    const appointments = await sql`
      SELECT * FROM appointments 
      ORDER BY created_at DESC
    `
    return appointments
  } catch (error) {
    console.error("[v0] Error fetching appointments:", error)
    return []
  }
}

export async function getContactMessages() {
  try {
    const sql = getSql()
    if (!sql) {
      console.warn("[v0] DATABASE_URL is not set; returning empty contact messages")
      return []
    }
    const messages = await sql`
      SELECT * FROM contact_messages 
      ORDER BY created_at DESC
    `
    return messages
  } catch (error) {
    console.error("[v0] Error fetching contact messages:", error)
    return []
  }
}

export async function createArticle(data: {
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  image_url?: string
  category?: string
}) {
  try {
    const sql = getSql()
    if (!sql) {
      throw new Error("DATABASE_URL is not configured; cannot create article")
    }
    const result = await sql`
      INSERT INTO articles (title, slug, excerpt, content, author, image_url, category, published_date)
      VALUES (${data.title}, ${data.slug}, ${data.excerpt}, ${data.content}, ${data.author}, ${data.image_url || null}, ${data.category || null}, NOW())
      RETURNING *
    `
    return result[0]
  } catch (error) {
    console.error("[v0] Error creating article:", error)
    throw error
  }
}
