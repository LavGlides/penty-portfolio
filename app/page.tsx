"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<any>;
  external?: boolean;
};

const navItems: NavItem[] = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#services", label: "Services", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#certificates", label: "Certificates", icon: Award },
  { href: "#testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "#contact", label: "Contact", icon: Phone },
  { href: "#blog", label: "Blog", icon: BookOpen },
];

const adminNavItems: NavItem[] = [
  ...navItems,
  { href: "/admin", label: "Admin", icon: User, external: true },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/penty-joseph1",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    href: "https://github.com/penty-joseph",
    icon: Github,
    label: "GitHub",
    color: "hover:text-gray-300",
  },
  {
    href: "https://youtube.com/@penty-joseph",
    icon: Youtube,
    label: "YouTube",
    color: "hover:text-red-400",
  },
  {
    href: "mailto:penty.joseph@amalitech.com",
    icon: Mail,
    label: "Email",
    color: "hover:text-green-400",
  },
];

// About section data
const stats = [
  { icon: Users, label: "Students Trained", value: "300+" },
  { icon: Award, label: "AWS Certifications", value: "6+" },
  { icon: Target, label: "Certification Pass Rate", value: "90%" },
  { icon: Lightbulb, label: "Years Experience", value: "5+" },
];

const values = [
  {
    title: "Excellence",
    description:
      "Delivering world-class AWS training with 90% certification pass rate and hands-on expertise.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "Leveraging cutting-edge cloud technologies and DevOps practices for modern solutions.",
    icon: Lightbulb,
  },
  {
    title: "Impact",
    description:
      "Creating lasting career transformation through practical AWS skills and real-world projects.",
    icon: Target,
  },
  {
    title: "Mentorship",
    description:
      "Building confident cloud professionals through personalized guidance and continuous support.",
    icon: Users,
  },
];

// Services data
const services = [
  {
    icon: Users,
    title: "AWS Cloud Training",
    description:
      "Comprehensive AWS training programs for individuals and organizations seeking cloud expertise.",
    features: [
      "AWS Solutions Architect Training",
      "Cloud Practitioner Certification Prep",
      "Hands-on Lab Sessions",
      "DevOps & CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
    ],
    price: "From GHC1,500/program",
  },
  {
    icon: Briefcase,
    title: "Cloud Architecture Consulting",
    description:
      "Expert consulting for designing and implementing scalable, secure AWS cloud solutions.",
    features: [
      "Cloud Architecture Design",
      "AWS Migration Strategy",
      "Cost Optimization",
      "Security & Compliance",
      "Performance Optimization",
    ],
    price: "From GHC1,000/project",
  },
  {
    icon: BookOpen,
    title: "Technical Workshops",
    description:
      "Interactive workshops on AWS services, DevOps practices, and cloud best practices.",
    features: [
      "EC2 & Auto Scaling",
      "S3 & CloudFormation",
      "VPC & Security Groups",
      "CloudWatch & Monitoring",
      "CI/CD with AWS CodePipeline",
    ],
    price: "From GHC5,00/workshop",
  },
  {
    icon: Target,
    title: "One-on-One Mentoring",
    description:
      "Personalized mentoring for AWS certification preparation and career development.",
    features: [
      "Certification Exam Prep",
      "Career Guidance",
      "Technical Code Reviews",
      "Project-based Learning",
      "Industry Best Practices",
    ],
    price: "From GHC5,000/session",
  },
];

