import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.bloodbank.title,
  description: SEO_CONFIG.bloodbank.description,
  keywords: SEO_CONFIG.bloodbank.keywords,
  alternates: {
    canonical: SEO_CONFIG.bloodbank.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/common/faq-section";
import ProductHeroStats from "@/components/lab/video";

import ProductHero from "@/components/products/bloodbank/product-hero";
import ProductFeatures from "@/components/products/bloodbank/product-features";
import ProductBenefits from "@/components/products/bloodbank/product-benefits";
import ProductUseCases from "@/components/products/bloodbank/product-use-cases";
import ProductCTA from "@/components/products/bloodbank/product-cta";
import HeroSection from "@/components/products/bloodbank/growhero1";
import HRFeaturesSection from "@/components/products/bloodbank/grow2";
import CRMFeaturesSection from "@/components/products/bloodbank/grow3";
import VilvaGrowsuiteComponent from "@/components/products/bloodbank/grow4";
import PartnersMarquee from "@/components/common/partners-marquee";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import TeamWithAppDownload from "@/components/common/team-section";
import Bloodblank from "@/components/products/bloodbank/bloodbanktab";

const bloodBankHeroStatsData = {
  title: {
    part1: "Blood Bank",
    part2: "Management for",
    part3: "Safe Healthcare"
  },
  description: "Ensure blood safety and regulatory compliance with our comprehensive blood bank management system. Track donors, manage blood components, automate compatibility testing, and maintain complete traceability from donation to transfusion. Built to meet FDA and AABB standards.",
  heroText: {
    line1: "Blood Bank - Safe",
    line2: "Management for",
    line3: "Life Saving"
  },
  personImage: "/images/blood3.png",
  personAlt: "Blood Bank Professional"
};

const bloodBankFAQs = [
  {
    question: "How does your blood bank management system ensure safety?",
    answer: "Our system maintains complete traceability from donor to recipient, automated compatibility testing, expiry date tracking, and strict quality control protocols to ensure blood safety and regulatory compliance."
  },
  {
    question: "Can the system handle different blood components separately?",
    answer: "Yes, our software manages whole blood, plasma, platelets, and other blood components with separate inventory tracking, storage requirements, and expiry management for each component type."
  },
  {
    question: "Does it support donor management and scheduling?",
    answer: "Absolutely! The system includes comprehensive donor management with health screening, appointment scheduling, donation history, and automated reminders for eligible donors."
  },
  {
    question: "Is the system compliant with blood bank regulations?",
    answer: "Yes, our blood bank software is designed to meet FDA, AABB, and local regulatory requirements with built-in compliance checks, audit trails, and standardized reporting features."
  },
  {
    question: "Can hospitals directly request blood through the system?",
    answer: "Yes, hospitals can submit blood requests electronically, check availability in real-time, and receive automated notifications about order status and delivery schedules."
  }
];

export default function GrowSuitePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* <ProductHeroStats
        title={bloodBankHeroStatsData.title}
        description={bloodBankHeroStatsData.description}
        heroText={bloodBankHeroStatsData.heroText}
        personImage={bloodBankHeroStatsData.personImage}
        personAlt={bloodBankHeroStatsData.personAlt}
      /> */}
      <Bloodblank/>
      <HRFeaturesSection />
      {/* <CRMFeaturesSection /> */}

      <FAQSection

        subtitle="Essential information about our blood bank management system."
        faqs={bloodBankFAQs}
      />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
