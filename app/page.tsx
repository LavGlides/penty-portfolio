"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  Award,
  Users,
  Target,
  Lightbulb,
  CheckCircle,
  Star,
  Quote,
  Linkedin,
  Building,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  CreditCard,
  ExternalLink,
  Tag,
  Search,
  Github,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  MessageSquare,
  BookOpen,
  Youtube,
  Code,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Certificates from "@/components/sections/certificates";
import Blog from "@/components/sections/blog";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { awsProjects, blogPosts, navItems, type NavItem } from "@/lib/data";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProjectCategory, setSelectedProjectCategory] = useState("All");
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Handle navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "projects",
        "certificates",
        "testimonials",
        "contact",
        "blog",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter blog posts
  useEffect(() => {
    let filtered = blogPosts;
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredPosts(filtered);
  }, [searchTerm]);

  // Filter projects
  const filteredProjects =
    selectedProjectCategory === "All"
      ? awsProjects
      : awsProjects.filter(
          (project) => project.category === selectedProjectCategory
        );

  const projectCategories = [
    "All",
    ...Array.from(new Set(awsProjects.map((project) => project.category))),
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              Penty Joseph
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={`text-foreground/80 hover:text-foreground transition-colors duration-200 flex items-center space-x-2 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href.substring(1))}
                      className="flex items-center space-x-3 px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors duration-200 w-full text-left"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <Hero backgroundY={backgroundY} scrollToSection={scrollToSection} />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services scrollToSection={scrollToSection} formatDate={formatDate} />

      {/* Projects Section */}
      <Projects
        selectedProjectCategory={selectedProjectCategory}
        setSelectedProjectCategory={setSelectedProjectCategory}
        filteredProjects={filteredProjects}
        projectCategories={projectCategories}
      />

      {/* Certificates Section */}
      <Certificates />

      {/* Blog Section */}
      <Blog />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
