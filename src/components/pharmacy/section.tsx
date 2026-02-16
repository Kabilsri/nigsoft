"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BarChart3, FileText, Smartphone, MessageSquare, Cloud } from 'lucide-react';
import { cn } from "@/lib/utils";

const labFeatures = [
  "Single store",
  "Chain store", 
  "Integrated store",
  "Distributor",

];

const LabManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Single store");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <section className="relative pt-[56px] md:pt-14 pb-[80px] md:pb-[120px] overflow-hidden font-sans">
      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="bg-gradient-to-b from-[#00D527] to-[#00930F] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">
            Pharmacy <span className="text-slate-900">Management </span><span className="bg-gradient-to-b from-[#00D527] to-[#00930F]  bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">Features</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Streamline your pharmacy operations with our comprehensive suite of intelligent management tools designed for modern healthcare facilities.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {labFeatures.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "h-10 rounded-full px-6 text-sm font-bold transition-all duration-300",
                activeTab === tab
                  ? "bg-green-600 text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] scale-105"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {activeTab === "Single store" && (
              <>
                <Card
                  title="Central Admin"
                  desc="Centralized administration dashboard for managing all pharmacy operations, staff, and system settings from one location."
                  img="/images/niglab1.png"
     
                />
                <Card
                  title="All in One Billing"
                  desc="Comprehensive billing system with prescription processing, insurance claims, payment tracking, and integrated POS functionality."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Dynamic Report"
                  desc="Real-time reporting with customizable dashboards showing sales, inventory, customer analytics, and financial performance."
                  img="/images/niglab3.png"
                 
                />
              </>
            )}

            {activeTab === "Chain store" && (
              <>
                <Card
                  title="Central Admin"
                  desc="Unified administration system for managing multiple pharmacy locations with centralized control and oversight."
                  img="/images/niglab1.png"
              
                />
                <Card
                  title="Storewise Billing"
                  desc="Individual billing systems for each store location with consolidated reporting and inter-branch transaction tracking."
                  img="/images/niglab2.png"
                 
                />
                <Card
                  title="Storewise Report"
                  desc="Location-specific reporting with performance comparisons, profitability analysis, and consolidated chain-wide insights."
                  img="/images/niglab3.png"
               
                />
              </>
            )}

            {activeTab === "Integrated store" && (
              <>
                <Card
                  title="NigDoc Integration"
                  desc="Seamless integration with NigDoc hospital management system for unified patient records and prescription management."
                  img="/images/niglab1.png"
                  
                />
                <Card
                  title="Dynamic Pricing"
                  desc="Flexible pricing system with discount management, insurance integration, and automated price adjustments based on market conditions."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Store Admin"
                  desc="Comprehensive store administration with staff management, inventory control, and operational workflow optimization."
                  img="/images/niglab3.png"
                
                />
              </>
            )}

            {activeTab === "Distributor" && (
              <>
                <div className="col-span-full flex items-center justify-center py-20">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-slate-400 mb-4">Coming Soon</h3>
                    <p className="text-slate-500 text-lg">Distributor management features are under development</p>
                  </div>
                </div>
              </>
            )}

            
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* -------------------- REUSABLE CARD -------------------- */
function Card({
  title,
  desc,
  img = "/icons/report.png",
  icon
}: {
  title: string;
  desc: string;
  img?: string;
  icon?: React.ReactNode;
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as any
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative z-10">
        {/* <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-2 mb-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
          <img src={img} alt={title} className="w-full h-auto drop-shadow-2xl rounded-2xl object-cover object-right" />
        </div> */}
        
        <div className="flex items-center gap-3 mb-4">
          {/* <div className="p-3 bg-gradient-to-br from-[#3F92FF] to-[#2563eb] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div> */}
          <h3 className="text-xl font-black text-slate-900 group-hover:text-green-500 transition-colors tracking-tight">
            {title}
          </h3>
        </div>
        
        <p className="text-slate-500 font-medium leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default LabManagement;