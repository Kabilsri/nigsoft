import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.saas_development.title,
  description: SEO_CONFIG.saas_development.description,
  keywords: SEO_CONFIG.saas_development.keywords,
  alternates: {
    canonical: SEO_CONFIG.saas_development.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import ServiceHero from "@/components/services/service-hero";
import ServiceProcess from "@/components/services/service-process";
import DynamicFeatures from "@/components/services/card";
import ServiceStats from "@/components/services/service-stats";
import ServiceFAQ from "@/components/services/service-faq";
import {
  Search,
  FileText,
  Users,
  Phone,
  ArrowRight
} from 'lucide-react';
import Link from "next/link";
import PartnersMarquee from "@/components/common/partners-marquee";

export default function SaaSDevelopmentPage() {
  const saasFeatures = [
    {
      id: 'architecture',
      title: "Scalable SaaS Architecture",
      description: "Build robust, multi-tenant SaaS platforms that scale with your business growth:",
      features: [
        "Multi-tenant architecture",
        "Microservices design",
        "Auto-scaling infrastructure",
        "High availability systems"
      ]
    },
    {
      id: 'subscription',
      title: "Subscription & Billing Management",
      description: "Comprehensive billing solutions with flexible pricing models and payment processing:",
      features: [
        "Subscription management",
        "Multiple pricing tiers",
        "Payment gateway integration",
        "Invoice & tax handling"
      ]
    },
    {
      id: 'analytics',
      title: "Analytics & Reporting Dashboard",
      description: "Powerful analytics and reporting tools to track performance and user engagement:",
      features: [
        "Real-time analytics",
        "Custom reporting tools",
        "User behavior tracking",
        "Performance monitoring"
      ]
    },
    {
      id: 'security',
      title: "Enterprise Security & Compliance",
      description: "Implement robust security measures and compliance standards for enterprise clients:",
      features: [
        "Data encryption & security",
        "GDPR & SOC2 compliance",
        "Role-based access control",
        "Audit logs & monitoring"
      ]
    }
  ];

  const processSteps = [
    {
      icon: "Search",
      title: "Market Research & Planning",
      description: "Analyze market needs, define MVP features, and create a comprehensive SaaS development strategy."
    },
    {
      icon: "FileText",
      title: "Architecture & Design",
      description: "Design scalable system architecture, user interfaces, and database structures for optimal performance."
    },
    {
      icon: "Users",
      title: "Development & Testing",
      description: "Build your SaaS platform with agile methodology, continuous integration, and comprehensive testing."
    },
    {
      icon: "Phone",
      title: "Launch & Scale",
      description: "Deploy your SaaS solution and provide ongoing support, updates, and scaling as you grow."
    }
  ];

  const saasFaqs = [
    {
      question: "How do you ensure data isolation between different customers (Tenants)?",
      answer: "We use sophisticated multi-tenancy models—either row-level security within a shared database or separate database schemas for each tenant—to ensure that no customer can ever access another's data."
    },
    {
      question: "Can you help us build a subscription engine from scratch?",
      answer: "We typically integrate robust engines like Stripe Billing or Paddle for complex subscription logic, as they handle global taxes and compliance better, but we can also build custom recurring billing logic if your needs are highly unique."
    },
    {
      question: "Do you provide DevOps and continuous deployment setup?",
      answer: "Yes, every SaaS project comes with a automated CI/CD pipeline (using GitHub Actions or Jenkins) and Kubernetes-based orchestration to allow for zero-downtime updates and reliable scaling."
    },
    {
      question: "Is the platform built to handle enterprise security audits?",
      answer: "Absolutely. We build with SOC2 and GDPR compliance in mind, implementing full audit logs, encrypted communication protocols, and strict IAM policies to satisfy the most demanding corporate security reviews."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <ServiceHero
        title="SaaS Development"
        subtitle="Platform"
        description="Build scalable Software-as-a-Service platforms that generate recurring revenue. We create robust, multi-tenant SaaS solutions with enterprise-grade security and performance."
        imagePath="/service/saas.jpg"
        imageAlt="SaaS Development - Software as a Service Platforms"
        tags={["#SaaS Platform", "#Multi-tenant", "#Subscription Billing", "#Cloud Native", "#Enterprise Security"]}
      />
      <PartnersMarquee />

      <DynamicFeatures
        title="SaaS Development"
        highlightText=" Platform"
        features={saasFeatures}
      />
      <ServiceStats />
      <ServiceProcess
        title="Our SaaS Development Process"
        subtitle="A strategic approach to building successful SaaS platforms that scale and generate sustainable revenue."
        steps={processSteps}
      />
      <ServiceFAQ items={saasFaqs} />

      {/* Innovation Connection Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900 font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powered by <span className="text-blue-400">Innovation</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
              Our SaaS platforms are built on a world-class technology ecosystem.
              Discover the technical excellence and research that drives our cloud software success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/innovation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/20"
              >
                Visit Innovation Hub
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}