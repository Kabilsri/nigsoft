"use client";

import { 
  LayoutDashboard, 
  Users, 
  Bus, 
  MessageSquare, 
  CheckSquare, 
  ShoppingCart, 
  Layers, 
  Settings 
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description: "Access all your business tools from one central dashboard with real-time analytics and insights.",
    color: "bg-[#195AFF]"
  },
  {
    icon: Users,
    title: "CRM & Customer Management",
    description: "Manage customer relationships, track interactions, and build lasting connections with your clients.",
    color: "bg-[#19ADBB]"
  },
  {
    icon: Bus,
    title: "Bus Booking System",
    description: "Complete bus ticket booking and management system with route planning and seat allocation.",
    color: "bg-[#E84F4F]"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "Automate WhatsApp messages, broadcasts, and customer support directly from your dashboard.",
    color: "bg-[#25D366]"
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Organize tasks, assign team members, track progress, and meet deadlines efficiently.",
    color: "bg-[#FF7A00]"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Module",
    description: "Build and manage your online store with inventory, payments, and order management.",
    color: "bg-[#A8B8FF]"
  },
  {
    icon: Layers,
    title: "Custom Apps",
    description: "Create custom applications tailored to your business needs with our flexible platform.",
    color: "bg-[#195AFF]"
  },
  {
    icon: Settings,
    title: "API Integrations",
    description: "Connect with third-party services and automate workflows with powerful API integrations.",
    color: "bg-[#19ADBB]"
  }
];

export const ProductFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#090D28] mb-4">
            Everything You Need in{" "}
            <span className="bg-gradient-to-r from-[#19A7FF] to-[#426CF4] bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-[18px] text-[#373844] leading-relaxed">
            Vilva One combines all essential business tools into a single, integrated platform designed to streamline your operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-[16px] bg-white border border-[#E5E5E5] hover:border-[#195AFF] hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-[12px] ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#090D28] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#373844] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
