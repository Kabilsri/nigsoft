import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.about.title,
  description: SEO_CONFIG.about.description,
  keywords: SEO_CONFIG.about.keywords,
  alternates: {
    canonical: SEO_CONFIG.about.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

// New Premium Components
import AboutHero from '@/components/about/AboutHero';
import AboutStory from "@/components/about/about-story";
import AboutMission from "@/components/about/about-mission";
import AboutStats from "@/components/about/about-stats";
import AboutCulture from "@/components/about/about-culture";
import AboutCTA from "@/components/about/about-cta";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      <Navigation />

      <AboutHero
        title="Pioneering the Future of Healthcare Innovation"
        description="NIGSoft is your dedicated healthcare technology partner. We specialize in digitizing medical management with tailored software solutions like Lab, Pharmacy, and Clinic management systems, empowering you to focus on patient care."
        secondaryText="Trusted by 20+ organizations"
      />

      <AboutStats />
      <AboutStory />
      <AboutMission />
      <AboutCulture />
      <AboutCTA />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}