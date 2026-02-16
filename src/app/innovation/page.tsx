import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
    title: "Innovation Hub | Healthcare Excellence | Nigsoft",
    description: "Explore the cutting-edge technology and research at Nigsoft's Innovation Hub. We are building the future of healthcare digital excellence.",
    keywords: ["Innovation", "Healthcare Tech", "R&D", "Nigsoft Hub"],
    alternates: {
        canonical: "https://www.nigsoft.com/innovation",
    },
};

import React from "react";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import InnovationHero from "@/components/innovation/innovation-hero";
import TechOrbit from "@/components/innovation/tech-orbit";
import InnovationGrid from "@/components/innovation/innovation-grid";
import InnovationStats from "@/components/innovation/innovation-stats";
import InnovationTimeline from "@/components/innovation/innovation-timeline";
import InnovationCTA from "@/components/innovation/innovation-cta";

export default function InnovationPage() {
    return (
        <main className="bg-[#020617] min-h-screen">
            <Navigation />

            <InnovationHero />
            <InnovationStats />
            <TechOrbit />
            <InnovationGrid />
            <InnovationTimeline />
            <InnovationCTA />

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
