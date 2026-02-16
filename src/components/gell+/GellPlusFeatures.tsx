"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FEATURE_DATA = [
  {
    title: "Instant Access to Health Services",
    description: "Quickly reach specialists for Ear, Eye, Dermatology, and Cardiology care with a simple tap."
  },
  {
    title: "Smart Health Check Tests",
    description: "Perform Eye Power and Ear Power tests effortlessly using easy in-app guided screenings."
  },
  {
    title: "Activity & Fitness Tracking",
    description: "Track your daily steps and water intake to stay consistent with your fitness goals."
  },
  {
    title: "Personalized Health Monitoring",
    description: "View your daily progress and maintain healthier habits through smart activity insights."
  }
];



const GellPlusFeatures = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 md:px-0 bg-white overflow-hidden py-4 lg:py-12 relative">
      <div className="container mx-auto">
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2 ">
          {/* Left Content */}
          <div className="z-10 mt-10 lg:mt-16">
            <motion.h5
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans font-bold text-[32px] md:text-[36px] not-italic leading-[120%] bg-gradient-to-r from-[#FF0A0A] via-[#E29E00] to-[#E29E00] bg-clip-text text-transparent  pt-4 lg:pt-8"
            >
              Fitness & Health
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
                    src="/images/gelpluss.jpg"
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
        </div>
      </div>
    </section>
  );
};

export default GellPlusFeatures;