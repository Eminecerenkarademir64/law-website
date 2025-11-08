import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, Calendar, Mail, LogOut } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Admin Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin/dashboard" className="text-xl font-serif font-semibold">
              Sterling & Associates Admin
            </Link>
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm">
                <Link href="/">View Site</Link>
              </Button>
              <Button variant="outline" size="sm">
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-2 sticky top-24">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-background transition-colors"
              >
                <LayoutDashboard size={20} />
                <span className="font-medium">Dashboard</span>
              </Link>
              <Link
                href="/admin/articles"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-background transition-colors"
              >
                <FileText size={20} />
                <span className="font-medium">Articles</span>
              </Link>
              <Link
                href="/admin/appointments"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-background transition-colors"
              >
                <Calendar size={20} />
                <span className="font-medium">Appointments</span>
              </Link>
              <Link
                href="/admin/contacts"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-background transition-colors"
              >
                <Mail size={20} />
                <span className="font-medium">Contact Submissions</span>
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}
