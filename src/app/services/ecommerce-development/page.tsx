import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.ecommerce.title,
  description: SEO_CONFIG.ecommerce.description,
  keywords: SEO_CONFIG.ecommerce.keywords,
  alternates: {
    canonical: SEO_CONFIG.ecommerce.canonical,
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

export default function EcommercePage() {
  const ecommerceFeatures = [
    {
      id: 'platform',
      title: "Custom E-commerce Platform Development",
      description: "Build powerful online stores with advanced features and seamless user experience:",
      features: [
        "Custom shopping cart development",
        "Product catalog management",
        "Advanced search & filtering",
        "Mobile-responsive design"
      ]
    },
    {
      id: 'payment',
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple payment options for global customers:",
      features: [
        "Multiple payment gateways",
        "Secure transaction processing",
        "International payment support",
        "PCI DSS compliance"
      ]
    },
    {
      id: 'inventory',
      title: "Inventory & Order Management",
      description: "Comprehensive management system for products, orders, and customer relationships:",
      features: [
        "Real-time inventory tracking",
        "Order processing automation",
        "Customer management system",
        "Analytics & reporting"
      ]
    },
    {
      id: 'marketing',
      title: "Marketing & SEO Tools",
      description: "Built-in marketing features to drive traffic and increase conversions:",
      features: [
        "SEO optimization tools",
        "Email marketing integration",
        "Discount & coupon system",
        "Social media integration"
      ]
    }
  ];

  const processSteps = [
    { icon: "Search", title: "Business Analysis", description: "Analyze your business model, target audience, and e-commerce requirements." },
    { icon: "FileText", title: "Platform Design", description: "Create user-friendly designs and wireframes for optimal shopping experience." },
    { icon: "Users", title: "Development & Integration", description: "Build your e-commerce platform with payment gateways and third-party integrations." },
    { icon: "Phone", title: "Launch & Optimization", description: "Deploy your store and provide ongoing optimization and marketing support." }
  ];

  const ecommerceFaqs = [
    {
      question: "Which e-commerce platform should I choose (Shopify, Magento, or Custom)?",
      answer: "We analyze your SKU count, transaction volume, and customization needs. Shopify is great for fast launches, Magento for heavy enterprise catalogs, and Custom (React/Next.js) for unique brand experiences with peak performance."
    },
    {
      question: "How do you ensure the security of online payments?",
      answer: "We implement PCI DSS compliant architectures, integration with secure gateways like Stripe/PayPal, and point-to-point encryption to ensure sensitive financial data never hits your servers directly."
    },
    {
      question: "Can you help migrate my existing store from another platform?",
      answer: "Yes, we specialize in seamless data migration, ensuring all your products, customer records, and order history are transferred with 100% integrity while maintaining your SEO rankings."
    },
    {
      question: "Do you provide inventory management and shipping integration?",
      answer: "Absolutely. We integrate with major ERPs, WMS, and shipping carriers (FedEx, UPS, DHL) to automate your entire fulfillment workflow from order placement to final delivery."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceHero
        title="E-commerce Website"
        subtitle=" Development"
        description="Create powerful online stores that drive sales and grow your business. We build custom e-commerce solutions with advanced features and seamless user experiences."
        imagePath="/service/ecom.jpg"
        imageAlt="E-commerce Development - Online Store Solutions"
        tags={["#Online Store", "#Payment Gateway", "#Shopping Cart", "#Mobile Commerce", "#SEO Ready"]}
      />
      <PartnersMarquee />
      <DynamicFeatures title="E-commerce Development" highlightText="Services" features={ecommerceFeatures} />
      <ServiceStats />
      <ServiceProcess title="Our E-commerce Process" subtitle="A comprehensive approach to building successful online stores that convert visitors into customers." steps={processSteps} />
      <ServiceFAQ items={ecommerceFaqs} />

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
              Our e-commerce solutions are built on a world-class technology ecosystem.
              Discover the technical excellence and research that drives our digital commerce success.
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