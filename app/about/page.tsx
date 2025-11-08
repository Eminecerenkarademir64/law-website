import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Target, Heart, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-balance leading-tight">About Us</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              A legacy of excellence in legal representation spanning over three decades.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1985 by Robert Sterling, Sterling & Associates has grown from a small practice into one of
                  the region's most respected law firms. Our journey has been defined by an unwavering commitment to
                  excellence, integrity, and client service.
                </p>
                <p>
                  Over the past 35 years, we have successfully represented thousands of clients in complex legal
                  matters, earning a reputation for strategic thinking, meticulous preparation, and exceptional results.
                  Our team of 25 experienced attorneys brings deep expertise across multiple practice areas, allowing us
                  to provide comprehensive legal solutions.
                </p>
                <p>
                  Today, Sterling & Associates continues to uphold the values that have defined us from the beginning:
                  putting our clients first, maintaining the highest ethical standards, and delivering outstanding legal
                  representation in every matter we handle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Award className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive for the highest standards in everything we do, from legal research to client communication.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Target className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest ethical standards and build trust through honest, transparent relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Heart className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Dedication</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are deeply committed to our clients' success and work tirelessly to achieve their goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Users className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We work as a unified team, leveraging diverse expertise to deliver comprehensive solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Our Track Record</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Numbers that reflect our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="text-5xl lg:text-6xl font-serif font-semibold text-accent">35+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years of Experience</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl lg:text-6xl font-serif font-semibold text-accent">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Cases Won</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl lg:text-6xl font-serif font-semibold text-accent">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl lg:text-6xl font-serif font-semibold text-accent">25</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Expert Attorneys</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">
              Experience the Sterling Difference
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Let our experienced team provide the strategic legal counsel you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link href="/appointment">
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/attorneys">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
