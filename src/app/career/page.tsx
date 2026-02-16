import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.career.title,
  description: SEO_CONFIG.career.description,
  keywords: SEO_CONFIG.career.keywords,
  alternates: {
    canonical: SEO_CONFIG.career.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

import CareerHero from "@/components/career/herosection";
import JobListing from "@/components/career/job-listing";
import { JobProvider } from "@/contexts/job-context";
import WhatsAppButton from "@/components/layout/whatsapp-button";

export default function Career() {
  return (
    <JobProvider>
      <main className="min-h-screen">
        <Navigation />
        <CareerHero />
        <JobListing />
        <Footer />
        <WhatsAppButton />
      </main>
    </JobProvider>
  );
}