"use client";

import { 
  MessageSquare, 
  Send, 
  Bot, 
  BarChart3, 
  Users, 
  Shield, 
  Smartphone,
  Workflow
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Bulk Messaging",
    description: "Send personalized messages to thousands of contacts instantly with customizable templates and media support.",
    color: "bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5"
  },
  {
    icon: Bot,
    title: "Smart Chatbots",
    description: "Automate customer interactions with AI-powered chatbots that handle FAQs, bookings, and support 24/7.",
    color: "bg-gradient-to-br from-[#195AFF]/10 to-[#195AFF]/5"
  },
  {
    icon: Send,
    title: "Broadcast Campaigns",
    description: "Launch targeted marketing campaigns with scheduled broadcasts, tags, and audience segmentation.",
    color: "bg-gradient-to-br from-[#FF7A00]/10 to-[#FF7A00]/5"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track message delivery, read rates, engagement metrics, and campaign performance in real-time.",
    color: "bg-gradient-to-br from-[#19ADBB]/10 to-[#19ADBB]/5"
  },
  {
    icon: Users,
    title: "Contact Management",
    description: "Organize unlimited contacts with custom fields, tags, groups, and import/export capabilities.",
    color: "bg-gradient-to-br from-[#A8B8FF]/10 to-[#A8B8FF]/5"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Create custom workflows with triggers, conditions, and actions to automate complex processes.",
    color: "bg-gradient-to-br from-[#195AFF]/10 to-[#195AFF]/5"
  },
  {
    icon: Smartphone,
    title: "Multi-Device Support",
    description: "Access your WhatsApp business account from multiple devices and team members simultaneously.",
    color: "bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5"
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with end-to-end encryption and full WhatsApp Business API compliance.",
    color: "bg-gradient-to-br from-[#E84F4F]/10 to-[#E84F4F]/5"
  }
];

export default function ProductFeatures() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#090D28] mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-[#25D366] to-[#19ADBB] bg-clip-text text-transparent">
              WhatsApp Marketing
            </span>
          </h2>
          <p className="text-lg text-[#373844] max-w-2xl mx-auto">
            Everything you need to scale your WhatsApp communication and deliver exceptional customer experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl border border-[#E5E5E5] hover:border-[#25D366] hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-[#090D28]" />
                </div>
                <h3 className="text-xl font-semibold text-[#090D28] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#373844] leading-relaxed">
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
