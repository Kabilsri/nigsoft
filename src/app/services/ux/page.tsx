import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.ui_ux.title,
  description: SEO_CONFIG.ui_ux.description,
  keywords: SEO_CONFIG.ui_ux.keywords,
  alternates: {
    canonical: SEO_CONFIG.ui_ux.canonical,
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

export default function UXPage() {
  const uxFeatures = [
    {
      id: 'research',
      title: "User Research & Analysis",
      description: "Deep understanding of your users through comprehensive research:",
      features: [
        "User interviews & surveys",
        "Competitor analysis",
        "User persona development",
        "Journey mapping"
      ]
    },
    {
      id: 'wireframing',
      title: "Wireframing & Prototyping",
      description: "Visual blueprints and interactive prototypes for better user experience:",
      features: [
        "Low & high-fidelity wireframes",
        "Interactive prototypes",
        "User flow diagrams",
        "Information architecture"
      ]
    },
    {
      id: 'testing',
      title: "Usability Testing & Optimization",
      description: "Validate designs through user testing and continuous improvement:",
      features: [
        "A/B testing & analytics",
        "User testing sessions",
        "Heatmap analysis",
        "Conversion optimization"
      ]
    },
    {
      id: 'design',
      title: "UI Design & Visual Identity",
      description: "Beautiful, functional interfaces that align with your brand:",
      features: [
        "Modern UI design",
        "Design system creation",
        "Responsive layouts",
        "Accessibility compliance"
      ]
    }
  ];

  const processSteps = [
    {
      icon: "Search",
      title: "Discovery & Research",
      description: "Understand your users, business goals, and market requirements through comprehensive research."
    },
    {
      icon: "FileText",
      title: "Design & Prototype",
      description: "Create wireframes, prototypes, and visual designs based on research insights."
    },
    {
      icon: "Users",
      title: "Test & Validate",
      description: "Conduct user testing and gather feedback to validate and refine the design."
    },
    {
      icon: "Phone",
      title: "Implement & Optimize",
      description: "Support implementation and continuously optimize based on user behavior data."
    }
  ];

  const uxFaqs = [
    {
      question: "What is the difference between UI and UX design?",
      answer: "UX (User Experience) is the logic and research behind how a product works and how users feel. UI (User Interface) is the visual skin—the colors, icons, and layout that users interact with. We provide both to ensure beauty meets functionality."
    },
    {
      question: "How do you conduct user research?",
      answer: "We use a mix of qualitative and quantitative methods, including 1-on-1 stakeholder interviews, user testing sessions with clickable prototypes, heatmaps on existing apps, and competitor benchmarking."
    },
    {
      question: "Do you provide design systems for long-term scalability?",
      answer: "Yes, for larger products, we build comprehensive Design Systems (Figma libraries) with reusable components, typography scales, and color tokens, ensuring design consistency as your product grows."
    },
    {
      question: "How do design handoffs to developers work?",
      answer: "We provide developers with detailed specs in Figma, including layout grids, exportable assets, and CSS properties. We also remain available for design QA during the entire development phase to ensure pixel-perfect implementation."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <ServiceHero
        title="UX/UI Design"
        subtitle=" Services"
        description="Create exceptional user experiences that drive engagement and conversions. We design intuitive interfaces based on user research and best practices."
        imagePath="/service/uiux.jpg"
        imageAlt="UX/UI Design Services - User Experience and Interface Design"
        tags={["#User Research", "#UI Design", "#Prototyping", "#Usability Testing", "#User Experience"]}
      />
      <PartnersMarquee />

      <DynamicFeatures
        title="UX/UI Design"
        highlightText=" Services"
        features={uxFeatures}
      />
      <ServiceStats />
      <ServiceProcess
        title="Our UX Design Process"
        subtitle="A user-centered approach to creating interfaces that are both beautiful and functional, backed by research and testing."
        steps={processSteps}
      />
      <ServiceFAQ items={uxFaqs} />

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
              Our UX solutions are integrated into a world-class technology ecosystem.
              Discover the technical excellence and research that drives our design success.
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