"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-green-50 z-30 relative">
      <section className="bg-green-50 relative overflow-hidden">

        <div className="px-4 md:px-0 md:container mx-auto py-[80px]">
          <div className="flex flex-col md:flex-row items-center">
            {/* Right Content (Text) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[42%] lg:mb-0 order-1 lg:order-2 lg:pl-[40px]"
            >
              <p className="inline-flex mb-[5px] px-[16px] py-[8px] justify-end items-end rounded-[26px] border-[0.8px] border-[#FAE4AC] bg-[#FEFFE6] text-[#C48C00] font-medium text-[12px] md:text-[16px]">
                Smart Pharmacy Billing Software
              </p>

              <h1
                className="flex flex-wrap items-center leading-[1.2] text-[36px] md:text-[32px] lg:text-[68px] mb-[24px] font-bold tracking-tight"
              >
                <span className="bg-gradient-to-b from-[#00D527] to-[#00930F] bg-clip-text text-transparent">
                  Grow Sales 3X
                </span>

                <span className="text-[#2A3B2B] w-full mt-2 lg:mt-0">
                  Faster Using Automated
                </span>
                <span className="text-[#2A3B2B]">
                  Pharmacy Billing System
                </span>
              </h1>

              <p className="text-[#2A3B2B] mb-[15px] text-[16px] md:text-[20px] font-normal leading-[2.0]">
                Run your pharmacy smarter with a powerful, easy-to-use{' '}
                <span className="text-[#0EAC0E] font-semibold italic">
                  Billing & Inventory Management Software
                </span>.
                Manage sales, track stock, monitor expiry dates, generate GST bills,
                and analyze profit & loss — all from one secure, cloud-based platform.
              </p>

              <div className="flex items-center gap-[12px] flex-wrap">
                <a
                  className="flex justify-center items-center gap-[10px] rounded-[32px] border w-[160px] h-[52px] px-[6px] py-[10px] border-[#0EAC0E] bg-white text-[#0EAC0E] font-medium text-[18px] transition-all hover:bg-[#f0fff0]"
                  href="/book-demo"
                >
                  Book a Demo
                </a>
                <a
                  className="flex w-[160px] h-[52px] px-[6px] py-[10px] justify-center items-center gap-[10px] rounded-[32px] bg-[#0EAC0E] text-white font-medium text-[18px] transition-all hover:brightness-110"
                  href="https://nigmedi.com/"
                >
                  Log In
                </a>
              </div>
            </motion.div>

            {/* Left Content (Image & Floating Pills) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden lg:flex w-full lg:w-[58%] md:order-1 order-2 relative flex-col items-center"
            >
              {/* Top Floating Pill */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 md:left-10 z-20 inline-flex h-[28px] md:h-[36px] px-[12px] md:px-[18px] py-[4px] md:py-[8px] justify-center items-center gap-[6px] rounded-[24px] bg-[linear-gradient(180deg,_#FFF_50%,_#ADFFAD_137.86%)] shadow-chat text-[#006300] text-[10px] md:text-[14px] font-medium leading-none whitespace-nowrap"
              >
                <div className="w-2 h-2 bg-[#0EAC0E] rounded-full animate-pulse mr-1" />
                Automated Billing
              </motion.div>

              {/* Middle Floating Pill */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[40%] right-2 md:right-8 z-20 inline-flex h-[28px] md:h-[36px] px-[12px] md:px-[18px] py-[4px] md:py-[8px] justify-center items-center gap-[6px] rounded-[24px] bg-[linear-gradient(180deg,_#FFF_50%,_#ADFFAD_137.86%)] shadow-chat text-[#006300] text-[10px] md:text-[14px] font-medium leading-none whitespace-nowrap"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Stock & Expiry Alerts
              </motion.div>

              {/* Hero Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-none xl:-ml-10 aspect-[2204/1767]"
              >
                <Image
                  alt="Pharmacy Billing Software Dashboard"
                  fill
                  priority
                  className="object-contain"
                  src="/icons/pharmacyhero.png"
                />
              </motion.div>

              {/* Bottom Floating Pill */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-10 left-4 md:left-12 z-20 inline-flex h-[28px] md:h-[36px] px-[12px] md:px-[18px] py-[4px] md:py-[8px] justify-center items-center gap-[6px] rounded-[24px] bg-[linear-gradient(180deg,_#FFF_50%,_#ADFFAD_137.86%)] shadow-chat text-[#006300] text-[10px] md:text-[14px] font-medium leading-none whitespace-nowrap"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                GST Billing & Reports
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
