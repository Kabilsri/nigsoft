"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

export const ProductCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#03008F] via-[#000839] to-[#090D28] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#195AFF]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#FF7A00]/20 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm mb-6">
            <span className="text-[16px] font-medium text-white">
              Start Your Free Trial Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[36px] md:text-[56px] font-bold text-white mb-6 leading-[1.2]">
            Ready to Transform Your{" "}
            <span className="bg-[linear-gradient(180deg,#FFD439_20.03%,#FF7A00_87.85%)] bg-clip-text text-transparent">
              Business Operations?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-[18px] md:text-[20px] text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of businesses already using Vilva One to streamline their operations and boost productivity.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              <span className="text-[16px]">No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              <span className="text-[16px]">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              <span className="text-[16px]">Cancel anytime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signin"
              className="flex items-center gap-2 h-[52px] px-10 py-4 rounded-[12px] bg-white text-[#195AFF] font-semibold text-[18px] hover:bg-[#EFF4FF] transition-colors shadow-lg"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/book-demo"
              className="flex items-center gap-2 h-[52px] px-10 py-4 rounded-[12px] border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold text-[18px] hover:bg-white/20 transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
