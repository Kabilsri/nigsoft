import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.home.title,
  description: SEO_CONFIG.home.description,
  keywords: SEO_CONFIG.home.keywords,
  alternates: {
    canonical: SEO_CONFIG.home.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import HeroSection from "@/components/common/hero";
import PartnersMarquee from "@/components/common/partners-marquee";
import DashboardPreview from "@/components/common/dashboard-preview";
import FeaturesShowcase from "@/components/common/features-showcase";
import IndexFeatures from "@/components/common/indexfeatures";
import IndexFeatures2 from "@/components/common/indexfeatures2";
import IndexFeatures3 from "@/components/common/indexfeatures3";
import StatsSection from "@/components/common/numbers";
import Testimonials from "@/components/common/testimonials";
import TechnologyStack from "@/components/common/technology-stack";
import FaqSection from "@/components/common/faq";
import Footer from "@/components/layout/footer";

import WhatsAppButton from "@/components/layout/whatsapp-button";
import Apps from "@/components/common/app";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PartnersMarquee />
      <DashboardPreview />
      <StatsSection />
      <IndexFeatures2 id="indexfeatures2" />
      
      <IndexFeatures />
      {/* <FeaturesShowcase /> */}
      
      
      
      
      
     
      {/* <IndexFeatures3 /> */}
      
      <Apps />
      
      <Testimonials />
      {/* <TechnologyStack /> */}
      <FaqSection />
   
      <Footer />
      <WhatsAppButton />
    </main>
  );
}