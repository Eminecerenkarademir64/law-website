import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Map } from "@/components/map"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-balance leading-tight">İletişim</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">İletişim bilgilerimiz ve form aşağıdadır.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-light">Get In Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reach out to us directly or fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+905354000055" className="hover:text-accent transition-colors">
                          +90 535 400 00 55
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:av.kadir.tas@gmail.com" className="hover:text-accent transition-colors">
                          av.kadir.tas@gmail.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Office</h3>
                      <p className="text-muted-foreground">
                        Adalet Mah. Şehit Polis Fethi Sekin Cad. No.6 Ventus Tower
                        <br />Bayraklı, İzmir 35530
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-light">Our Location</h2>
            <Map
              query="Adalet Mah. Şehit Polis Fethi Sekin Cad. No.6 Ventus Tower, Bayraklı, İzmir 35530"
              className="w-full rounded-xl overflow-hidden border border-border"
              height={480}
              title="Taş Hukuk - Office Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
