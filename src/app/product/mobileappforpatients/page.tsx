import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.gellplus.title,
  description: SEO_CONFIG.gellplus.description,
  keywords: SEO_CONFIG.gellplus.keywords,
  alternates: {
    canonical: SEO_CONFIG.gellplus.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/common/faq-section";
import ProductHeroStats from "@/components/lab/video";

import Hero from "@/components/gell+/Hero";
import DashboardsOverview from "@/components/gell+/DashboardsOverview";
import GellPlusFeatures from "@/components/gell+/GellPlusFeatures";
import GellPlusLabPharmacy from "@/components/gell+/GellPlusLabPharmacy";

import FAQ from "@/components/gell+/FAQ";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import TeamWithAppDownload from "@/components/common/team-section";

const hospitalHeroStatsData = {
  title: {
    part1: "Hospital Management",
    part2: "System for",
    part3: "Healthcare Excellence"
  },
  description: "Revolutionize your healthcare facility with our comprehensive hospital management system. Streamline patient records, appointment scheduling, billing, and multi-department operations. Our HIPAA-compliant solution ensures data security while improving efficiency across all hospital workflows.",
  heroText: {
    line1: "Healthcare - Digital",
    line2: "Excellence in",
    line3: "Patient Care"
  },
  personImage: "/images/hospital-person.jpg",
  personAlt: "Healthcare Professional"
};

const hospitalFAQs = [
  {
    question: "How does your hospital management system handle patient records?",
    answer: "Our system provides comprehensive patient record management with secure digital storage, easy retrieval, appointment scheduling, and complete medical history tracking with HIPAA compliance."
  },
  {
    question: "Can multiple departments use the system simultaneously?",
    answer: "Yes, our hospital management software supports multi-department access with role-based permissions for doctors, nurses, admin staff, and management with real-time data synchronization."
  },
  {
    question: "Is the system suitable for small clinics and large hospitals?",
    answer: "Absolutely! Our scalable solution works for small clinics, nursing homes, and large multi-specialty hospitals. The system grows with your healthcare facility's needs."
  },
  {
    question: "How do you ensure data security and patient privacy?",
    answer: "We implement bank-level security with encrypted data storage, secure user authentication, audit trails, and full compliance with healthcare regulations like HIPAA and local privacy laws."
  },
  {
    question: "Do you provide integration with medical equipment?",
    answer: "Yes, our system can integrate with various medical devices, lab equipment, and third-party healthcare applications to create a seamless workflow across your hospital operations."
  }
];

export default function HospitalPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />

      {/* <DashboardsOverview /> */}
      <GellPlusFeatures />
      <GellPlusLabPharmacy />



      <TeamWithAppDownload
        playStoreUrl="https://play.google.com/store/apps/details?id=com.nigsoft.gellplus"
        appleStoreUrl="https://apps.apple.com/in/app/gell/id6446046928"
        screenData={[
          {
            src: "/apps/gell+6.png",
            title: "Lab Reports & Billing",
            description: "Real-time insights into hospital operations."
          },
          {
            src: "/apps/gell+4.png",
            title: "Pharmacy Integration",
            description: "Seamless medication management and dispensing."
          },
          {
            src: "/apps/gell+7.png",
            title: "Lab Management",
            description: "Efficient tracking of tests and reports."
          }
        ]}
        titlePre="Manage Your Hospital"
        titleHighlight="Anywhere, Anytime"
        description="Streamline patient care and hospital operations with our powerful mobile solution. Access critical data and manage workflows on the go."
      />
      <FAQSection

        subtitle="Learn more about our comprehensive hospital management system features."
        faqs={hospitalFAQs}
      />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}