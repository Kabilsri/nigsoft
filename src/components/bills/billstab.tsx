"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BarChart3, FileText, Smartphone, MessageSquare, Cloud } from 'lucide-react';
import { cn } from "@/lib/utils";

const labFeatures = [
  "Company Setup",
  "Price Engine", 
  "Discount Manager",
  "Stock Management",
  "Import/Export"
];

const Billstab: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Company Setup");

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
          <h2 className="bg-[#f9c700] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">
            Billing <span className="text-slate-900">Management </span><span className="bg-bg-[#f9c700] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">Features</span>
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
                  ? "bg-[#f9c700] text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] scale-105"
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
            {activeTab === "Company Setup" && (
              <>
                <Card
                  title="Business Configuration"
                  desc="Complete company profile setup with business details, tax information, and regulatory compliance settings."
                  img="/images/niglab1.png"
     
                />
                <Card
                  title="Branch Management"
                  desc="Multi-location support with branch-specific settings, user permissions, and centralized administration."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="User Role Management"
                  desc="Comprehensive user access control with role-based permissions, department assignments, and security settings."
                  img="/images/niglab3.png"
                 
                />
              </>
            )}

            {activeTab === "Price Engine" && (
              <>
                <Card
                  title="Dynamic Pricing Rules"
                  desc="Flexible pricing engine with rule-based calculations, tier-based pricing, and automated price adjustments."
                  img="/images/niglab1.png"
              
                />
                <Card
                  title="Service Rate Management"
                  desc="Comprehensive service pricing with category-based rates, seasonal adjustments, and competitive pricing analysis."
                  img="/images/niglab2.png"
                 
                />
                <Card
                  title="Package Pricing"
                  desc="Bundle pricing configuration with package deals, combo offers, and volume-based pricing strategies."
                  img="/images/niglab3.png"
               
                />
              </>
            )}

            {activeTab === "Discount Manager" && (
              <>
                <Card
                  title="Promotional Campaigns"
                  desc="Create and manage discount campaigns with time-based offers, customer-specific promotions, and seasonal deals."
                  img="/images/niglab1.png"
                  
                />
                <Card
                  title="Loyalty Programs"
                  desc="Customer loyalty management with points system, reward tiers, and automated discount application."
                  img="/images/niglab2.png"
                
                />
                <Card
                  title="Bulk Discount Rules"
                  desc="Volume-based discount configuration with quantity thresholds, percentage or fixed amount discounts."
                  img="/images/niglab3.png"
                
                />
              </>
            )}

            {activeTab === "Stock Management" && (
              <>
                <Card
                  title="Inventory Tracking"
                  desc="Real-time inventory management with stock levels, automatic reorder points, and supplier management."
                  img="/images/niglab1.png"
            
                />
                <Card
                  title="Purchase Management"
                  desc="Complete purchase order workflow with vendor management, approval processes, and delivery tracking."
                  img="/images/niglab2.png"
           
                />
                <Card
                  title="Stock Alerts"
                  desc="Automated stock alerts for low inventory, expiry notifications, and reorder recommendations."
                  img="/images/niglab3.png"
                
                />
              </>
            )}

            {activeTab === "Import/Export" && (
              <>
                <Card
                  title="Data Migration"
                  desc="Seamless data import from existing systems with mapping tools, validation checks, and error handling."
                  img="/images/niglab1.png"
            
                />
                <Card
                  title="Bulk Operations"
                  desc="Mass data operations with CSV/Excel import/export, batch processing, and data transformation tools."
                  img="/images/niglab2.png"
           
                />
                <Card
                  title="System Integration"
                  desc="API-based integration with third-party systems, automated data synchronization, and real-time updates."
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
      className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-[#f9c700] transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative z-10">
        {/* <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-2 mb-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
          <img src={img} alt={title} className="w-full h-auto drop-shadow-2xl rounded-2xl object-cover object-right" />
        </div> */}
        
        <div className="flex items-center gap-3 mb-4">
          {/* <div className="p-3 bg-gradient-to-br from-[#3F92FF] to-[#2563eb] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div> */}
          <h3 className="text-xl font-black text-slate-900 group-hover:text-[#f9c700] transition-colors tracking-tight">
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

export default Billstab;