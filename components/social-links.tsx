"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Twitter, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/penty-joseph1",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-500",
  },
  {
    href: "https://github.com/penty-joseph",
    icon: Github,
    label: "GitHub",
    color: "hover:text-gray-400",
  },
  {
    href: "https://facebook.com/penty.joseph",
    icon: Facebook,
    label: "Facebook",
    color: "hover:text-blue-600",
  },
  {
    href: "https://twitter.com/penty_joseph",
    icon: Twitter,
    label: "Twitter",
    color: "hover:text-blue-400",
  },
  {
    href: "https://instagram.com/penty_joseph",
    icon: Instagram,
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    href: "mailto:penty.joseph@example.com",
    icon: Mail,
    label: "Email",
    color: "hover:text-green-500",
  },
]

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Button variant="ghost" size="icon" asChild className={`transition-colors duration-200 ${social.color}`}>
            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              <social.icon className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
