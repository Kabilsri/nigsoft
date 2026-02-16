import React from 'react';
import { Store, Package, FileText, AlertTriangle, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Set Up Your Pharmacy & GST Details",
    icon: <Store className="w-8 h-8 text-[#0eac0e]" strokeWidth={2} />,
  },
  {
    number: "2",
    title: "Add Medicines & Stock Inventory",
    icon: <Package className="w-8 h-8 text-[#0eac0e]" strokeWidth={2} />,
  },
  {
    number: "3",
    title: "Start Billing & Invoice Printing",
    icon: <FileText className="w-8 h-8 text-[#0eac0e]" strokeWidth={2} />,
  },
  {
    number: "4",
    title: "Track Expiry & Low Stock Alerts",
    icon: <AlertTriangle className="w-8 h-8 text-[#0eac0e]" strokeWidth={2} />,
  },
  {
    number: "5",
    title: "Monitor Sales & Profit Reports",
    icon: <BarChart3 className="w-8 h-8 text-[#0eac0e]" strokeWidth={2} />,
  },
];

export default function WorkflowSteps() {
  return (
    <section className="bg-white py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto px-4 max-w-1280px">
        {/* Section Heading */}
        <h2 
          className="text-center text-[#0d2b11] font-bold text-[32px] md:text-[48px] leading-[1.2] mb-[60px] md:mb-[80px]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Run Your Pharmacy in 5 Simple Steps
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-[#e5e5e5] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Icon Circle */}
                <div className="w-[80px] h-[80px] rounded-full bg-[#f0fff0] flex items-center justify-center mb-6 shadow-sm border border-[#f0fff0] transition-transform duration-300 group-hover:scale-105">
                  {step.icon}
                </div>

                {/* Step Content */}
                <p 
                  className="text-center text-[#2a3b2b] text-[16px] md:text-[18px] font-medium max-w-[180px] leading-[1.4]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
