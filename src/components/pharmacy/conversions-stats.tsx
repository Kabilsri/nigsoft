import React from 'react';
import Image from 'next/image';

/**
 * ConversionsStats Component
 * 
 * A high-contrast dark green section featuring a headline, four statistical metrics,
 * and a dashboard mockup with floating informational pills.
 * 
 * Assets:
 * - Dashboard Screenshot: https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b353d96-c1a1-4b20-94bb-2e399536255e-vilvabusiness-com/assets/images/images_1.png
 */
const ConversionsStats = () => {
  const stats = [
    { value: '80%', label: 'Boost Customer Engagement' },
    { value: '75%', label: 'Increase ROI' },
    { value: '85%', label: 'Increase Product Visits' },
    { value: '75%', label: 'Message Response Time' },
  ];

  const floatingPills = [
    'Emails get ignored?',
    'Calls go unanswered?',
    'SMS lacks impact?',
  ];

  return (
    <section className="bg-forest-gradient relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-white text-[32px] md:text-[48px] font-bold font-display tracking-tight leading-tight mb-16">
            Automate & Accelerate Conversions.
          </h2>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto relative">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col items-center px-4 ${
                  index !== 3 ? 'md:border-r md:border-white/20' : ''
                }`}
              >
                <span className="text-white text-[40px] md:text-[56px] font-extrabold font-display leading-tight mb-2">
                  {stat.value}
                </span>
                <p className="text-white/80 text-[14px] md:text-[16px] font-medium leading-tight max-w-[160px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Visualization Area */}
        <div className="relative mt-12 md:mt-24 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Side: Floating Warning Pills */}
            <div className="flex flex-col gap-4 w-full md:w-1/3 order-2 md:order-1">
              {floatingPills.map((text, i) => (
                <div
                  key={i}
                  className="bg-[#023315] border border-white/10 rounded-full px-6 py-4 shadow-lg transform transition-transform hover:scale-105"
                  style={{ width: 'fit-content' }}
                >
                  <span className="text-[#0EAC0E] font-semibold text-lg md:text-xl">
                    {text}
                  </span>
                </div>
              ))}
              
              <div className="mt-6">
                <h4 className="text-[#efff00] text-2xl md:text-3xl font-bold leading-tight">
                  Whatsapp APIxVilva
                </h4>
                <p className="text-[#efff00] text-2xl md:text-3xl font-bold">
                  Speeds them up!
                </p>
              </div>
            </div>

            {/* Right Side: Dashboard Image */}
            <div className="w-full md:w-2/3 order-1 md:order-2 relative group">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-[#0EAC0E]/30 transition-all duration-500 group-hover:border-[#0EAC0E]/60">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b353d96-c1a1-4b20-94bb-2e399536255e-vilvabusiness-com/assets/images/images_1.png"
                  alt="WhatsEase Automation Dashboard Interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#0EAC0E]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Abstract Decoration (Paper Plane Path style from screenshot) */}
        <div className="absolute bottom-10 left-10 md:left-20 opacity-20 pointer-events-none hidden md:block">
           <svg width="243" height="152" viewBox="0 0 243 152" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 151C30.5 125.5 106.5 59.5 145.5 81.5C184.5 103.5 221.5 54.5 242 1" stroke="#0EAC0E" strokeWidth="2" strokeDasharray="6 6"/>
              <path d="M241.5 1.5L232.5 4.5M241.5 1.5L238.5 10.5M241.5 1.5L235 6" stroke="#0EAC0E" strokeWidth="2"/>
           </svg>
        </div>
      </div>
    </section>
  );
};

export default ConversionsStats;