import type { Metadata } from 'next';
import { SEO_CONFIG } from '@/config/seo.config';

export const metadata: Metadata = {
  title: SEO_CONFIG.dental.title,
  description: SEO_CONFIG.dental.description,
  keywords: SEO_CONFIG.dental.keywords,
  alternates: {
    canonical: SEO_CONFIG.dental.canonical,
  },
};

import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import FAQSection from '@/components/common/faq-section';
import ProductHeroStats from '@/components/lab/video';
import HeroSection from '@/components/dental/hero';

import StatsAndReviews from '@/components/dental/stats-and-reviews';
import GrowthStory from '@/components/dental/growth-story';
import DomainCompliance from '@/components/dental/domain-compliance';



import WhatsAppButton from '@/components/layout/whatsapp-button';
import TeamWithAppDownload from '@/components/common/team-section';
import DentalManagement from '@/components/dental/dentaltab';
import PartnerTypes from '@/components/dental/dentalfeatures';

const dentalHeroStatsData = {
  title: {
    part1: "Dental Practice",
    part2: "Management for",
    part3: "Modern Dentistry"
  },
  description: "Streamline your dental practice with our comprehensive management system. Handle appointment scheduling, patient records, treatment planning, insurance claims, and billing all in one secure platform. Designed specifically for dental professionals to enhance patient care and practice efficiency.",
  heroText: {
    line1: "Dental - Smart",
    line2: "Practice Made",
    line3: "Efficient"
  },
  personImage: "/images/dental-person.jpg",
  personAlt: "Dental Professional"
};

const dentalFAQs = [
  {
    question: "How does your dental practice management software work?",
    answer: "Our dental software streamlines appointment scheduling, patient records, treatment planning, billing, and insurance claims processing. It's designed specifically for dental practices to improve efficiency and patient care."
  },
  {
    question: "Can I manage multiple dental clinics with one system?",
    answer: "Yes, our system supports multi-location management with centralized reporting, unified patient records, and location-specific scheduling while maintaining data security across all branches."
  },
  {
    question: "Does the system handle dental insurance claims?",
    answer: "Absolutely! Our software automates insurance verification, claim submission, and tracking. It supports major dental insurance providers and reduces claim processing time significantly."
  },
  {
    question: "Is patient data secure in your dental management system?",
    answer: "Yes, we ensure HIPAA compliance with encrypted data storage, secure user access controls, and regular security audits. Patient privacy and data protection are our top priorities."
  },
  {
    question: "Can patients book appointments online?",
    answer: "Yes, our system includes an online patient portal where patients can book appointments, view treatment history, make payments, and communicate with your dental practice 24/7."
  }
];

export default function DentalPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* <ProductHeroStats
        title={dentalHeroStatsData.title}
        description={dentalHeroStatsData.description}
        heroText={dentalHeroStatsData.heroText}
        personImage={dentalHeroStatsData.personImage}
        personAlt={dentalHeroStatsData.personAlt}
      /> */}
      <DentalManagement />
      
      <PartnerTypes />


      {/* <GrowthStory />
      <DomainCompliance /> */}



      <TeamWithAppDownload
        playStoreUrl="https://play.google.com/store/apps/details?id=com.nigdents.nigdent"
        appleStoreUrl="https://apps.apple.com/in/app/nigdents/id6503417106"
        screenData={[
          {
            src: "/apps/nigdent2.png",
            title: "Dental Chart & Treatment Planning",
            description: "This screen allows dentists to record chief complaints, select affected teeth, add diagnoses, and create plan-based or custom treatment workflows."
          },
          {
            src: "/apps/nigdent3.png",
            title: "Clinic Navigation Menu",
            description: "This side menu helps manage clinic operations, including appointments, patients, medical history, consent, billing, and utility settings."
          },
          {
            src: "/apps/nigdent1.png",
            title: "Clinic Dashboard",
            description: "This screen provides a summary of daily appointments, total patients, and highlights key clinic services for fast access."
          }
        ]}
        titlePre="Dental Practice"
        titleHighlight="In Your Pocket"
        description="Manage appointments, patient records, and treatment plans seamlessly. Keep your dental practice connected and efficient."
      />

      <FAQSection

        subtitle="Common questions about our dental practice management software."
        faqs={dentalFAQs}
      />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}