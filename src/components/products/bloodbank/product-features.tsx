"use client";

import { BarChart3, Mail, Target, Zap, Brain, LineChart, Megaphone, Users2 } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Marketing Automation",
    description: "Automate email campaigns, social media posts, and customer journeys with intelligent triggers and workflows.",
    color: "#195AFF",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into campaign performance, conversion rates, and customer behavior with custom reports.",
    color: "#19ADBB",
  },
  {
    icon: Zap,
    title: "Lead Generation",
    description: "Capture and qualify leads automatically with smart forms, chatbots, and landing page optimization tools.",
    color: "#FF7A00",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms predict customer behavior and recommend optimal marketing strategies.",
    color: "#A8B8FF",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Design beautiful emails with drag-and-drop builder, A/B testing, and advanced segmentation capabilities.",
    color: "#FFD439",
  },
  {
    icon: LineChart,
    title: "Sales Funnel Optimization",
    description: "Visualize and optimize your entire sales funnel with conversion tracking and bottleneck identification.",
    color: "#25D366",
  },
  {
    icon: Megaphone,
    title: "Campaign Management",
    description: "Plan, execute, and track multi-channel marketing campaigns from a single unified dashboard.",
    color: "#E84F4F",
  },
  {
    icon: Users2,
    title: "Customer Segmentation",
    description: "Group customers by behavior, demographics, and engagement for targeted marketing campaigns.",
    color: "#19A7FF",
  },
];

const ProductFeatures = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[32px] lg:text-[48px] font-bold text-[#090D28] leading-tight">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">
              Rapid Growth
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#373844] max-w-2xl mx-auto">
            Everything you need to attract, engage, and convert customers at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-[24px] bg-white border border-[#E5E5E5] p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#6F9CFF] hover:-translate-y-1"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-[16px] mb-6"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon className="h-7 w-7" style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-semibold text-[#090D28] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#373844] text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
