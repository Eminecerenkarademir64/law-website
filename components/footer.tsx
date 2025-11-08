import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/tas_hukuk_logo.png"
                alt="Taş Hukuk Logo"
                width={160}
                height={48}
                priority
                className="w-40 md:w-48 h-auto object-contain"
              />
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Av. Kadir Taş Hukuk Bürosu olarak, müvekkillerimize en kaliteli hukuki hizmeti sunmak için çalışıyoruz.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Çalışma Alanları</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/calisma-alanlari/is-hukuku"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  İş Hukuku
                </Link>
              </li>
              <li>
                <Link
                  href="/calisma-alanlari/ceza-hukuku"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Ceza Hukuku
                </Link>
              </li>
              <li>
                <Link
                  href="/calisma-alanlari/aile-hukuku"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Aile Hukuku
                </Link>
              </li>
              <li>
                <Link
                  href="/calisma-alanlari/gayrimenkul-hukuku"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Gayrimenkul Hukuku
                </Link>
              </li>
              <li>
                <Link
                  href="/calisma-alanlari/miras-hukuku"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Miras Hukuku
                </Link>
              </li>
              <li>
                <Link
                  href="/calisma-alanlari/ticaret-hukuku"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Ticaret Hukuku
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/av-kadir-tas"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Av. Kadir Taş
                </Link>
              </li>
              <li>
                <Link
                  href="/makaleler"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Makaleler
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/online-randevu"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Online Randevu
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">İletişim</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Adalet Mah. Şehit Polis Fethi Sekin Cad. No.6 Ventus Tower
                  <br />
                  Bayraklı, İzmir 35530
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+905354000055" className="hover:text-primary-foreground transition-colors">
                  +90 535 400 00 55
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:av.kadir.tas@gmail.com" className="hover:text-primary-foreground transition-colors">
                  av.kadir.tas@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Av. Kadir Taş Hukuk Bürosu. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/gizlilik-politikasi"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/kullanim-kosullari"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
