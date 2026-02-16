import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.schedule_call.title,
  description: SEO_CONFIG.schedule_call.description,
  keywords: SEO_CONFIG.schedule_call.keywords,
  alternates: {
    canonical: SEO_CONFIG.schedule_call.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import ScheduleCallForm from "@/components/forms/schedule-call-form";

export default function ScheduleCallPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
      <Navigation />

      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-red-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-rose-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-100 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-black text-slate-900 uppercase tracking-widest">All Your Questions, Answered</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              Schedule a <span className="text-red-600 italic">Strategic</span> Consultation
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
              Join a dedicated session with our solutions architects to map out your
              digital growth strategy and unlock operational excellence.
            </p>
          </div>

          <div className="relative">
            <ScheduleCallForm />
          </div>

          {/* Trust Factors */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center opacity-60">
            <div className="space-y-1">
              <p className="text-2xl font-black text-slate-900">15m</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Rapid Response</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-black text-slate-900">24/7</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Support</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-black text-slate-900">10k+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Deployments</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-black text-slate-900">100%</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Secure</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
