"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans bg-gradient-to-r from-orange-400 to-red-500 lg:bg-gradient-to-r lg:from-orange-400 lg:via-white lg:to-white lg:py-16">
      {/* Orange Gradient Background - Right Side with SVG Curve */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-orange-400 to-red-500"></div>
        <svg viewBox="0 0 1440 1024" className="absolute top-0 right-0 w-full h-full" preserveAspectRatio="none">
          <path fill="white" d="M720,0 C820,200 920,400 1020,600 C1120,800 1220,900 1440,1024 L1440,0 Z"></path>
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-24 lg:py-8">
        {/* Left Section: Text Content */}
        <div className="flex flex-col space-y-8 max-w-xl mt-8 lg:mt-0 mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-[1.1]">
              GELL+<br/><span className='text-white'>Faster Appointments </span><br />
              Better CARE
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Gell Plus is a user-friendly healthcare application designed to simplify patient interactions and optimize medical and laboratory workflows through smart digital features.

            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.nigsoft.gellplus"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/nigicon/playstore.png"
                alt="Download on Play Store"
                width={180}
                height={54}
                className="h-[52px] w-auto object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/gell/id6446046928"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/nigicon/apple.png"
                alt="Download on App Store"
                width={180}
                height={54}
                className="h-[52px] w-auto object-contain"
              />
            </a>
          </motion.div>
        </div>

        {/* Right Section: Mobile Phone Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Phone mockup with tilted angle */}
          <div className="relative transform rotate-12 scale-100">
            <div className="w-70 h-[550px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-[ #0059b3] rounded-[2.5rem] overflow-hidden relative">
                {/* Phone screen content - Replace with actual image */}
                <Image
                  src="/icons/gell+.jpg"
                  alt="Gell Plus App Interface"
                  fill
                  className="object-contain scale-100"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;