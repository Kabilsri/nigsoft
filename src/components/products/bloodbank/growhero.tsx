"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * AI-Powered CRM & HRM Hero Section Component.
 */
const HeroSection = () => {
  const headline = " Blood Bank Management Software";
  const description = "Nigsoft Blood Bank System is an all-in-one healthcare platform designed for blood banks and hospitals. It intelligently manages donor records, blood inventory, testing, compatibility, distribution, and analytics through one secure, centralized dashboard.";
  const demoLink = "/book-demo";
  const startLink = "https://nigblood.com";
  return (
    <section className="overflow-hidden h-fit bg-[radial-gradient(100.01%_100%_at_52.35%_0%,_#FFF_83.74%,_#BBEAFC_100%)] relative">
      <div className="pt-[60px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full md:w-[700px] mx-auto text-center font-heading text-[40px] md:text-[60px] font-normal leading-[120%] mb-[16px]"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#374577] px-4 mb-[24px] relative w-full md:w-[700px] mx-auto z-10 text-center font-normal text-[18px] md:text-[20px] leading-[150%]"
        >
          {description}
        </motion.p>
        <div className="flex relative z-10 justify-center items-center gap-2 mt-[32px]">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex h-[52px] whitespace-nowrap w-[180px] relative z-10 px-8 py-4 justify-center items-center rounded-[12px] border-[2px] border-[#6F9CFF] bg-[#EFF4FF] text-[#0048ff] font-semibold text-[16px] md:text-lg leading-[120%] transition-colors duration-300 hover:bg-white"
            href={demoLink}
          >
            Book Free Demo
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex h-[52px] w-[180px] relative z-10 px-8 py-4 justify-center items-center rounded-[12px] bg-[#064cff] text-white font-semibold text-[16px] md:text-lg leading-[120%] transition-colors duration-300 hover:bg-[#0038cc]"
            href={startLink}
          >
            Get Started
          </motion.a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-[60px] flex justify-center"
      >
        {/*
          Using the Next.js Image component for optimization.
          The 'alt', 'width', and 'height' attributes are important.
          The 'src' should be the imported image module or a string URL.
        */}
        <Image
          alt="Dashboard Preview"
          width={800}
          height={300}
          src="/icons/blood.png"
          className="w-full max-w-[800px] h-auto rounded-lg"
          priority
        />
      </motion.div>

      {/* Full section blur effect with blue color overlay */}
      <div className="absolute inset-0 bg-blue-400/10 backdrop-blur-sm z-0"></div>

      {/* Background SVG Decoration - Converted to be a direct background layer */}
      <div className="absolute z-0 w-full h-full top-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100% 100%"
          fill="none"
          className="absolute inset-0 w-full h-full"
        >
          <g filter="url(#filter0_n_807_662)">
            <rect width="100%" height="100%" fill="#E0F8FF" fillOpacity="0.1"></rect>
          </g>
          {/* ... all your defs and filters ... */}
          <defs>
            <filter id="filter0_n_807_662" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feTurbulence type="fractalNoise" baseFrequency="3.3333332538604736 3.3333332538604736" stitchTiles="stitch" numOctaves="3" result="noise" seed="8353"></feTurbulence>
              <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"></feColorMatrix>
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "></feFuncA>
              </feComponentTransfer>
              <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped"></feComposite>
              <feFlood floodColor="rgba(0, 112, 216, 0.65)" result="color1Flood"></feFlood>
              <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1"></feComposite>
              <feMerge result="effect1_noise_807_662">
                <feMergeNode in="shape"></feMergeNode>
                <feMergeNode in="color1"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

// Example Usage (for context)
/*
const App: React.FC = () => (
  <HeroSection
    headline="AI-Powered CRM & HRM for Business Growth"
    description="Vilva Growsuite is your all-in-one business platform powered by AI. Combining CRM, HRM, marketing, sales, and analytics into one seamless dashboard."
    demoLink="/book-demo"
    startLink="/signin"
  />
);
*/

export default HeroSection;