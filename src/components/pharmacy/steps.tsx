import React from 'react';
import Image from 'next/image';

const steps = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b353d96-c1a1-4b20-94bb-2e399536255e-vilvabusiness-com/assets/images/images_2.png",
    number: 1,
    title: "Connect your Whatsapp Business Account"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b353d96-c1a1-4b20-94bb-2e399536255e-vilvabusiness-com/assets/images/images_3.png",
    number: 2,
    title: "Upload Your Audience"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b353d96-c1a1-4b20-94bb-2e399536255e-vilvabusiness-com/assets/images/images_4.png",
    number: 3,
    title: "Create Campaigns & Templates"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b353d96-c1a1-4b20-94bb-2e399536255e-vilvabusiness-com/assets/images/images_5.png",
    number: 4,
    title: "Design Bot Flows"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b353d96-c1a1-4b20-94bb-2e399536255e-vilvabusiness-com/assets/images/images_6.png",
    number: 5,
    title: "Track Everything in Real Time"
  }
];

export default function Steps() {
  return (
    <section className="bg-white py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-center text-[#2a3b2b] text-[32px] md:text-[48px] font-bold font-display tracking-tight mb-[60px] md:mb-[80px]">
          Launch WhatsApp Campaigns in 5 Easy Steps
        </h2>

        {/* Timeline Desktop Container */}
        <div className="relative hidden md:block">
          {/* Connecting Line */}
          <div className="absolute top-[88px] left-[10%] right-[10%] h-[1px] bg-[#e2e8f0]" />

          <div className="grid grid-cols-5 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center px-4">
                {/* Icon Container */}
                <div className="w-[84px] h-[84px] rounded-full bg-[#f0fff0] flex items-center justify-center p-5 mb-[16px] shadow-[0px_1px_4px_0px_rgba(9,137,0,0.15)] transition-transform hover:scale-105 duration-300">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Step Number Badge */}
                <div className="w-8 h-8 rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center text-[12px] font-bold text-[#737373] mb-6 relative">
                  {step.number}
                </div>

                {/* Title */}
                <p className="text-[#2a3b2b] text-[16px] xl:text-[20px] font-medium leading-[1.3] max-w-[180px]">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-12 items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
               <div className="w-[84px] h-[84px] rounded-full bg-[#f0fff0] flex items-center justify-center p-5 mb-4 shadow-[0px_1px_4px_0px_rgba(9,137,0,0.15)]">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#e2e8f0] mb-3 text-[12px] font-bold text-[#737373]">
                  {step.number}
                </div>
                <p className="text-[#2a3b2b] text-[18px] font-medium leading-tight max-w-[200px]">
                  {step.title}
                </p>
                {index < steps.length - 1 && (
                   <div className="h-10 w-[1px] bg-[#e2e8f0] mt-4" />
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}