"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BarChart3, FileText, Smartphone, MessageSquare, Cloud } from 'lucide-react';
import { cn } from "@/lib/utils";

const labFeatures = [
  "Appointment",
  "Investigation", 
  "Measurements",
  "Treatments",
  "Implants"
];

const DentalManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Appointment");

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
          <h2 className="bg-[#0778fa] bg-clip-text text-transparent font-extrabold drop-shadow-sm text-[32px] md:text-[48px] font-black leading-[120%] mb-4">
            Dental <span className="text-slate-900">Management </span><span className="bg-[#0778fa] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">Features</span>
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
                  ? "bg-blue-600 text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] scale-105"
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
            {activeTab === "Appointment" && (
              <>
                <Card
                  title="Patient Scheduling"
                  desc="Comprehensive appointment booking system with calendar integration, automated reminders, and patient notification management."
                  img="/images/niglab1.png"
     
                />
                <Card
                  title="Appointment Management"
                  desc="Efficient appointment tracking with rescheduling options, cancellation handling, and waitlist management for optimal scheduling."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Patient Records Integration"
                  desc="Seamless integration with patient records for appointment history, treatment plans, and follow-up scheduling."
                  img="/images/niglab3.png"
                 
                />
              </>
            )}

            {activeTab === "Investigation" && (
              <>
                <Card
                  title="Diagnostic Imaging"
                  desc="Advanced X-ray and imaging management with digital storage, analysis tools, and treatment planning integration."
                  img="/images/niglab1.png"
              
                />
                <Card
                  title="Clinical Examination"
                  desc="Comprehensive oral examination tracking with detailed findings, diagnosis recording, and treatment recommendations."
                  img="/images/niglab2.png"
                 
                />
                <Card
                  title="Periodontal Assessment"
                  desc="Detailed periodontal charting with pocket depth measurements, bleeding indices, and gum health monitoring."
                  img="/images/niglab3.png"
            
                />
              </>
            )}

            {activeTab === "Measurements" && (
              <>
                <Card
                  title="Digital Impressions"
                  desc="Precise digital impression capture with 3D modeling capabilities for accurate treatment planning and prosthetic design."
                  img="/images/niglab1.png"
                  
                />
                <Card
                  title="Bite Analysis"
                  desc="Advanced occlusal analysis with bite registration, jaw movement tracking, and TMJ assessment tools."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Tooth Measurements"
                  desc="Detailed tooth dimension recording with crown-root ratios, spacing analysis, and orthodontic measurements."
                  img="/images/niglab3.png"
                
                />
              </>
            )}

            {activeTab === "Treatments" && (
              <>
                <Card
                  title="Treatment Planning"
                  desc="Comprehensive treatment plan creation with procedure sequencing, cost estimation, and timeline management."
                  img="/images/niglab1.png"
            
                />
                <Card
                  title="Procedure Tracking"
                  desc="Real-time treatment progress monitoring with procedure notes, completion status, and follow-up scheduling."
                  img="/images/niglab2.png"
           
                />
                <Card
                  title="Treatment History"
                  desc="Complete treatment record management with before/after photos, procedure outcomes, and patient progress tracking."
                  img="/images/niglab3.png"
                
                />
              </>
            )}

            {activeTab === "Implants" && (
              <>
                <Card
                  title="Implant Planning"
                  desc="Advanced 3D implant planning with surgical guides, bone density analysis, and optimal placement positioning."
                  img="/images/niglab1.png"
            
                />
                <Card
                  title="Surgical Management"
                  desc="Complete surgical workflow management with pre-operative planning, intraoperative guidance, and post-operative care."
                  img="/images/niglab2.png"
           
                />
                <Card
                  title="Prosthetic Integration"
                  desc="Seamless prosthetic design integration with implant specifications, abutment selection, and crown fabrication."
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

export default DentalManagement;