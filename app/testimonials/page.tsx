"use client"

import { motion } from "framer-motion"
import { Star, Quote, Linkedin, Building } from "lucide-react"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "HR Director",
    company: "TechCorp Solutions",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Penty's training program transformed our team's productivity by 40%. His approach to leadership development is both practical and inspiring. The skills our managers learned are being applied daily with remarkable results.",
    program: "Leadership Development",
    date: "2023",
    linkedin: "https://linkedin.com/in/sarah-johnson",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "InnovateLab",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Working with Penty was a game-changer for our organization. His consultancy helped us streamline our processes and improve team collaboration. The ROI was evident within the first quarter.",
    program: "Business Consultancy",
    date: "2023",
    linkedin: "https://linkedin.com/in/michael-chen",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    position: "Training Manager",
    company: "HealthFirst Medical",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Penty's workshop on communication skills was exceptional. Our staff feedback scores improved significantly, and patient satisfaction reached an all-time high. His methods are evidence-based and highly effective.",
    program: "Communication Workshop",
    date: "2023",
    linkedin: "https://linkedin.com/in/emily-rodriguez",
  },
  {
    id: 4,
    name: "James Wilson",
    position: "Project Manager",
    company: "BuildRight Construction",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "The project management training exceeded all expectations. Penty's real-world examples and hands-on approach made complex concepts easy to understand and implement immediately.",
    program: "Project Management",
    date: "2022",
    linkedin: "https://linkedin.com/in/james-wilson",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Operations Director",
    company: "RetailMax",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Penty's one-on-one coaching helped me develop the confidence and skills needed to lead a team of 50+ employees. His personalized approach and ongoing support made all the difference.",
    program: "Executive Coaching",
    date: "2022",
    linkedin: "https://linkedin.com/in/lisa-thompson",
  },
  {
    id: 6,
    name: "Robert Kim",
    position: "IT Director",
    company: "DataFlow Systems",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "The digital transformation workshop was incredibly valuable. Penty helped our team understand not just the technology, but how to manage the human side of change effectively.",
    program: "Digital Transformation",
    date: "2022",
    linkedin: "https://linkedin.com/in/robert-kim",
  },
]

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "500+", label: "Professionals Trained" },
  { value: "50+", label: "Organizations Served" },
  { value: "4.9/5", label: "Average Rating" },
]

export default function TestimonialsPage() {
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
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Client <span className="gradient-text">Testimonials</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Hear from the professionals and organizations who have experienced transformative results through our
                training and consultancy services.
              </p>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg font-semibold">4.9/5 Average Rating from 200+ Reviews</p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-6 space-y-4">
                      {/* Rating */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                        <p className="text-muted-foreground leading-relaxed pl-6">"{testimonial.testimonial}"</p>
                      </div>

                      {/* Program Badge */}
                      <Badge variant="secondary" className="w-fit">
                        {testimonial.program}
                      </Badge>

                      {/* Client Info */}
                      <div className="flex items-center space-x-4 pt-4 border-t">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                            <a
                              href={testimonial.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          </div>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Building className="w-3 h-3" />
                            <span>{testimonial.company}</span>
                            <span>•</span>
                            <span>{testimonial.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the same transformative results that our clients have achieved. Let's discuss how we can help
                you reach your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </motion.a>
                <motion.a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
