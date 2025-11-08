import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Scale, Users, Home, FileText, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

const practiceAreas = [
  {
    slug: "corporate",
    title: "Corporate Law",
    icon: Briefcase,
    description: "Comprehensive legal guidance for businesses of all sizes, from startups to Fortune 500 companies.",
    services: [
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Securities & Compliance",
      "Contract Negotiation",
      "Business Formation",
      "Corporate Restructuring",
    ],
  },
  {
    slug: "litigation",
    title: "Litigation",
    icon: Scale,
    description: "Aggressive representation in complex commercial disputes and civil litigation matters.",
    services: [
      "Commercial Litigation",
      "Contract Disputes",
      "Business Torts",
      "Appellate Practice",
      "Alternative Dispute Resolution",
      "Class Action Defense",
    ],
  },
  {
    slug: "employment",
    title: "Employment Law",
    icon: Users,
    description: "Strategic counsel on all aspects of the employer-employee relationship.",
    services: [
      "Employment Contracts",
      "Discrimination Claims",
      "Wage & Hour Compliance",
      "Executive Compensation",
      "Workplace Investigations",
      "Non-Compete Agreements",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    icon: Home,
    description: "Full-service real estate legal support for commercial and residential transactions.",
    services: [
      "Property Acquisitions",
      "Lease Negotiations",
      "Zoning & Land Use",
      "Real Estate Finance",
      "Title Disputes",
      "Development Projects",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    icon: Shield,
    description: "Protection and enforcement of your valuable intellectual property assets.",
    services: [
      "Patent Prosecution",
      "Trademark Registration",
      "Copyright Protection",
      "IP Licensing",
      "Trade Secret Protection",
      "IP Litigation",
    ],
  },
  {
    slug: "estate-planning",
    title: "Estate Planning",
    icon: FileText,
    description: "Thoughtful planning to protect your legacy and provide for future generations.",
    services: [
      "Wills & Trusts",
      "Estate Administration",
      "Tax Planning",
      "Asset Protection",
      "Probate Services",
      "Charitable Giving",
    ],
  },
]

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-balance leading-tight">
              Our Practice Areas
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Comprehensive legal expertise across multiple disciplines to serve your diverse needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => {
              const Icon = area.icon
              return (
                <Card key={area.slug} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-serif font-semibold">{area.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
                        Key Services
                      </h4>
                      <ul className="space-y-1.5">
                        {area.services.map((service) => (
                          <li key={service} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2 text-accent">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="inline-flex items-center text-accent hover:text-accent/80 font-medium pt-2"
                    >
                      Learn more
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Need Legal Assistance?</h2>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Our experienced attorneys are ready to help you navigate your legal challenges.
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
