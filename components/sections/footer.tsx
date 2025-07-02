"use client";
import Link from "next/link";

import { navItems, socialLinks } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Penty Joseph
            </h3>
            <p className="mt-2 text-sm">
              AWS Cloud Trainer & Consultant. Helping individuals and businesses
              harness the power of the cloud.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Connect With Me
            </h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${link.color} transition-colors`}
                >
                  <link.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/10 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Penty Joseph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