// AWS Projects data
const awsProjects = [
  {
    id: 1,
    title: "Scalable Web Application with Auto Scaling & Load Balancer",
    description:
      "High-availability web architecture with Application Load Balancer for traffic distribution and Auto Scaling for dynamic instance management.",
    technologies: [
      "Application Load Balancer",
      "Auto Scaling",
      "Launch Template",
      "CloudWatch",
      "IAM",
    ],
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/penty-joseph/aws-scalable-web-app",
    liveUrl: "https://demo.penty-joseph.com/scalable-app",
    category: "Web Architecture",
    featured: true,
  },
  {
    id: 2,
    title: "Infrastructure as Code with CloudFormation",
    description:
      "Complete AWS infrastructure deployment using CloudFormation templates for VPC, EC2, RDS, and security groups.",
    technologies: ["CloudFormation", "VPC", "EC2", "RDS", "Security Groups"],
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/penty-joseph/aws-iac-cloudformation",
    liveUrl: null,
    category: "Infrastructure",
    featured: true,
  },
  {
    id: 3,
    title: "CI/CD Pipeline with AWS CodePipeline",
    description:
      "Automated deployment pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy for seamless application delivery.",
    technologies: ["CodePipeline", "CodeBuild", "CodeDeploy", "S3", "Lambda"],
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/penty-joseph/aws-cicd-pipeline",
    liveUrl: null,
    category: "DevOps",
    featured: false,
  },
  {
    id: 4,
    title: "Serverless API with Lambda & API Gateway",
    description:
      "RESTful API built with AWS Lambda, API Gateway, and DynamoDB for serverless architecture implementation.",
    technologies: ["Lambda", "API Gateway", "DynamoDB", "CloudWatch", "IAM"],
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/penty-joseph/serverless-api",
    liveUrl: "https://api.penty-joseph.com/docs",
    category: "Serverless",
    featured: false,
  },
  {
    id: 5,
    title: "Multi-Tier Web Application Security",
    description:
      "Secure multi-tier application with VPC, security groups, WAF, and CloudTrail for comprehensive security monitoring.",
    technologies: ["VPC", "WAF", "CloudTrail", "Security Groups", "SSL/TLS"],
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/penty-joseph/aws-secure-app",
    liveUrl: null,
    category: "Security",
    featured: false,
  },
  {
    id: 6,
    title: "Cost-Optimized Data Storage Solution",
    description:
      "Intelligent data archiving solution using S3 lifecycle policies, Glacier, and CloudWatch for cost optimization.",
    technologies: [
      "S3",
      "Glacier",
      "Lifecycle Policies",
      "CloudWatch",
      "Lambda",
    ],
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/penty-joseph/aws-storage-optimization",
    liveUrl: null,
    category: "Storage",
    featured: false,
  },
];

// Certificates data with verification links
const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    category: "Cloud Architecture",
    description:
      "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
    image: "/amazon_web_services_logo.jpg",
    credentialId: "479d0d0f31684e1a9673aed218bd130c",
    verificationUrl:
      "https://www.credly.com/badges/479d0d0f31684e1a9673aed218bd130c",
    skills: [
      "Solution Architecture",
      "Cloud Security",
      "Infrastructure as Code",
    ],
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    category: "Cloud Fundamentals",
    description:
      "Foundational certification validating overall understanding of AWS Cloud services and concepts.",
    image: "/amazon_web_services_logo.jpg",
    credentialId: "f4d678f3dffe4655942e205e4a8474bd",
    verificationUrl:
      "https://www.credly.com/badges/f4d678f3dffe4655942e205e4a8474bd",
    skills: ["AWS Services", "Cloud Computing", "Cost Management"],
  },
  {
    id: 3,
    title: "AWS Cloud Support Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    category: "Cloud Support",
    description:
      "Certification demonstrating skills in AWS cloud support and troubleshooting.",
    image: "/amazon_web_services_logo.jpg",
    credentialId: "XXYCXG31WFRQ",
    verificationUrl: "https://aws.amazon.com/verification",
    skills: ["Technical Support", "Linux", "Bash"],
  },
  {
    id: 4,
    title: "AWS Cloud Technology Consultant",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    category: "Cloud Consulting",
    description:
      "Specialized certification in AWS cloud technology consulting and implementation.",
    image: "/amazon_web_services_logo.jpg",
    credentialId: "XBLEA5E2KF3O",
    verificationUrl: "https://aws.amazon.com/verification",
    skills: ["Consulting", "Git", "Linux"],
  },
  {
    id: 5,
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    category: "Cloud Career Development",
    description:
      "Completion of AWS re/Start program for cloud career development and technical skills.",
    image: "/amazon_web_services_logo.jpg",
    credentialId: "AWS-RESTART-2024",
    verificationUrl: "https://aws.amazon.com/training/restart/",
    skills: ["Git", "Cloud Fundamentals", "Career Development"],
  },
  {
    id: 6,
    title: "ALX Cloud Computing",
    issuer: "ALX Africa",
    date: "2024",
    category: "Cloud Computing",
    description:
      "Comprehensive cloud computing program covering AWS services and cloud architecture.",
    image: "/alx.jpg",
    credentialId: "ALX-CLOUD-2024",
    verificationUrl: "https://www.alxafrica.com/programme/cloud-computing/",
    skills: ["Cloud Computing", "AWS", "DevOps"],
  },
];

