"use client";
import Link from "next/link";

import { navItems, socialLinks } from "@/lib/data";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center space-x-4">
            <h3 className="text-2xl font-bold gradient-text">Penty Joseph</h3>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-1">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xs">AT</span>
              </div>
              <span className="text-sm">AmaliTech</span>
            </div>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            AWS Certified Solutions Architect specializing in cloud training,
            DevOps automation, and scalable cloud solutions.
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className={`transition-colors duration-200 ${social.color}`}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              </Button>
            ))}
          </div>
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400 text-sm">
              © 2024 Penty Joseph. All rights reserved. | AWS Cloud Trainer &
              Solutions Architect
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
