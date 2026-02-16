"use client";

import React from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({
  title,
  subtitle,
  steps
}) => {
  const gradientColors = [
    'from-blue-500/10 to-purple-500/10',
    'from-emerald-500/10 to-teal-500/10',
    'from-orange-500/10 to-pink-500/10',
    'from-violet-500/10 to-indigo-500/10'
  ];

  const iconColors = [
    '#3B82F6', // blue
    '#10B981', // emerald
    '#F97316', // orange
    '#8B5CF6'  // violet
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Our Workflow</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const gradientClass = gradientColors[index % gradientColors.length];
              const iconColor = iconColors[index % iconColors.length];

              return (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Connecting Line (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[100px] left-[70%] w-full h-[2px] bg-gradient-to-r from-slate-200 to-transparent z-0 overflow-hidden">
                      <div className="w-full h-full bg-blue-400/30 animate-slide-right" />
                    </div>
                  )}

                  {/* Step Card */}
                  <div className="relative bg-white rounded-[40px] p-10 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col items-center text-center hover:-translate-y-2">

                    {/* Step Number Badge */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-slate-900">
                        {index + 1}
                      </span>
                    </div>

                    {/* Icon Container */}
                    <div className="relative mb-8 mt-4">
                      <div
                        className="w-24 h-24 rounded-[32px] flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${iconColor}15, ${iconColor}25)`,
                          boxShadow: `0 12px 40px ${iconColor}15`
                        }}
                      >
                        {React.createElement(
                          (LucideIcons as any)[step.icon] || LucideIcons.Circle,
                          {
                            className: "w-12 h-12",
                            style: { color: iconColor }
                          }
                        )}
                      </div>

                      {/* Icon Glow Effect */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                        style={{ backgroundColor: iconColor }}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 flex-1">
                      <h3 className="text-2xl font-bold text-slate-800">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link href="/schedule-call">
            <div className="inline-flex items-center gap-3 bg-[#090D28] text-white px-10 py-5 rounded-2xl shadow-2xl hover:bg-slate-900 transition-all duration-300 cursor-pointer group hover:scale-105 active:scale-95">
              <span className="font-bold text-lg">Book a Strategy Session</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-right {
          animation: slide-right 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServiceProcess;
