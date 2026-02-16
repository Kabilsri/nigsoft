"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define a type for the feature data
interface Feature {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
}

// Define the feature data for the Blood Bank section
const crmFeatures: Feature[] = [
  {
    id: 1,
    title: 'Capture & Track Every Donor Seamlessly',
    description: 'Manage donor profiles, donation history, eligibility, and screening details in one place with structured workflows and real-time updates.',
    imageAlt: 'Capture & Track Every Donor Seamlessly',
    imageSrc: '/icons/blood4.jpg',
  },
  {
    id: 2,
    title: 'Automate Processes, Improve Availability',
    description: 'Use automated alerts for low stock, expiry dates, donor eligibility, and pending requests to ensure timely action with minimal manual effort.',
    imageAlt: 'Automate Processes, Improve Availability',
    imageSrc: '/icons/blood3.jpg',
  },
  {
    id: 3,
    title: 'Connect Instantly with Hospitals & Teams',
    description: 'Coordinate blood requests, approvals, and fulfillment efficiently with centralized communication and real-time system updates.',
    imageAlt: 'Connect Instantly with Hospitals & Teams',
    imageSrc: '/icons/blood2.jpg',
  },
  {
    id: 4,
    title: 'Controlled Access, Secure Operations',
    description: 'Assign roles, manage permissions, and ensure secure access to sensitive donor and blood data with role-based controls and audit-ready tracking.',
    imageAlt: 'Controlled Access, Secure Operations',
    imageSrc: '/icons/blood1.jpg',
  },
];

const CRMFeaturesSection: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<number>(crmFeatures[0].id);
  const activeFeature = crmFeatures.find(f => f.id === activeFeatureId);

  return (
    <section className="py-[60px] md:py-[120px] px-4 bg-[#EDF5FE]">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full mx-auto text-center font-bold text-[32px] md:text-[48px] font-normal leading-[120%] mb-[16px]"
      >
        Blood Bank System for Faster Response
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[#374577] px-0 md:px-4 mb-[40px] relative w-full md:w-[600px] mx-auto z-40 text-center font-normal text-[16px] md:text-[20px] font-normal leading-[150%]"
      >
        Automate donor coordination, track blood requests, and communicate instantly with hospitals — all from one intelligent blood bank management platform. Respond faster, reduce errors, and scale operations with confidence.
      </motion.p>

      <div className="md:container mx-auto bg-[#EDF5FE] border-[2px] border-[#fff] md:!p-[16px] rounded-[24px] flex flex-col md:flex-col-reverse lg:flex-row items-start justify-center gap-[16px]">

        {/* --- Left Column: Feature Cards Grid --- */}
        <div className="w-full lg:w-3/5">
          {/* Mobile Image (Visible only on small screens) */}
          <div className="h-[300px] sm:h-[500px] mt-[16px] sm:hidden relative">
            <AnimatePresence mode="wait">
              {activeFeature && (
                <motion.div
                  key={activeFeatureId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Image
                    alt={activeFeature.imageAlt}
                    loading="lazy"
                    fill
                    src={activeFeature.imageSrc}
                    className="object-contain rounded-[8px]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            {crmFeatures.map((feature, index) => {
              const isActive = feature.id === activeFeatureId;
              const bgColor = isActive
                ? 'bg-[radial-gradient(360.25%_138.62%_at_5.57%_2.63%,_#2793FF_0%,_#001165_100%)]'
                : 'bg-white';
              const titleColor = isActive ? 'text-white' : 'text-black';
              const descriptionColor = isActive ? 'text-[#E4EAF8]' : 'text-[#373844]';

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
                  <div
                    className={`rounded-[8px] h-fit md:h-[240px] px-[16px] md:px-[24px] py-[24px] transition-all duration-300 cursor-pointer shadow-[inset_0px_0px_10px_0px_rgba(25,90,255,0.10)] ${bgColor}`}
                  >
                    <p className={`font-bold text-[20px] font-normal leading-[120%] mb-[10px] transition-colors duration-300 ${titleColor}`}>
                      {feature.title}
                    </p>
                    <p className={`font-normal text-[16px] font-normal leading-[150%] transition-colors duration-300 ${descriptionColor}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- Right Column: Image Display (Desktop/Large Screen) --- */}
        <div className="w-full lg:w-2/5 hidden sm:block relative h-[300px] md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeatureId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              {activeFeature && (
                <Image
                  alt={activeFeature.imageAlt}
                  loading="lazy"
                  fill
                  src={activeFeature.imageSrc}
                  className="object-contain lg:object-cover rounded-[8px]"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CRMFeaturesSection;