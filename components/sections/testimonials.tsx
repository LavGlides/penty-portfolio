"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/lib/data";
import { Star, Quote, Linkedin, Building } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-24 pb-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Hear from students, colleagues, and organizations who have
            experienced transformative results through AWS training and
            consultancy.
          </p>
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-lg font-semibold">
            4.9/5 Average Rating from 200+ Reviews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  {/* Program Badge */}
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="w-fit">
                      {testimonial.program}
                    </Badge>
                    {testimonial.amalitech && (
                      <Badge
                        variant="outline"
                        className="w-fit text-blue-600 border-blue-600"
                      >
                        AmaliTech
                      </Badge>
                    )}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-sm">
                          {testimonial.name}
                        </h4>
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
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
  );
}
