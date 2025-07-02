"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Calendar, ExternalLink, Download } from "lucide-react"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const certificates = [
  {
    id: 1,
    title: "Certified Professional Trainer",
    issuer: "International Training Institute",
    date: "2023",
    category: "Training & Development",
    description: "Advanced certification in professional training methodologies and adult learning principles.",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "CPT-2023-001",
    skills: ["Adult Learning", "Curriculum Design", "Assessment Methods"],
  },
  {
    id: 2,
    title: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    date: "2022",
    category: "Project Management",
    description: "Globally recognized certification demonstrating project management expertise.",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "PMP-2022-789",
    skills: ["Project Planning", "Risk Management", "Team Leadership"],
  },
  {
    id: 3,
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    date: "2022",
    category: "Agile Methodology",
    description: "Expertise in Scrum framework and agile project management practices.",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "CSM-2022-456",
    skills: ["Scrum Framework", "Agile Coaching", "Sprint Planning"],
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    issuer: "Google Digital Academy",
    date: "2021",
    category: "Digital Marketing",
    description: "Comprehensive certification in digital marketing strategies and analytics.",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "DMS-2021-123",
    skills: ["SEO/SEM", "Analytics", "Content Strategy"],
  },
  {
    id: 5,
    title: "Leadership Excellence Certificate",
    issuer: "Harvard Business School Online",
    date: "2021",
    category: "Leadership",
    description: "Advanced leadership principles and organizational behavior strategies.",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "HBS-2021-567",
    skills: ["Strategic Leadership", "Change Management", "Team Development"],
  },
  {
    id: 6,
    title: "Data Analytics Professional",
    issuer: "IBM",
    date: "2020",
    category: "Data Science",
    description: "Professional certification in data analysis, visualization, and business intelligence.",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "IBM-2020-890",
    skills: ["Data Visualization", "Statistical Analysis", "Business Intelligence"],
  },
]

const categories = [
  "All",
  "Training & Development",
  "Project Management",
  "Leadership",
  "Digital Marketing",
  "Data Science",
  "Agile Methodology",
]

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional <span className="gradient-text">Certificates</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                A comprehensive collection of professional certifications and credentials that demonstrate expertise
                across multiple domains and industries.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.slice(1).map((category) => (
                  <Badge key={category} variant="secondary" className="text-sm">
                    {category}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 text-primary-foreground">{cert.category}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <span className="font-medium">{cert.issuer}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                      <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground">Key Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <p className="text-xs text-muted-foreground mb-3">
                          Credential ID: <span className="font-mono">{cert.credentialId}</span>
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Verify
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Professional Certificates</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Specialized Domains</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <div className="text-muted-foreground">Years of Learning</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Verified Credentials</div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
