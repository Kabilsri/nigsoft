import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.project_development.title,
  description: SEO_CONFIG.project_development.description,
  keywords: SEO_CONFIG.project_development.keywords,
  alternates: {
    canonical: SEO_CONFIG.project_development.canonical,
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

export default function ProjectDevelopmentPage() {
  const projectFeatures = [
    {
      id: 'custom',
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs:",
      features: [
        "Custom application development",
        "Business process automation",
        "Legacy system modernization",
        "Third-party integrations"
      ]
    },
    {
      id: 'enterprise',
      title: "Enterprise Solutions",
      description: "Scalable enterprise-grade applications for large organizations:",
      features: [
        "ERP system development",
        "CRM solutions",
        "Workflow management systems",
        "Data analytics platforms"
      ]
    },
    {
      id: 'cloud',
      title: "Cloud-Native Development",
      description: "Modern cloud-based applications with scalability and reliability:",
      features: [
        "Microservices architecture",
        "Container deployment",
        "Auto-scaling solutions",
        "Cloud migration services"
      ]
    },
    {
      id: 'integration',
      title: "API & System Integration",
      description: "Seamless integration between different systems and platforms:",
      features: [
        "RESTful API development",
        "Third-party API integration",
        "Database synchronization",
        "Real-time data exchange"
      ]
    }
  ];

  const processSteps = [
    { icon: "Search", title: "Requirements Gathering", description: "Detailed analysis of your project requirements, goals, and technical specifications." },
    { icon: "FileText", title: "Solution Architecture", description: "Design comprehensive system architecture and technical documentation." },
    { icon: "Users", title: "Agile Development", description: "Iterative development with regular feedback and continuous improvement." },
    { icon: "Phone", title: "Deployment & Support", description: "Production deployment with ongoing maintenance and technical support." }
  ];

  const projectFaqs = [
    {
      question: "How do you handle project requirements that change mid-development?",
      answer: "We use an Agile Scrum methodology. We work in 2-week 'sprints', allowing us to re-evaluate priorities and incorporate your feedback or changing market needs every two weeks without derailing the entire project timeline."
    },
    {
      question: "Will I have a dedicated project manager or point of contact?",
      answer: "Yes, every custom project is assigned a dedicated Project Manager who acts as your primary liaison, coordinating between you and our engineering team to ensure clear communication and on-time delivery."
    },
    {
      question: "What technology stack do you recommend for large-scale enterprise projects?",
      answer: "For enterprise scale, we typically recommend robust, typed environments like TypeScript with Next.js or Go, backed by cloud-native PostgreSQL or MongoDB databases. However, we select the specific stack based on your unique performance and scalability requirements."
    },
    {
      question: "Do you provide post-launch support and feature enhancements?",
      answer: "Our relationship doesn't end at launch. We offer various tiered support models that include 24/7 monitoring, bug fixes, and a dedicated monthly budget of engineering hours for building new features as your platform grows."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceHero
        title="Custom Project"
        subtitle=" Development"
        description="Transform your ideas into powerful software solutions. We develop custom applications, enterprise systems, and digital platforms tailored to your specific business requirements."
        imagePath="/service/custom.jpg"
        imageAlt="Custom Project Development - Tailored Software Solutions"
        tags={["#Custom Software", "#Enterprise Solutions", "#Cloud Native", "#API Integration", "#Agile Development"]}
      />
      <PartnersMarquee />
      <DynamicFeatures title="Project Development" highlightText="Services" features={projectFeatures} />
      <ServiceStats />
      <ServiceProcess title="Our Development Process" subtitle="A systematic approach to delivering high-quality custom software solutions that meet your business objectives." steps={processSteps} />
      <ServiceFAQ items={projectFaqs} />

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
              Our development projects are built on a world-class technology ecosystem.
              Discover the technical excellence and research that drives our software success.
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