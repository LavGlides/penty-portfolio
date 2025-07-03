"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Github, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { stats, values } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/20 dark:to-blue-950/20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Penty Joseph</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AWS Certified Solutions Architect and Cloud Technology Trainer
              with expertise in designing secure, scalable, and cost-effective
              cloud solutions. Currently serving as AWS Cloud Trainer at
              AmaliTech, Ghana.
            </p>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                With hands-on experience in Amazon Web Services (AWS) and cloud
                infrastructure, I specialize in creating high-performance,
                resilient architectures that enhance business efficiency. As a
                dedicated educator and mentor, I have trained over 300 students
                in cloud computing, achieving a 90% certification pass rate
                through engaging, hands-on learning experiences and guided lab
                tutorials.
              </p>
            </div>

            {/* GitHub & YouTube Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="text-center p-4">
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Github className="w-5 h-5 text-primary" />
                    <span className="font-semibold">GitHub</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">877</div>
                  <div className="text-sm text-muted-foreground">
                    Total Stars
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Youtube className="w-5 h-5 text-red-500" />
                    <span className="font-semibold">YouTube</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">35K</div>
                  <div className="text-sm text-muted-foreground">
                    Total Views
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/amalitech.jpg"
                  alt="Penty Joseph - Professional Photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AT</span>
                  </div>
                  <span className="font-semibold text-sm">AmaliTech</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl lg:text-5xl font-bold mb-6">Core Values</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide my approach to training, consultancy, and
            professional development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
