"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BarChart3, FileText, Smartphone, MessageSquare, Cloud } from 'lucide-react';
import { cn } from "@/lib/utils";

const labFeatures = [
  "Appoinment",
  "B2B", 
  "Test Report",
  "Integration",

];

const LabManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Appoinment");

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
          <h2 className="bg-gradient-to-r from-[#3F92FF] to-[#06B6D4] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">
            Lab <span className="text-slate-900">Management </span><span className="bg-gradient-to-r from-[#3F92FF] to-[#06B6D4] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">Features</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Streamline your laboratory operations with our comprehensive suite of intelligent management tools designed for modern healthcare facilities.
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
                  ? "bg-gradient-to-r from-[#3F92FF] to-[#06B6D4] text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] scale-105"
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
            {activeTab === "Appoinment" && (
              <>
                <Card
                  title="Smart Appointment Scheduling"
                  desc="Intelligent booking system with automated slot management, patient reminders, and real-time availability updates."
                  img="/images/niglab1.png"
     
                />
                <Card
                  title="Multi-Channel Booking"
                  desc="Accept appointments through web portal, mobile app, phone calls, and walk-ins with unified scheduling."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Automated Notifications"
                  desc="Send SMS and email reminders to patients with appointment confirmations, rescheduling options, and test preparation instructions."
                  img="/images/niglab3.png"
                 
                />
              </>
            )}

            {activeTab === "B2B" && (
              <>
                <Card
                  title="Corporate Lab Partnerships"
                  desc="Streamlined B2B pricing models with volume discounts, corporate billing, and dedicated account management."
                  img="/images/niglab1.png"
              
                />
                <Card
                  title="Bulk Order Management"
                  desc="Handle large-scale corporate health checkups, employee screenings, and bulk test orders with automated processing."
                  img="/images/niglab2.png"
                 
                />
                <Card
                  title="Enterprise Reporting"
                  desc="Generate comprehensive corporate reports with analytics, trends, and health insights for business clients."
                  img="/images/niglab3.png"
               
                />
              </>
            )}

            {activeTab === "Test Report" && (
              <>
                <Card
                  title="Professional Report Templates"
                  desc="Design professional lab reports with your branding, logos, and custom formatting options for consistent presentation."
                  img="/images/niglab1.png"
                  
                />
                <Card
                  title="Instant Report Generation"
                  desc="Generate complete lab reports in under 30 seconds with automated data population and formatting."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Digital Report Distribution"
                  desc="Share reports instantly via email, SMS, or secure patient portals with download options and access tracking."
                  img="/images/niglab3.png"
                
                />
              </>
            )}

            {activeTab === "Integration" && (
              <>
                <Card
                  title="Nigdoc"
                  desc="Access your lab system seamlessly on desktop, tablet, and mobile devices without any installations."
                  img="/images/niglab1.png"
            
                />
                <Card
                  title="Medical device"
                  desc="Work from anywhere with internet connectivity - no complex setups or local server requirements."
                  img="/images/niglab2.png"
           
                />
                <Card
                  title="AI integration"
                  desc="All data syncs instantly across devices ensuring consistent information everywhere you work."
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
      className="group relative bg-white rounded-[2.5rem] p-8 border border-blue-100 shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative z-10">
        {/* <div className="bg-gradient-to-br from-[#3F92FF]/10 to-[#06B6D4]/10 rounded-3xl p-2 mb-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
          <img src={img} alt={title} className="w-full h-auto drop-shadow-2xl rounded-2xl object-cover object-right" />
        </div>
         */}
        <div className="flex items-center gap-3 mb-4">
          {/* <div className="p-3 bg-gradient-to-br from-[#3F92FF] to-[#2563eb] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div> */}
          <h3 className="text-xl font-black text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#3F92FF] group-hover:to-[#06B6D4] group-hover:bg-clip-text transition-all tracking-tight">
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