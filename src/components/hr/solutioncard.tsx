"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Solution {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SOLUTIONS: Solution[] = [
  {
    title: "Employee & Admin Portals",
    description:
      "User-friendly employee and HR admin portals that centralize profiles, attendance, tasks, and documents for smooth workforce operations.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#195AFF" />
            <stop offset="100%" stopColor="#4273FF" />
          </linearGradient>
        </defs>
        <path fill="url(#gradient1)" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    )
  },
  {
    title: "HR Compliance Management",
    description:
      "Ensure statutory compliance with automated tracking, reports, and audit-ready documentation aligned with HR and payroll regulations.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <path fill="url(#gradient2)" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Payroll & Salary Management",
    description:
      "End-to-end payroll processing that manages salaries, deductions, payslips, and approvals accurately and on time.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <path fill="url(#gradient3)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    )
  },
  {
    title: "Attendance & Leave Tracking",
    description:
      "Track employee attendance, shifts, and leave balances in real time with automated approvals and policy enforcement.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path fill="url(#gradient4)" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
      </svg>
    )
  },
  {
    title: "Employee Onboarding & Offboarding",
    description:
      "Streamline hiring, onboarding, role assignment, and exit workflows to ensure a smooth employee lifecycle experience.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>
        <path fill="url(#gradient5)" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16c-.8 0-1.54.37-2.01 1l-2.54 3.45L13.5 14h2.5v8h4z" />
      </svg>
    )
  },
  {
    title: "HR Analytics & Insights",
    description:
      "Gain actionable insights into workforce performance, attendance trends, payroll costs, and HR efficiency with real-time analytics.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
        </defs>
        <path fill="url(#gradient6)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    )
  }
];

const SolutionCard: React.FC<Solution & { index: number }> = ({
  title,
  description,
  icon,
  index
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/50 backdrop-blur-sm border border-white/60 p-[24px] rounded-[24px] md:h-[300px] h-[320px] transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-white hover:-translate-y-1 relative overflow-hidden group"
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#E8F2FF] to-[#D1E7FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

    <div className="space-y-[16px] relative z-10">
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-[#020D2C] text-[20px] font-bold group-hover:text-[#195AFF] transition-colors">{title}</h3>
      <p className="text-[#476C88] text-[16px] leading-relaxed group-hover:text-[#334E68] transition-colors">
        {description}
      </p>
    </div>
  </motion.div>
);

const SolutionsGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#020D2C] leading-tight tracking-wide max-w-2xl mx-auto"
        >
          Smart <span className="bg-[#48A8F4] bg-clip-text text-transparent">HR Solutions</span> for Modern Workforce Management
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
        {SOLUTIONS.map((solution, index) => (
          <SolutionCard key={index} {...solution} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsGrid;
