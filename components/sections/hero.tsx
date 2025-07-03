"use client";

import type React from "react";
import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

type HeroProps = {
  backgroundY: MotionValue<string>;
  scrollToSection: (sectionId: string) => void;
};

export default function Hero({ backgroundY, scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden pt-20"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-800/30 to-blue-900/20" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transform Your Career with{" "}
              <span className="gradient-text">AWS Expertise</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Master AWS with hands-on training and scalable cloud solutions.
              Join 300+ professionals achieving 90% certification success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="relative overflow-hidden bg-white/50 text-slate-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white"
                onClick={() => scrollToSection("contact")}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1,
                  }}
                />
                <span className="relative z-10 flex items-center">
                  Book Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Button>
            </motion.div>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => scrollToSection("projects")}
            >
              Explore Projects
              <Code className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`p-2 rounded-full hover:bg-white/20 transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 w-fit">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">AT</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">
                  AWS Cloud Trainer
                </p>
                <p className="text-blue-200 text-xs">AmaliTech Ghana</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end relative group"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-lg z-10">
            <Image
              src="/penty.jpg"
              alt="Penty Joseph - AWS Cloud Trainer & Solutions Architect"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 "
              priority
              loading="eager"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-center p-4 opacity-0 transition-opacity duration-300"
            >
              <p className="text-sm">
                AWS Certified Trainer with 5+ Years of Cloud Expertise
              </p>
            </motion.div>
          </div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-xl opacity-75"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-4 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
