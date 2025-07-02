"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Target, Lightbulb } from "lucide-react"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { icon: Users, label: "Trainees Empowered", value: "500+" },
  { icon: Award, label: "Certifications", value: "15+" },
  { icon: Target, label: "Success Rate", value: "98%" },
  { icon: Lightbulb, label: "Years Experience", value: "8+" },
]

const values = [
  {
    title: "Excellence",
    description: "Committed to delivering the highest quality training and consultancy services.",
    icon: Award,
  },
  {
    title: "Innovation",
    description: "Embracing cutting-edge methodologies and technologies in professional development.",
    icon: Lightbulb,
  },
  {
    title: "Impact",
    description: "Focused on creating measurable, lasting change in individuals and organizations.",
    icon: Target,
  },
  {
    title: "Community",
    description: "Building strong networks and fostering collaborative learning environments.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  About <span className="gradient-text">Penty Joseph</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A passionate professional trainer and consultant dedicated to empowering individuals and organizations
                  through transformative learning experiences and strategic guidance.
                </p>
                <div className="prose prose-lg dark:prose-invert">
                  <p>
                    With over 8 years of experience in professional development, I specialize in creating impactful
                    training programs that drive real results. My approach combines theoretical knowledge with practical
                    application, ensuring that every participant walks away with actionable skills.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Penty Joseph - Professional Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                    <Award className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide my approach to training, consultancy, and professional development.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">My Mission</h2>
              <div className="text-xl leading-relaxed text-muted-foreground space-y-6">
                <p>
                  To bridge the gap between potential and performance by providing world-class training and consultancy
                  services that inspire growth, foster innovation, and drive sustainable success.
                </p>
                <p>
                  I believe that every individual and organization has untapped potential waiting to be unleashed.
                  Through personalized approaches, cutting-edge methodologies, and unwavering commitment to excellence,
                  I help my clients achieve their goals and exceed their expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
