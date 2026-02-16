"use client";

import { ArrowRight } from "lucide-react";

export const ProductHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#EFF4FF] via-white to-[#EFF4FF] pt-32 pb-20 overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#195AFF]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#FF7A00]/10 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-4 border-[#DFEAFf]/40 bg-gradient-to-r from-[#CBE3FA] to-[#FCEEFF] mb-6">
            <span className="text-[16px] font-medium bg-gradient-to-r from-[#19A7FF] to-[#426CF4] bg-clip-text text-transparent">
              All-in-One Business Platform
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-[42px] md:text-[68px] font-extrabold leading-[1.2] text-[#090D28] mb-6">
            <span className="italic">Manage Everything from</span>{" "}
            <span className="font-normal italic bg-[linear-gradient(180deg,#FFD439_20.03%,#FF7A00_87.85%)] bg-clip-text text-transparent">
              One Dashboard
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[18px] md:text-[20px] text-[#373844] mb-8 max-w-3xl mx-auto leading-relaxed">
            Vilva One is your unified SaaS workspace that brings together all business operations—from bus booking and CRM to task management and custom apps—in a single, powerful platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/signin"
              className="flex items-center gap-2 h-[52px] px-8 py-4 rounded-[12px] bg-[#195AFF] text-white font-semibold text-[18px] hover:bg-[#1450DD] transition-colors"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/book-demo"
              className="flex items-center gap-2 h-[52px] px-8 py-4 rounded-[12px] border-2 border-[#6F9CFF] bg-[#EFF4FF] text-[#195AFF] font-semibold text-[18px] hover:bg-[#DFEAFf] transition-colors"
            >
              Book a Demo
            </a>
          </div>

          {/* Key metrics */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-[#195AFF] mb-1">
                10+
              </div>
              <div className="text-[14px] md:text-[16px] text-[#373844]">
                Integrated Modules
              </div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-[#195AFF] mb-1">
                200+
              </div>
              <div className="text-[14px] md:text-[16px] text-[#373844]">
                Active Businesses
              </div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-[#195AFF] mb-1">
                99.9%
              </div>
              <div className="text-[14px] md:text-[16px] text-[#373844]">
                Uptime Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
