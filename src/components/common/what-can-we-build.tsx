"use client";

import Image from "next/image";
import { useState } from "react";
import { Settings, Code2, Cpu, ChevronRight, Activity, Layers, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Solution {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  content: string[];
  color: string;
}

const defaultSolutions: Solution[] = [
  {
    id: "core",
    title: "Patient Management",
    icon: <Activity className="w-6 h-6" />,
    image: '/service/ai.jpg',
    description: "End-to-end patient journey from registration to recovery with integrated clinical workflows.",
    color: "from-blue-600 to-indigo-600",
    content: [
      "Patient Registration & Demographics",
      "OPD/IPD Management & Bed Allocation",
      "Electronic Medical Records (EMR/EHR)",
      "Appointment Scheduling & Queue",
    ],
  },
  {
    id: "clinical",
    title: "Clinical Diagnostics",
    icon: <Layers className="w-6 h-6" />,
    image: '/icons/hr.png',
    description: "Empower labs and radiology with integrated information systems and faster diagnostics.",
    color: "from-violet-600 to-purple-600",
    content: [
      "Laboratory Information System (LIS)",
      "Radiology & Imaging (PACS/RIS)",
      "Pharmacy & Drug Stock Inventory",
    ],
  },
  {
    id: "ops",
    title: "Hospital Operations",
    icon: <Settings className="w-6 h-6" />,
    image: '/icons/hr.png',
    description: "Manage workforce, supply chains, and real-time business intelligence dashboards.",
    color: "from-sky-500 to-blue-700",
    content: [
      "Staff & HR Management",
      "Inventory & Supply Chain",
      "Real-time Analytics Dashboard",
    ],
  },
];

export default function WhatCanWeBuild({
  title = "What",
  titleHighlight = "Modules",
  subtitle = "A comprehensive hospital management suite designed to elevate patient care and streamline complex clinical operations.",
}: { title?: string; titleHighlight?: string; subtitle?: string }) {
  const [selectedId, setSelectedId] = useState(defaultSolutions[0].id);

  const featured = defaultSolutions.find((s) => s.id === selectedId)!;
  const others = defaultSolutions.filter((s) => s.id !== selectedId);

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration - refined */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simplified Premium Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/50 text-primary text-xs font-bold tracking-[0.2em] uppercase"
          >
            Core Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-[#061D48] tracking-tight leading-[1.05]"
          >
            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">{titleHighlight}</span> Are Included?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Bento Grid - Optimized for 3 items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[340px] gap-6">

          {/* Featured Card - Span 8 columns */}
          <motion.div
            layoutId={featured.id}
            className="lg:col-span-8 lg:row-span-2 relative overflow-hidden bg-white rounded-[48px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] group p-8 md:p-14 border border-slate-100 flex flex-col xl:flex-row gap-12"
          >
            <div className="flex-[1.2] space-y-10 z-10">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn("w-16 h-16 rounded-[22px] flex items-center justify-center text-white shadow-xl bg-gradient-to-br", featured.color)}
                >
                  {featured.icon}
                </motion.div>
                <div className="space-y-3">
                  <h3 className="text-4xl md:text-5xl font-black text-[#061D48] tracking-tight leading-none">{featured.title}</h3>
                  <p className="text-slate-500 text-xl leading-relaxed font-medium max-w-md">{featured.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {featured.content.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 text-slate-600 font-semibold text-lg group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors duration-300" />
                    {item}
                  </motion.div>
                ))}
              </div>

              <button className="flex items-center gap-3 text-primary font-black text-sm tracking-[0.2em] hover:gap-5 transition-all uppercase group/btn">
                <span>View Full Features</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

            <div className="flex-1 relative min-h-[300px] xl:min-h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#0A1128] rounded-[2.5rem] p-2.5 shadow-2xl border-[1px] border-white/10 overflow-hidden"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Secondary Cards - Span 4 columns */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {others.map((module) => (
              <motion.div
                key={module.id}
                layoutId={module.id}
                onClick={() => setSelectedId(module.id)}
                className="relative overflow-hidden bg-white rounded-[40px] p-8 border border-slate-100 shadow-[0_16px_32px_-12px_rgba(0,0,0,0.03)] cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100 transition-all duration-500 group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br transition-transform duration-500 group-hover:scale-110", module.color)}>
                    {module.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-[#061D48] mb-3 tracking-tight">{module.title}</h4>
                    <p className="text-slate-500 text-base font-medium line-clamp-3 leading-relaxed">{module.description}</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center text-primary font-black text-xs tracking-[0.2em] opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span>EXPAND MODULE</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
