"use client";

import { Check } from "lucide-react";

const benefits = [
  "Centralized control over all business operations",
  "Reduce software costs by up to 60%",
  "Real-time analytics and reporting",
  "Seamless team collaboration tools",
  "White-label customization options",
  "24/7 customer support and training"
];

const stats = [
  {
    value: "60%",
    label: "Cost Reduction"
  },
  {
    value: "3x",
    label: "Faster Workflows"
  },
  {
    value: "99.9%",
    label: "Uptime SLA"
  }
];

export const ProductBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#EFF4FF] via-white to-[#F8F9FA]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits List */}
          <div>
            <h2 className="text-[32px] md:text-[48px] font-bold text-[#090D28] mb-6">
              Why Choose{" "}
              <span className="bg-[linear-gradient(180deg,#FFD439_20.03%,#FF7A00_87.85%)] bg-clip-text text-transparent">
                Vilva One?
              </span>
            </h2>
            <p className="text-[18px] text-[#373844] mb-8 leading-relaxed">
              Experience the power of unified business management with our comprehensive platform designed for growth.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#195AFF] flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-[#090D28] font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-[16px] bg-white border border-[#E5E5E5] shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-[48px] md:text-[56px] font-bold text-[#195AFF] mb-2">
                  {stat.value}
                </div>
                <div className="text-[18px] text-[#373844] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
