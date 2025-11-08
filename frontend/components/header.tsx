"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault()
                router.refresh()
              }
            }}
          >
            <Image
              src="/tas_hukuk_logo.png"
              alt="Taş Hukuk Logo"
              width={100}
              height={100}
              priority
              className="w-40 md:w-48 h-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault()
                  router.refresh()
                }
              }}
            >
              Anasayfa
            </Link>
            <Link
              href="/hakkimizda"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/hakkimizda")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              href="/av-kadir-tas"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/av-kadir-tas")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              Av. Kadir Taş
            </Link>
            <Link
              href="/calisma-alanlari"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/calisma-alanlari")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              Çalışma Alanları
            </Link>
            <Link
              href="/makaleler"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/makaleler")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              Makaleler
            </Link>
            <Link
              href="/iletisim"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/iletisim")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              İletişim
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
              <Link href="/online-randevu">Online Randevu</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground hover:bg-secondary/50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-2 border-t border-border">
            <Link
              href="/"
              className={`block py-3 px-4 text-base font-medium rounded-md transition-all ${
                isActive("/")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault()
                  router.refresh()
                }
                setMobileMenuOpen(false)
              }}
            >
              Anasayfa
            </Link>
            <Link
              href="/hakkimizda"
              className={`block py-3 px-4 text-base font-medium rounded-md transition-all ${
                isActive("/hakkimizda")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/av-kadir-tas"
              className={`block py-3 px-4 text-base font-medium rounded-md transition-all ${
                isActive("/av-kadir-tas")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Av. Kadir Taş
            </Link>
            <Link
              href="/calisma-alanlari"
              className={`block py-3 px-4 text-base font-medium rounded-md transition-all ${
                isActive("/calisma-alanlari")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Çalışma Alanları
            </Link>
            <Link
              href="/makaleler"
              className={`block py-3 px-4 text-base font-medium rounded-md transition-all ${
                isActive("/makaleler")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Makaleler
            </Link>
            <Link
              href="/iletisim"
              className={`block py-3 px-4 text-base font-medium rounded-md transition-all ${
                isActive("/iletisim")
                  ? "text-foreground bg-secondary/60"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              İletişim
            </Link>
            <div className="pt-4">
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/online-randevu" onClick={() => setMobileMenuOpen(false)}>
                  Online Randevu
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
