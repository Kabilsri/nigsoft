import React from 'react';

/**
 * CTABanner Component
 * 
 * Clones the dark green call-to-action banner from the WhatsEase website.
 * Features:
 * - Background color: #013f1b (Forest Green)
 * - Headline: "Turn Every WhatsApp Message into a Business Opportunity"
 * - Primary Button: "Start Now" (#0eac0e)
 * - Secondary Button: "Book a Demo" (Outline/White)
 * - Legal disclaimer strip below the main banner.
 */
const CTABanner = () => {
  return (
    <section className="w-full flex flex-col">
      {/* Main Dark Green Banner */}
      <div className="bg-[#013f1b] py-[60px] md:py-[80px] px-4">
        <div className="container mx-auto max-w-[1280px] flex flex-col items-center text-center">
          <h2 className="text-white text-[28px] md:text-[40px] lg:text-[48px] font-bold leading-tight tracking-tight mb-[40px] font-sans">
            Turn Every WhatsApp Message into a Business Opportunity
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px]">
            {/* Book a Demo Button */}
            <a 
              href="/book-demo"
              className="flex justify-center items-center rounded-[32px] border border-white bg-white text-[#013f1b] font-medium text-[18px] w-full sm:w-[180px] h-[52px] transition-transform hover:scale-105 active:scale-95"
            >
              Book a Demo
            </a>
            
            {/* Start Now Button */}
            <a 
              href="https://whatsappforstartups.vilvabusiness.com/"
              className="flex justify-center items-center rounded-[32px] bg-[#0eaa0e] text-white font-medium text-[18px] w-full sm:w-[180px] h-[52px] transition-transform hover:scale-105 active:scale-95"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>

      {/* Trademark Disclaimer Strip */}
      <div className="bg-[#ffbf00] py-[12px] px-4">
        <div className="container mx-auto max-w-[1280px]">
          <p className="text-[10px] md:text-[12px] text-center text-[#2a3b2b] font-medium leading-relaxed">
            WhatsApp® is a registered trademark of its owners. Our product uses the official WhatsApp Cloud API to provide a reliable messaging experience, independently developed and aligned with WhatsApp’s standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;