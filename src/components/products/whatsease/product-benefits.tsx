"use client";

import { Check } from "lucide-react";

const benefits = [
  "Increase customer engagement by up to 300%",
  "Reduce response time with automated replies",
  "Save time with bulk messaging and scheduling",
  "Improve conversion rates with targeted campaigns",
  "Scale communication without hiring more staff",
  "Integrate seamlessly with your existing CRM"
];

export default function ProductBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#EFF4FF] via-[#F8F9FA] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#25D366]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#195AFF]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#090D28] mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#25D366] to-[#19ADBB] bg-clip-text text-transparent">
                WhatsEase?
              </span>
            </h2>
            <p className="text-lg text-[#373844] mb-8 leading-relaxed">
              WhatsEase is designed to help businesses of all sizes leverage the power of WhatsApp 
              for marketing, sales, and customer support. Our platform combines ease of use with 
              enterprise-level features.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[#373844] text-base lg:text-lg">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started Today
              </button>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-[#25D366] mb-2">98%</div>
              <p className="text-[#373844]">Open Rate</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
              <div className="text-4xl lg:text-5xl font-bold text-[#195AFF] mb-2">5x</div>
              <p className="text-[#373844]">ROI Increase</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 -mt-8">
              <div className="text-4xl lg:text-5xl font-bold text-[#19ADBB] mb-2">60%</div>
              <p className="text-[#373844]">Time Saved</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-[#FF7A00] mb-2">24/7</div>
              <p className="text-[#373844]">Availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
