import { neon } from "@neondatabase/serverless"
import type { Article, Appointment, Contact } from "../types"

const sql = neon(process.env.DATABASE_URL!)

// Article Queries
export async function getAllArticles(): Promise<Article[]> {
  const articles = await sql`
    SELECT * FROM articles 
    WHERE status = 'published' 
    ORDER BY published_date DESC
  `
  return articles as Article[]
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await sql`
    SELECT * FROM articles 
    WHERE slug = ${slug} AND status = 'published'
    LIMIT 1
  `
  return (articles[0] as Article) || null
}

export async function createArticle(data: Partial<Article>): Promise<Article> {
  const articles = await sql`
    INSERT INTO articles (title, slug, excerpt, content, author, published_date, status)
    VALUES (${data.title}, ${data.slug}, ${data.excerpt}, ${data.content}, ${data.author}, ${data.published_date}, ${data.status})
    RETURNING *
  `
  return articles[0] as Article
}

export async function updateArticle(id: number, data: Partial<Article>): Promise<Article> {
  const articles = await sql`
    UPDATE articles 
    SET title = ${data.title}, 
        excerpt = ${data.excerpt}, 
        content = ${data.content},
        status = ${data.status},
        updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `
  return articles[0] as Article
}

export async function deleteArticle(id: number): Promise<void> {
  await sql`DELETE FROM articles WHERE id = ${id}`
}

// Appointment Queries
export async function getAllAppointments(): Promise<Appointment[]> {
  const appointments = await sql`
    SELECT * FROM appointments 
    ORDER BY created_at DESC
  `
  return appointments as Appointment[]
}

export async function createAppointment(data: Partial<Appointment>): Promise<Appointment> {
  const appointments = await sql`
    INSERT INTO appointments (name, email, phone, practice_area, preferred_date, preferred_time, message, status)
    VALUES (${data.name}, ${data.email}, ${data.phone}, ${data.practice_area}, ${data.preferred_date}, ${data.preferred_time}, ${data.message}, 'pending')
    RETURNING *
  `
  return appointments[0] as Appointment
}

export async function updateAppointmentStatus(id: number, status: string): Promise<Appointment> {
  const appointments = await sql`
    UPDATE appointments 
    SET status = ${status}
    WHERE id = ${id}
    RETURNING *
  `
  return appointments[0] as Appointment
}

// Contact Queries
export async function getAllContacts(): Promise<Contact[]> {
  const contacts = await sql`
    SELECT * FROM contacts 
    ORDER BY created_at DESC
  `
  return contacts as Contact[]
}

export async function createContact(data: Partial<Contact>): Promise<Contact> {
  const contacts = await sql`
    INSERT INTO contacts (name, email, phone, subject, message, status)
    VALUES (${data.name}, ${data.email}, ${data.phone}, ${data.subject}, ${data.message}, 'new')
    RETURNING *
  `
  return contacts[0] as Contact
}

export async function updateContactStatus(id: number, status: string): Promise<Contact> {
  const contacts = await sql`
    UPDATE contacts 
    SET status = ${status}
    WHERE id = ${id}
    RETURNING *
  `
  return contacts[0] as Contact
}
