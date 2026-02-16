"use client";

import { Store, Shirt, Smartphone, Package, Heart, Utensils } from "lucide-react";

const useCases = [
  {
    icon: Store,
    title: "Retail & Fashion",
    description: "Perfect for clothing brands, boutiques, and fashion retailers looking to expand online.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Smartphone,
    title: "Electronics",
    description: "Manage complex product catalogs with variants, specifications, and warranty information.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Health & Beauty",
    description: "Sell cosmetics, supplements, and wellness products with subscription options.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Package,
    title: "General Merchandise",
    description: "Multi-category stores with diverse product ranges and inventory management.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    description: "Online food delivery, meal kits, and specialty food products with expiry tracking.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shirt,
    title: "Custom Products",
    description: "Print-on-demand, personalized gifts, and made-to-order merchandise.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function ProductUseCases() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#03008F] to-[#000839] py-16 lg:py-24">
      <div className="container relative z-10">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-[32px] font-bold leading-[120%] text-white lg:text-[48px]">
            Built for Every{" "}
            <span className="bg-gradient-to-r from-[#CBE3FA] to-[#A8B8FF] bg-clip-text text-transparent">
              Industry
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Whatever you sell, our platform adapts to your unique business needs with industry-specific features.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${useCase.gradient}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {useCase.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative blur orbs */}
      <div className="pointer-events-none absolute top-20 left-10 h-64 w-64 rounded-full bg-[#195AFF] opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-64 w-64 rounded-full bg-[#19ADBB] opacity-20 blur-[120px]" />
    </section>
  );
}
