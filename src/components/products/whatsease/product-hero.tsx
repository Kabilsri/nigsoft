"use client";

import { MessageCircle, Users, Zap } from "lucide-react";

export default function ProductHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#EFF4FF] via-white to-[#F8F9FA]">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#25D366]/20 to-[#19ADBB]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#195AFF]/10 to-[#A8B8FF]/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-[#CBE3FA] to-[#FCEEFF] border-4 border-[#DFECFF]/40 rounded-full">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span className="text-base font-medium bg-gradient-to-r from-[#19A7FF] to-[#426CF4] bg-clip-text text-transparent">
              WhatsApp Business API Made Simple
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#090D28] mb-6 leading-tight">
            Automate WhatsApp <br />
            <span className="italic font-normal bg-gradient-to-r from-[#25D366] to-[#19ADBB] bg-clip-text text-transparent">
              Communication with Ease
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-[#373844] mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform customer engagement with automated WhatsApp messaging, broadcast campaigns, 
            chatbots, and advanced analytics - all from one powerful platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-[#EFF4FF] hover:bg-[#E0EBFF] text-[#195AFF] font-semibold rounded-xl border-2 border-[#6F9CFF] transition-all duration-300">
              View Pricing
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-[#195AFF] mr-2" />
                <span className="text-3xl lg:text-4xl font-bold text-[#195AFF]">10K+</span>
              </div>
              <p className="text-sm lg:text-base text-[#373844]">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MessageCircle className="w-6 h-6 text-[#25D366] mr-2" />
                <span className="text-3xl lg:text-4xl font-bold text-[#195AFF]">1M+</span>
              </div>
              <p className="text-sm lg:text-base text-[#373844]">Messages Sent Daily</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-[#FF7A00] mr-2" />
                <span className="text-3xl lg:text-4xl font-bold text-[#195AFF]">99.9%</span>
              </div>
              <p className="text-sm lg:text-base text-[#373844]">Delivery Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
