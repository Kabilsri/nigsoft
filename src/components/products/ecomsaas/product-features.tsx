"use client";

import { Package, CreditCard, BarChart3, Users, Truck, Lock, Globe, Smartphone } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time inventory tracking with automated stock alerts and multi-warehouse support.",
    color: "bg-blue-500",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Integrated payment gateway with support for multiple payment methods and currencies.",
    color: "bg-green-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Comprehensive dashboards with sales insights, customer behavior, and performance metrics.",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "CRM tools to track customer interactions, orders, and build lasting relationships.",
    color: "bg-orange-500",
  },
  {
    icon: Truck,
    title: "Order Fulfillment",
    description: "Streamlined order processing with automated shipping and tracking integration.",
    color: "bg-cyan-500",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption with PCI DSS compliance and regular security audits.",
    color: "bg-red-500",
  },
  {
    icon: Globe,
    title: "Multi-Channel Selling",
    description: "Sell across multiple platforms and marketplaces from a single unified dashboard.",
    color: "bg-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Responsive design ensuring seamless shopping experience on all devices.",
    color: "bg-pink-500",
  },
];

export default function ProductFeatures() {
  return (
    <section className="bg-[#F8F9FA] py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-[32px] font-bold leading-[120%] text-[#090D28] lg:text-[48px]">
            Everything You Need to{" "}
            <span className="bg-gradient-to-b from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">
              Succeed Online
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#373844]">
            Our comprehensive platform provides all the tools and features to build, manage, and grow your e-commerce business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.color} text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#090D28]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#373844] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
