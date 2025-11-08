import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calendar, Mail, TrendingUp } from "lucide-react"
import { neon } from "@neondatabase/serverless"

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  return neon(url)
}

async function getDashboardStats() {
  try {
    const sql = getSql()
    if (!sql) {
      return {
        totalArticles: 0,
        pendingAppointments: 0,
        unreadContacts: 0,
        publishedArticles: 0,
      }
    }

    const [articlesCount] = await sql`SELECT COUNT(*) as count FROM articles`
    const [appointmentsCount] = await sql`SELECT COUNT(*) as count FROM appointments WHERE status = 'pending'`

    // contacts table name may vary across setups: try contact_messages → contacts → contact_submissions
    let unreadContactsCount = 0
    try {
      const [row] = await sql`SELECT COUNT(*) as count FROM contact_messages WHERE status = 'new'`
      unreadContactsCount = Number(row.count)
    } catch {
      try {
        const [row] = await sql`SELECT COUNT(*) as count FROM contacts WHERE status = 'new'`
        unreadContactsCount = Number(row.count)
      } catch {
        try {
          const [row] = await sql`SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'unread'`
          unreadContactsCount = Number(row.count)
        } catch {
          unreadContactsCount = 0
        }
      }
    }

    // published articles may be indicated by different columns; try a few options
    let publishedArticlesCount = 0
    try {
      const [row] = await sql`SELECT COUNT(*) as count FROM articles WHERE published = true`
      publishedArticlesCount = Number(row.count)
    } catch {
      try {
        const [row] = await sql`SELECT COUNT(*) as count FROM articles WHERE status = 'published'`
        publishedArticlesCount = Number(row.count)
      } catch {
        try {
          const [row] = await sql`SELECT COUNT(*) as count FROM articles WHERE published_date IS NOT NULL`
          publishedArticlesCount = Number(row.count)
        } catch {
          publishedArticlesCount = 0
        }
      }
    }

    return {
      totalArticles: Number(articlesCount.count),
      pendingAppointments: Number(appointmentsCount.count),
      unreadContacts: unreadContactsCount,
      publishedArticles: publishedArticlesCount,
    }
  } catch (error) {
    console.error("Error fetching dashboard stats:", error)
    return {
      totalArticles: 0,
      pendingAppointments: 0,
      unreadContacts: 0,
      publishedArticles: 0,
    }
  }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-light mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your law firm website</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Articles</CardTitle>
            <FileText className="text-accent" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalArticles}</div>
            <p className="text-xs text-muted-foreground mt-1">{stats.publishedArticles} published</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Appointments</CardTitle>
            <Calendar className="text-accent" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.pendingAppointments}</div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting confirmation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Unread Messages</CardTitle>
            <Mail className="text-accent" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.unreadContacts}</div>
            <p className="text-xs text-muted-foreground mt-1">Contact submissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Published Rate</CardTitle>
            <TrendingUp className="text-accent" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats.totalArticles > 0 ? Math.round((stats.publishedArticles / stats.totalArticles) * 100) : 0}%
            </div>
            <p className="text-xs text-muted-foreground mt-1">Articles published</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a
              href="/admin/articles/new"
              className="block p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
            >
              <div className="font-semibold">Create New Article</div>
              <div className="text-sm text-muted-foreground">Write and publish a new blog post</div>
            </a>
            <a
              href="/admin/appointments"
              className="block p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
            >
              <div className="font-semibold">Review Appointments</div>
              <div className="text-sm text-muted-foreground">Manage consultation requests</div>
            </a>
            <a
              href="/admin/contacts"
              className="block p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
            >
              <div className="font-semibold">Check Messages</div>
              <div className="text-sm text-muted-foreground">Respond to contact submissions</div>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <p>Activity tracking coming soon...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
