import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, Calendar, Mail, LogOut } from "lucide-react"

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground">Admin Panel</h2>
        <p className="text-sm text-muted-foreground">Av. Kadir Taş</p>
      </div>

      <nav className="space-y-2">
        <Link href="/admin/dashboard">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LayoutDashboard size={18} />
            Dashboard
          </Button>
        </Link>
        <Link href="/admin/articles">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FileText size={18} />
            Makaleler
          </Button>
        </Link>
        <Link href="/admin/appointments">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Calendar size={18} />
            Randevular
          </Button>
        </Link>
        <Link href="/admin/contacts">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Mail size={18} />
            Mesajlar
          </Button>
        </Link>
      </nav>

      <div className="mt-auto pt-8">
        <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
          <LogOut size={18} />
          Çıkış Yap
        </Button>
      </div>
    </aside>
  )
}
