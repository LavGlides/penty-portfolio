"use client";
import type React from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  CreditCard,
  ExternalLink,
  Eye,
  Github,
  Home,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Play,
  Quote,
  Search,
  Send,
  Star,
  Tag,
  Target,
  User,
  Users,
  Youtube,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<any>;
  external?: boolean;
};

export const navItems: NavItem[] = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#services", label: "Services", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#certificates", label: "Certificates", icon: Award },
  { href: "#testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "#contact", label: "Contact", icon: Phone },
  { href: "#blog", label: "Blog", icon: BookOpen },
];

export const adminNavItems: NavItem[] = [
  ...navItems,
  { href: "/admin", label: "Admin", icon: User, external: true },
];

export const socialLinks = [
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
export const stats = [
  { icon: Users, label: "Students Trained", value: "300+" },
  { icon: Award, label: "AWS Certifications", value: "6+" },
  { icon: Target, label: "Certification Pass Rate", value: "90%" },
  { icon: Lightbulb, label: "Years Experience", value: "5+" },
];

export const values = [
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
export const services = [
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
    price: "From GHC5,00/session",
  },
];

// AWS Projects data
export const awsProjects = [
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
export const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    category: "Cloud Architecture",
    description:
      "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "ALX-CLOUD-2024",
    verificationUrl: "https://www.alxafrica.com/programme/cloud-computing/",
    skills: ["Cloud Computing", "AWS", "DevOps"],
  },
];

// YouTube videos data
export const youtubeVideos = [
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
export const githubRepos = [
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
export const testimonials = [
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
export const contactInfo = [
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
export const consultationPackages = [
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
export const blogPosts = [
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
