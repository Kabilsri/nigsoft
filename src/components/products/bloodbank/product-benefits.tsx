"use client";

import { Check, TrendingUp, Clock, DollarSign } from "lucide-react";

const benefits = [
  "Automate repetitive marketing tasks and save 20+ hours per week",
  "Increase conversion rates by up to 45% with AI-powered optimization",
  "Integrate with 100+ tools including CRMs, email platforms, and analytics",
  "Scale campaigns effortlessly without increasing team size",
  "Track ROI in real-time with comprehensive attribution modeling",
  "Personalize customer journeys with dynamic content and segmentation",
];

const stats = [
  {
    icon: TrendingUp,
    value: "3X",
    label: "Average Revenue Growth",
    color: "#195AFF",
  },
  {
    icon: Clock,
    value: "70%",
    label: "Time Saved on Tasks",
    color: "#FF7A00",
  },
  {
    icon: DollarSign,
    value: "5X",
    label: "Return on Investment",
    color: "#25D366",
  },
];

const ProductBenefits = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#EFF4FF] to-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading text-[32px] lg:text-[48px] font-bold text-[#090D28] leading-tight">
              Why Businesses Choose{" "}
              <span className="bg-gradient-to-r from-[#19A7FF] to-[#426CF4] bg-clip-text text-transparent">
                GrowSuite
              </span>
            </h2>
            <p className="mt-6 text-lg text-[#373844] leading-relaxed">
              GrowSuite empowers marketing teams to work smarter, not harder. Our platform combines automation, analytics, and AI to help you achieve your growth goals faster.
            </p>

            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#195AFF] mt-0.5">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[#090D28] text-[17px] leading-relaxed font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-[24px] bg-white p-8 shadow-lg border border-[#E5E5E5]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[16px]"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon className="h-8 w-8" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p
                      className="text-4xl font-bold leading-none mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[#373844] text-base font-medium">
                      {stat.label}
                    </p>
                  </div>
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
