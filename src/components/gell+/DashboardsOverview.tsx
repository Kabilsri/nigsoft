"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const featureIcons = {
  tracking: (
    <svg width="81" height="53" viewBox="0 0 81 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.5 5.3C49.9 5.3 58.7 10.4 65.4 18.5C72 26.6 75.8 37.1 75.8 47.8H81C81 35.8 76.7 24 69.3 14.9C61.9 5.8 51.5 0.1 40.5 0.1C29.5 0.1 19.1 5.8 11.7 14.9C4.3 24 0 35.8 0 47.8H5.2C5.2 37.1 9 26.6 15.6 18.5C22.3 10.4 31.1 5.3 40.5 5.3Z" fill="url(#paint0_linear_242_479)" />
      <path d="M40.5 21.2C44.7 21.2 48.7 22.9 51.7 25.9C54.7 28.9 56.4 33 56.4 37.2C56.4 41.4 54.7 45.5 51.7 48.5C48.7 51.5 44.7 53.2 40.5 53.2C36.3 53.2 32.2 51.5 29.2 48.5C26.2 45.5 24.5 41.4 24.5 37.2C24.5 33 26.2 28.9 29.2 25.9C32.2 22.9 36.3 21.2 40.5 21.2ZM40.5 47.9C43.3 47.9 46.1 46.8 48.1 44.8C50.1 42.8 51.2 40.1 51.2 37.2C51.2 34.3 50.1 31.6 48.1 29.6C46.1 27.6 43.3 26.5 40.5 26.5C37.7 26.5 34.9 27.6 32.9 29.6C30.9 31.6 29.8 34.3 29.8 37.2C29.8 40.1 30.9 42.8 32.9 44.8C34.9 46.8 37.7 47.9 40.5 47.9Z" fill="url(#paint1_linear_242_479)" />
      <defs>
        <linearGradient id="paint0_linear_242_479" x1="0" y1="26.65" x2="81" y2="26.65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#195AFF" />
          <stop offset="1" stopColor="#0ABC19" />
        </linearGradient>
        <linearGradient id="paint1_linear_242_479" x1="24.5" y1="37.2" x2="56.4" y2="37.2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#195AFF" />
          <stop offset="1" stopColor="#0ABC19" />
        </linearGradient>
      </defs>
    </svg>
  ),
  payments: (
    <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.2 2.2H7.8C4.7 2.2 2.2 4.7 2.2 7.8V46.2C2.2 49.3 4.7 51.8 7.8 51.8H47.2C50.3 51.8 52.8 49.3 52.8 46.2V7.8C52.8 4.7 50.3 2.2 47.2 2.2ZM47.2 46.2H7.8V18.1H47.2V46.2ZM47.2 12.6H7.8V7.8H47.2V12.6ZM13.1 36.1H28.8V40.9H13.1V36.1ZM13.1 26.5H39.3V31.3H13.1V26.5Z" fill="url(#paint0_linear_242_486)" />
      <defs>
        <linearGradient id="paint0_linear_242_486" x1="2.2" y1="27" x2="52.8" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#195AFF" />
          <stop offset="1" stopColor="#0561FF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  ratings: (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 2.2L34.1 16.6L50 18.9L38.5 30.1L41.2 45.9L27 38.4L12.8 45.9L15.5 30.1L4 18.9L19.9 16.6L27 2.2Z" fill="url(#paint0_linear_242_492)" />
      <defs>
        <linearGradient id="paint0_linear_242_492" x1="4" y1="24.05" x2="50" y2="24.05" gradientUnits="userSpaceOnUse">
          <stop stopColor="#195AFF" />
          <stop offset="1" stopColor="#0561FF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  profile: (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 2.2C19.7 2.2 13.8 8.1 13.8 15.4C13.8 22.7 19.7 28.6 27 28.6C34.3 28.6 40.2 22.7 40.2 15.4C40.2 8.1 34.3 2.2 27 2.2ZM27 23.4C22.6 23.4 19 19.8 19 15.4C19 11 22.6 7.4 27 7.4C31.4 7.4 35 11 35 15.4C35 19.8 31.4 23.4 27 23.4ZM40.2 33.8C40.2 33.8 38.2 31.7 33 31.7C27.8 31.7 13.8 31.7 11.1 31.7C5.9 31.7 2.2 35.4 2.2 40.6V51.8H51.8V40.6C51.8 35.4 48.1 31.7 42.9 31.7C42.1 31.7 40.2 33.8 40.2 33.8ZM7.4 46.6V40.6C7.4 38.3 9.1 36.5 11.4 36.5H42.6C44.9 36.5 46.6 38.3 46.6 40.6V46.6H7.4Z" fill="url(#paint0_linear_242_504)" />
      <defs>
        <linearGradient id="paint0_linear_242_504" x1="2.2" y1="27" x2="51.8" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#195AFF" />
          <stop offset="1" stopColor="#0561FF" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

const DashboardsOverview: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="bg-[#F5F8FF] py-20 md:py-40 px-4 md:px-0 overflow-hidden">
      <div className="container mx-auto max-w-[1280px]">
        {/* Header Text */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[40px] font-bold leading-[120%] text-[#090D28] mb-4"
          >
            Powerful Dashboards for Clinics & Hospitals
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#373844] font-normal text-[16px] md:text-[20px] leading-[150%] max-w-[800px] mx-auto"
          >
            Get real-time insights into clinic operations, patient activity, billing, and staff performance through a secure and easy-to-use dashboard.
          </motion.p>
        </div>

        {/* Mobile App Screenshots Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-32 flex justify-center w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full max-w-[1000px] px-4 md:px-0">
            {/* Screen 1 */}
            <div
              className="relative perspective-[1500px] group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="relative transition-transform duration-300 ease-out shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[48px] overflow-hidden bg-white border-[12px] border-[#1a1a1a] aspect-[9/19.5] w-full"
                style={{
                  transform: `rotateX(${rotation.y / 2}deg) rotateY(${rotation.x / 2}deg) scale(1)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Dynamic Island Mockup */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full z-30"></div>

                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03db9a00-2796-451a-a02b-b3aebd269946-vilvabusiness-com/assets/images/images_10.png"
                  alt="Gell Plus Mobile Screen 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Screen 2 */}
            <div
              className="relative perspective-[1500px] group md:-mt-12"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="relative transition-transform duration-300 ease-out shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[48px] overflow-hidden bg-white border-[12px] border-[#1a1a1a] aspect-[9/19.5] w-full"
                style={{
                  transform: `rotateX(${rotation.y / 2}deg) rotateY(${rotation.x / 2}deg) scale(1)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Dynamic Island Mockup */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full z-30"></div>

                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03db9a00-2796-451a-a02b-b3aebd269946-vilvabusiness-com/assets/images/images_10.png"
                  alt="Gell Plus Mobile Screen 2"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Screen 3 */}
            <div
              className="relative perspective-[1500px] group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="relative transition-transform duration-300 ease-out shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[48px] overflow-hidden bg-white border-[12px] border-[#1a1a1a] aspect-[9/19.5] w-full"
                style={{
                  transform: `rotateX(${rotation.y / 2}deg) rotateY(${rotation.x / 2}deg) scale(1)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Dynamic Island Mockup */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full z-30"></div>

                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03db9a00-2796-451a-a02b-b3aebd269946-vilvabusiness-com/assets/images/images_10.png"
                  alt="Gell Plus Mobile Screen 3"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {/* Feature Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="h-14 mb-4 flex items-center justify-center">
              {featureIcons.tracking}
            </div>
            <h4 className="text-[22px] font-bold text-black leading-[120%] mb-3">
              Track Appointments & Visits
            </h4>
            <p className="text-[#373844] text-[16px] md:text-[18px] leading-[150%]">
              Monitor patient appointments, consultations, and visit history from a single dashboard.
            </p>
          </motion.div>

          {/* Feature Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="h-14 mb-4 flex items-center justify-center">
              {featureIcons.payments}
            </div>
            <h4 className="text-[22px] font-bold text-black leading-[120%] mb-3">
              Manage Payments & Invoices

            </h4>
            <p className="text-[#373844] text-[16px] md:text-[18px] leading-[150%]">
              Manage invoices, insurance claims, payments, and financial records with ease.
            </p>
          </motion.div>

          {/* Feature Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="h-14 mb-4 flex items-center justify-center">
              {featureIcons.ratings}
            </div>
            <h4 className="text-[22px] font-bold text-black leading-[120%] mb-3">
              User Feedback & Reviews
            </h4>
            <p className="text-[#373844] text-[16px] md:text-[18px] leading-[150%]">
              Collect user feedback to improve service quality and patient satisfaction.

            </p>
          </motion.div>

          {/* Feature Item 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="h-14 mb-4 flex items-center justify-center">
              {featureIcons.profile}
            </div>
            <h4 className="text-[22px] font-bold text-black leading-[120%] mb-3">
              User & Staff Management

            </h4>
            <p className="text-[#373844] text-[16px] md:text-[18px] leading-[150%]">
              Manage doctors, staff roles, permissions, and clinic settings securely.

            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardsOverview;