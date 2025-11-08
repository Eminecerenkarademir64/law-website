export const SITE_CONFIG = {
  name: "Av. Kadir Taş",
  title: "Av. Kadir Taş - Hukuk Bürosu",
  description: "Profesyonel hukuki danışmanlık ve dava takibi hizmetleri",
  phone: "+90 (552) 821 17 17",
  email: "info@avkadirtas.com",
  address: "Kağıthane/İSTANBUL",
  socialMedia: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
} as const

export const NAVIGATION_ITEMS = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Av. Kadir Taş", href: "/av-kadir-tas" },
  { label: "Çalışma Alanları", href: "/calisma-alanlari" },
  { label: "Makaleler", href: "/makaleler" },
  { label: "İletişim", href: "/iletisim" },
] as const
