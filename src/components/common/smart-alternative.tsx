"use client";

import React from 'react';
import Image from 'next/image';
import { Search, Check, X, Activity, Shield, Building2, Headphones } from 'lucide-react';

const ASSETS = {
  custom: "healthcare",
  quality: "shield",
  scalable: "building",
  support: "headphones"
};

const StatusIcon = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className={`flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-[6px] transition-colors duration-300 ${isSuccess ? 'bg-[#33C120]' : 'bg-[#EF4444]'}`}>
    {isSuccess ? <Check className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" strokeWidth={3} /> : <X className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" strokeWidth={3} />}
  </div>
);

interface ComparisonRowProps {
  label: string;
  vilva: boolean;
  bigAgency: boolean;
  freelancer: boolean;
  isLast?: boolean;
}

const ComparisonRow = ({ label, vilva, bigAgency, freelancer, isLast = false }: ComparisonRowProps) => (
  <div className={`grid grid-cols-4 gap-1 md:gap-4 py-3 md:py-6 items-center ${!isLast ? 'border-b border-[#E9F0FF]/80' : ''}`}>
    <div className="col-span-1 text-[#30304B] font-medium text-xs md:text-base pl-1 md:pl-4">{label}</div>
    <div className="col-span-1 flex justify-center"><StatusIcon isSuccess={vilva} /></div>
    <div className="col-span-1 flex justify-center"><StatusIcon isSuccess={bigAgency} /></div>
    <div className="col-span-1 flex justify-center"><StatusIcon isSuccess={freelancer} /></div>
  </div>
);

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const IconComponent = icon === "healthcare" ? Activity : icon === "shield" ? Shield : icon === "building" ? Building2 : Headphones;

  return (
    <div className="bg-white rounded-[12px] p-6 md:p-8 border border-[#E9F0FF] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col items-start h-full">
      <div className="mb-6 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-50 flex items-center justify-center">
        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-[#195AFF]" strokeWidth={2} />
      </div>
      <h3 className="text-[#061D48] font-bold text-lg md:text-[18px] mb-3 leading-tight">{title}</h3>
      <p className="text-[#374577] text-sm md:text-base leading-[150%] font-normal">{description}</p>
    </div>
  );
};

interface SmartAlternativeProps {
  title?: string;
  subtitle?: string;
  companyName?: string;
  alt1Name?: string;
  alt2Name?: string;
  comparisonData?: ComparisonRowProps[];
  features?: FeatureCardProps[];
}

export default function SmartAlternative({
  title = "Why Nigsoft is the Smart Choice for Your Hospital",
  subtitle = "The Nigsoft Advantage",
  companyName = "Nigsoft",
  alt1Name = "Global Software",
  alt2Name = "Manual Entry",
  comparisonData = [
    { label: "Money-back Guarantee", vilva: true, bigAgency: false, freelancer: false },
    { label: "Zero Maintenance Cloud", vilva: true, bigAgency: false, freelancer: false },
    { label: "Hacker-proof Encryption", vilva: true, bigAgency: false, freelancer: false },
    { label: "Free Training & SMS", vilva: true, bigAgency: false, freelancer: false },
    { label: "Staff & Salary Tracking", vilva: true, bigAgency: false, freelancer: true, isLast: true }
  ],
  features = [
    { icon: "healthcare", title: "Future-Ready Workspace", description: "A digital environment with futuristic technologies designed for hospitals and doctors to complete complex tasks in minutes." },
    { icon: "shield", title: "Encrypted Cloud Security", description: "Your data is saved in encrypted cloud servers. We follow a strict privacy policy—your data is never viewed or sold to third parties." },
    { icon: "building", title: "Zero Maintenance Support", description: "Our online-based architecture means we clear any issues proactiveley before you even notice them. No local IT overhead needed." },
    { icon: "headphones", title: "Proactive Smart Support", description: "Includes free training during trials and dedicated tech support via Call, WhatsApp, and Email for a comfort-zone experience." }
  ]
}: SmartAlternativeProps) {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <div className="relative mb-6">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-white border border-[#E9F0FF] rounded-full shadow-sm">
              <span className="text-[#838D9A] text-sm font-medium">{subtitle}</span>
              <Search className="w-3.5 h-3.5 text-[#838D9A]" strokeWidth={2.5} />
            </div>
          </div>
          <h2 className="text-[#061D48] text-2xl md:text-4xl lg:text-[40px] font-bold max-w-4xl leading-[1.2] tracking-tight">
            {title}
          </h2>
        </div>

        <div className="w-full overflow-x-auto pb-4 mb-10 md:mb-16 no-scrollbar max-w-full">
          <div className="min-w-[600px] md:min-w-full bg-white rounded-xl border border-[#E9F0FF] shadow-sm md:bg-transparent md:border-none md:shadow-none p-3 md:p-0">
            <div className="grid grid-cols-4 gap-1 md:gap-4 pb-3 md:pb-6 border-b border-[#E9F0FF] mb-2">
              <div className="col-span-1 px-1 md:px-4 py-2 text-[#838D9A] font-medium text-xs md:text-sm uppercase tracking-wider self-end">Features</div>
              <div className="col-span-1 px-1 md:px-4 py-2 flex flex-col items-center justify-end">
                <span className="text-[#195AFF] font-bold text-sm md:text-2xl tracking-tight">{companyName}</span>
              </div>
              <div className="col-span-1 px-1 md:px-4 py-2 flex flex-col items-center justify-end text-center">
                <span className="text-[#061D48] font-bold text-xs md:text-xl leading-tight">{alt1Name}</span>
              </div>
              <div className="col-span-1 px-1 md:px-4 py-2 flex flex-col items-center justify-end text-center">
                <span className="text-[#061D48] font-bold text-xs md:text-xl leading-tight">{alt2Name}</span>
              </div>
            </div>

            <div className="space-y-0">
              {comparisonData.map((row, idx) => (
                <ComparisonRow key={idx} {...row} isLast={idx === comparisonData.length - 1} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