// YouTube videos data
const youtubeVideos = [
  {
    id: 1,
    title: "AWS Solutions Architect Complete Study Guide",
    description:
      "Comprehensive guide covering all topics for AWS Solutions Architect Associate certification.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "45:30",
    views: "15K",
    publishedAt: "2024-12-01",
  },
  {
    id: 2,
    title: "Building Auto Scaling Groups on AWS - Hands-on Lab",
    description:
      "Step-by-step tutorial on creating and configuring Auto Scaling Groups with Application Load Balancer.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "32:15",
    views: "8.2K",
    publishedAt: "2024-11-15",
  },
  {
    id: 3,
    title: "AWS VPC Security Best Practices",
    description:
      "Learn how to implement security groups, NACLs, and VPC endpoints for maximum security.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "28:45",
    views: "12K",
    publishedAt: "2024-11-01",
  },
];

// GitHub repositories data
const githubRepos = [
  {
    id: 1,
    name: "aws-solutions-architect-labs",
    description:
      "Collection of hands-on labs and projects for AWS Solutions Architect certification preparation.",
    language: "CloudFormation",
    stars: 234,
    forks: 67,
    url: "https://github.com/penty-joseph/aws-solutions-architect-labs",
  },
  {
    id: 2,
    name: "terraform-aws-infrastructure",
    description:
      "Infrastructure as Code templates using Terraform for common AWS architecture patterns.",
    language: "HCL",
    stars: 156,
    forks: 43,
    url: "https://github.com/penty-joseph/terraform-aws-infrastructure",
  },
  {
    id: 3,
    name: "aws-devops-pipeline",
    description:
      "Complete CI/CD pipeline implementation using AWS CodePipeline, CodeBuild, and CodeDeploy.",
    language: "Python",
    stars: 189,
    forks: 52,
    url: "https://github.com/penty-joseph/aws-devops-pipeline",
  },
  {
    id: 4,
    name: "serverless-microservices",
    description:
      "Microservices architecture using AWS Lambda, API Gateway, and DynamoDB.",
    language: "JavaScript",
    stars: 298,
    forks: 89,
    url: "https://github.com/penty-joseph/serverless-microservices",
  },
];

// Testimonials data with AmaliTech branding
const testimonials = [
  {
    id: 1,
    name: "Kwame Asante",
    position: "DevOps Engineer",
    company: "TechHub Ghana",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Penty's AWS Solutions Architect training at AmaliTech was exceptional. His hands-on approach and real-world projects helped me pass the certification on my first attempt. The 90% pass rate speaks for itself!",
    program: "AWS Solutions Architect Training",
    date: "2024",
    linkedin: "https://linkedin.com/in/kwame-asante",
    amalitech: true,
  },
  {
    id: 2,
    name: "Ama Osei",
    position: "Cloud Engineer",
    company: "AmaliTech",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "As a fellow AmaliTech colleague, I can attest to Penty's expertise. His training methodology and practical approach to cloud architecture has transformed our team's capabilities significantly.",
    program: "AWS Cloud Practitioner",
    date: "2024",
    linkedin: "https://linkedin.com/in/ama-osei",
    amalitech: true,
  },
  {
    id: 3,
    name: "Kofi Mensah",
    position: "Solutions Architect",
    company: "CloudTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Penty's mentoring helped me transition from traditional IT to cloud architecture. His guidance on Infrastructure as Code and DevOps practices was invaluable for my career growth.",
    program: "Cloud Architecture Consulting",
    date: "2024",
    linkedin: "https://linkedin.com/in/kofi-mensah",
    amalitech: false,
  },
  {
    id: 4,
    name: "Frederick Agyemang",
    position: "Senior Cloud Trainer",
    company: "AmaliTech",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Working alongside Penty at AmaliTech has been incredible. His dedication to student success and innovative training methods consistently deliver outstanding results in our AWS programs.",
    program: "Colleague Endorsement",
    date: "2024",
    linkedin: "https://linkedin.com/in/frederick-agyemang",
    amalitech: true,
  },
  {
    id: 5,
    name: "Akosua Darko",
    position: "Junior Cloud Developer",
    company: "StartupTech Ghana",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "The hands-on labs and code reviews in Penty's training program gave me the practical skills I needed. His YouTube tutorials are also incredibly helpful for continuous learning.",
    program: "AWS Development Training",
    date: "2024",
    linkedin: "https://linkedin.com/in/akosua-darko",
    amalitech: false,
  },
  {
    id: 6,
    name: "Yaw Boateng",
    position: "IT Manager",
    company: "FinTech Ghana",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Penty helped our team migrate to AWS with minimal downtime. His expertise in auto-scaling and load balancing significantly improved our application performance and cost efficiency.",
    program: "AWS Migration Consulting",
    date: "2024",
    linkedin: "https://linkedin.com/in/yaw-boateng",
    amalitech: false,
  },
];

