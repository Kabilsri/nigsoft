import React from 'react';
import Image from 'next/image';

const DomainCompliance = () => {
  const domains = [
    {
      title: 'Dental Clinics',
      description: 'Manage daily appointments, patient records, treatments, and billing with ease.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c56cb14b-966a-449f-ae3b-90968e79f85f-vilvabusiness-com/assets/images/images_17.png',
      alt: 'Dental Clinics icon graphic',
    },
    {
      title: 'Dental Hospitals',
      description: 'Centralize multi-doctor workflows, treatment plans, billing, and operational reports.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c56cb14b-966a-449f-ae3b-90968e79f85f-vilvabusiness-com/assets/images/images_18.png',
      alt: 'Dental Hospitals icon graphic',
    },
    {
      title: 'Multi-Chair Dental Practices',
      description: 'Handle multiple chairs, dentists, and patient flows efficiently from one system.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c56cb14b-966a-449f-ae3b-90968e79f85f-vilvabusiness-com/assets/images/images_19.png',
      alt: 'Multi-Chair Dental Practices icon graphic',
    },
    {
      title: 'Dental Chains & Groups',
      description: 'Get centralized control, analytics, and performance insights across all clinic locations.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c56cb14b-966a-449f-ae3b-90968e79f85f-vilvabusiness-com/assets/images/images_20.png',
      alt: 'Dental Chains & Groups icon graphic',
    },
  ];

  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-[48px] md:mb-[64px]">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#020d2c] leading-[1.2] font-display">
            Built for Every Dental Practice
          </h2>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start text-start group"
            >
              {/* Graphic Container */}
              <div className="w-full aspect-[4/3] relative mb-6 rounded-[24px] bg-[#F8FAFF] overflow-hidden flex items-center justify-center border border-[#EFF4FF] transition-all duration-300 hover:shadow-lg">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={domain.image}
                    alt={domain.alt}
                    width={280}
                    height={210}
                    className="object-contain w-[80%] h-[80%] transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="px-1">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#020d2c] mb-3 leading-[1.3] font-display">
                  {domain.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#4e5b7d] leading-[1.6]">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainCompliance;