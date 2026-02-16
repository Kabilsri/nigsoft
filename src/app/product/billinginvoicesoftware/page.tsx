import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.bills.title,
  description: SEO_CONFIG.bills.description,
  keywords: SEO_CONFIG.bills.keywords,
  alternates: {
    canonical: SEO_CONFIG.bills.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import FAQSection from "@/components/common/faq-section";
import ProductHeroStats from "@/components/lab/video";
import BillsHero from "@/components/bills/hero";

import ServiceProcess from "@/components/services/service-process";
import BillingFeaturesSection from "@/components/bills/billing-features";
import BillingFeaturesSection2 from "@/components/bills/billing-features2";

import TeamWithAppDownload from "@/components/common/team-section";
import Billstab from "@/components/bills/billstab";

import WhatCanWeBuild from "@/components/common/what-can-we-build";
import { Search, FileText, Users, Phone, Settings, CreditCard, PieChart, ShieldCheck } from 'lucide-react';


const billsHeroStatsData = {
  title: {
    part1: "Automated Billing",
    part2: "Solution for",
    part3: "Modern Businesses"
  },
  description: "Scale your revenue collection with Nigsoft's intelligent billing system. From automated recurring invoices to real-time expense tracking, we provide everything you need to manage your business finances seamlessly.",
  heroText: {
    line1: "Smart",
    line2: "Billing Made",
    line3: "Effortless"
  },
  personImage: "/images/nigbill1.png",
  personAlt: "Billing Professional"
};

const billsFAQs = [
  {
    question: "How does your billing management system work?",
    answer: "Our billing system automates invoice generation, payment tracking, tax calculations, and financial reporting. It integrates with multiple payment gateways and provides real-time billing analytics."
  },
  {
    question: "Can I customize invoice templates and formats?",
    answer: "Yes, our system offers fully customizable invoice templates with your branding, multiple currency support, and various format options including PDF, email, and print-ready formats."
  },
  {
    question: "Does the system handle recurring billing automatically?",
    answer: "Absolutely! Set up recurring billing cycles for subscriptions, memberships, or regular services. The system automatically generates and sends invoices based on your configured schedules."
  },
  {
    question: "Can I track payment status and send reminders?",
    answer: "Yes, our billing system tracks all payment statuses in real-time and automatically sends payment reminders via email or SMS. You can customize reminder schedules and messages."
  },
  {
    question: "Is the billing data secure and compliant?",
    answer: "Our billing system uses bank-level encryption, PCI DSS compliance for payment processing, and secure data storage. All financial data is protected with multiple security layers."
  }
];

export default function BillsPage() {
  const processSteps = [
    { icon: "Search", title: "Invoice Generation", description: "Quickly create professional invoices with automated tax calculations and custom branding." },
    { icon: "FileText", title: "Automated Reminders", description: "Schedule automatic payment reminders for overdue invoices to ensure timely collections." },
    { icon: "Users", title: "Online Payments", description: "Accept payments via credit cards, UPI, and bank transfers through secure integrations." },
    { icon: "Phone", title: "Financial Reporting", description: "Get real-time insights into your revenue, outstanding bills, and financial health." }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BillsHero />
      {/* <ProductHeroStats
        title={billsHeroStatsData.title}
        description={billsHeroStatsData.description}
        heroText={billsHeroStatsData.heroText}
        personImage={billsHeroStatsData.personImage}
        personAlt={billsHeroStatsData.personAlt}
      /> */}
      <Billstab />
      <BillingFeaturesSection />
      {/* <BillingFeaturesSection2 /> */}



      <TeamWithAppDownload
        playStoreUrl="https://play.google.com/store/apps/details?id=com.nigsoft.nigbills"
        appleStoreUrl="https://apps.apple.com/in/app/nigbills/id6476491477"
        screenData={[
          {
            src: "/apps/nigbill1.png",
            title: "Smart Billing Made Simple",
            description: "Create customer bills instantly with an intuitive interface. Add customers, select items, auto-calculate totals, and generate bills in just a few taps—fast, accurate, and hassle-free."
          },
          {
            src: "/apps/nigbill2.png",
            title: "Your Entire Business at a Glance",
            description: "Track receivables, payables, sales, purchases, and product performance—all in one clean dashboard. Stay informed with real-time financial insights that help you make smarter business decisions."
          },
          {
            src: "/apps/nigbill3.png",
            title: "Seamless Billing Management",
            description: "Quickly access billing, quotations, inventory, stock, sales, and settings with a structured, professional menu layout. Manage your entire store effortlessly from one centralized place."
          }
        ]}
        titlePre="Smart Billing"
        titleHighlight="On the Go"
        description="Create professional invoices, track expenses, and manage finances effortlessly from your phone. Run your business from anywhere."
      />
      <FAQSection

        subtitle="Everything you need to know about our billing and invoice management system."
        faqs={billsFAQs}
      />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}