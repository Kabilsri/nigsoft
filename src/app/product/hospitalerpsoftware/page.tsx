import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.hospital.title,
  description: SEO_CONFIG.hospital.description,
  keywords: SEO_CONFIG.hospital.keywords,
  alternates: {
    canonical: SEO_CONFIG.hospital.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import WhatCanWeBuild from "@/components/common/what-can-we-build";
import SmartAlternative from "@/components/common/smart-alternative";
import PortfolioProjects from "@/components/common/portfolio-projects";
import TeamSection from "@/components/common/team-section";
import FAQSection from "@/components/common/faq-section";
import ProductHeroStats from "@/components/lab/video";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import PartnersMarquee from "@/components/common/partners-marquee";
import TeamWithAppDownload from "@/components/common/team-section1";
import HeroSection2 from "@/components/common/hospitalhero";
import { Activity, Layers, Settings } from "lucide-react";
import HospitalManagement from "@/components/common/hospitaltab";

const hospitalManagementData = {
  title: {
    part1: "Hospital & Clinic",
    part2: "Management",
    part3: "Software Solutions"
  },
  description: "Designed for hospitals and doctors who own a clinic, providing a digital environment with futuristic technologies where you can complete multiple tasks in minutes. Document your day-to-day activities with ease.",
  heroText: {
    line1: "Premium Care",
    line2: "Smart Work",
    line3: "Atmosphere"
  },
  personImage: "/icons/hospital.png",
  personAlt: "Healthcare Professional"
};

const hospitalSolutions = [
  {
    id: "clinical",
    title: "Clinical Care",
    icon: <Activity className="w-6 h-6" />,
    image: '/service/ai.jpg',
    description: "Unified patient details and digital prescriptions for a smarter clinical experience.",
    color: "from-blue-600 to-indigo-600",
    content: [
      "Patient History & Record Database",
      "Digital Prescription Creation",
      "Multiple Document Formats",
      "Follow-up SMS Engagement",
    ],
  },
  {
    id: "operations",
    title: "Smart Operations",
    icon: <Layers className="w-6 h-6" />,
    image: '/icons/hr.png',
    description: "Eliminate paperwork with digital scheduling and secure accounting systems.",
    color: "from-violet-600 to-purple-600",
    content: [
      "Digital Appointment Calendar",
      "Online Payment Integration",
      "Staff Attendance & Salary",
      "Automated Activity Documentation",
    ],
  },
  {
    id: "security",
    title: "Enterprise Security",
    icon: <Settings className="w-6 h-6" />,
    image: '/icons/hr.png',
    description: "Cloud-based zero maintenance architecture with world-class data encryption.",
    color: "from-sky-500 to-blue-700",
    content: [
      "Encrypted Cloud Server Storage",
      "Zero Maintenance Online Support",
      "Hacker-proof Data Credentials",
      "Privacy-first Data Policy",
    ],
  },
];

const hospitalManagementFAQs = [
  {
    question: "Is it affordable?",
    answer: "Yes! Our online product is entirely safe. All your data and credentials are always secure with us in our encrypted cloud servers; you will never be hacked."
  },
  {
    question: "Is NIGSOFT online product safe to use?",
    answer: "Yes! Our online product is entirely safe. All your data and credentials are always secure with us in our encrypted cloud servers; you will never be hacked."
  },
  {
    question: "Can I get training on how to use the system during the trial?",
    answer: "Yes. Training is available during the free trial which is completely free of cost."
  },
  {
    question: "How can I contact support about my issues?",
    answer: "You can contact our tech support through call, WhatsApp, email, or chat. Phone: +91 73396 30007 (Call/WhatsApp) Email: support@nigsoft.com"
  }
];

export default function HospitalManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection2 />
      {/* <ProductHeroStats
        title={hospitalManagementData.title}
        description={hospitalManagementData.description}
        heroText={hospitalManagementData.heroText}
        personImage={hospitalManagementData.personImage}
        personAlt={hospitalManagementData.personAlt}
      /> */}
      {/* <WhatCanWeBuild
        title="What"
        titleHighlight="Features"
        subtitle="Transform your healthcare facility with these core digital capabilities designed for efficiency and safety."
        solutions={hospitalSolutions}
      /> */}
      <HospitalManagement />
      <SmartAlternative />

      <TeamWithAppDownload
        playStoreUrl="https://play.google.com/store/apps/details?id=com.nigsoft.nigdoc"
        appleStoreUrl="https://apps.apple.com/in/app/nigdoc/id6448020279"
        screenData={[
          {
            src: "/apps/nigdoc.png",
            title: "Treatment & Care Instructions",
            description: "Medicine selection with dietary advice, investigations, and follow-up instructions for the patient."
          },
          {
            src: "/apps/nigdoc2.png",
            title: "Patient Dashboard & Medical Report",
            description: "Complete patient details with prescription history and downloadable report"
          },
          {
            src: "/apps/nigdoc3.png",
            title: "Clinical Assessment Screen",
            description: "Quick selection of symptoms and diagnoses for consultation"
          }
        ]}
        titlePre="Hospital Operations"
        titleHighlight="Tablet Simplified"
        description="Empower your medical staff with real-time access to patient data and hospital workflows. Critical healthcare management in your pocket."
      />
      <FAQSection
        subtitle="Common questions about our hospital and clinic management software solution."
        faqs={hospitalManagementFAQs}
      />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}