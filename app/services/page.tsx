"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Target, Briefcase, ArrowRight, CheckCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Professional Training",
    description: "Comprehensive training programs designed to enhance skills and boost performance.",
    features: [
      "Leadership Development",
      "Team Building Workshops",
      "Communication Skills",
      "Project Management",
      "Digital Literacy",
    ],
    price: "From $500/session",
  },
  {
    icon: Briefcase,
    title: "Business Consultancy",
    description: "Strategic consulting services to help organizations optimize their operations.",
    features: [
      "Business Strategy",
      "Process Optimization",
      "Change Management",
      "Performance Analysis",
      "Growth Planning",
    ],
    price: "From $150/hour",
  },
  {
    icon: BookOpen,
    title: "Educational Workshops",
    description: "Interactive workshops focused on practical learning and skill application.",
    features: [
      "Custom Curriculum",
      "Hands-on Learning",
      "Industry Best Practices",
      "Certification Programs",
      "Follow-up Support",
    ],
    price: "From $300/workshop",
  },
  {
    icon: Target,
    title: "One-on-One Coaching",
    description: "Personalized coaching sessions tailored to individual development needs.",
    features: ["Personal Development", "Career Guidance", "Goal Setting", "Performance Coaching", "Mentorship"],
    price: "From $100/session",
  },
]

const industries = [
  "Technology & IT",
  "Healthcare",
  "Finance & Banking",
  "Education",
  "Manufacturing",
  "Retail & E-commerce",
  "Non-profit Organizations",
  "Government Agencies",
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive training and consultancy services designed to unlock potential, drive growth, and achieve
                exceptional results for individuals and organizations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <p className="text-primary font-semibold">{service.price}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                        <Link href="/contact">
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Industries Served</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bringing expertise and tailored solutions across diverse sectors and industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:bg-primary/5">
                    <CardContent>
                      <p className="font-medium">{industry}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Transform Your Organization?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how my services can help you achieve your goals and unlock your full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/testimonials">View Testimonials</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
