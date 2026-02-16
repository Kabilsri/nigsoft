"use client";

import { Button } from "@/components/ui/button";
import { Sprout, TrendingUp, Users } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EFF4FF] via-white to-[#F8F9FA] pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute top-20 right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#CBE3FA]/30 to-[#FCEEFF]/30 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-[#19A7FF]/20 to-[#426CF4]/20 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-[26px] border-4 border-[rgba(111,156,255,0.2)] bg-gradient-to-r from-[#CBE3FA] to-[#FCEEFF] px-6 py-2">
            <Sprout className="h-5 w-5 text-[#19ADBB]" />
            <span className="bg-gradient-to-r from-[#19A7FF] to-[#426CF4] bg-clip-text text-base font-medium text-transparent">
              Growth Automation Platform
            </span>
          </div>

          <h1 className="font-heading text-[42px] font-extrabold leading-[1.2] text-[#090D28] lg:text-[68px]">
            Scale Your Business with{" "}
            <span className="bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text italic text-transparent">
              GrowSuite
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#373844] lg:text-xl">
            All-in-one growth platform that helps businesses automate marketing, optimize sales funnels, and scale customer acquisition with AI-powered insights.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="h-[52px] w-full rounded-[12px] border-2 border-[#6F9CFF] bg-[#EFF4FF] px-8 text-base font-semibold text-[#195AFF] hover:bg-[#EFF4FF]/80 sm:w-auto">
              Schedule Demo
            </Button>
            <Button className="h-[52px] w-full rounded-[12px] bg-[#195AFF] px-8 text-base font-semibold text-white hover:bg-[#195AFF]/90 sm:w-auto">
              Start Free Trial
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#19A7FF]/10">
                <TrendingUp className="h-6 w-6 text-[#195AFF]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-[#195AFF]">3X</p>
                <p className="text-sm text-[#373844]">Growth Rate</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                <Users className="h-6 w-6 text-[#FF7A00]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-[#195AFF]">5K+</p>
                <p className="text-sm text-[#373844]">Active Users</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10">
                <Sprout className="h-6 w-6 text-[#25D366]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-[#195AFF]">98%</p>
                <p className="text-sm text-[#373844]">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
