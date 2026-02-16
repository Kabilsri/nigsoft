"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import StatsSection from '@/components/common/stats-section';

// Define a type for the feature data
interface Feature {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
  // Placeholder for the image import/path
  imageSrc: string;
}

// Define the feature data for the blood bank section
const hrFeatures: Feature[] = [
  {
    id: 1,
    title: 'Screening',
    description: 'Testing individuals for specific conditions, diseases, or eligibility, often used in medical, employment, or security contexts.',
    imageAlt: 'Blood Bank Screening Process',
    imageSrc: '/icons/ab.jpg',
  },
  {
    id: 2,
    title: 'Blood Matching',
    description: 'Testing a donor\'s blood type with a recipient\'s to ensure compatibility for a safe transfusion.',
    imageAlt: 'Blood Matching Process',
    imageSrc: '/icons/blood2.jpg',
  },
  {
    id: 3,
    title: 'Blood Group Classification',
    description: 'Classification of blood based on specific antigens on red blood cells, categorized into types A, B, AB, and O, along with the Rh factor.',
    imageAlt: 'Blood Group Classification',
    imageSrc: '/icons/blood3.jpg',
  },
  {
    id: 4,
    title: 'Stock Reports And Details',
    description: 'Detailed information about inventory levels, including quantities of items on hand, usage rates, and reorder points.',
    imageAlt: 'Blood Bank Stock Reports',
    imageSrc: '/icons/blood4.jpg',
  },
];

const HRFeaturesSection: React.FC = () => {
  // State to track the currently active (hovered/selected) feature
  const [activeFeatureId, setActiveFeatureId] = useState<number>(hrFeatures[0].id);
  const activeFeature = hrFeatures.find(f => f.id === activeFeatureId);

  return (

    <section className="py-[5px] md:py-[10px] px-4 bg-white relative overflow-hidden">
      {/* Blood Drop Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-100/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-200/20 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-red-300/10 rounded-full blur-md animate-pulse delay-500" />
      </div>
      
      {/* Heart Icon Background */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-5">
        <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </div>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 mb-6"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
          <span className="text-sm font-bold uppercase tracking-widest text-center">Life-Saving Technology</span>
        </motion.div>
      </div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4 text-center"
      >
        <span className='text-black'>Effortless</span> Blood Bank <span className='text-black'>Operations</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[#374577] px-0 md:px-4 mb-[40px] relative w-full md:w-[600px] mx-auto z-40 text-center  text-[16px] md:text-[20px] font-normal leading-[150%]"
      >
        No more manual registers or disconnected systems. With Nigsoft Blood Bank Management Software, manage donors, blood inventory, screening, and reports from one centralized platform.
      </motion.p>

      <div className="md:container mx-auto bg-gradient-to-br from-red-50 to-white border border-red-100 shadow-2xl shadow-red-500/10 md:!p-[24px] rounded-[32px] flex flex-col lg:flex-row items-center justify-center gap-[24px] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-200/30 to-transparent rounded-full blur-xl" />

        {/* --- Left Column: Image Display (Desktop/Large Screen) --- */}
        <div className="w-full lg:w-2/5 ">
          <Image
            alt="Blood Bank Management Dashboard"
            loading="lazy"
            width={500}
            height={400}
            src="/icons/ab.jpg"
            className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* --- Right Column: Feature Cards Grid --- */}
        <div className="w-full lg:w-3/5">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            {hrFeatures.map((feature, index) => {
              const isActive = feature.id === activeFeatureId;
              const bgColor = isActive
                ? 'bg-gradient-to-br from-red-600 via-red-700 to-red-900'
                : 'bg-white';
              const titleColor = isActive ? 'text-white' : 'text-black';
              const descriptionColor = isActive ? 'text-red-50' : 'text-[#373844]';

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col px-[16px] md:px-0"
                  onMouseEnter={() => setActiveFeatureId(feature.id)}
                >
                  <motion.div
                    className={`rounded-[16px] h-fit md:h-[240px] px-[20px] md:px-[28px] py-[28px] transition-all duration-500 cursor-pointer border-2 ${isActive ? 'border-red-300 shadow-xl shadow-red-500/20' : 'border-red-100 hover:border-red-200'} ${bgColor} relative overflow-hidden group`}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    {/* Pulse effect for active card */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-700/10 animate-pulse" />
                    )}
                    
                    {/* Blood drop icon */}
                    <div className={`absolute top-4 right-4 w-6 h-6 rounded-full ${isActive ? 'bg-red-200/30' : 'bg-red-100'} flex items-center justify-center transition-all duration-300`}>
                      <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-white' : 'bg-red-500'} transition-all duration-300`} />
                    </div>
                    
                    <div className="relative z-10">
                      <p className={`font-bold text-[20px] font-normal leading-[120%] mb-[12px] transition-colors duration-300 ${titleColor}`}>
                        {feature.title}
                      </p>
                      <p className={`font-medium text-[16px] font-normal leading-[150%] transition-colors duration-300 ${descriptionColor}`}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Grow2WithStats: React.FC = () => {
  return (
    <>
      <HRFeaturesSection />
      <StatsSection />
    </>
  );
};

export default Grow2WithStats;