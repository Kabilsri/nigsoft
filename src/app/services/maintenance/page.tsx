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
import {
  Search,
  FileText,
  Users,
  Phone,
  ArrowRight
} from 'lucide-react';
import Link from "next/link";
import PartnersMarquee from "@/components/common/partners-marquee";

export default function MaintenancePage() {
  const maintenanceFeatures = [
    {
      id: 'website-maintenance',
      title: "Website Maintenance & Updates",
      description: "Keep your website running smoothly with regular maintenance and updates:",
      features: [
        "Security updates & patches",
        "Content updates & changes",
        "Performance optimization",
        "Bug fixes & troubleshooting"
      ]
    },
    {
      id: 'monitoring',
      title: "24/7 Website Monitoring",
      description: "Continuous monitoring to ensure your website is always available:",
      features: [
        "Uptime monitoring",
        "Performance tracking",
        "Security scanning",
        "Automated alerts"
      ]
    },
    {
      id: 'backup',
      title: "Backup & Recovery Services",
      description: "Protect your website data with automated backup solutions:",
      features: [
        "Daily automated backups",
        "Quick recovery options",
        "Data integrity checks",
        "Disaster recovery planning"
      ]
    },
    {
      id: 'support',
      title: "Technical Support & Assistance",
      description: "Expert technical support whenever you need it:",
      features: [
        "Priority support tickets",
        "Emergency response",
        "Technical consultations",
        "Training & documentation"
      ]
    }
  ];

  const processSteps = [
    {
      icon: "Search",
      title: "Site Assessment",
      description: "Comprehensive analysis of your website's current state and maintenance needs."
    },
    {
      icon: "FileText",
      title: "Maintenance Plan",
      description: "Create a customized maintenance schedule based on your requirements."
    },
    {
      icon: "Users",
      title: "Implementation",
      description: "Execute maintenance tasks with minimal disruption to your operations."
    },
    {
      icon: "Phone",
      title: "Ongoing Support",
      description: "Continuous monitoring and support to keep your website optimized."
    }
  ];

  const maintenanceFaqs = [
    {
      question: "Do you handle third-party plugin and theme updates?",
      answer: "Yes, we manage the entire update ecosystem. We test updates in a staging environment first to ensure they don't conflict with your theme or other plugins before deploying them to your live site."
    },
    {
      question: "How do you improve my website's loading speed?",
      answer: "Our maintenance involves regular database optimization, image compression, implementing advanced caching (like Redis/Cloudflare), and cleaning up bloated code that builds up over time."
    },
    {
      question: "Will my website go down while you perform maintenance?",
      answer: "Most maintenance tasks are performed without any downtime. For major updates, we use a 'Blue-Green' deployment strategy or perform work during your low-traffic hours to ensure zero impact on your users."
    },
    {
      question: "What happens if a plugin update breaks my site?",
      answer: "Since we perform regular daily backups, we can restore your site to its previous state within minutes. We then analyze the conflict and find a compatible version or alternative plugin to restore functionality safely."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <ServiceHero
        title="Website Maintenance"
        subtitle=" & Support"
        description="Keep your website secure, fast, and up-to-date with our comprehensive maintenance services. We handle all technical aspects so you can focus on your business."
        imagePath="/service/maintain.jpg"
        imageAlt="Website Maintenance - Ongoing Support and Updates"
        tags={["#Website Maintenance", "#24/7 Monitoring", "#Security Updates", "#Performance Optimization", "#Technical Support"]}
      />
      <PartnersMarquee />

      <DynamicFeatures
        title="Maintenance"
        highlightText=" Services"
        features={maintenanceFeatures}
      />
      <ServiceStats />
      <ServiceProcess
        title="Our Maintenance Process"
        subtitle="A systematic approach to keeping your website secure, fast, and reliable with proactive maintenance and support."
        steps={processSteps}
      />
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
              Our maintenance solutions are built on a world-class technology ecosystem.
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