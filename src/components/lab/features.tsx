"use client";
import React from 'react';
import { 
  Target, 
  Layers, 
  BarChart3, 
  Cpu, 
  Rocket,
  Shield
} from 'lucide-react';

interface ReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ReasonCard: React.FC<ReasonProps> = ({ icon, title, description, index }) => {
  return (
    <div className="p-4 w-full md:w-6/12 lg:w-4/12 group">
      <div className="relative h-full p-8 rounded-[32px] bg-white border border-blue-100 shadow-[0_8px_30px_rgb(63,146,255,0.08)] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(63,146,255,0.4)] hover:-translate-y-2 overflow-hidden">
        
        {/* Background Hover Fill */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-r from-[#3F92FF] to-[#06B6D4]  rounded-full transition-all duration-700 ease-out group-hover:scale-[10] group-hover:opacity-100 opacity-0" />

        {/* Index Number */}
        <span className="absolute top-6 right-8 text-slate-100 font-bold text-5xl group-hover:text-white/10 transition-colors duration-500 pointer-events-none">
          0{index + 1}
        </span>
        
        {/* Gradient Icon Container */}
        <div className="relative mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F0F7FF] to-[#E0EFFF] text-[#3F92FF] transition-all duration-500 group-hover:from-white group-hover:to-white group-hover:text-[#3F92FF] group-hover:scale-110 shadow-sm border border-blue-50">
          {React.cloneElement(icon as React.ReactElement<any>, { 
            size: 32,
            strokeWidth: 2.5,
            className: "drop-shadow-sm" 
          })}
        </div>

        {/* Text Content */}
        <h3 className="relative text-xl md:text-2xl font-bold leading-tight mb-4 text-[#090D28] group-hover:text-white transition-colors duration-500">
          {title}
        </h3>

        {/* Description - Turns light grey on hover */}
        <p className="relative text-[16px] leading-relaxed text-[#51546e] group-hover:text-slate-200 transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
};

const VilvaMarketing: React.FC = () => {
  const reasons = [
    {
      icon: <Target />,
      title: "Smart Lab Automation",
      description: "Streamline every lab process with automated workflows, faster data entry, and seamless daily operations."
    },
    {
      icon: <Layers />,
      title: "Centralized Dashboard",
      description: "Monitor sales, reports, patient records, and lab activities from a unified, real-time dashboard."
    },
    {
      icon: <BarChart3 />,
      title: "Secure Cloud Platform",
      description: "Access your lab from anywhere with encrypted cloud storage ensuring data safety, privacy, and zero maintenance."
    },
    {
      icon: <Cpu />,
      title: "Customizable Reports",
      description: "Create fully customizable test reports with editable templates, parameters, and quick result generation."
    },
    {
      icon: <Rocket />,
      title: "Free SMS Facility",
      description: "After finishing your report you can send the report to the customer with our free message facility."
    },
    {
      icon: <Shield />,
      title: "Zero Maintainance",
      description: "Our software doesn't need any maintenance since it's online-based if any problem arises we will clear it by ourselves before you notice it."
    }
  ];


  return (
    <section className="relative py-10 px-4 bg-white">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-600/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-grey-400 uppercase bg-transparent rounded-lg border border-black-800/50">
            Platform Capabilities
          </span>
          
          {/* Gradient Title */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            <span className="text-black">6 Core Advantages of Our</span> <br />
            <span className="bg-gradient-to-r from-[#3F92FF] to-[#06B6D4] bg-clip-text text-transparent">
              Unified Intelligence Platform
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing laboratory diagnostics through automated precision, real-time analytics, and secure cloud integration.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {reasons.map((reason, index) => (
            <ReasonCard 
              key={index}
              index={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VilvaMarketing;