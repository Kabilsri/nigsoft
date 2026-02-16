"use client";

import { Check } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Launch your store in minutes with pre-built templates",
  "Scale effortlessly as your business grows",
  "Reduce operational costs with automation",
  "Increase conversion rates with optimized checkout",
  "Get 24/7 customer support from our expert team",
  "Access powerful integrations with top tools",
];

export default function ProductBenefits() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="mb-6 text-[32px] font-bold leading-[120%] text-[#090D28] lg:text-[48px]">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-[#19A7FF] to-[#426CF4] bg-clip-text text-transparent">
                E-Commerce Platform
              </span>
            </h2>
            <p className="mb-8 text-lg text-[#373844]">
              Built by e-commerce experts who understand the challenges of running an online business. 
              Our platform is designed to help you succeed at every stage of your journey.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-base text-[#373844]">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-[#EFF4FF] to-[#CBE3FA] p-8 lg:p-12">
              <div className="aspect-[4/3] rounded-xl bg-white shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mb-4 text-6xl">🛒</div>
                  <div className="text-2xl font-bold text-[#090D28] mb-2">E-Commerce Dashboard</div>
                  <div className="text-sm text-[#373844]">Visual Preview Coming Soon</div>
                </div>
              </div>
            </div>
            
            {/* Decorative blur */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FF7A00] opacity-20 blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
