"use client";

import { 
  Building2, 
  GraduationCap, 
  ShoppingBag, 
  Truck, 
  Briefcase, 
  Store 
} from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Enterprise Companies",
    description: "Scale your operations with enterprise-grade tools designed for complex business needs and large teams."
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Manage admissions, student records, communications, and administrative tasks from one platform."
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Businesses",
    description: "Run your online store with integrated inventory, order management, and customer support tools."
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description: "Streamline fleet management, booking systems, and route optimization with dedicated modules."
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Manage clients, projects, invoicing, and team collaboration efficiently in one workspace."
  },
  {
    icon: Store,
    title: "Retail Businesses",
    description: "Connect online and offline operations with POS integration, inventory sync, and customer management."
  }
];

export const ProductUseCases = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#090D28] mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#19A7FF] to-[#426CF4] bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-[18px] text-[#373844] leading-relaxed">
            Whether you're a startup or an enterprise, Vilva One adapts to your business needs.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-[16px] bg-gradient-to-br from-[#EFF4FF] to-white border border-[#E5E5E5] hover:border-[#195AFF] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-[12px] bg-[#195AFF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#090D28] mb-3">
                  {useCase.title}
                </h3>
                <p className="text-[16px] text-[#373844] leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductUseCases;
