"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const FeaturesShowcase = () => {
  const [activeTab, setActiveTab] = useState<'single' | 'enterprise'>('single');

  // Listen for tab change events from indexfeatures component
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('changeFeaturesTab', handleTabChange as EventListener);
    
    return () => {
      window.removeEventListener('changeFeaturesTab', handleTabChange as EventListener);
    };
  }, []);

  const currentProducts = activeTab === 'single' ? singleClinicProducts : enterpriseProducts;
  const currentFeatures = activeTab === 'single' ? singleClinicFeatures : enterpriseFeatures;
  const currentTitle = activeTab === 'single' 
    ? "Perfect Solutions for Single Clinics & Labs"
    : "Enterprise Healthcare Technology";
  const currentDescription = activeTab === 'single'
    ? "Nigsoft provides affordable, easy-to-use software solutions for individual clinics, diagnostic labs, dental practices, and pharmacies. Get started quickly with our ready-to-deploy healthcare management systems."
    : "Comprehensive enterprise solutions for large hospitals, healthcare networks, and medical groups. Scale your operations with custom development, advanced integrations, and enterprise-grade support.";

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as any,
    },
  };

  return (
    <section className="relative overflow-hidden  py-16 lg:py-[60px]"style={{
      backgroundImage: 'url(/images/bg2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container relative z-10">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          {/* <div className="bg-gray-100 p-1 rounded-2xl">
            <button
              onClick={() => setActiveTab('single')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'single'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Single Clinics & Labs
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'enterprise'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Enterprise Hospitals
            </button>
          </div> */}
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* LEFT CONTENT */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-3xl font-bold text-[#090D28] md:text-[48px] md:leading-[1.2]">
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

            <p className="mt-4 text-base font-normal text-[#373844] md:text-lg">
              {currentDescription}
            </p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`features-${activeTab}`}
              className="mt-8 space-y-4"
            >
              {currentFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#195AFF]" />
                  <span className="text-base font-normal text-[#373844]">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT ANIMATED CARDS */}
          <motion.div
            key={`cards-${activeTab}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[600px] overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6 h-full mask-gradient">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
