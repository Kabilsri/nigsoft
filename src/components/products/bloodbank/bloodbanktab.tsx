"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BarChart3, FileText, Smartphone, MessageSquare, Cloud } from 'lucide-react';
import { cn } from "@/lib/utils";

const labFeatures = [
  "Directory",
  "Sourcing", 
  "Hospital Networks",
  "Manage Requests"
];

const Bloodblank: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Directory");

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
          <h2 className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">
            Blood Bank <span className="text-slate-900">Management </span><span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">Features</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Streamline your blood bank operations with our comprehensive suite of intelligent management tools designed for modern healthcare facilities.
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
                  ? "bg-red-500 text-white shadow-[0_10px_20px_-5px_rgba(239,68,68,0.4)] scale-105"
                  : "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200"
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
            {activeTab === "Directory" && (
              <>
                <Card
                  title="Donor Database"
                  desc="Comprehensive donor registry with contact information, blood type, donation history, and health records."
                  img="/images/niglab1.png"
     
                />
                <Card
                  title="Blood Unit Catalog"
                  desc="Complete inventory of available blood units with type, collection date, expiry, and compatibility information."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Staff Directory"
                  desc="Organized staff database with roles, certifications, contact details, and shift scheduling information."
                  img="/images/niglab3.png"
                 
                />
              </>
            )}

            {activeTab === "Sourcing" && (
              <>
                <Card
                  title="Donor Recruitment"
                  desc="Automated donor outreach campaigns with targeted messaging, appointment scheduling, and follow-up reminders."
                  img="/images/niglab1.png"
              
                />
                <Card
                  title="Mobile Collection Units"
                  desc="Coordinate mobile blood drives with route planning, equipment tracking, and on-site collection management."
                  img="/images/niglab2.png"
                 
                />
                <Card
                  title="Emergency Sourcing"
                  desc="Rapid response system for critical blood shortages with emergency donor alerts and priority collection."
                  img="/images/niglab3.png"
               
                />
              </>
            )}

            {activeTab === "Hospital Networks" && (
              <>
                <Card
                  title="Partner Hospital Registry"
                  desc="Maintain network of partner hospitals with contact information, blood requirements, and delivery preferences."
                  img="/images/niglab1.png"
                  
                />
                <Card
                  title="Supply Chain Management"
                  desc="Coordinate blood distribution across hospital network with delivery tracking and inventory synchronization."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Network Analytics"
                  desc="Monitor network performance with demand forecasting, supply optimization, and partnership effectiveness metrics."
                  img="/images/niglab3.png"
                
                />
              </>
            )}

            {activeTab === "Manage Requests" && (
              <>
                <Card
                  title="Blood Request Processing"
                  desc="Streamlined request handling with priority classification, compatibility checking, and automated fulfillment."
                  img="/images/niglab1.png"
            
                />
                <Card
                  title="Emergency Response"
                  desc="24/7 emergency request system with instant alerts, rapid processing, and priority delivery coordination."
                  img="/images/niglab2.png"
           
                />
                <Card
                  title="Request Tracking"
                  desc="Complete request lifecycle management with status updates, delivery confirmation, and feedback collection."
                  img="/images/niglab3.png"
                
                />
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
      className="group relative bg-white rounded-[2.5rem] p-8 border border-red-100 shadow-xl shadow-red-200/30 hover:shadow-2xl hover:border-red-200 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative z-10">
        {/* <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-2 mb-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
          <img src={img} alt={title} className="w-full h-auto drop-shadow-2xl rounded-2xl object-cover object-right" />
        </div> */}
        
        <div className="flex items-center gap-3 mb-4">
          {/* <div className="p-3 bg-gradient-to-br from-[#3F92FF] to-[#2563eb] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div> */}
          <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">
            {title}
          </h3>
        </div>
        
        <p className="text-slate-500 font-medium leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default Bloodblank;