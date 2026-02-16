import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.maintenance.title,
  description: SEO_CONFIG.maintenance.description,
  keywords: SEO_CONFIG.maintenance.keywords,
  alternates: {
    canonical: SEO_CONFIG.maintenance.canonical,
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
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import PartnersMarquee from "@/components/common/partners-marquee";

export default function WebsiteMaintenancePage() {
  const maintenanceFeatures = [
    {
      id: 'security',
      title: "Security & Updates Management",
      description: "Keep your website secure and up-to-date with regular maintenance:",
      features: [
        "Security patches & updates",
        "Malware scanning & removal",
        "SSL certificate management",
        "Backup & recovery services"
      ]
    },
    {
      id: 'performance',
      title: "Performance Optimization",
      description: "Ensure your website runs fast and efficiently with ongoing optimization:",
      features: [
        "Speed optimization",
        "Database cleanup & optimization",
        "Image compression & CDN",
        "Caching implementation"
      ]
    },
    {
      id: 'content',
      title: "Content & Feature Updates",
      description: "Regular content updates and new feature implementation:",
      features: [
        "Content updates & additions",
        "New feature development",
        "Design improvements",
        "Functionality enhancements"
      ]
    },
    {
      id: 'monitoring',
      title: "24/7 Monitoring & Support",
      description: "Continuous monitoring and immediate support when issues arise:",
      features: [
        "Uptime monitoring",
        "Error tracking & fixing",
        "Technical support",
        "Emergency response"
      ]
    }
  ];

  const processSteps = [
    { icon: "Search", title: "Website Audit", description: "Comprehensive analysis of your website's current state and maintenance needs." },
    { icon: "FileText", title: "Maintenance Plan", description: "Create customized maintenance schedule and priority task list." },
    { icon: "Users", title: "Regular Updates", description: "Implement scheduled updates, security patches, and performance improvements." },
    { icon: "Phone", title: "Ongoing Support", description: "Provide continuous monitoring, support, and emergency assistance." }
  ];

  const maintenanceFaqs = [
    {
      question: "Why do I need a maintenance plan if my website is working fine?",
      answer: "Websites are dynamic systems. Security vulnerabilities, browser updates, and plugin conflicts happen constantly. Proactive maintenance prevents small issues from becoming expensive downtime or security breaches."
    },
    {
      question: "How often do you perform security scans and backups?",
      answer: "We perform automated daily backups and real-time security monitoring. Deep security scans and manual audits for plugin/core updates are performed weekly to ensure your site stays in peak health."
    },
    {
      question: "What is your emergency response time for a site crash?",
      answer: "For clients on our maintenance plans, we guarantee a 2-hour response time for critical issues like site downtime. Our monitoring systems usually alert us to issues before you even notice them."
    },
    {
      question: "Can I use my maintenance hours for small design or content changes?",
      answer: "Yes, many of our plans include a specific number of 'Innovation Hours' each month that you can use for content updates, minor design tweaks, or new landing page creation."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceHero
        title="Website Maintenance"
        subtitle=" Services"
        description="Keep your website secure, fast, and up-to-date with our comprehensive maintenance services. We ensure your online presence remains reliable and performs optimally."
        imagePath="/service/maintain.jpg"
        imageAlt="Website Maintenance Services - Security and Performance"
        tags={["#Security Updates", "#Performance Optimization", "#24/7 Monitoring", "#Backup Services", "#Technical Support"]}
      />
      <PartnersMarquee />
      <DynamicFeatures title="Website Maintenance" highlightText="Services" features={maintenanceFeatures} />
      <ServiceStats />
      <ServiceProcess title="Our Maintenance Process" subtitle="A proactive approach to website maintenance that prevents issues and ensures optimal performance." steps={processSteps} />
      <ServiceFAQ items={maintenanceFaqs} />

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
              Our maintenance solutions are integrated into a world-class technology ecosystem.
              Discover the technical excellence and research that ensures your digital reliability.
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