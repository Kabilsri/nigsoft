"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(51.43%_68.66%_at_47.01%_46.6%,#03008F_0%,#000839_100%)] py-20 lg:py-28">
      <div className="pointer-events-none absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-[#19A7FF]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-[#426CF4]/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-[26px] border-4 border-[rgba(111,156,255,0.2)] bg-gradient-to-r from-[#CBE3FA]/20 to-[#FCEEFF]/20 px-6 py-2 mb-8">
          <Sparkles className="h-5 w-5 text-[#FFD439]" />
          <span className="text-white text-base font-medium">
            Start Growing Today
          </span>
        </div>

        <h2 className="font-heading text-[32px] lg:text-[56px] font-bold text-white leading-tight max-w-4xl mx-auto">
          Ready to Scale Your Business with{" "}
          <span className="bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent italic">
            GrowSuite?
          </span>
        </h2>

        <p className="mt-6 text-lg lg:text-xl text-[#A8B8FF] max-w-2xl mx-auto leading-relaxed">
          Join thousands of businesses already growing faster with our all-in-one growth automation platform. Start your free trial today—no credit card required.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="group h-[52px] w-full rounded-[12px] bg-white px-8 text-base font-semibold text-[#195AFF] hover:bg-white/90 sm:w-auto">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button className="h-[52px] w-full rounded-[12px] border-2 border-[#6F9CFF] bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 sm:w-auto">
            Schedule Demo
          </Button>
        </div>

        <p className="mt-6 text-sm text-[#A8B8FF]">
          ✓ 14-day free trial &nbsp;•&nbsp; ✓ No credit card required &nbsp;•&nbsp; ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default ProductCTA;
