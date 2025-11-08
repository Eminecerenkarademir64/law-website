export interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  published_date: string
  created_at: string
  updated_at: string
  status: "draft" | "published"
}

export interface Appointment {
  id: number
  name: string
  email: string
  phone: string
  practice_area: string
  preferred_date: string
  preferred_time: string
  message: string
  status: "pending" | "confirmed" | "cancelled"
  created_at: string
}

export interface Contact {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: "new" | "read" | "replied"
  created_at: string
}

export interface PracticeArea {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}
