import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AppointmentForm } from "@/components/appointment-form"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AppointmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-balance leading-tight">
              Schedule a Consultation
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Take the first step toward resolving your legal matter. Book a consultation with one of our experienced
              attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* What to Expect */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-light">What to Expect</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your initial consultation is an opportunity to discuss your legal needs and explore how we can help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-accent" size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">Confidential Discussion</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All consultations are completely confidential and protected by attorney-client privilege.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-accent" size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">Expert Assessment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We'll review your situation and provide an honest assessment of your legal options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-accent" size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">Clear Next Steps</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You'll leave with a clear understanding of the process and what to expect moving forward.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-accent" size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">No Obligation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      There's no obligation to hire us after the consultation. We want you to make the best decision for
                      your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <AppointmentForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
