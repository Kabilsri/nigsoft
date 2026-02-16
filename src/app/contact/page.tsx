import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.contact.title,
  description: SEO_CONFIG.contact.description,
  keywords: SEO_CONFIG.contact.keywords,
  alternates: {
    canonical: SEO_CONFIG.contact.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import ContactHero from "@/components/contact/contact-hero";
import ContactSection from "@/components/contact/contact-section";
import GlobalPresence from "@/components/contact/global-presence";
import ContactFAQ from "@/components/contact/contact-faq";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ContactHero />
      <ContactSection />
      <GlobalPresence />
      <ContactFAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}