import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.pharmacy.title,
  description: SEO_CONFIG.pharmacy.description,
  keywords: SEO_CONFIG.pharmacy.keywords,
  alternates: {
    canonical: SEO_CONFIG.pharmacy.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/common/faq-section";
import ProductHeroStats from "@/components/lab/video";

import Hero from "@/components/pharmacy/hero";
import ToolkitGrid from "@/components/pharmacy/toolkit-grid";

import WorkflowSteps from "@/components/pharmacy/workflow-steps";
import PricingSection from "@/components/pharmacy/pricing";
import Testimonials from "@/components/common/testimonials";
import FaqSection from "@/components/pharmacy/faq";
import CTABanner from "@/components/pharmacy/cta-banner";
import PartnersMarquee from "@/components/common/partners-marquee";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import TeamWithAppDownload from "@/components/common/team-section";
import LabManagement from "@/components/pharmacy/section";

const pharmacyHeroStatsData = {
  title: {
    part1: "Pharmacy Management",
    part2: "System for",
    part3: "Smart Billing"
  },
  description: "Transform your pharmacy operations with our comprehensive billing and inventory management system. Automate GST calculations, track medicine expiry dates, manage stock levels, and generate detailed reports. Our cloud-based solution helps pharmacies of all sizes increase efficiency, reduce errors, and boost profitability.",
  heroText: {
    line1: "Pharmacy - Smart",
    line2: "Billing Made",
    line3: "Simple"
  },
  personImage: "/images/nigmedi.png",
  personAlt: "Pharmacy Professional"
};

const pharmacyFAQs = [
  {
    question: "How does automated billing work in your pharmacy software?",
    answer: "Our system automatically calculates GST, applies discounts, manages inventory in real-time, and generates professional bills instantly. It reduces manual errors and speeds up the billing process by 3x."
  },
  {
    question: "Can I track medicine expiry dates and get alerts?",
    answer: "Yes, our software provides automated expiry date tracking with SMS and WhatsApp alerts. You'll receive notifications well in advance to prevent losses from expired medicines."
  },
  {
    question: "Is the software suitable for small pharmacy shops?",
    answer: "Absolutely! Our pharmacy management system is designed for pharmacies of all sizes. It's user-friendly, cost-effective, and helps small pharmacies compete with larger chains through better efficiency."
  },
  {
    question: "Do you provide training and support?",
    answer: "Yes, we provide comprehensive training for your staff and 24/7 technical support. Our team ensures smooth implementation and ongoing assistance whenever needed."
  },
  {
    question: "Can I generate profit & loss reports?",
    answer: "Yes, our system provides detailed analytics including profit & loss reports, sales trends, inventory turnover, and financial insights to help you make informed business decisions."
  }
];

export default function PharmacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      {/* <ProductHeroStats
        title={pharmacyHeroStatsData.title}
        description={pharmacyHeroStatsData.description}
        heroText={pharmacyHeroStatsData.heroText}
        personImage={pharmacyHeroStatsData.personImage}
        personAlt={pharmacyHeroStatsData.personAlt}
      /> */}
      <LabManagement />

      <ToolkitGrid />
      <WorkflowSteps />


      <TeamWithAppDownload
        playStoreUrl="https://play.google.com/store/apps/details?id=com.nig.nig_medi"
        appleStoreUrl="https://apps.apple.com/in/app/nigmedi/id6448725093"
        screenData={[
          {
            src: "/apps/nigmedi.png",
            title: "Purchase Order Upload",
            description: "Add supplier details, invoice data, and map product fields for accurate stock entry."
          },
          {
            src: "/apps/nigmedi2.png",
            title: "Online Orders Overview",
            description: "View order status, customer details, and fulfillment mode in one clean summary."
          },
          {
            src: "/apps/nigmedi3.png",
            title: "NigMedi Dashboard",
            description: "Quick access to sales, delivery, billing, and essential pharmacy services."
          }
        ]}
        titlePre="Pharmacy Sales"
        titleHighlight="From Anywhere"
        description="Manage inventory, sales, and billing for your pharmacy directly from your smartphone. Stay in control of your business on the move."
      />
      <FAQSection

        subtitle="Everything you need to know about our pharmacy billing and inventory system."
        faqs={pharmacyFAQs}
      />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
