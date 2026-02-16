import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.bpo.title,
  description: SEO_CONFIG.bpo.description,
  keywords: SEO_CONFIG.bpo.keywords,
  alternates: {
    canonical: SEO_CONFIG.bpo.canonical,
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

export default function BPOServicesPage() {
  const bpoFeatures = [
    {
      id: 'security',
      title: "Enterprise-Grade Data Security & Compliance",
      description: "We follow strict security protocols to protect your business data across all BPO operations:",
      features: [
        "ISO-aligned security practices",
        "End-to-end data encryption",
        "Role-based access control",
        "Zero unauthorized data sharing"
      ]
    },
    {
      id: 'operations',
      title: "Centralized Operations Management",
      description: "Monitor and manage all outsourcing activities from a single, powerful operations dashboard:",
      features: [
        "Real-time task & workload tracking",
        "Agent productivity monitoring",
        "Daily, weekly, and monthly performance reports",
        "Complete process visibility"
      ]
    },
    {
      id: 'process',
      title: "Customized Process Workflows",
      description: "Every business is different. We design BPO workflows tailored to your exact requirements:",
      features: [
        "Custom SOP-based execution",
        "Industry-specific process handling",
        "Scalable workflow design",
        "Continuous process optimization"
      ]
    },
    {
      id: 'scalability',
      title: "Scalable Teams On Demand",
      description: "Scale your operations up or down instantly without infrastructure or hiring challenges:",
      features: [
        "Flexible resource allocation",
        "Dedicated teams for each project",
        "Quick onboarding & ramp-up",
        "Cost-efficient scaling"
      ]
    },
    {
      id: 'communication',
      title: "Transparent Communication & Reporting",
      description: "Stay informed at every stage with structured communication and reporting systems:",
      features: [
        "Daily & weekly status reports",
        "Dedicated account managers",
        "Clear SLAs and KPIs",
        "Fast issue resolution"
      ]
    },
    {
      id: 'support',
      title: "24/7 Business Continuity Support",
      description: "Ensure uninterrupted operations with our always-on support infrastructure:",
      features: [
        "Round-the-clock service availability",
        "Business continuity planning",
        "Disaster recovery readiness",
        "Consistent service delivery"
      ]
    }
  ];


  const processSteps = [
    {
      icon: "Search",
      title: "Discovery & Analysis",
      description: "In-depth analysis of your current business processes to identify efficiency gaps and outsourcing opportunities."
    },
    {
      icon: "FileText",
      title: "Solution Design",
      description: "Customized workflow design ensuring seamless integration with your existing operations and technology stack."
    },
    {
      icon: "Users",
      title: "Team Onboarding",
      description: "Rigorous recruitment and training to deploy a dedicated team aligned with your brand values and goals."
    },
    {
      icon: "Phone",
      title: "Service Delivery",
      description: "Execute seamless service delivery with continuous monitoring and quality assurance protocols."
    }
  ];

  const bpoFaqs = [
    {
      question: "How do you manage data security for outsourced processes?",
      answer: "We use ISO-certified security frameworks, end-to-end encryption, and strictly controlled access environments to ensure your business data remains confidential and secure at all times."
    },
    {
      question: "What is your typical onboarding timeline for new BPO clients?",
      answer: "Our standardized 'Speed-to-Service' methodology allows us to fully train teams and integrate workflows within 2-4 weeks, depending on the complexity of the process being outsourced."
    },
    {
      question: "How do you ensure service quality in different time zones?",
      answer: "We operate 24/7 with 'Follow-the-Sun' support models. Our multi-shift operations ensure that your business processes are managed seamlessly, regardless of your local time zone."
    },
    {
      question: "Can you scale operations during peak demand periods?",
      answer: "Yes, our resource pool is highly flexible. We maintain 'ready-to-deploy' reserves that allow us to scale up your operations by up to 50% within 72 hours for seasonal surges."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <ServiceHero
        title="Professional BPO Services"
        subtitle=""
        description="Transform your business operations with our comprehensive Business Process Outsourcing services. We help companies streamline processes, reduce costs, and focus on core business activities."
        imagePath="/service/bpo.jpg"
        imageAlt="BPO Services - Business Process Outsourcing Solutions"
        tags={["#Data Entry", "#Customer Support", "#Back Office", "#Finance & Accounting", "#HR Services"]}
      />
      <PartnersMarquee />

      <DynamicFeatures
        title="BPO Services"
        highlightText="Features"
        features={bpoFeatures}
      />
      <ServiceStats />
      <ServiceProcess
        title="Our BPO Process"
        subtitle="A systematic approach to delivering exceptional business process outsourcing services that align with your business objectives."
        steps={processSteps}
      />
      <ServiceFAQ items={bpoFaqs} />

      {/* Innovation Connection Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900 font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Experience Our <span className="text-blue-400">Innovation Hub</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
              Our BPO services are powered by the same cutting-edge technology that defines our innovation landscape.
              Step into our R&D hub to see the future of digital excellence.
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