// Contact info
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "penty.joseph@amalitech.com",
    description: "Send me an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+233 24 123 4567",
    description: "Call for immediate assistance",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Accra, Ghana",
    description: "Available for on-site training",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 12 hours",
    description: "Quick response guaranteed",
  },
];

// Consultation packages
const consultationPackages = [
  {
    id: "basic",
    name: "Basic Consultation",
    duration: "30 minutes",
    price: 15000,
    description: "Perfect for initial discussions and quick questions",
    features: [
      "30-minute video call",
      "Basic assessment",
      "Action plan outline",
      "Follow-up email",
    ],
  },
  {
    id: "standard",
    name: "Standard Consultation",
    duration: "60 minutes",
    price: 25000,
    description: "Comprehensive consultation for detailed planning",
    features: [
      "60-minute video call",
      "Detailed assessment",
      "Custom action plan",
      "Resource recommendations",
      "Follow-up session",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Consultation",
    duration: "90 minutes",
    price: 40000,
    description: "In-depth consultation with ongoing support",
    features: [
      "90-minute video call",
      "Complete analysis",
      "Detailed roadmap",
      "Resource package",
      "30-day email support",
    ],
  },
];

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title:
      "Building Scalable Web Applications with AWS Auto Scaling and Load Balancers",
    excerpt:
      "A comprehensive guide to implementing auto-scaling groups and application load balancers for high-availability web applications on AWS.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2024-12-15",
    readTime: "12 min read",
    tags: ["AWS", "Auto Scaling", "Load Balancer"],
    mediumUrl:
      "https://medium.com/@penty-joseph/aws-auto-scaling-load-balancer",
  },
  {
    id: 2,
    title: "AWS Solutions Architect Certification: Complete Study Guide",
    excerpt:
      "Everything you need to know to pass the AWS Solutions Architect Associate exam, including hands-on labs and practice questions.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2024-12-01",
    readTime: "15 min read",
    tags: ["AWS Certification", "Solutions Architect", "Study Guide"],
    mediumUrl: "https://medium.com/@penty-joseph/aws-solutions-architect-guide",
  },
  {
    id: 3,
    title: "Infrastructure as Code with AWS CloudFormation: Best Practices",
    excerpt:
      "Learn how to implement Infrastructure as Code using AWS CloudFormation templates for consistent and repeatable deployments.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2024-11-20",
    readTime: "10 min read",
    tags: ["CloudFormation", "IaC", "DevOps"],
    mediumUrl: "https://medium.com/@penty-joseph/cloudformation-best-practices",
  },
  {
    id: 4,
    title: "Securing Your AWS Environment: IAM, VPC, and Security Groups",
    excerpt:
      "Essential security practices for AWS environments, covering Identity and Access Management, Virtual Private Clouds, and network security.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2024-11-05",
    readTime: "8 min read",
    tags: ["AWS Security", "IAM", "VPC"],
    mediumUrl: "https://medium.com/@penty-joseph/aws-security-essentials",
  },
  {
    id: 5,
    title: "CI/CD Pipelines with AWS CodePipeline and CodeBuild",
    excerpt:
      "Step-by-step guide to setting up continuous integration and deployment pipelines using AWS native DevOps services.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2024-10-22",
    readTime: "14 min read",
    tags: ["CI/CD", "CodePipeline", "DevOps"],
    mediumUrl: "https://medium.com/@penty-joseph/aws-cicd-pipeline",
  },
  {
    id: 6,
    title: "Cost Optimization Strategies for AWS Cloud Infrastructure",
    excerpt:
      "Practical techniques for reducing AWS costs while maintaining performance, including reserved instances, spot instances, and resource optimization.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2024-10-08",
    readTime: "11 min read",
    tags: ["Cost Optimization", "AWS", "Cloud Economics"],
    mediumUrl: "https://medium.com/@penty-joseph/aws-cost-optimization",
  },
];

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("message");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const { toast } = useToast();

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

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast({
      title: "Message Sent!",
      description:
        "Thank you for your message. I'll get back to you within 24 hours.",
    });
    setMessageForm({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    toast({
      title: "Booking Confirmed!",
      description:
        "Your consultation has been booked. Payment confirmation will be sent to your email.",
    });
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      package: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    });
    setIsSubmitting(false);
  };

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
              {adminNavItems.map((item) =>
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
                {adminNavItems.map((item) =>
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

      {/* About Section */}
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
                  With hands-on experience in Amazon Web Services (AWS) and
                  cloud infrastructure, I specialize in creating
                  high-performance, resilient architectures that enhance
                  business efficiency. As a dedicated educator and mentor, I
                  have trained over 300 students in cloud computing, achieving a
                  90% certification pass rate through engaging, hands-on
                  learning experiences and guided lab tutorials.
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
              The principles that guide my approach to training, consultancy,
              and professional development.
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

      {/* Services Section */}
      <section id="services" className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AWS training and consultancy services designed to
              unlock cloud potential and achieve exceptional results for
              individuals and organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>
                        <p className="text-primary font-semibold">
                          {service.price}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full group-hover:bg-primary/90 transition-colors"
                      onClick={() => scrollToSection("contact")}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* YouTube Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Learn on YouTube</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Access free AWS tutorials, hands-on labs, and certification
                guidance on my YouTube channel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {youtubeVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                    <div className="relative">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={320}
                        height={180}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{video.views} views</span>
                        <span>{formatDate(video.publishedAt)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <a
                  href="https://youtube.com/@penty-joseph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  Visit YouTube Channel
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-24 pb-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              AWS <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my collection of AWS projects showcasing cloud
              architecture, DevOps practices, and scalable solutions.
            </p>
          </motion.div>

          {/* Project Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedProjectCategory === category ? "default" : "outline"
                }
                onClick={() => setSelectedProjectCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {filteredProjects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="flex-1 bg-transparent"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button size="sm" asChild className="flex-1">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* All Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg leading-tight">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="flex-1 bg-transparent"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button size="sm" asChild className="flex-1">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* GitHub Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center">
                  <Github className="w-8 h-8 text-white dark:text-gray-900" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">GitHub Repositories</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my open-source contributions and AWS-focused
                repositories on GitHub.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {githubRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-lg">{repo.name}</h4>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {repo.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span>{repo.language}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3" />
                            <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span>⋔</span>
                            <span>{repo.forks}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                className="border-gray-900 dark:border-gray-100 bg-transparent"
              >
                <a
                  href="https://github.com/penty-joseph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View All Repositories
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional <span className="gradient-text">Certificates</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AWS certifications and credentials demonstrating expertise in
              cloud architecture, security, and best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        {cert.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="font-medium">{cert.issuer}</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">
                        Key Skills:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground mb-3">
                        Credential ID:{" "}
                        <span className="font-mono">{cert.credentialId}</span>
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-transparent"
                        asChild
                      >
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Certificate
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
      {/* Blog Section */}
      <section id="blog" className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore my thoughts on AWS best practices, cloud architecture,
              DevOps automation, and the future of cloud computing.
            </p>
            <Badge variant="secondary" className="text-sm">
              Published on Medium
            </Badge>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-white/20 text-white"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full group-hover:bg-primary/90 transition-colors"
                      asChild
                    >
                      <a
                        href={post.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read on Medium
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-primary text-primary-foreground p-12 rounded-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Follow me on Medium to get notified when I publish new articles
              about AWS, cloud architecture, and DevOps best practices.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <a
                href="https://medium.com/@penty-joseph"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Medium
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section
        id="contact"
        className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/20 dark:to-blue-950/20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to advance your AWS skills or transform your organization's
              cloud infrastructure? Let's discuss how we can work together.
            </p>
          </motion.div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-primary font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Forms */}
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-muted p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab("message")}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === "message"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Send Message
                </button>
                <button
                  onClick={() => setActiveTab("booking")}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === "booking"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Book Consultation
                </button>
              </div>
            </div>

            {activeTab === "message" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-xl mx-auto"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Send a Message</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleMessageSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={messageForm.name}
                            onChange={(e) =>
                              setMessageForm({
                                ...messageForm,
                                name: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={messageForm.email}
                            onChange={(e) =>
                              setMessageForm({
                                ...messageForm,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={messageForm.subject}
                          onChange={(e) =>
                            setMessageForm({
                              ...messageForm,
                              subject: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={messageForm.message}
                          onChange={(e) =>
                            setMessageForm({
                              ...messageForm,
                              message: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeTab === "booking" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  {consultationPackages.map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        className={`h-full ${
                          pkg.popular ? "border-primary shadow-lg" : ""
                        }`}
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">
                              {pkg.name}
                            </CardTitle>
                            {pkg.popular && (
                              <Badge className="bg-primary text-primary-foreground">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-primary font-semibold text-sm">
                            {pkg.duration}
                          </p>
                          <p className="text-primary font-bold text-lg">
                            GHC {pkg.price.toLocaleString()}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            {pkg.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {pkg.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center space-x-2 text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>Book a Consultation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="booking-name">Full Name</Label>
                          <Input
                            id="booking-name"
                            value={bookingForm.name}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setBookingForm({
                                ...bookingForm,
                                name: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="booking-email">Email Address</Label>
                          <Input
                            id="booking-email"
                            type="email"
                            value={bookingForm.email}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setBookingForm({
                                ...bookingForm,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="booking-phone">Phone Number</Label>
                          <Input
                            id="booking-phone"
                            type="tel"
                            value={bookingForm.phone}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setBookingForm({
                                ...bookingForm,
                                phone: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="booking-package">
                            Consultation Package
                          </Label>
                          <Select
                            value={bookingForm.package}
                            onValueChange={(value: string) =>
                              setBookingForm({ ...bookingForm, package: value })
                            }
                            required
                          >
                            <SelectTrigger id="booking-package">
                              <SelectValue placeholder="Select a package" />
                            </SelectTrigger>
                            <SelectContent>
                              {consultationPackages.map((pkg) => (
                                <SelectItem key={pkg.id} value={pkg.id}>
                                  {pkg.name} ({pkg.duration})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="booking-date">Preferred Date</Label>
                          <Input
                            id="booking-date"
                            type="date"
                            value={bookingForm.preferredDate}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setBookingForm({
                                ...bookingForm,
                                preferredDate: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="booking-time">Preferred Time</Label>
                          <Input
                            id="booking-time"
                            type="time"
                            value={bookingForm.preferredTime}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setBookingForm({
                                ...bookingForm,
                                preferredTime: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="booking-notes">Additional Notes</Label>
                        <Textarea
                          id="booking-notes"
                          rows={4}
                          value={bookingForm.notes}
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) =>
                            setBookingForm({
                              ...bookingForm,
                              notes: e.target.value,
                            })
                          }
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Booking..."
                        ) : (
                          <>
                            <CreditCard className="w-4 h-4 mr-2" />
                            Book Now
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
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
    </div>
  );
}
