import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.corporate_website.title,
  description: SEO_CONFIG.corporate_website.description,
  keywords: SEO_CONFIG.corporate_website.keywords,
  alternates: {
    canonical: SEO_CONFIG.corporate_website.canonical,
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

export default function CorporateWebsitePage() {
  const corporateFeatures = [
    {
      id: 'professional',
      title: "Professional Corporate Design",
      description: "Create impressive corporate websites that reflect your brand identity and values:",
      features: [
        "Custom brand-focused design",
        "Professional layouts & templates",
        "Corporate color schemes",
        "High-quality visual elements"
      ]
    },
    {
      id: 'content',
      title: "Content Management System",
      description: "Easy-to-use CMS for managing corporate content, news, and updates:",
      features: [
        "User-friendly admin panel",
        "Content scheduling & publishing",
        "Multi-user access levels",
        "SEO-optimized content structure"
      ]
    },
    {
      id: 'features',
      title: "Corporate Website Features",
      description: "Essential features for modern corporate websites and business presence:",
      features: [
        "About us & team pages",
        "Services & portfolio showcase",
        "Contact forms & location maps",
        "News & blog sections"
      ]
    },
    {
      id: 'performance',
      title: "Performance & Security",
      description: "Fast, secure, and reliable corporate websites with enterprise-grade features:",
      features: [
        "Fast loading speeds",
        "SSL security certificates",
        "Regular backups & updates",
        "Mobile-responsive design"
      ]
    }
  ];

  const processSteps = [
    {
      icon: "Search",
      title: "Discovery & Strategy",
      description: "Understanding your brand DNA, target audience, and business goals to define a strategic roadmap."
    },
    {
      icon: "Palette",
      title: "Design & Prototyping",
      description: "Crafting high-fidelity wireframes and visual designs that align perfectly with your corporate identity."
    },
    {
      icon: "Code",
      title: "Development & Content",
      description: "Building the robust site architecture and integrating compelling content with a user-friendly CMS."
    },
    {
      icon: "Rocket",
      title: "Launch & Maintenance",
      description: "Deploying your website and providing ongoing maintenance, security updates, and content support."
    }
  ];

  const corporateFaqs = [
    {
      question: "How long does it take to develop a corporate website?",
      answer: "A typical corporate website project takes between 6 to 10 weeks. This covers deep brand discovery, technical architecture, stakeholder reviews, and comprehensive quality assurance."
    },
    {
      question: "Will the website be easy for our internal team to manage?",
      answer: "Yes, we prioritize intuitive CMS setups (like custom WordPress or Sanity) that allow your PR, HR, and marketing teams to update news, careers, and leadership profiles without technical knowledge."
    },
    {
      question: "Do you provide copywriting and professional photography?",
      answer: "We offer full-service content creation including corporate storytelling, professional headshots, and onsite photography to ensure your digital presence matches your brand's physical stature."
    },
    {
      question: "How do you handle website security and regulatory compliance?",
      answer: "We implement enterprise-grade security headers, SSL, and ensuring GDPR/CCPA compliance. We also perform regular vulnerability scans and provide managed updates as part of our maintenance plans."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceHero
        title="Corporate Website"
        subtitle=" Development"
        description="Build professional corporate websites that establish credibility and showcase your business. We create impressive online presence that reflects your brand values and engages stakeholders."
        imagePath="/service/corporate.jpg"
        imageAlt="Corporate Website Development - Professional Business Websites"
        tags={["#Corporate Design", "#Brand Identity", "#CMS Integration", "#Professional Layout", "#Business Website"]}
      />
      <PartnersMarquee />
      <DynamicFeatures title="Corporate Website" highlightText="Development" features={corporateFeatures} />
      <ServiceStats />
      <ServiceProcess title="Our Corporate Development Process" subtitle="A professional approach to creating corporate websites that build trust and drive business growth." steps={processSteps} />
      <ServiceFAQ items={corporateFaqs} />

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
              Our corporate solutions are built on a world-class technology ecosystem.
              Discover the technical excellence and research that drives our business presence success.
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