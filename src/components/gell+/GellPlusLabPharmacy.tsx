"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FEATURE_DATA = [
  {
    title: "Lab Tests & Diagnostics",
    description: "Book lab tests instantly and access trusted diagnostic centers near you."
  },
  {
    title: "Online Pharmacy Ordering",
    description: "Order medicines seamlessly and get fast delivery from verified pharmacies."
  },
  {
    title: "Clinic & Doctor Finder",
    description: "Find the right doctors, clinics, and healthcare specialists based on your needs."
  },
  {
    title: "Dental Care Services",
    description: "Access dental checkups, treatments, and specialist consultations effortlessly."
  }
];



const GellPlusLabPharmacy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 md:px-0 bg-white overflow-hidden py-4 lg:py-12 relative">
      {/* Vertical Wave - Right Side */}
      <div className="absolute inset-y-0 right-0 z-0 w-32 md:w-64">
        <svg 
          viewBox="0 0 320 1440" 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-full w-full" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="verticalWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#FF8C42', stopOpacity:0.4}} />
              <stop offset="100%" style={{stopColor:'#FF8C42', stopOpacity:0.2}} />
            </linearGradient>
          </defs>
          <path 
            fill="url(#verticalWaveGradient)" 
            d="M320,0 L320,1440 L220,1350 C120,1200 160,1050 180,900 C220,750 160,600 140,450 C120,300 200,150 320,0 Z"
          />
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2 ">
          <div className="relative flex justify-center items-center h-full min-h-[400px] lg:min-h-[600px]">
            {/* Multi-layered Background Glow System */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400/30 blur-[120px] rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-400/20 blur-[100px] rounded-full"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-400/10 blur-[150px] rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 mx-auto"
            >
              {/* Premium Android-style Mobile Frame - Ultra Compact */}
              <div className="relative mx-auto border-gray-600 bg-gray-600 border-[8px] rounded-[1.8rem] h-[300px] w-[145px] md:h-[380px] md:w-[185px] lg:h-[480px] lg:w-[235px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] overflow-hidden">
                {/* Android Pinhole Camera */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full z-30 border border-white/10 shadow-inner"></div>

                {/* Side Buttons (Android Style) */}
                <div className="absolute -right-[11px] top-16 w-[2.5px] h-6 bg-gray-700 rounded-r-lg"></div>
                <div className="absolute -right-[11px] top-28 w-[2.5px] h-12 bg-gray-700 rounded-r-lg"></div>

                {/* Screen Content */}
                <div className="relative w-full h-full bg-white overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/apps/gell+3.png"
                    fill
                    alt="Gell Plus Healthcare Mobile App Dashboard"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  {/* Premium Screen Reflection */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-black/5 z-20"></div>
                </div>
              </div>

              {/* Device Shadow/Glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-blue-900/10 blur-3xl -z-10 rounded-full"></div>
            </motion.div>
          </div>

          {/* Left Content */}
          <div className="z-10 mt-10 lg:mt-16">
            <motion.h5
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans font-bold text-[32px] md:text-[36px] not-italic leading-[120%] bg-gradient-to-r from-[#FF0A0A] via-[#E29E00] to-[#E29E00] bg-clip-text text-transparent mb-2 pt-4 lg:pt-8"
            >
              Our services
            </motion.h5>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <div className="bg-gradient-to-r from-[#FF0A0A] via-[#C000E200] to-white h-[2px] w-full"></div>
            </motion.div>

            <div className="mt-[24px] flex flex-col">
              {FEATURE_DATA.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="py-[22px] w-full border-b border-[#D8E9FF] last:border-b-0"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center w-full justify-between cursor-pointer text-left group focus:outline-none"
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-[#090D28] font-sans font-semibold text-[20px] md:text-[22px] leading-[100%]">
                      {feature.title}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`text-[#090D28] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-[#373844] font-sans text-[16px] font-normal leading-[150%] mt-[16px]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visuals */}

        </div>
      </div>
    </section>
  );
};

export default GellPlusLabPharmacy;