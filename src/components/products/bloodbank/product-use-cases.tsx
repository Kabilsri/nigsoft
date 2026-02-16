"use client";

import { ShoppingBag, Building2, GraduationCap, Heart, Plane, Utensils } from "lucide-react";

const useCases = [
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Automate abandoned cart campaigns, personalize product recommendations, and boost repeat purchases with targeted email sequences.",
    color: "#195AFF",
  },
  {
    icon: Building2,
    title: "B2B SaaS",
    description: "Generate qualified leads, nurture trials into paid customers, and reduce churn with data-driven retention campaigns.",
    color: "#19ADBB",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Promote courses, automate student onboarding, and increase enrollment with optimized landing pages and email funnels.",
    color: "#FF7A00",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Engage patients with appointment reminders, health tips, and personalized care recommendations through automated workflows.",
    color: "#E84F4F",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Send booking confirmations, upsell experiences, and re-engage past customers with personalized travel offers.",
    color: "#A8B8FF",
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    description: "Drive repeat orders with loyalty programs, promote seasonal menus, and gather customer feedback automatically.",
    color: "#25D366",
  },
];

const ProductUseCases = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[32px] lg:text-[48px] font-bold text-[#090D28] leading-tight">
            Built for Every{" "}
            <span className="bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">
              Industry
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#373844] max-w-2xl mx-auto">
            From startups to enterprises, GrowSuite adapts to your unique business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group rounded-[24px] bg-gradient-to-br from-[#F8F9FA] to-white border border-[#E5E5E5] p-8 transition-all duration-300 hover:shadow-xl hover:border-[#6F9CFF] hover:-translate-y-1"
            >
              <div
                className="inline-flex h-14 w-14 items-center justify-center rounded-[16px] mb-6"
                style={{ backgroundColor: `${useCase.color}15` }}
              >
                <useCase.icon className="h-7 w-7" style={{ color: useCase.color }} />
              </div>
              <h3 className="text-xl font-semibold text-[#090D28] mb-3">
                {useCase.title}
              </h3>
              <p className="text-[#373844] text-[15px] leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductUseCases;
