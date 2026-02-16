import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.cms.title,
  description: SEO_CONFIG.cms.description,
  keywords: SEO_CONFIG.cms.keywords,
  alternates: {
    canonical: SEO_CONFIG.cms.canonical,
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

export default function CMSPage() {
  const cmsFeatures = [
    {
      id: 'custom-cms',
      title: "Custom CMS Development",
      description: "Build tailored content management systems that fit your specific business needs:",
      features: [
        "User-friendly admin interface",
        "Custom content types & fields",
        "Role-based access control",
        "Multi-language support"
      ]
    },
    {
      id: 'wordpress',
      title: "WordPress Solutions",
      description: "Professional WordPress development with custom themes and plugins:",
      features: [
        "Custom theme development",
        "Plugin customization",
        "E-commerce integration",
        "Performance optimization"
      ]
    },
    {
      id: 'headless-cms',
      title: "Headless CMS Solutions",
      description: "Modern headless CMS architecture for flexible content delivery:",
      features: [
        "API-first approach",
        "Multi-channel publishing",
        "Scalable architecture",
        "Developer-friendly tools"
      ]
    },
    {
      id: 'migration',
      title: "CMS Migration & Upgrade",
      description: "Seamlessly migrate your existing content to modern CMS platforms:",
      features: [
        "Data migration services",
        "Platform upgrades",
        "Content preservation",
        "Minimal downtime"
      ]
    }
  ];

  const processSteps = [
    {
      icon: "Search",
      title: "Requirements Analysis",
      description: "Analyze your content management needs, user roles, and workflow requirements."
    },
    {
      icon: "FileText",
      title: "System Design",
      description: "Design the CMS architecture, user interface, and content structure."
    },
    {
      icon: "Users",
      title: "Development & Testing",
      description: "Build and test the CMS with your team to ensure it meets all requirements."
    },
    {
      icon: "Phone",
      title: "Training & Support",
      description: "Provide comprehensive training and ongoing support for your content team."
    }
  ];

  const cmsFaqs = [
    {
      question: "Can we migrate our content from an old proprietary CMS?",
      answer: "Yes, we build custom migration scripts that extract data from legacy systems and map it correctly to modern CMS architectures, ensuring no valuable content or metadata is lost in the process."
    },
    {
      question: "Will the CMS allow us to manage SEO meta tags internally?",
      answer: "Every CMS we build includes integrated SEO tools, allowing your editors to manage titles, meta descriptions, and alt-text without needing a developer, giving you full control over your search rankings."
    },
    {
      question: "How do you handle multi-language content?",
      answer: "We implement specialized localization modules that allow you to manage multiple language versions of a single page within the same interface, making global content updates quick and organized."
    },
    {
      question: "What happens if we need a new custom feature after launch?",
      answer: "Our CMS architectures are modular. We can build and integrate new custom blocks or features at any time without disrupting your existing content or operations."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <ServiceHero
        title="Content Management"
        subtitle=" Systems"
        description="Empower your team with intuitive content management solutions. We build custom CMS platforms that make content creation, editing, and publishing simple and efficient."
        imagePath="/service/cms.jpg"
        imageAlt="Content Management Systems - Custom CMS Solutions"
        tags={["#Custom CMS", "#WordPress", "#Headless CMS", "#Content Strategy", "#User Management"]}
      />
      <PartnersMarquee />

      <DynamicFeatures
        title="CMS Development"
        highlightText=" Services"
        features={cmsFeatures}
      />
      <ServiceStats />
      <ServiceProcess
        title="Our CMS Development Process"
        subtitle="A structured approach to building content management systems that empower your team and streamline your workflow."
        steps={processSteps}
      />
      <ServiceFAQ items={cmsFaqs} />

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
              Our content solutions are built on a world-class technology ecosystem.
              Discover the technical excellence and research that drives our digital content success.
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