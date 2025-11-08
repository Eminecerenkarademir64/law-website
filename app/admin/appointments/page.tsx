import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Mail, Phone } from "lucide-react"
import { neon } from "@neondatabase/serverless"

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  return neon(url)
}

async function getAppointments() {
  try {
    const sql = getSql()
    if (!sql) {
      return []
    }
    const appointments = await sql`
      SELECT id, name, email, phone, practice_area, preferred_datetime, message, status, created_at
      FROM appointments
      ORDER BY preferred_datetime DESC
    `
    return appointments
  } catch (error) {
    console.error("Error fetching appointments:", error)
    return []
  }
}

export default async function AdminAppointmentsPage() {
  const appointments = await getAppointments()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-light mb-2">Appointments</h1>
        <p className="text-muted-foreground">Manage consultation requests</p>
      </div>

      <div className="space-y-4">
        {appointments.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No appointment requests yet.</p>
            </CardContent>
          </Card>
        ) : (
          appointments.map((appointment: any) => (
            <Card key={appointment.id}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{appointment.name}</h3>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            appointment.status === "confirmed"
                              ? "default"
                              : appointment.status === "pending"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {appointment.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground px-2 py-1 bg-accent/10 text-accent rounded uppercase">
                          {appointment.practice_area.replace("-", " ")}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Confirm
                      </Button>
                      <Button variant="outline" size="sm">
                        Decline
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail size={16} />
                      <a href={`mailto:${appointment.email}`} className="hover:text-accent">
                        {appointment.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone size={16} />
                      <a href={`tel:${appointment.phone}`} className="hover:text-accent">
                        {appointment.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{new Date(appointment.preferred_datetime).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={16} />
                      <span>
                        {new Date(appointment.preferred_datetime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold mb-2">Message:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{appointment.message}</p>
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
