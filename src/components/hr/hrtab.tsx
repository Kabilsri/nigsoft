"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BarChart3, FileText, Smartphone, MessageSquare, Cloud } from 'lucide-react';
import { cn } from "@/lib/utils";

const labFeatures = [
  "Organization Setup",
  "Attendance Management", 
  "Payroll",
  "Employement",
  "Performance"

];

const Hr: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Organization Setup");

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
          <h2 className="bg-[#48A8F4] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">
            HR <span className="text-slate-900">Management </span><span className="bg-[#48A8F4] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">Features</span>
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
                  ? "bg-[#48A8F4] text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] scale-105"
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
            {activeTab === "Organization Setup" && (
              <>
                <Card
                  title="Staff Management"
                  desc="Comprehensive employee database with personal details, job roles, department assignments, and organizational hierarchy management."
                  img="/images/niglab1.png"
     
                />
                <Card
                  title="Staff Login"
                  desc="Secure employee portal with role-based access, personal dashboard, and self-service features for staff members."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Department Setup"
                  desc="Organizational structure configuration with department creation, hierarchy management, and reporting relationships."
                  img="/images/niglab3.png"
                 
                />
              </>
            )}

            {activeTab === "Attendance Management" && (
              <>
                <Card
                  title="Shift Roster"
                  desc="Advanced shift scheduling with automated roster generation, shift swapping, and coverage management for optimal staffing."
                  img="/images/niglab1.png"
              
                />
                <Card
                  title="Leave Management"
                  desc="Comprehensive leave tracking system with leave balance calculation, approval workflows, and holiday calendar integration."
                  img="/images/niglab2.png"
                 
                />
                <Card
                  title="Biometric Integration"
                  desc="Seamless integration with biometric devices for accurate time tracking, attendance monitoring, and automated payroll calculations."
                  img="/images/niglab3.png"
               
                />
              </>
            )}

            {activeTab === "Payroll" && (
              <>
                <Card
                  title="Payslip"
                  desc="Automated payslip generation with detailed salary breakdowns, deductions, tax calculations, and digital distribution to employees."
                  img="/images/niglab1.png"
                  
                />
                <Card
                  title="Salary Segments"
                  desc="Flexible salary structure configuration with multiple components, allowances, deductions, and customizable pay scales."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Reports"
                  desc="Comprehensive payroll reports including salary registers, tax statements, provident fund reports, and compliance documentation."
                  img="/images/niglab3.png"
                
                />
              </>
            )}

            {activeTab === "Employement" && (
              <>
                <Card
                  title="Offer Letter"
                  desc="Automated offer letter generation with customizable templates, terms and conditions, and digital signature integration."
                  img="/images/niglab1.png"
            
                />
                <Card
                  title="On-boarding"
                  desc="Streamlined employee onboarding process with document collection, orientation scheduling, and new hire workflow management."
                  img="/images/niglab2.png"
           
                />
                <Card
                  title="Training"
                  desc="Comprehensive training management with course assignments, progress tracking, certification management, and skill development programs."
                  img="/images/niglab3.png"
                
                />
              </>
            )}
            {activeTab === "Performance" && (
              <>
                <Card
                  title="KPI Performance"
                  desc="Key Performance Indicator tracking with goal setting, performance measurement, and automated evaluation reports for employee assessment."
                  img="/images/niglab1.png"
            
                />
                <Card
                  title="KRI Document"
                  desc="Key Risk Indicator documentation and monitoring system for identifying potential HR risks and compliance issues."
                  img="/images/niglab2.png"
           
                />
                <Card
                  title="Incident Tracker"
                  desc="Comprehensive incident tracking system for workplace issues, disciplinary actions, and resolution management with audit trails."
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
      className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-[#48A8F4] transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative z-10">
        {/* <div className="bg-blue-50  rounded-3xl p-2 mb-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
          <img src={img} alt={title} className="w-full h-auto drop-shadow-2xl rounded-2xl object-cover object-right" />
        </div> */}
        
        <div className="flex items-center gap-3 mb-4">
          {/* <div className="p-3 bg-gradient-to-br from-[#3F92FF] to-[#2563eb] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div> */}
          <h3 className="text-xl font-black text-slate-900 group-hover:text-[#48A8F4] transition-colors tracking-tight">
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

export default Hr;