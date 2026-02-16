"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Rocket, Users, CheckCircle2 } from 'lucide-react';

const singleClinicProducts = [
  {
    icon: "/nigicon/niglab.png",
    name: "Lab Management Software",
    description:
      "Complete LIMS solution for diagnostic, pathology, and clinical labs with automation and smart reporting.",
  },
  {
    icon: "/nigicon/nigdoc.png",
    name: "Clinic Management System",
    description:
      "Simple yet powerful clinic software for OPD, appointments, billing, and patient records management.",
  },
  {
    icon: "/nigicon/nigdents.png",
    name: "Dental Clinic Software",
    description:
      "Specialized software for dental clinics with treatment plans, billing, and patient history tracking.",
  },
  {
    icon: "/nigicon/nigmedi.png",
    name: "Pharmacy Management",
    description:
      "Inventory management, billing, and customer tracking for independent pharmacies and medical stores.",
  },
];

const enterpriseProducts = [
  {
    icon: "/images/24.jpg",
    name: "24/7 Support",
    description:
      "Round-the-clock technical support with dedicated helpdesk, emergency response, and continuous system monitoring for enterprise clients.",
  },
  {
    icon: "/images/support.jpg",
    name: "Dedicated On-site Support",
    description:
      "Dedicated on-site technical team for implementation, training, maintenance, and ongoing support at your healthcare facility.",
  },
  {
    icon: "/images/custom.jpg",
    name: "Custom Workflow Implementation",
    description:
      "Tailored workflow design and implementation based on your organization's specific processes, protocols, and operational requirements.",
  },
  {
    icon: "/images/medical equipment.jpg",
    name: "Medical Equipment Integration",
    description:
      "Seamless integration with medical devices, diagnostic equipment, lab analyzers, and hospital infrastructure systems.",
  },
];

const singleClinicFeatures = [
  "Ready-to-use software for labs, clinics, dental practices, and pharmacies",
  "Affordable pricing with no hidden costs or complex licensing",
  "Easy setup and training with dedicated customer support",
  "Cloud-based solutions with automatic backups and updates",
  "Mobile-friendly interface for on-the-go access",
];

const enterpriseFeatures = [
  "Enterprise-grade infrastructure with 99.9% uptime guarantee and redundant systems",
  "Dedicated on-site implementation team with comprehensive training and support",
  "Custom workflow development tailored to your organization's specific requirements",
  "Seamless integration with medical equipment and third-party healthcare systems",
  "24/7 premium support with dedicated account management and priority response",
];

