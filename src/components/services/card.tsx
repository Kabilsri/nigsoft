"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
  id: string;
  title: string;
  description: string;
  features: string[];
}

interface DynamicFeaturesProps {
  title: string;
  highlightText: string;
  features: Feature[];
}

const DynamicFeatures: React.FC<DynamicFeaturesProps> = ({
  title,
  highlightText,
  features
}) => {
  const [activeTab, setActiveTab] = useState<string>(features[0]?.id || '');
  const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const activeFeature = features.find(feature => feature.id === activeTab) || features[0];

  return (
    <section
      id="dynamicfeatures"
      className="group relative py-12 md:py-[80px] overflow-hidden transition-all duration-300 ease-out bg-[#000420]"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #03008F 0%, #000839 50%, #000420 100%)`
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Element */}
      <motion.div
        animate={{
          x: (mousePosition.x - 50) * 0.2,
          y: (mousePosition.y - 50) * 0.2,
        }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute h-[500px] w-[500px] rounded-full bg-[#0f1192]/20 blur-[120px] -top-64 -left-64"></div>
        <div className="absolute h-[400px] w-[400px] rounded-full bg-[#3F92FF]/10 blur-[100px] -bottom-32 -right-32"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-[#EB7AFF] to-[#5EC1FF] bg-clip-text text-transparent text-[28px] md:text-[48px] font-extrabold leading-[1.2] mb-4">
            {title} {highlightText}
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0">
            Experience our specialized solutions designed to solve your most complex challenges.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs Sidebar */}
            <div className="w-full md:w-[40%] flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  whileHover={{ x: typeof window !== 'undefined' && window.innerWidth > 768 ? 5 : 0 }}
                  className={`relative p-4 md:p-6 cursor-pointer rounded-2xl transition-all duration-500 overflow-hidden group/tab shrink-0 snap-start
                    ${activeTab === feature.id
                      ? "bg-white/10 shadow-2xl shadow-blue-500/10 min-w-[200px] md:min-w-0"
                      : "bg-white/5 hover:bg-white/8 border border-white/5 min-w-[180px] md:min-w-0"
                    }`}
                >
                  {activeTab === feature.id && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-blue-500/10 border border-blue-400/30 rounded-2xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <h3 className={`text-base md:text-xl font-bold transition-colors duration-300
                      ${activeTab === feature.id ? "text-blue-400" : "text-white/60 group-hover/tab:text-white/90"}`}
                    >
                      {feature.title}
                    </h3>
                    <motion.div
                      animate={{ x: activeTab === feature.id ? 0 : -5, opacity: activeTab === feature.id ? 1 : 0 }}
                      className="text-blue-400 hidden md:block"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Content Display */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 h-full shadow-2xl relative overflow-hidden"
                >
                  {/* Decorative Sparkle */}
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <div className="h-64 w-64 rounded-full bg-blue-400 blur-[80px]"></div>
                  </div>

                  <div className="relative z-10">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                      Feature Insight
                    </motion.span>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white text-2xl md:text-4xl font-bold mb-6 leading-tight"
                    >
                      {activeFeature.title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/70 text-base md:text-lg mb-8 leading-relaxed"
                    >
                      {activeFeature.description}
                    </motion.p>

                    <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeFeature.features.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-start gap-3 group/item p-3 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <div className="h-6 w-6 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover/item:bg-blue-500/40 transition-colors">
                            <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                          </div>
                          <span className="text-white/80 text-sm font-medium pt-0.5">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicFeatures;
