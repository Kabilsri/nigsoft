"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

export default function ProductCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#090D28] via-[#03008F] to-[#000839] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#25D366]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#195AFF]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#19ADBB]/10 to-[#195AFF]/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-2xl mb-8 shadow-2xl">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-[#25D366] to-[#19ADBB] bg-clip-text text-transparent">
              WhatsApp Communication?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses already using WhatsEase to engage customers, 
            automate workflows, and grow their business on WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-2">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border-2 border-white/30 backdrop-blur-sm transition-all duration-300">
              Schedule a Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25D366] rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#195AFF] rounded-full" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#19ADBB] rounded-full" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
