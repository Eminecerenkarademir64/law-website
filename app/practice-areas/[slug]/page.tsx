import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Briefcase, Scale, Users, Home, FileText, Shield } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const practiceAreasData = {
  corporate: {
    title: "Corporate Law",
    icon: Briefcase,
    description:
      "Comprehensive legal guidance for businesses of all sizes, from startups to Fortune 500 companies. Our corporate law team provides strategic counsel on complex business transactions and corporate governance matters.",
    services: [
      {
        name: "Mergers & Acquisitions",
        description: "Expert guidance through complex M&A transactions, due diligence, and deal structuring.",
      },
      {
        name: "Corporate Governance",
        description: "Counsel on board responsibilities, shareholder rights, and compliance requirements.",
      },
      {
        name: "Securities & Compliance",
        description: "Navigate securities regulations, public offerings, and regulatory compliance.",
      },
      {
        name: "Contract Negotiation",
        description: "Strategic negotiation and drafting of commercial agreements and contracts.",
      },
      {
        name: "Business Formation",
        description: "Guidance on entity selection, formation, and organizational structure.",
      },
      {
        name: "Corporate Restructuring",
        description: "Strategic advice on reorganizations, spin-offs, and corporate restructuring.",
      },
    ],
    approach: [
      "Strategic business-focused counsel aligned with your commercial objectives",
      "Deep industry expertise across technology, healthcare, finance, and manufacturing",
      "Proactive risk management and compliance guidance",
      "Efficient transaction execution with attention to detail",
    ],
    cta: "Whether you're a startup seeking formation guidance or an established corporation navigating a complex transaction, our corporate law team has the expertise to guide you through every stage of your business lifecycle.",
  },
  litigation: {
    title: "Litigation",
    icon: Scale,
    description:
      "Aggressive representation in complex commercial disputes and civil litigation matters. Our litigation team combines courtroom experience with strategic thinking to achieve favorable outcomes for our clients.",
    services: [
      {
        name: "Commercial Litigation",
        description: "Representation in business disputes, breach of contract, and partnership disagreements.",
      },
      {
        name: "Contract Disputes",
        description: "Resolution of contractual disagreements through negotiation, mediation, or trial.",
      },
      {
        name: "Business Torts",
        description: "Defense and prosecution of fraud, misrepresentation, and unfair competition claims.",
      },
      {
        name: "Appellate Practice",
        description: "Experienced appellate advocacy in state and federal courts.",
      },
      {
        name: "Alternative Dispute Resolution",
        description: "Skilled mediation and arbitration services to resolve disputes efficiently.",
      },
      {
        name: "Class Action Defense",
        description: "Strategic defense of class action lawsuits and mass tort litigation.",
      },
    ],
    approach: [
      "Aggressive advocacy combined with strategic settlement negotiations",
      "Thorough case preparation and discovery management",
      "Experienced trial attorneys with proven courtroom success",
      "Cost-effective litigation strategies tailored to your objectives",
    ],
    cta: "When litigation is unavoidable, you need experienced advocates who will fight for your interests. Our litigation team has the courtroom experience and strategic insight to achieve the best possible outcome.",
  },
  employment: {
    title: "Employment Law",
    icon: Users,
    description:
      "Strategic counsel on all aspects of the employer-employee relationship. We help businesses navigate complex employment laws while protecting their interests and maintaining positive workplace relationships.",
    services: [
      {
        name: "Employment Contracts",
        description: "Drafting and negotiating employment agreements, offer letters, and severance packages.",
      },
      {
        name: "Discrimination Claims",
        description: "Defense of discrimination, harassment, and retaliation claims.",
      },
      {
        name: "Wage & Hour Compliance",
        description: "Guidance on FLSA compliance, overtime, and wage payment requirements.",
      },
      {
        name: "Executive Compensation",
        description: "Structuring executive compensation packages, equity awards, and incentive plans.",
      },
      {
        name: "Workplace Investigations",
        description: "Conducting thorough, impartial investigations of workplace complaints.",
      },
      {
        name: "Non-Compete Agreements",
        description: "Drafting and enforcing restrictive covenants and confidentiality agreements.",
      },
    ],
    approach: [
      "Proactive compliance strategies to minimize litigation risk",
      "Practical, business-focused advice on day-to-day employment matters",
      "Experienced defense of employment claims and lawsuits",
      "Training programs to educate management on employment law compliance",
    ],
    cta: "Employment law compliance is essential for every business. Our employment law team provides the guidance you need to navigate complex regulations while fostering a productive workplace.",
  },
  "real-estate": {
    title: "Real Estate",
    icon: Home,
    description:
      "Full-service real estate legal support for commercial and residential transactions. From acquisitions to development, our real estate team handles all aspects of property law with precision and expertise.",
    services: [
      {
        name: "Property Acquisitions",
        description: "Representation in commercial and residential property purchases and sales.",
      },
      {
        name: "Lease Negotiations",
        description: "Drafting and negotiating commercial and residential lease agreements.",
      },
      {
        name: "Zoning & Land Use",
        description: "Guidance on zoning regulations, variances, and land use approvals.",
      },
      {
        name: "Real Estate Finance",
        description: "Counsel on mortgage financing, refinancing, and loan documentation.",
      },
      {
        name: "Title Disputes",
        description: "Resolution of title defects, boundary disputes, and easement issues.",
      },
      {
        name: "Development Projects",
        description: "Comprehensive legal support for real estate development from planning to completion.",
      },
    ],
    approach: [
      "Thorough due diligence to identify and resolve potential issues",
      "Efficient transaction management with attention to deadlines",
      "Strong relationships with local authorities and regulatory agencies",
      "Creative problem-solving for complex real estate matters",
    ],
    cta: "Real estate transactions require careful attention to detail and deep knowledge of property law. Our real estate team ensures your transactions close smoothly and your interests are protected.",
  },
  "intellectual-property": {
    title: "Intellectual Property",
    icon: Shield,
    description:
      "Protection and enforcement of your valuable intellectual property assets. Our IP team helps innovators, creators, and businesses protect their ideas, brands, and creative works in an increasingly competitive marketplace.",
    services: [
      {
        name: "Patent Prosecution",
        description: "Preparation and prosecution of utility, design, and provisional patent applications.",
      },
      {
        name: "Trademark Registration",
        description: "Trademark searches, registration, and portfolio management.",
      },
      {
        name: "Copyright Protection",
        description: "Copyright registration and protection for creative works and software.",
      },
      {
        name: "IP Licensing",
        description: "Negotiation and drafting of licensing agreements and technology transfers.",
      },
      {
        name: "Trade Secret Protection",
        description: "Strategies to protect confidential business information and trade secrets.",
      },
      {
        name: "IP Litigation",
        description: "Enforcement of IP rights and defense of infringement claims.",
      },
    ],
    approach: [
      "Strategic IP portfolio development aligned with business objectives",
      "Proactive monitoring and enforcement of IP rights",
      "Technical expertise across diverse industries and technologies",
      "Cost-effective IP protection strategies for businesses of all sizes",
    ],
    cta: "Your intellectual property is one of your most valuable assets. Our IP team provides comprehensive protection strategies to safeguard your innovations and creative works.",
  },
  "estate-planning": {
    title: "Estate Planning",
    icon: FileText,
    description:
      "Thoughtful planning to protect your legacy and provide for future generations. Our estate planning team helps individuals and families create comprehensive plans that reflect their values and protect their loved ones.",
    services: [
      {
        name: "Wills & Trusts",
        description: "Drafting wills, revocable trusts, and irrevocable trusts tailored to your needs.",
      },
      {
        name: "Estate Administration",
        description: "Guidance through probate and trust administration processes.",
      },
      {
        name: "Tax Planning",
        description: "Strategies to minimize estate, gift, and generation-skipping transfer taxes.",
      },
      {
        name: "Asset Protection",
        description: "Structures to protect assets from creditors and legal claims.",
      },
      {
        name: "Probate Services",
        description: "Efficient administration of estates through the probate process.",
      },
      {
        name: "Charitable Giving",
        description: "Planning for philanthropic goals through charitable trusts and foundations.",
      },
    ],
    approach: [
      "Personalized planning that reflects your unique family situation and goals",
      "Coordination with financial advisors and tax professionals",
      "Regular plan reviews to ensure documents remain current",
      "Compassionate guidance during difficult family transitions",
    ],
    cta: "Estate planning provides peace of mind that your wishes will be honored and your loved ones protected. Our estate planning team creates comprehensive plans tailored to your unique circumstances.",
  },
}

export async function generateStaticParams() {
  return Object.keys(practiceAreasData).map((slug) => ({
    slug,
  }))
}

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const area = practiceAreasData[params.slug as keyof typeof practiceAreasData]

  if (!area) {
    notFound()
  }

  const Icon = area.icon

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon className="text-accent" size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-light text-balance leading-tight">{area.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{area.description}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Our Services</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                Comprehensive legal services tailored to your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {area.services.map((service) => (
                <Card key={service.name} className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif font-semibold">{service.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Our Approach</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                How we deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {area.approach.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-lg leading-relaxed pt-0.5">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-center">{area.cta}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Schedule a consultation with our {area.title.toLowerCase()} team to discuss your legal needs.
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
