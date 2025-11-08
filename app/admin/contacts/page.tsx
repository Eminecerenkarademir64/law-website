import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { neon } from "@neondatabase/serverless"

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  return neon(url)
}

async function getContacts() {
  try {
    const sql = getSql()
    if (!sql) {
      return []
    }

    // tablo isimlerine uyumlu yaklaşım
    try {
      const rows = await sql`
        SELECT id, name, email, phone, subject, message, status, created_at
        FROM contact_messages
        ORDER BY created_at DESC
      `
      return rows
    } catch {
      try {
        const rows = await sql`
          SELECT id, name, email, phone, subject, message, status, created_at
          FROM contacts
          ORDER BY created_at DESC
        `
        return rows
      } catch {
        const rows = await sql`
          SELECT id, name, email, phone, subject, message, status, created_at
          FROM contact_submissions
          ORDER BY created_at DESC
        `
        return rows
      }
    }
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return []
  }
}

export default async function AdminContactsPage() {
  const contacts = await getContacts()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-light mb-2">Contact Submissions</h1>
        <p className="text-muted-foreground">Manage incoming messages</p>
      </div>

      <div className="space-y-4">
        {contacts.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No contact submissions yet.</p>
            </CardContent>
          </Card>
        ) : (
          contacts.map((contact: any) => (
            <Card key={contact.id}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{contact.name}</h3>
                      <p className="text-sm text-muted-foreground">{contact.subject}</p>
                      <Badge variant={contact.status === "unread" ? "default" : "secondary"}>{contact.status}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Mark as Read
                      </Button>
                      <Button variant="outline" size="sm">
                        Archive
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <a href={`mailto:${contact.email}`} className="hover:text-accent">
                        {contact.email}
                      </a>
                    </div>
                    {contact.phone && (
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <a href={`tel:${contact.phone}`} className="hover:text-accent">
                          {contact.phone}
                        </a>
                      </div>
                    )}
                    <div className="text-muted-foreground/60">{new Date(contact.created_at).toLocaleDateString()}</div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold mb-2">Message:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{contact.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
