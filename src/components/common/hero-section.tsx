"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MousePointer2, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any,
    },
  };

  const floatingVariants = (delay: number) => ({
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      } as any,
    },
  });

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto md:mt-[100px] mt-[80px] relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-[24px] px-[10px]"
        >
          <motion.div variants={itemVariants}>
            <h1 className="lg:text-[50px] md:text-[40px] text-[28px] sm:text-[36px] font-bold leading-tight text-balance">
              <span className="text-[#195AFF] inline-block mr-1 sm:mr-2">Complete</span>
              <span className="text-[#195AFF] inline-block mr-1 sm:mr-2">Hospital</span>
              <span className="text-[#195AFF] inline-block mr-1 sm:mr-2">Management</span>
              <span className="text-[#061D48] inline-block mr-1 sm:mr-2">System</span>
              <br className="hidden sm:block" />
              <span className="text-[#061D48] inline-block mr-1 sm:mr-2">for Modern</span>
              <span className="text-[#061D48] inline-block mr-1 sm:mr-2">Healthcare</span>
              <span className="text-[#061D48] inline-block">Facilities.</span>
            </h1>
            <p className="text-[#374577] text-sm md:text-base mt-6 max-w-2xl mx-auto">
              Streamline patient care, optimize operations, and enhance efficiency — <br className="hidden sm:block" />
              All-in-one solution designed for hospitals and clinics.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <Link href="/book-demo" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center whitespace-nowrap h-12 w-full sm:w-auto bg-[#195AFF] hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold rounded-[8px] transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-blue-200"
              >
                Book a Demo
              </motion.div>
            </Link>
            <a
              href="https://nigdoc.com"
              className="inline-flex items-center justify-center whitespace-nowrap h-12 w-full sm:w-auto bg-white border border-[#195AFF] text-[#195AFF] hover:bg-blue-50 px-8 py-3 text-base font-semibold rounded-[8px] transition-all duration-300 shadow-sm"
            >
              Get Started
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-[#33C120] text-[12px] font-medium">
              Get a Response within 24 Hours
            </p>
          </motion.div>
        </motion.div>

        <div className="relative pointer-events-none w-full max-w-2xl mx-auto mt-8 md:mt-12 mb-12 md:mb-40 px-4">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              <Image
                alt="Custom Software Development - Mobile and Desktop Applications"
                width={1480}
                height={849}
                priority
                className="w-full h-auto object-contain"
                src="/icons/clinic.jpg"
              />
            </motion.div>

            <motion.div
              variants={floatingVariants(2)}
              animate="animate"
              className="w-fit absolute md:-left-[70px] -left-[40px] md:bottom-[70px] bottom-[50px]"
            >
              {/* <div className="absolute">
                <MousePointer2 className="md:w-[38px] w-[24px] md:h-[38px] h-[24px] text-[#061D48] fill-[#061D48] rotate-[-15deg] opacity-20" />
              </div> */}
            </motion.div>

            <motion.div
              variants={floatingVariants(1)}
              animate="animate"
              className="w-fit absolute md:left-[70px] left-[40px] md:top-[110px] top-[90px]"
            >
              {/* <div className="absolute">
                <div className="bg-[#DFF195] md:p-[8px] p-[4px] rounded-full">
                  <Sparkles className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] text-[#55691d]" />
                </div>
              </div> */}
            </motion.div>

            <motion.div
              variants={floatingVariants(1.5)}
              animate="animate"
              className="w-fit absolute right-[10%] md:right-[230px] top-[20px] md:top-[50px]"
            >
              {/* <div className="absolute">
                <div className="bg-[radial-gradient(360.25%_138.62%_at_5.57%_2.63%,_#98CBFF_0%,_#7088FF_100%)] shadow-[inset_0_0_10px_rgba(25,90,255,0.1)] md:p-[20px] p-[8px] rounded-full flex items-center justify-center">
                  <Play className="w-[14px] md:w-[22px] h-[14px] md:h-[22px] text-white fill-white ml-0.5" />
                </div>
              </div> */}
            </motion.div>
          </div>

          <div className="pointer-events-auto">
            <motion.div
              variants={floatingVariants(0)}
              animate="animate"
              className="absolute -left-[0px] md:top-[50px] top-[30px] z-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="min-w-max px-[20px] py-[12px] font-medium text-[#5477B5] rounded-[20px] md:text-[14px] text-[10px] bg-[linear-gradient(134deg,#FFF_32.27%,#DCE5FF_73.41%)] shadow-xl cursor-default"
              >
                #Patient Management
              </motion.div>
            </motion.div>

            <motion.div
              variants={floatingVariants(1)}
              animate="animate"
              className="absolute md:left-[25/Users/kabil/Downloads/Gemini_Generated_Image_eb2lzkeb2lzkeb2l.png0px] left-[250px] md:top-[50px] top-[30px] z-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="min-w-max px-[20px] py-[12px] font-medium transform rotate-12 text-[#5477B5] rounded-[20px] md:text-[14px] text-[10px] bg-[linear-gradient(134deg,#FFF_32.27%,#DCE5FF_73.41%)] shadow-xl cursor-default"
              >
                #EMR/EHR System
              </motion.div>
            </motion.div>

            <motion.div
              variants={floatingVariants(2)}
              animate="animate"
              className="absolute -right-16 md:top-[70px] top-[50px] z-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="min-w-max px-[20px] py-[12px] font-medium transform -rotate-8 text-[#5477B5] rounded-[20px] md:text-[14px] text-[10px] bg-[linear-gradient(134deg,#FFF_32.27%,#DCE5FF_73.41%)] shadow-xl cursor-default"
              >
                #Billing & Insurance
              </motion.div>
            </motion.div>

            <motion.div
              variants={floatingVariants(1.5)}
              animate="animate"
              className="absolute -right-[20px] md:-right-[90px] bottom-[30px] md:bottom-[60px] z-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="min-w-max px-3 py-2 sm:px-[20px] sm:py-[12px] font-medium transform -rotate-8 text-[#5477B5] rounded-[20px] md:text-[14px] text-[10px] bg-[linear-gradient(134deg,#FFF_32.27%,#DCE5FF_73.41%)] shadow-xl cursor-default"
              >
                #Pharmacy Module
              </motion.div>
            </motion.div>

            <motion.div
              variants={floatingVariants(0.5)}
              animate="animate"
              className="absolute -left-[30px] md:-left-[200px] bottom-[50px] md:bottom-[140px] z-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="min-w-max px-3 py-2 sm:px-[20px] sm:py-[12px] font-medium transform rotate-8 text-[#5477B5] rounded-[20px] md:text-[14px] text-[10px] bg-[linear-gradient(134deg,#FFF_32.27%,#DCE5FF_73.41%)] shadow-xl cursor-default"
              >
                #Lab Management
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}