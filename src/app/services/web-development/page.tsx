import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.web_development.title,
  description: SEO_CONFIG.web_development.description,
  keywords: SEO_CONFIG.web_development.keywords,
  alternates: {
    canonical: SEO_CONFIG.web_development.canonical,
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
  ArrowRight
} from 'lucide-react';
import Link from "next/link";
import PartnersMarquee from "@/components/common/partners-marquee";

export default function WebDevelopmentPage() {
  const webFeatures = [
    {
      id: 'responsive',
      title: "Responsive Web Design & Development",
      description: "Create stunning, mobile-first websites that work perfectly across all devices and screen sizes:",
      features: [
        "Mobile-responsive design",
        "Cross-browser compatibility",
        "Fast loading speeds",
        "SEO-optimized structure"
      ]
    },
    {
      id: 'ecommerce',
      title: "E-commerce Solutions",
      description: "Build powerful online stores with secure payment processing and inventory management:",
      features: [
        "Custom shopping cart development",
        "Payment gateway integration",
        "Inventory management system",
        "Order tracking & analytics"
      ]
    },
    {
      id: 'cms',
      title: "Content Management Systems",
      description: "Easy-to-use CMS solutions that allow you to manage your website content effortlessly:",
      features: [
        "User-friendly admin panels",
        "Content scheduling & publishing",
        "Multi-user access control",
        "SEO content optimization"
      ]
    },
    {
      id: 'webapp',
      title: "Custom Web Applications",
      description: "Scalable web applications tailored to your specific business requirements:",
      features: [
        "Custom functionality development",
        "Database integration",
        "API development & integration",
        "Cloud deployment & hosting"
      ]
    }
  ];

  const processSteps = [
    {
      icon: "Search",
      title: "Requirements Gathering",
      description: "Collaborating to define technical requirements, user stories, and feature specifications for your project."
    },
    {
      icon: "Layout",
      title: "UI/UX Design",
      description: "Designing scalable system architecture and intuitive user interfaces for optimal user experience."
    },
    {
      icon: "Code2",
      title: "Full-Stack Development",
      description: "Writing clean, secure, and efficient code for both frontend interfaces and backend logic."
    },
    {
      icon: "Rocket",
      title: "Launch & Support",
      description: "Deploying your website and providing ongoing maintenance, updates, and technical support."
    }
  ];

  const webFaqs = [
    {
      question: "How long does it typically take to build a basic business website?",
      answer: "A standard business website usually takes 4-6 weeks from discovery to launch. This includes design, development, content integration, and final testing phases."
    },
    {
      question: "Will my website be mobile-friendly and SEO-optimized?",
      answer: "Absolutely. Every website we build is mobile-responsive by default and adheres to technical SEO best practices (speed, meta tags, schema) to ensure high visibility on search engines."
    },
    {
      question: "Can I update the content on my website myself?",
      answer: "Yes, we integrate user-friendly Content Management Systems (CMS) like WordPress or headless options like Sanity, giving your team full control over text, images, and blog posts."
    },
    {
      question: "Do you provide hosting and domain registration services?",
      answer: "We offer comprehensive hosting solutions on high-performance cloud infrastructure (AWS/Vercel) and can manage your domain registrations to provide a true one-stop-shop experience."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <ServiceHero
        title="Web Development"
        subtitle=" Services"
        description="Transform your digital presence with custom web solutions. We create responsive, fast, and user-friendly websites that drive business growth and engage your audience."
        imagePath="/service/web.jpg"
        imageAlt="Web Development Services - Responsive Design and Custom Solutions"
        tags={["#Responsive Design", "#E-commerce", "#CMS Development", "#Web Applications", "#SEO Optimization"]}
      />
      <PartnersMarquee />

      <DynamicFeatures
        title="Web Development"
        highlightText=" Services"
        features={webFeatures}
      />
      <ServiceStats />
      <ServiceProcess
        title="Our Development Process"
        subtitle="A systematic approach to creating exceptional web experiences that meet your business objectives and user needs."
        steps={processSteps}
      />
      <ServiceFAQ items={webFaqs} />

      {/* Innovation Connection Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900 font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powered by <span className="text-blue-400">Innovation</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
              Our web solutions are built on a world-class technology ecosystem.
              Discover the technical excellence and innovation that drives our development success.
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