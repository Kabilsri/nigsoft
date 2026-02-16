import type { Metadata } from "next";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/common/faq-section";
import ProductHeroStats from "@/components/lab/video";

import ProductHero from "@/components/hr/hero";
import StatsAndReviews from "@/components/dental/stats-and-reviews";
import ProductUseCases from "@/components/products/whatsease/product-use-cases";

import PartnersMarquee from "@/components/common/partners-marquee";

import FAQAccordion from "@/components/hr/faq";
import SolutionsGrid from "@/components/hr/solutioncard";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import TeamWithAppDownload from "@/components/common/team-section";
import Hr from "@/components/hr/hrtab";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.hr.title,
  description: SEO_CONFIG.hr.description,
  keywords: SEO_CONFIG.hr.keywords,
  alternates: {
    canonical: SEO_CONFIG.hr.canonical,
  },
};

const hrHeroStatsData = {
  title: {
    part1: "HR Management",
    part2: "System for",
    part3: "Modern Workforce"
  },
  description: "Transform your human resource operations with our comprehensive HR management system. Automate payroll processing, track employee performance, manage leave applications, and ensure compliance with labor regulations. Designed for businesses of all sizes to streamline HR workflows.",
  heroText: {
    line1: "HR - Smart",
    line2: "Workforce Made",
    line3: "Manageable"
  },
  personImage: "/images/hr-person.jpg",
  personAlt: "HR Professional"
};

const hrFAQs = [
  {
    question: "How does your HR management system handle employee data?",
    answer: "Our HR system securely manages employee profiles, attendance tracking, payroll processing, performance evaluations, and document management with role-based access controls and data encryption."
  },
  {
    question: "Can the system automate payroll calculations?",
    answer: "Yes, our HR software automatically calculates salaries, overtime, deductions, taxes, and benefits. It supports multiple pay structures and generates detailed payslips and tax reports."
  },
  {
    question: "Does it support remote employee management?",
    answer: "Absolutely! The system includes remote work tracking, virtual attendance, online leave applications, digital document sharing, and video conferencing integration for distributed teams."
  },
  {
    question: "Can employees access their information through self-service?",
    answer: "Yes, employees can access their profiles, view payslips, apply for leaves, update personal information, and track their performance through a secure employee self-service portal."
  },
  {
    question: "Is the system compliant with labor laws and regulations?",
    answer: "Our HR system is designed to comply with local labor laws, tax regulations, and employment standards. It includes automated compliance checks and generates required statutory reports."
  }
];

export default function WhatsEasePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductHero />
      {/* <ProductHeroStats
        title={hrHeroStatsData.title}
        description={hrHeroStatsData.description}
        heroText={hrHeroStatsData.heroText}
        personImage={hrHeroStatsData.personImage}
        personAlt={hrHeroStatsData.personAlt}
      /> */}
      <Hr />
      <SolutionsGrid />



      <TeamWithAppDownload
        playStoreUrl="https://play.google.com/store/apps/details?id=com.nigsoft.hrsystem"
        appleStoreUrl="https://apps.apple.com/in/app/n-g-hr/id6745580396"
        screenData={[
          {
            src: "/apps/hr1.jpeg",
            title: "Manage Employee Information",
            description: "user can see the complete employee information including personal details, job details, and contact information."
          },
          {
            src: "/apps/hr2.png",
            title: "Create Employee Profile with Face Lock Authentication",
            description: "Create a new employee profile by capturing face lock and entering basic employee details securely."
          },
          {
            src: "/apps/hr3.png",
            title: "Attendance Tracking",
            description: "Real-time attendance monitoring and leave management."
          }
        ]}
        titlePre="HR Management"
        titleHighlight="Whenever You Need"
        description="Handle payroll, attendance, and employee requests efficiently with our mobile HR system. Empower your workforce with self-service tools."
      />
      <FAQSection

        subtitle="Learn about our comprehensive human resource management features."
        faqs={hrFAQs}
      />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
