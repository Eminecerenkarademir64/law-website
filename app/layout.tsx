import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Taş Hukuk & Danışmanlık",
    template: "%s | Taş Hukuk",
  },
  description:
    "İş, ceza, gayrimenkul, miras ve ticaret hukuku alanlarında uzman avukatlık ve danışmanlık hizmetleri.",
  keywords: [
    "avukat",
    "hukuk",
    "iş hukuku",
    "aile hukuku",
    "ceza hukuku",
    "gayrimenkul hukuku",
    "ticaret hukuku",
    "miras hukuku",
  ],
  openGraph: {
    title: "Taş Hukuk & Danışmanlık",
    description:
      "İş, ceza, gayrimenkul, miras ve ticaret hukuku alanlarında uzman avukatlık ve danışmanlık hizmetleri.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taş Hukuk & Danışmanlık",
    description:
      "İş, ceza, gayrimenkul, miras ve ticaret hukuku alanlarında uzman avukatlık ve danışmanlık hizmetleri.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${lora.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
