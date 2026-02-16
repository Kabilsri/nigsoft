"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface StatCard {
  percentage: string;
  title: string;
  description: string;
}

interface StatsSectionProps {
  title?: string;
  description?: string;
  stats?: StatCard[];
}

const defaultStats: StatCard[] = [
  {
    percentage: "45%",
    title: "Faster Operational Workflows ↑",
    description: "Automated donor registration, inventory updates, and request handling reduce manual effort and speed up daily blood bank operations."
  },
  {
    percentage: "32%",
    title: "Faster Blood Request Fulfillment ↑",
    description: "Real-time stock visibility and compatibility checks enable quicker response to hospital and emergency blood requests."
  },
  {
    percentage: "50%",
    title: "Improved Inventory Efficiency ↑",
    description: "Centralized management of blood units, components, expiry tracking, and usage minimizes wastage and optimizes stock utilization."
  },
  {
    percentage: "38%",
    title: "Better Compliance & Reporting Accuracy ↑",
    description: "Automated records, audit-ready reports, and role-based access help maintain regulatory compliance and data accuracy."
  }
];

const StatsSection: React.FC<StatsSectionProps> = ({
  title = "Built to Simplify, Scale & Save Lives",
  description = "Nigsoft Blood Bank Management Software unifies donor management, blood inventory, testing, distribution, and analytics into one intelligent platform. It automates critical workflows, provides real-time visibility, and helps blood banks operate efficiently as demand grows—whether you manage a single center or a large hospital network.",
  stats = defaultStats
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-[60px] md:py-[120px] bg-white relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        // className="w-full h-[349px] rounded-[1143px] bg-red-500 absolute -bottom-[250px] left-1/2 -translate-x-1/2 blur-[100px] flex-shrink-0"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        // className="w-full md:w-[619px] h-[211px] flex-shrink-0 rounded-[619px] bg-red-300 absolute -bottom-[150px] left-1/2 -translate-x-1/2 blur-[100px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="flex container mx-auto flex-col gap-[16px] md:flex-row justify-between mb-[40px] md:mb-[96px] items-start px-4 md:px-0 relative z-10"
      >
        <h3 className="text-black w-full md:w-1/2 gap-[16px] font-bold text-[36px] md:text-[52px] leading-[120%]">
          {title}
        </h3>
        <p className="text-black w-full md:w-1/2 font-normal text-[16px] md:text-[18px] leading-[150%] opacity-80">
          {description}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid px-4 container mx-auto grid-cols-1 sm:grid-cols-2 gap-[32px] lg:grid-cols-4 relative z-20"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative z-50 group overflow-hidden"
          >
            <div className="rounded-[0px_24px] relative z-50 overflow-hidden border border-red-200/20 bg-gradient-to-b from-red-500/10 to-red-600/10 backdrop-blur-[10px] p-6 h-full transition-colors duration-500 group-hover:bg-red-500/10">
              <div className="rounded-[4px] w-fit mb-[10px] bg-red-700 p-1">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <p className="text-[48px] mb-1 leading-[120%] text-red-400 font-bold">{stat.percentage}</p>
              <p className="text-[20px] mb-4 leading-[100%] text-black-500 font-semibold">{stat.title}</p>
              <p className="text-[14px] leading-[150%] text-gray-600 font-normal">{stat.description}</p>
            </div>
            <div className="absolute inset-0 rounded-[0px_24px] bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;