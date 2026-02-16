"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BarChart3, FileText, Smartphone, MessageSquare, Cloud } from 'lucide-react';
import { cn } from "@/lib/utils";

const labFeatures = [
  "Single Clinic",
  "Multi speciality", 
  "Super speciality",
  "AI medical intelligence",

];

const HospitalManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Single Clinic");

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
          <h2 className="bg-gradient-to-r from-[#195AFF] via-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">
            Hospital <span className="text-slate-900">Management </span><span className="bg-gradient-to-r from-[#195AFF] via-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">Features</span>
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
                  ? "bg-blue-500 text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] scale-105"
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
            {activeTab === "Single Clinic" && (
              <>
                <Card
                  title="Central Admin"
                  desc="Centralized administration dashboard for managing all clinic operations, staff schedules, and patient appointments from one unified interface."
                  img="/images/niglab1.png"
     
                />
                <Card
                  title="All in One Billing"
                  desc="Comprehensive billing system with OPD/IPD charges, insurance claims, payment tracking, and automated invoice generation."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Dynamic Reports"
                  desc="Real-time reporting with customizable dashboards showing patient analytics, revenue trends, and operational performance metrics."
                  img="/images/niglab3.png"
                 
                />
              </>
            )}

            {activeTab === "Multi speciality" && (
              <>
                <Card
                  title="RBAC Admin"
                  desc="Role-based access control system with department-wise permissions, user management, and secure access to specialized medical modules."
                  img="/images/niglab1.png"
              
                />
                <Card
                  title="Custom Workflow"
                  desc="Tailored workflows for different specialties including cardiology, orthopedics, neurology with specialty-specific forms and protocols."
                  img="/images/niglab2.png"
                 
                />
                <Card
                  title="Modular Apps"
                  desc="Specialized modules for each department with integrated functionality for OPD, IPD, diagnostics, and specialty-specific requirements."
                  img="/images/niglab3.png"
               
                />
              </>
            )}

            {activeTab === "Super speciality" && (
              <>
                <Card
                  title="On-site Team"
                  desc="Dedicated on-site implementation and support team for complex enterprise hospital setups with 24/7 technical assistance."
                  img="/images/niglab1.png"
                  
                />
                <Card
                  title="Protocol Based Customization"
                  desc="Advanced customization based on hospital protocols, compliance requirements, and specialized medical procedures for enterprise needs."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Private AI Infrastructure"
                  desc="Dedicated AI infrastructure with private cloud deployment, advanced analytics, and machine learning capabilities for large hospitals."
                  img="/images/niglab3.png"
                
                />
              </>
            )}

            {activeTab === "AI medical intelligence" && (
              <>
                <Card
                  title="Trend Analysis"
                  desc="Advanced AI-powered trend analysis for patient outcomes, disease patterns, and treatment effectiveness across hospital departments."
                  img="/images/niglab1.png"
            
                />
                <Card
                  title="Treatment Analysis"
                  desc="Intelligent treatment recommendation system analyzing patient history, symptoms, and medical protocols for optimal care decisions."
                  img="/images/niglab2.png"
           
                />
                <Card
                  title="Business Analysis"
                  desc="Comprehensive business intelligence with predictive analytics for resource optimization, revenue forecasting, and operational efficiency."
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
          <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
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

export default HospitalManagement;