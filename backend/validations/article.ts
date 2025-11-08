import { z } from "zod"

export const articleSchema = z.object({
  title: z.string().min(3, "Başlık en az 3 karakter olmalıdır"),
  slug: z.string().min(3, "Slug en az 3 karakter olmalıdır"),
  excerpt: z.string().min(10, "Özet en az 10 karakter olmalıdır"),
  content: z.string().min(50, "İçerik en az 50 karakter olmalıdır"),
  author: z.string().min(2, "Yazar adı en az 2 karakter olmalıdır"),
  published_date: z.string(),
  status: z.enum(["draft", "published"]),
})

export type ArticleInput = z.infer<typeof articleSchema>
