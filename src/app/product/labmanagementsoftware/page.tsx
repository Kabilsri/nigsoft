import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.lab.title,
  description: SEO_CONFIG.lab.description,
  keywords: SEO_CONFIG.lab.keywords,
  alternates: {
    canonical: SEO_CONFIG.lab.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import LabHero from "@/components/lab/hero";
import PartnersMarquee from "@/components/common/partners-marquee";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import Reasoncard from "@/components/lab/features";
import FAQSection from "@/components/common/faq-section";
import ProductHeroStats from "@/components/lab/video";

import SocialMediaMarketing from "@/components/lab/section";
import TeamWithAppDownload from "@/components/common/team-section";
import Labhero1 from "@/components/lab/hero1";
import LabManagement from "@/components/lab/section";

const labHeroStatsData = {
  title: {
    part1: "Lab Management",
    part2: "Software for",
    part3: "Modern Diagnostics"
  },
  description: "Our Lab Management Software is designed to simplify and automate everyday operations of diagnostic labs and pathology centers. From patient registration and billing to report generation, customization, and secure data storage, the system helps labs work faster, reduce errors, and deliver reports with confidence. Being fully cloud-based, it allows access anytime, anywhere, across devices, while ensuring data security and zero maintenance overhead for the lab.",
  heroText: {
    line1: "Nigsoft - We are",
    line2: "Building the",
    line3: "Future"
  },
  personImage: "/images/niglab1.png",
  personAlt: "Lab Professional"
};

const labFAQs = [
  {
    question: "How secure is our lab data in your system?",
    answer: "All lab data is stored on military-grade encrypted cloud servers with 99.9% uptime guarantee. We follow HIPAA compliance and ensure complete data confidentiality with no third-party access."
  },
  {
    question: "Can I customize report formats for my lab?",
    answer: "Yes, our system offers fully customizable report formats. You can add your lab branding, reference ranges, custom notes, and generate professional reports in under 30 seconds."
  },
  {
    question: "Is the software accessible on mobile devices?",
    answer: "Absolutely! Our lab management system is fully responsive and works seamlessly on desktops, tablets, and mobile phones without any installations or complex setups."
  },
  {
    question: "Do you provide automated patient notifications?",
    answer: "Yes, we offer free SMS and WhatsApp alerts that automatically notify patients when their reports are ready, reducing manual follow-up calls and enhancing patient experience."
  },
  {
    question: "What about software maintenance and updates?",
    answer: "Being a cloud-based solution, there's zero maintenance required from your end. We handle all security updates, server maintenance, and feature upgrades automatically."
  }
];

export default function LabPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* <LabHero /> */}
      <Labhero1/>
      <LabManagement />
      <Reasoncard />
      {/* <ProductHeroStats
        title={labHeroStatsData.title}
        description={labHeroStatsData.description}
        heroText={labHeroStatsData.heroText}
        personImage={labHeroStatsData.personImage}
        personAlt={labHeroStatsData.personAlt}
      /> */}
      {/* <SocialMediaMarketing /> */}


      <TeamWithAppDownload
        playStoreUrl="https://play.google.com/store/apps/details?id=com.nigsoft.niglabs&hl=en"
        appleStoreUrl="https://apps.apple.com/in/app/niglabs/id6474894477"
        screenData={[
          {
            src: "/apps/niglab1.png",
            title: "New Bill Creation",
            description: "Manage patient details, referrals, and billing amounts with ease."
          },
          {
            src: "/apps/niglab2.png",
            title: "Daily Business Dashboard",
            description: "Track collections, bill counts, and patient activity with real-time insights."
          },
          {
            src: "/apps/niglab3.png",
            title: "Patient Appointment List",
            description: "View, filter, and manage appointments with status and visit details."
          }
        ]}
        titlePre="Lab Reports"
        titleHighlight="At Your Fingertips"
        description="Access diagnostic reports, manage samples, and track status instantly from your mobile device. Enhance patient trust with quick digital delivery."
      />
      <FAQSection

        subtitle="Common questions about our laboratory management system and features."
        faqs={labFAQs}
      />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}