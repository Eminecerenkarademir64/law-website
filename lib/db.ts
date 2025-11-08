import { neon } from "@neondatabase/serverless"

// Database connection
export const sql = neon(process.env.DATABASE_URL || "")

// Types
export interface PracticeArea {
  id: number
  title: string
  slug: string
  description: string | null
  icon: string | null
  display_order: number
  created_at: Date
  updated_at: Date
}

export interface Article {
  id: number
  title: string
  slug: string
  excerpt: string | null
  content: string
  author: string
  image_url: string | null
  published: boolean
  published_at: Date | null
  created_at: Date
  updated_at: Date
}

export interface Appointment {
  id: number
  full_name: string
  phone: string
  email: string | null
  practice_area: string | null
  subject: string | null
  message: string
  status: string
  created_at: Date
  updated_at: Date
}

export interface ContactMessage {
  id: number
  full_name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  status: string
  created_at: Date
  updated_at: Date
}
