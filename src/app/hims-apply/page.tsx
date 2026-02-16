import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.hims_apply.title,
  description: SEO_CONFIG.hims_apply.description,
  keywords: SEO_CONFIG.hims_apply.keywords,
  alternates: {
    canonical: SEO_CONFIG.hims_apply.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import HIMSApplyForm from "@/components/forms/hims-apply-form";

export default function HIMSApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
      <Navigation />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Limited Seats Available</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              Apply for <span className="text-blue-600 italic">HIMS Certification</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
              Join the next generation of AI-enabled healthcare professionals. Fill out the form below to secure your spot in the upcoming cohort.
            </p>
          </div>

          <div className="relative">
            <HIMSApplyForm />
          </div>

          {/* Trust Factors */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto text-center opacity-70">
            <div className="space-y-1 group">
              <p className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">30</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Days Program</p>
            </div>
            <div className="space-y-1 group">
              <p className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">1hr</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Daily Sessions</p>
            </div>
            <div className="space-y-1 group">
              <p className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">Live</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Zoom Classes</p>
            </div>
            <div className="space-y-1 group">
              <p className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">30</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Practical Tasks</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
