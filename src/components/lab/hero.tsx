"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MarketingHero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any,
    },
  };

  const floatingBadgeVariants = (delay: number) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      } as any,
    },
  });

  return (
    <section className="relative overflow-hidden bg-white mb-10">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#3E00B0]/5 to-[#00ADEC]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#FF7ACE]/5 to-[#C37CEA]/5 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#3E00B0] rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#00ADEC] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4 sm:mb-2">
            <p className="text-[10px] sm:text-[12px] md:text-[14px] font-semibold tracking-[1.5px] sm:tracking-[2px] uppercase bg-gradient-to-r from-[#3E00B0] to-[#00ADEC] bg-clip-text text-transparent">
              <span className="text-[#3E00B0]">LABORATORY</span> <span className="text-[#00ADEC]">MANAGEMENT</span>
            </p>
          </motion.div>

          {/* Premium Headline with Enhanced Badges */}
          <div className="relative mb-6 sm:mb-8 lg:mb-12">
            <motion.h1 variants={itemVariants} className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[62px] font-[400] leading-[110%] sm:leading-[120%] font-heading py-2 sm:py-4 text-center mx-auto w-full max-w-6xl mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-0">
              Turn <span className="bg-gradient-to-r from-[#3F92FF] to-[#06B6D4] bg-clip-text text-transparent">
                Samples into Reports<br />
              </span>Effortlessly with Nigsoft
            </motion.h1>

            {/* Enhanced Left Badge - Hidden on mobile */}
            <motion.div
              variants={floatingBadgeVariants(0)}
              animate="animate"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="hidden lg:block absolute top-[20%] -left-4 xl:left-8 flex flex-col items-end group"
            >
              <svg width="20" height="19" viewBox="0 0 18 17" fill="none" className="mb-[-6px] mr-[-4px] translate-y-[-3px] transition-transform group-hover:scale-110 drop-shadow-lg">
                <path d="M12.715 5.38758L10.9996 14.978C10.8327 15.9078 9.59422 16.1271 9.12001 15.3102L6.71644 11.1818L2.22878 9.5443C1.33959 9.22045 1.33834 7.96384 2.22409 7.63555L11.3614 4.25507C12.0999 3.9802 12.8541 4.61361 12.715 5.38758Z" fill="url(#gradientLab1)" />
                <defs>
                  <linearGradient id="gradientLab1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C37CEA" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C37CEA] to-[#A855F7] text-white text-[12px] font-semibold shadow-xl hover:shadow-2xl transition-all cursor-pointer backdrop-blur-sm border border-white/20">
                Labs
              </span>
            </motion.div>

            {/* Enhanced Right Badge - Hidden on mobile */}
            <motion.div
              variants={floatingBadgeVariants(0.5)}
              animate="animate"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="hidden lg:block absolute top-[60%] -right-4 xl:right-8 flex flex-col items-start group"
            >
              <svg width="19" height="19" viewBox="0 0 17 17" fill="none" className="mb-[-6px] ml-[-4px] translate-y-[-3px] transition-transform group-hover:scale-110 drop-shadow-lg">
                <path d="M4.7357 5.38758L6.45107 14.978C6.61795 15.9078 7.85646 16.1271 8.33067 15.3102L10.7342 11.1818L15.2219 9.5443C16.1111 9.22045 16.1123 7.96384 15.2266 7.63555L6.08925 4.25507C5.35082 3.9802 4.59657 4.61361 4.7357 5.38758Z" fill="url(#gradientLab2)" />
                <defs>
                  <linearGradient id="gradientLab2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7ACE" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FF7ACE] to-[#EC4899] text-white text-[12px] font-semibold shadow-xl hover:shadow-2xl transition-all cursor-pointer backdrop-blur-sm border border-white/20">
                Patients
              </span>
            </motion.div>
          </div>

          {/* Premium Sub-headline */}
          <motion.p variants={itemVariants} className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[130%] sm:leading-[140%] text-[#6B7280] text-center max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0">
            Transform your laboratory operations with NIGSOFT Lab Management Software, a powerful cloud-based solution designed to simplify workflows, improve accuracy, and deliver faster diagnostic reports. Built for diagnostic labs, pathology centers, and hospitals, our software ensures efficiency, security, and seamless digital management.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4 sm:px-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'https://niglabs.com/'}
              className="group relative w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#4F87FF] to-[#3B82F6] text-white font-semibold text-[14px] sm:text-[16px] rounded-lg shadow-lg transition-all duration-300 min-w-[160px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Log In to Lab
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/book-demo'}
              className="group w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2 bg-white/80 backdrop-blur-sm border-2 border-[#4F87FF] text-[#4F87FF] font-semibold text-[14px] sm:text-[16px] rounded-lg shadow-lg transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Book Free Demo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingHero;