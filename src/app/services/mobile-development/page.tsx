import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.tech_react.title,
  description: SEO_CONFIG.tech_react.description,
  keywords: SEO_CONFIG.tech_react.keywords,
  alternates: {
    canonical: SEO_CONFIG.tech_react.canonical,
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

export default function MobileDevelopmentPage() {
  const mobileFeatures = [
    {
      id: 'native',
      title: "Native Mobile App Development",
      description: "Build high-performance native apps for iOS and Android with platform-specific features:",
      features: [
        "iOS Swift development",
        "Android Kotlin development",
        "Platform-specific UI/UX",
        "Native device integration"
      ]
    },
    {
      id: 'crossplatform',
      title: "Cross-Platform Solutions",
      description: "Develop once, deploy everywhere with React Native and Flutter technologies:",
      features: [
        "React Native development",
        "Flutter app development",
        "Shared codebase efficiency",
        "Faster time-to-market"
      ]
    },
    {
      id: 'backend',
      title: "Mobile Backend Services",
      description: "Robust backend infrastructure to power your mobile applications:",
      features: [
        "API development & integration",
        "Cloud database solutions",
        "Push notification services",
        "User authentication systems"
      ]
    },
    {
      id: 'maintenance',
      title: "App Store Optimization & Maintenance",
      description: "Ensure your app succeeds in app stores with ongoing support and optimization:",
      features: [
        "App store submission",
        "Performance optimization",
        "Regular updates & patches",
        "Analytics & monitoring"
      ]
    }
  ];

  const processSteps = [
    {
      icon: "Search",
      title: "Strategy & Research",
      description: "Define app objectives, target audience, and technical requirements for optimal user experience."
    },
    {
      icon: "FileText",
      title: "UI/UX Design",
      description: "Create intuitive, engaging mobile interfaces with wireframes, prototypes, and user testing."
    },
    {
      icon: "Users",
      title: "Development & Integration",
      description: "Build your mobile app with clean code, third-party integrations, and rigorous testing."
    },
    {
      icon: "Phone",
      title: "Deployment & Support",
      description: "Launch your app on app stores and provide ongoing maintenance and feature updates."
    }
  ];

  const mobileFaqs = [
    {
      question: "Should I build a native app or a cross-platform (React Native/Flutter) app?",
      answer: "This depends on your complexity and performance needs. Native apps offer peak performance for heavy graphics or complex processing, while cross-platform apps can save up to 40% in development costs and get you to both iOS and Android stores faster."
    },
    {
      question: "How do you handle App Store (Apple) and Play Store (Google) submissions?",
      answer: "We handle the entire end-to-end submission process, including metadata optimization, screenshot generation, and addressing any feedback from store reviewers to ensure a smooth launch."
    },
    {
      question: "Will you provide support for OS updates (like new iOS versions)?",
      answer: "Yes, we offer ongoing maintenance plans specifically designed to keep your app compatible with the latest OS releases, ensuring it doesn't break when users update their phones."
    },
    {
      question: "Can my app function offline?",
      answer: "Absolutely. We implement robust local data caching and synchronization logic that allows users to access key features without an internet connection, with data syncing once they're back online."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <ServiceHero
        title="Mobile App Development"
        subtitle="Solutions"
        description="Create powerful mobile applications that engage users and drive business growth. We develop native and cross-platform apps with exceptional user experiences."
        imagePath="/service/app.jpg"
        imageAlt="Mobile App Development - iOS and Android Solutions"
        tags={["#iOS Development", "#Android Apps", "#React Native", "#Flutter", "#App Store"]}
      />
      <PartnersMarquee />

      <DynamicFeatures
        title="Mobile Development"
        highlightText=" Services"
        features={mobileFeatures}
      />
      <ServiceStats />
      <ServiceProcess
        title="Our Mobile Development Process"
        subtitle="A comprehensive approach to building mobile applications that users love and businesses rely on."
        steps={processSteps}
      />
      <ServiceFAQ items={mobileFaqs} />

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
              Our mobile solutions are integrated into a world-class technology ecosystem.
              Discover the technical excellence and research that drives our application success.
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