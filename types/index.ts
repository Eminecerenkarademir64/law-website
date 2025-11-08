export interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  published_date: string
  image_url?: string
  category?: string
}

export interface PracticeArea {
  id: number
  title: string
  slug: string
  description: string
  icon: string
  order_index: number
}

export interface Appointment {
  id: number
  name: string
  email: string
  phone: string
  practice_area: string
  subject: string
  message: string
  preferred_date?: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  created_at: string
}

export interface ContactMessage {
  id: number
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: "new" | "read" | "replied"
  created_at: string
}
