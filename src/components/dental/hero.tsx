"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
      transition: { duration: 0.5, ease: "easeOut" } as any,
    },
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-blue-50 flex items-center pt-30 pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 px-4 mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-2 lg:order-1 hidden lg:block"
          >
            {/* Visual Assets Container */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-white border-4 border-white group">
              <Image
                alt="Dental Management System Dashboard"
                width={1400}
                height={900}
                priority
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                src="/icons/dental.jpg"
              />
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/5 pointer-events-none" />
            </div>

            {/* User Requested Badge Over Image */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
              className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 z-20"
            >
              <div className="bg-[#E2ECFF] rounded-full border border-[#DDE8FF] p-[6px] shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                <div className="rounded-[24px] bg-gradient-to-b from-[#4273FF] to-[#2E5FDA] text-white px-5 py-2 md:px-8 md:py-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 rounded-[24px] animate-pulse"></div>
                  <p className="text-[#FFFFFF] font-bold text-[12px] md:text-[15px] relative z-10 whitespace-nowrap">Make your clinic operations</p>
                </div>
              </div>
            </motion.div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 blur-[100px] rounded-full -z-10" />
          </motion.div>

          {/* Right Content */}
          <div className="text-left space-y-8 order-1 lg:order-2 lg:pl-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3 ">
              <div className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[#10B981] text-sm font-bold uppercase tracking-widest">
                Trusted by 500+ Dental Professionals
              </p>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-black text-[#020D2C] leading-[1.05] tracking-tight ">
              <span className="relative inline-block ">
                Smart Dental Management

              </span>
              <br />
              <span className="bg-gradient-to-r from-[#3F92FF] via-[#195AFF] to-[#06B6D4] bg-clip-text text-transparent font-extrabold drop-shadow-sm">Software to Simplify</span>
              <br />
              <span className="text-[#020D2C] font-black ">Clinic Operations</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[17px] md:text-[19px] text-[#4E5B7D] max-w-xl leading-relaxed font-medium">
              Manage appointments, patient records, dental treatments, billing, and reports from one secure, easy-to-use dental management system built for modern clinics.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-start items-center pt-4">
              <a className="inline-flex items-center justify-center whitespace-nowrap font-bold transition-all duration-300 h-14 w-full sm:w-auto px-10 rounded-xl text-base bg-[#195AFF] hover:bg-[#1344C3] text-white shadow-xl shadow-blue-500/20" href="https://nigdents.com">
                Start Dental Clinic
              </a>
              <a className="inline-flex items-center justify-center whitespace-nowrap font-bold transition-all duration-300 h-14 w-full sm:w-auto px-10 rounded-xl text-base bg-white border-2 border-[#195AFF] text-[#195AFF] hover:bg-grey-100 hover:text-black-400 shadow-lg" href="/book-demo">
                Book Free Demo
              </a>
            </motion.div>


          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;