export default function CombinedProductsSection() {
  const [activeTab, setActiveTab] = useState<'single' | 'enterprise'>('single');

  const handleCardClick = (tabType: 'single' | 'enterprise') => {
    setActiveTab(tabType);
  };

  const currentProducts = activeTab === 'single' ? singleClinicProducts : enterpriseProducts;
  const currentFeatures = activeTab === 'single' ? singleClinicFeatures : enterpriseFeatures;
  const currentTitle = activeTab === 'single' 
    ? "Perfect Solutions for Single Clinics & Labs"
    : "Enterprise Healthcare Technology";
  const currentDescription = activeTab === 'single'
    ? "Nigsoft provides affordable, easy-to-use software solutions for individual clinics, diagnostic labs, dental practices, and pharmacies. Get started quickly with our ready-to-deploy healthcare management systems."
    : "Comprehensive enterprise solutions for large hospitals, healthcare networks, and medical groups. Scale your operations with custom development, advanced integrations, and enterprise-grade support.";

  return (
    <div style={{
      position: 'relative',
      background: 'white',
    }}>
      {/* SVG Wave background */}
      <div style={{ position: 'absolute', right: 0, bottom: 0, width: '70%', height: '100%', zIndex: 1 }}>
        <svg viewBox="0 0 500 500" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="100%" stopColor="#00f2fe" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d8f9" />
              <stop offset="100%" stopColor="#00aaf9" />
            </linearGradient>
          </defs>
          
          <path 
            d="M500,500 L500,0 Q350,150 250,300 T0,500 Z" 
            fill="url(#grad1)" 
            opacity="0.8"
          />
          <path 
            d="M500,500 L500,200 Q400,300 300,450 T0,500 Z" 
            fill="url(#grad2)" 
          />
        </svg>
      </div>
      {/* Card Selection Section */}
      <section
        id="products"
        className="relative py-10 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-[#195AFF] to-[#3F92FF] bg-clip-text text-transparent">
                Nigsoft
              </span>
              <span className="text-gray-800"> is for</span>
            </h1>
          </div>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            <div
              onClick={() => handleCardClick('single')}
              className="block group outline-none cursor-pointer"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-stone-50/60 rounded-3xl blur-sm group-hover:blur-none transition-all duration-500"></div>
                <article className="relative h-full flex items-center justify-center flex-col bg-white/90 backdrop-blur-sm rounded-2xl border border-stone-200/50 shadow-lg p-4 md:p-5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                  <div className="relative mb-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#195AFF]/20 to-[#3F92FF]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-[#195AFF] to-[#3F92FF] shadow-lg flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2 text-gray-800 text-center">Single Clinics, Pharmacy & Labs</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Designed for individual clinics, diagnostic labs, and pharmacies looking to digitize daily operations.
                    Manage patients, billing, reports, inventory, and workflows efficiently with a secure, easy-to-use system.
                  </p>
                  <div className="mt-3 h-0.5 w-10 bg-gradient-to-r from-[#195AFF] to-[#3F92FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </article>
              </div>
            </div>

            <div
              onClick={() => handleCardClick('enterprise')}
              className="block group outline-none cursor-pointer"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-stone-50/60 rounded-3xl blur-sm group-hover:blur-none transition-all duration-500"></div>
                <article className="relative h-full flex items-center justify-center flex-col bg-white/90 backdrop-blur-sm rounded-2xl border border-stone-200/50 shadow-lg p-4 md:p-5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                  <div className="relative mb-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3F92FF]/20 to-[#8B5CF6]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-[#3F92FF] to-[#8B5CF6] shadow-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2 text-gray-800 text-center">Enterprise Hospitals & Medical Groups</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Built for large hospitals and healthcare networks managing multiple departments, locations, and teams.
                    Centralize patient data, streamline operations, and scale confidently with enterprise-grade security.
                  </p>
                  <div className="mt-3 h-0.5 w-10 bg-gradient-to-r from-[#3F92FF] to-[#8B5CF6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="hidden md:block relative overflow-hidden py-8 md:py-16 lg:py-[60px]">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 items-start gap-6 md:gap-8 md:gap-12 lg:grid-cols-2 lg:gap-24">
            {/* LEFT CONTENT */}
            <div key={activeTab} className="transition-opacity duration-500">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-[#090D28] sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[1.2]">
                {currentTitle.split(' ').map((word, index) => {
                  if (word === 'Single' || word === 'Enterprise') {
                    return (
                      <span key={index} className="bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">
                        {word}{' '}
                      </span>
                    );
                  }
                  if (word === 'Technology' || word === 'Solutions') {
                    return (
                      <span key={index} className="bg-gradient-to-r from-[#ec4899] to-[#d83963] bg-clip-text text-transparent">
                        {word}{' '}
                      </span>
                    );
                  }
                  return word + ' ';
                })}
              </h2>

              <p className="mt-3 text-sm md:text-base font-normal text-[#373844] md:text-lg">
                {currentDescription}
              </p>

              <ul key={`features-${activeTab}`} className="mt-6 md:mt-8 space-y-3 md:space-y-4">
                {currentFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 md:h-6 w-5 md:w-6 flex-shrink-0 text-[#195AFF]" />
                    <span className="text-sm md:text-base font-normal text-[#373844]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT ANIMATED CARDS */}
            <div
              key={`cards-${activeTab}`}
              className="relative lg:h-[600px] overflow-hidden transition-opacity duration-500"
            >
              <div className="absolute top-1/2 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl hidden lg:block"></div>

              {/* Mobile/Tablet: Static Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:hidden">
                {currentProducts.map((item, idx) => (
                  <div
                    key={idx}
                    className="space-y-2 rounded-[12px] md:rounded-[16px] border border-white/50 bg-white/70 p-3 md:p-4 shadow-lg backdrop-blur-xl"
                  >
                    <Image src={item.icon} alt={item.name} width={32} height={32} className="md:w-10 md:h-10" />
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-[#090D28]">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 md:mt-1 text-xs leading-relaxed text-[#373844]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Animated Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-6 h-full mask-gradient">
                {/* Column 1 */}
                <div className="flex flex-col gap-4 animate-marquee-down">
                  {[...Array(3)].map((_, i) => (
                    <div key={`col1-${i}`} className="flex flex-col gap-4">
                      {[currentProducts[0], currentProducts[2]].map((item, idx) => (
                        <div
                          key={idx}
                          className="space-y-4 rounded-[24px] border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl"
                        >
                          <Image src={item.icon} alt={item.name} width={48} height={48} />
                          <div>
                            <h3 className="text-lg font-bold text-[#090D28]">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-[#373844]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4 animate-marquee-up">
                  {[...Array(3)].map((_, i) => (
                    <div key={`col2-${i}`} className="flex flex-col gap-4">
                      {[currentProducts[1], currentProducts[3]].map((item, idx) => (
                        <div
                          key={idx}
                          className="space-y-4 rounded-[24px] border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl"
                        >
                          <Image src={item.icon} alt={item.name} width={48} height={48} />
                          <div>
                            <h3 className="text-lg font-bold text-[#090D28]">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-[#373844]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <style jsx>{`
                .mask-gradient {
                  -webkit-mask-image: linear-gradient(
                    to top,
                    transparent,
                    black 10%,
                    black 90%,
                    transparent
                  );
                }
                @keyframes marquee-down {
                  0% { transform: translateY(-33.33%); }
                  100% { transform: translateY(0%); }
                }
                @keyframes marquee-up {
                  0% { transform: translateY(0%); }
                  100% { transform: translateY(-33.33%); }
                }
                .animate-marquee-down {
                  animation: marquee-down 20s linear infinite;
                }
                .animate-marquee-up {
                  animation: marquee-up 20s linear infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
