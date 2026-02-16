"use client";


import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  title?: string;
  value: string;
  description: string;
  className?: string;
  isCompliance?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, description, className = "", isCompliance = false }) => (
  <div className={`bg-white/20 backdrop-blur-sm p-[3px] rounded-[16px] shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
    <div className="bg-gradient-to-br from-white via-blue-50/50 to-blue-100/30 rounded-[13px] p-6 h-full flex flex-col justify-between border border-white/50">
      {title && <div className="text-[11px] font-semibold text-blue-600/80 uppercase tracking-wider mb-2">{title}</div>}
      <div className="flex-grow flex items-center">
        <div className="text-[36px] md:text-[42px] font-black text-slate-800 leading-[0.9] flex flex-col">
          {value}
          {isCompliance && <span className="text-xs font-bold text-green-600 mt-1 px-2 py-1 bg-green-100 rounded-full w-fit">Compliance-Ready</span>}
        </div>
      </div>
      <div className="text-[11px] font-medium text-slate-600 leading-[1.4] mt-3">{description}</div>
    </div>
  </div>
);

const FintechHero: React.FC = () => {
  const partners = [
    "https://api.builder.io/api/v1/image/assets/TEMP/d9b299d2c20acb7d362f5f239cf5a3e5883fb9bf?width=236",
    "https://api.builder.io/api/v1/image/assets/TEMP/d0130017a16fdcd8a334b69e431c5be3afa851c7?width=354",
    "https://api.builder.io/api/v1/image/assets/TEMP/c1d31a60d22f8e32f8f22fab340d15c69933a605?width=236",
    "https://api.builder.io/api/v1/image/assets/TEMP/5abb0192fa1711125ba6d7b38027f2fe30949483?width=260"
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFF_17.6%,#48A8F4_100%)] relative overflow-hidden font-sans">
      {/* Background Image */}
      {/* <div className="absolute inset-0 top-0">
        <img
          alt="Background"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglobal.ddc4dfda.webp&w=3840&q=75"
          className="mix-blend-mode-darker absolute h-full w-full inset-0 object-cover object-center color-transparent"
        />
      </div> */}

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center px-4 py-10 lg:py-17">
          <div className="w-full space-y-[24px]">

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="my-4 z-20 w-full relative max-w-[1100px] mx-auto text-[#090D28] text-center text-[32px] sm:text-[40px] md:text-[56px] lg:text-[68px] font-black leading-tight px-2"
              >
                The Smartest Way to Manage & Scale Your Workforce
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-[20px] text-[#476C88] max-w-[800px] mx-auto px-4"
              >
                A powerful HR management platform designed to streamline employee operations, automate payroll, ensure compliance, and improve workforce productivity — all from one secure dashboard.
              </motion.p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 w-full ">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                href="/book-demo"
                className="w-full sm:w-auto text-center bg-transparent border-2 border-[#195AFF] rounded-[12px] text-[#195AFF] px-[32px] py-[14px] md:py-[16px] font-semibold hover:bg-blue-50 transition-colors"
              >
                Book Demo
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                href="https://nighr.com"
                className="w-full sm:w-auto text-center bg-[#195AFF] border-2 border-[#195AFF] rounded-[12px] text-white px-[32px] py-[14px] md:py-[16px] font-semibold hover:bg-[#154acc] transition-colors"
              >
                Log In
              </motion.a>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="px-4 lg:px-0 mb-12">
          <div className="w-full max-w-[343px] md:max-w-4xl lg:max-w-[1100px] mx-auto">
            {/* Responsive Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
            >
              {/* Employee Records Card */}
              <div className="md:col-span-2 lg:col-span-1">
                <MetricCard
                  value="100K+"
                  description="Employee records, attendance logs, and payroll processes efficiently managed"
                  className="h-full"
                />
              </div>

              {/* Organizations Card */}
              <div className="md:col-span-2 lg:col-span-1">
                <div className="bg-white/20 backdrop-blur-sm p-[3px] rounded-[16px] shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="bg-gradient-to-br from-white via-blue-50/50 to-blue-100/30 rounded-[13px] border border-white/50 h-full flex flex-col justify-center p-6 text-left">
                    <div className="text-[36px] md:text-[42px] font-black text-slate-800 leading-none mb-3">10+</div>
                    <div className="text-[11px] font-medium text-slate-600 leading-[1.4]">Organizations empowered with smarter HR operations over 5 years</div>
                  </div>
                </div>
              </div>

              {/* Implementation Time Card */}
              <div className="md:col-span-1 lg:col-span-1">
                <MetricCard
                  title="Implementation Time"
                  value="48 Hrs"
                  description="Average onboarding time for new organizations"
                  className="h-full"
                />
              </div>

              {/* Compliance Card */}
              <div className="md:col-span-1 lg:col-span-1">
                <MetricCard
                  value="100%"
                  // isCompliance={true}
                  description="Built to support statutory requirements and audit-ready HR operations"
                  className="h-full"
                />
              </div>
            </motion.div>

            {/* Enterprise Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-1"
            >
              <MetricCard
                title="Supporting Businesses"
                value="Growth to Enterprise"
                description="Scalable HR solutions that grow with your organization - from startups to large enterprises"
                className="w-full"
              />
            </motion.div>

            {/* Partners Bar */}
            {/* <div className="bg-[#FFFFFF33] p-[2px] rounded-[12px] mt-4">
              <div className="bg-gradient-to-b from-white to-[#D6ECFC] rounded-[8px] p-[14px] lg:p-5 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="text-sm text-[#696969] font-medium text-center lg:text-left lg:w-[155px]">
                    Trusted by Growing Companies & Enterprise Teams
                  </div>
                  {/* <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-10">
                    {partners.map((src, index) => (
                      <img key={index} src={src} alt="Partner logo" className="h-8 lg:h-10 w-auto object-contain" />
                    ))}
                  </div> */}
            {/* </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FintechHero;