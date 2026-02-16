"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Receipt, Package, History, Truck, LineChart, Globe } from 'lucide-react';

interface ToolkitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const toolkitItems: ToolkitItem[] = [
  {
    title: "Pharmacy Billing Engine",
    description:
      "Fast and accurate billing with GST calculation, discounts, returns handling, and clean invoice printing for retail pharmacies.",
    icon: <Receipt className="w-12 h-12 text-blue-400" />,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "Stock & Batch Management",
    description:
      "Real-time inventory tracking with batch-wise stock, MRP control, and automatic low-stock alerts to prevent shortages.",
    icon: <Package className="w-12 h-12 text-purple-400" />,
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Expiry & Compliance Control",
    description:
      "Monitor near-expiry medicines, reduce losses, and generate compliance-ready reports aligned with pharmacy regulations.",
    icon: <History className="w-12 h-12 text-emerald-400" />,
    accent: "from-emerald-500 to-teal-400",
  },
  {
    title: "Supplier & Purchase System",
    description:
      "Record purchases, manage suppliers, track credit balances, and streamline reorder workflows from a single dashboard.",
    icon: <Truck className="w-12 h-12 text-orange-400" />,
    accent: "from-orange-500 to-yellow-400",
  },
  {
    title: "Profit & Tax Reports",
    description:
      "Detailed sales, profit & loss, and GST reports to help pharmacy owners understand margins and business performance.",
    icon: <LineChart className="w-12 h-12 text-indigo-400" />,
    accent: "from-indigo-500 to-blue-600",
  },
  {
    title: "Multi-Branch Pharmacy Control",
    description:
      "Manage multiple pharmacy branches with centralized data, shared inventory visibility, and unified reporting.",
    icon: <Globe className="w-12 h-12 text-rose-400" />,
    accent: "from-rose-500 to-red-400",
  },
];

const PremiumToolkit = () => {
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
    <section className="relative bg-white py-12 md:py-12 overflow-hidden">
      {/* Dynamic Background Elements */}
      {/* <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-[#195AFF]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" /> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-green-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Sparkles size={14} /> Trusted Pharmacy Software
          </div>
          <h2 className="text-black text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
            Complete Pharmacy <br />
            <span className="bg-gradient-to-b from-[#00D527] to-[#00930F]  bg-clip-text text-transparent">
              Billing & Management System
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {toolkitItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-[380px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-white/20 shadow-2xl hover:shadow-blue-500/20"
            >
              <div
                className={`absolute -inset-px rounded-[40px] bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}
              />

              <div className="relative mb-10 h-16 w-full flex items-center justify-center">
                <div className="relative group-hover:scale-125 transition-all duration-500 transform-gpu">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-black font-bold text-2xl mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 rounded-[32px] bg-gradient-to-r from-blue-400 to-indigo-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div>
            <h4 className="text-white text-2xl font-bold mb-2">
              Ready to streamline your pharmacy operations?
            </h4>
            <p className="text-blue-100 opacity-80">
              Trusted by pharmacies across India using Nigsoft solutions.
            </p>
          </div>
          <a href="https://nigmedi.com/" className="px-10 py-4 bg-white text-[#050B2C] font-black rounded-2xl hover:bg-[#3F92FF] hover:text-white transition-all">
            GET STARTED
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumToolkit;
