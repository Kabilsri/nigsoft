import React from 'react';
import { Check } from 'lucide-react';

const trustPoints = [
  {
    id: 1,
    text: "Smarter Campaigns, Higher Conversions",
  },
  {
    id: 2,
    text: "24/7 Intelligent Support",
  },
  {
    id: 3,
    text: "Simple, Scalable, Server-Free",
  },
  {
    id: 4,
    text: "Centralized Control, Total Transparency",
  },
  {
    id: 5,
    text: "Connect Instantly. Communicate Authentically.",
  },
];

const TrustPoints = () => {
  return (
    <section className="py-[80px] md:py-[100px] bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        {/* Section Heading */}
        <div className="text-center mb-[48px]">
          <h2 className="text-[#013f1b] font-display font-bold text-[32px] md:text-[48px] tracking-[-0.01em] leading-[1.2]">
            Why Trust Vilva?
          </h2>
        </div>

        {/* Trust Points Grid */}
        <div className="flex flex-wrap justify-center gap-[16px] md:gap-[24px]">
          {/* First Row of 3 items */}
          <div className="flex flex-wrap justify-center gap-[16px] md:gap-[24px] w-full">
            {trustPoints.slice(0, 3).map((point) => (
              <div
                key={point.id}
                className="flex items-center gap-[10px] px-[16px] py-[12px] md:px-[24px] md:py-[18px] bg-[#feffe6] border border-[#fae4ac] rounded-[16px] md:rounded-[20px]"
              >
                <div className="flex items-center justify-center w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full border-[1.5px] border-[#0eac0e]">
                  <Check className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-[#0eac0e] stroke-[3px]" />
                </div>
                <span className="text-[#2a3b2b] font-display font-medium text-[14px] md:text-[18px] leading-tight">
                  {point.text}
                </span>
              </div>
            ))}
          </div>

          {/* Second Row of 2 items */}
          <div className="flex flex-wrap justify-center gap-[16px] md:gap-[24px] w-full">
            {trustPoints.slice(3).map((point) => (
              <div
                key={point.id}
                className="flex items-center gap-[10px] px-[16px] py-[12px] md:px-[24px] md:py-[18px] bg-[#feffe6] border border-[#fae4ac] rounded-[16px] md:rounded-[20px]"
              >
                <div className="flex items-center justify-center w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full border-[1.5px] border-[#0eac0e]">
                  <Check className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-[#0eac0e] stroke-[3px]" />
                </div>
                <span className="text-[#2a3b2b] font-display font-medium text-[14px] md:text-[18px] leading-tight">
                  {point.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;