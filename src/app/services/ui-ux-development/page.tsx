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
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import PartnersMarquee from "@/components/common/partners-marquee";

export default function UIUXDevelopmentPage() {
  const uiuxFeatures = [
    {
      id: 'research',
      title: "User Research & Analysis",
      description: "Deep understanding of your users to create intuitive and engaging experiences:",
      features: [
        "User persona development",
        "User journey mapping",
        "Competitive analysis",
        "Usability testing"
      ]
    },
    {
      id: 'design',
      title: "UI/UX Design & Prototyping",
      description: "Create beautiful, functional designs with interactive prototypes:",
      features: [
        "Wireframing & mockups",
        "Interactive prototypes",
        "Design system creation",
        "Responsive design"
      ]
    },
    {
      id: 'development',
      title: "Frontend Development",
      description: "Transform designs into pixel-perfect, interactive user interfaces:",
      features: [
        "HTML/CSS/JavaScript development",
        "React/Vue.js implementation",
        "Animation & micro-interactions",
        "Cross-browser compatibility"
      ]
    },
    {
      id: 'optimization',
      title: "UX Optimization & Testing",
      description: "Continuous improvement through testing and user feedback:",
      features: [
        "A/B testing implementation",
        "User feedback collection",
        "Performance optimization",
        "Accessibility compliance"
      ]
    }
  ];

  const processSteps = [
    { icon: "Search", title: "Discovery & Research", description: "Understand user needs, business goals, and design requirements through research." },
    { icon: "FileText", title: "Design & Prototype", description: "Create wireframes, mockups, and interactive prototypes for user validation." },
    { icon: "Users", title: "Development & Testing", description: "Build responsive interfaces with thorough testing across devices and browsers." },
    { icon: "Phone", title: "Launch & Optimize", description: "Deploy the interface and continuously optimize based on user feedback and analytics." }
  ];

  const uiuxFaqs = [
    {
      question: "How do you balance high-end aesthetics with fast performance?",
      answer: "We use a 'Performance-First' design methodology. We optimize all visual assets, use modern web frameworks like Next.js, and implement advanced animation techniques (like Framer Motion) that look premium but have minimal impact on load times."
    },
    {
      question: "Will you provide the design source files in Figma or Adobe XD?",
      answer: "We primarily work in Figma as it's the industry standard for collaborative design and seamless handoffs. You'll receive full access to organized Figma files with all components and style libraries."
    },
    {
      question: "Do you design for accessibility (WCAG compliance)?",
      answer: "Yes, accessibility is built into our core design process. We ensure high contrast ratios, screen-reader friendly structures, and keyboard navigation to ensure your product is usable by everyone, including people with disabilities."
    },
    {
      question: "Can you re-design an existing app without starting from scratch?",
      answer: "Absolutely. We can perform a 'UX Audit' of your current product to identify friction points and then focus on incremental, high-impact design improvements—a process we call 'Evolutionary Design'."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceHero
        title="UI/UX Development"
        subtitle=" Services"
        description="Create exceptional user experiences that delight customers and drive business results. We design and develop intuitive interfaces that users love to interact with."
        imagePath="/service/uiux.jpg"
        imageAlt="UI/UX Development - User Experience and Interface Design"
        tags={["#User Experience", "#Interface Design", "#Prototyping", "#Frontend Development", "#Usability Testing"]}
      />
      <PartnersMarquee />
      <DynamicFeatures title="UI/UX Development" highlightText="Services" features={uiuxFeatures} />
      <ServiceStats />
      <ServiceProcess title="Our UI/UX Process" subtitle="A user-centered approach to creating interfaces that are both beautiful and functional." steps={processSteps} />
      <ServiceFAQ items={uiuxFaqs} />

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
              Our design systems are built on a world-class technology ecosystem.
              Discover the technical excellence and research that drives our user experience success.
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