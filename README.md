# Av. Kadir Taş - Hukuk Bürosu Web Sitesi

Modern ve profesyonel hukuk bürosu web sitesi. Next.js, TypeScript ve PostgreSQL ile geliştirilmiştir.

## Proje Yapısı

\`\`\`
law-website/
├── app/                          # Next.js App Router sayfaları
│   ├── api/                      # Backend API routes
│   │   ├── appointments/         # Randevu API'leri
│   │   ├── articles/             # Makale API'leri
│   │   ├── contact/              # İletişim API'leri
│   │   ├── practice-areas/       # Çalışma alanları API'leri
│   │   └── admin/                # Admin API'leri
│   ├── admin/                    # Admin panel sayfaları
│   │   ├── appointments/         # Randevu yönetimi
│   │   ├── articles/             # Makale yönetimi
│   │   ├── contacts/             # Mesaj yönetimi
│   │   └── dashboard/            # Admin dashboard
│   ├── hakkimizda/               # Hakkımızda sayfası
│   ├── av-kadir-tas/             # Avukat profil sayfası
│   ├── calisma-alanlari/         # Çalışma alanları sayfası
│   ├── makaleler/                # Makaleler sayfası
│   ├── iletisim/                 # İletişim sayfası
│   └── online-randevu/           # Online randevu sayfası
├── components/                   # React bileşenleri
│   ├── ui/                       # Shadcn UI bileşenleri
│   ├── header.tsx                # Site başlığı
│   ├── footer.tsx                # Site alt bilgisi
│   ├── appointment-form.tsx      # Randevu formu
│   └── contact-form.tsx          # İletişim formu
├── lib/                          # Yardımcı fonksiyonlar
│   ├── db/                       # Veritabanı işlemleri
│   │   └── queries.ts            # SQL sorguları
│   ├── validations/              # Form validasyonları
│   │   ├── appointment.ts        # Randevu validasyonu
│   │   ├── contact.ts            # İletişim validasyonu
│   │   └── article.ts            # Makale validasyonu
│   ├── constants/                # Sabit değerler
│   │   ├── index.ts              # Genel sabitler
│   │   └── practice-areas.ts    # Çalışma alanları
│   └── utils.ts                  # Genel yardımcı fonksiyonlar
├── types/                        # TypeScript tip tanımlamaları
│   └── index.ts                  # Tüm tipler
├── scripts/                      # Veritabanı scriptleri
│   ├── 01-create-tables.sql      # Tablo oluşturma
│   ├── 02-seed-practice-areas.sql # Çalışma alanları verisi
│   └── 03-seed-articles.sql      # Örnek makaleler
└── public/                       # Statik dosyalar

## Özellikler

- ✅ Modern ve responsive tasarım
- ✅ Türkçe dil desteği
- ✅ Online randevu sistemi
- ✅ İletişim formu
- ✅ Makale yönetim sistemi
- ✅ Admin paneli
- ✅ PostgreSQL veritabanı
- ✅ TypeScript tip güvenliği
- ✅ Form validasyonları
- ✅ SEO optimizasyonu

## Teknolojiler

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Node.js
- **Veritabanı:** PostgreSQL (Neon)
- **UI Kütüphanesi:** Shadcn UI
- **Form Yönetimi:** React Hook Form
- **Validasyon:** Custom validations

## Kurulum

1. Bağımlılıkları yükleyin:
\`\`\`bash
npm install
# veya
pnpm install
\`\`\`

2. Veritabanı bağlantısını yapılandırın:
   - `.env.local` dosyası oluşturun
   - `DATABASE_URL` değişkenini ekleyin

3. Veritabanı tablolarını oluşturun:
   - `scripts/` klasöründeki SQL dosyalarını çalıştırın

4. Geliştirme sunucusunu başlatın:
\`\`\`bash
npm run dev
# veya
pnpm dev
\`\`\`

5. Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

## Veritabanı Yapısı

### Tablolar

- **practice_areas:** Çalışma alanları
- **articles:** Makaleler
- **appointments:** Randevu talepleri
- **contact_messages:** İletişim mesajları

## Admin Paneli

Admin paneline `/admin` adresinden erişebilirsiniz.

### Özellikler:
- Randevu yönetimi
- Makale oluşturma ve düzenleme
- İletişim mesajlarını görüntüleme
- Dashboard istatistikleri

## Lisans

Bu proje özel bir projedir.
