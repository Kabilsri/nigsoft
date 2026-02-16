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
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import PartnersMarquee from "@/components/common/partners-marquee";

export default function CMSDevelopmentPage() {
  const cmsFeatures = [
    {
      id: 'custom',
      title: "Custom CMS Development",
      description: "Tailored content management systems designed for your specific workflow needs:",
      features: [
        "Custom admin interfaces",
        "Workflow-specific features",
        "User role management",
        "Content approval systems"
      ]
    },
    {
      id: 'popular',
      title: "Popular CMS Platforms",
      description: "Expert development and customization of leading CMS platforms:",
      features: [
        "WordPress development",
        "Drupal customization",
        "Joomla solutions",
        "Headless CMS integration"
      ]
    },
    {
      id: 'features',
      title: "Advanced CMS Features",
      description: "Powerful features to enhance content management and user experience:",
      features: [
        "Multi-language support",
        "SEO optimization tools",
        "Media management system",
        "Content scheduling & publishing"
      ]
    },
    {
      id: 'integration',
      title: "Third-Party Integrations",
      description: "Seamless integration with external tools and services:",
      features: [
        "E-commerce integration",
        "Social media connectivity",
        "Analytics & tracking",
        "Email marketing tools"
      ]
    }
  ];

  const processSteps = [
    { icon: "Search", title: "Content Strategy", description: "Analyze your content needs, user roles, and workflow requirements." },
    { icon: "FileText", title: "CMS Architecture", description: "Design custom CMS structure and user interface for optimal usability." },
    { icon: "Users", title: "Development & Testing", description: "Build and customize your CMS with thorough testing and user training." },
    { icon: "Phone", title: "Launch & Training", description: "Deploy your CMS and provide comprehensive user training and support." }
  ];

  const cmsFaqs = [
    {
      question: "What is a 'Headless CMS' and why should I consider it?",
      answer: "A Headless CMS separates your content from your front-end presentation. It allows you to manage content once and deliver it to websites, mobile apps, and even smart devices via APIs, providing maximum flexibility for future growth."
    },
    {
      question: "Can you customize WordPress to look and feel completely unique?",
      answer: "Yes, we don't use generic pre-made themes. We build custom themes from the ground up using advanced builders or custom code, ensuring your CMS-powered site is unique, fast, and secure."
    },
    {
      question: "How do you ensure our CMS doesn't get hacked?",
      answer: "We implement multi-layered security including regular patch management, secure API endpoints, two-factor authentication for admins, and web application firewalls (WAF) to protect against common attacks like brute-forcing and SQL injection."
    },
    {
      question: "Is training included for my content editors?",
      answer: "Absolutely. We provide tailored training sessions for your team, along with custom video tutorials and documentation specific to your setup, ensuring your staff can manage the site with confidence from day one."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceHero
        title="CMS Website"
        subtitle=" Development"
        description="Empower your team with powerful content management systems. We develop custom CMS solutions and customize popular platforms to streamline your content workflow."
        imagePath="/service/cms.jpg"
        imageAlt="CMS Development - Content Management System Solutions"
        tags={["#WordPress", "#Custom CMS", "#Drupal", "#Content Management", "#User-Friendly Admin"]}
      />
      <PartnersMarquee />
      <DynamicFeatures title="CMS Development" highlightText="Services" features={cmsFeatures} />
      <ServiceStats />
      <ServiceProcess title="Our CMS Development Process" subtitle="A user-focused approach to creating content management systems that simplify your workflow." steps={processSteps} />
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
              Our CMS solutions are built on a world-class technology ecosystem.
              Discover the technical excellence and research that drives our content management success.
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