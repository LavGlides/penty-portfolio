import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClientOnly } from "@/components/client-only";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://penty-portfolio.vercel.app'),
  title: {
    default: "Penty Joseph - Professional Trainer & Consultant",
    template: "%s | Penty Joseph Portfolio"
  },
  description:
    "Expert training, consultancy, and professional development services in AWS, Cloud, and DevOps.",
  keywords: [
    "Penty Joseph",
    "AWS",
    "Cloud Computing",
    "Solutions Architect",
    "DevOps",
    "Cloud Training",
    "AmaliTech",
    "Ghana",
    "AWS Certified",
    "Cloud Consultant",
  ],
  creator: "Penty Joseph",
  authors: [{ name: "Penty Joseph", url: "https://www.linkedin.com/in/penty-joseph1" }],
  openGraph: {
    title: "Penty Joseph - AWS Cloud Trainer & Solutions Architect",
    description: "Portfolio of Penty Joseph, showcasing AWS projects, certifications, and professional services.",
    url: "https://penty-portfolio.vercel.app/",
    siteName: "Penty Joseph Portfolio",
    images: [
      {
        url: "/penty.jpg",
        width: 1200,
        height: 630,
        alt: "Penty Joseph - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Penty Joseph - AWS Cloud Trainer & Solutions Architect",
    description: "Expert in AWS, DevOps, and cloud solutions. Explore my projects and services.",
    creator: "@pentyjoseph",
    images: ["/penty.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ClientOnly>
            <Toaster />
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
