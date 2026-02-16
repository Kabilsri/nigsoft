import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.partner.title,
  description: SEO_CONFIG.partner.description,
  keywords: SEO_CONFIG.partner.keywords,
  alternates: {
    canonical: SEO_CONFIG.partner.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import PartnersMarquee from "@/components/common/partners-marquee";
import PartnerHero from "@/components/partners/partner-hero";
import PartnerBenefits from "@/components/partners/partner-benefits";
import PartnerTypes from "@/components/partners/partner-types";
import PartnerProcess from "@/components/partners/partner-process";

import WhatsAppButton from "@/components/layout/whatsapp-button";

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PartnerHero />
      <PartnersMarquee />
      <PartnerBenefits />
      <PartnerTypes />
      <PartnerProcess />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}