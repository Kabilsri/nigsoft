"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Zap, Globe, Code2, Smartphone, Database, Cloud, Lock, Server, Layers } from 'lucide-react';

interface AboutHeroProps {
  title: string;
  description: string;
  secondaryText: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  description,
  secondaryText
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white font-sans">
      {/* Dynamic Background Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_70%)]" />

      
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-black text-blue-500 uppercase tracking-[0.2em]">Our Identity</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.1] tracking-tight mb-8">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={word === "Innovation" ? "text-blue-500 italic" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 leading-relaxed mb-10 font-medium"
            >
              {description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link
                href="/product/labmanagementsoftware"
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all flex items-center gap-3 active:scale-95"
              >
                Our Products <ArrowRight className="w-5 h-5" />
              </Link>
              {/* <div className="flex -space-x-3"> */}
              {/* {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800" />
                ))}
                <div className="w-10 h-10 ">
                  
                </div>
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{secondaryText}</p> */}
            </motion.div>
          </motion.div>

          {/* Right Visual - 3D Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-2000 hidden lg:block"
          >
            <div className="relative w-full min-h-[500px] max-w-[500px] ml-auto">
              {/* Main Card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-12 overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
                <div className="relative z-10 space-y-8">
                  {/* <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <Globe className="w-10 h-10 text-white" />
                  </div> */}
                  <div className="space-y-1">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-black mb-1">Nigsoft Private Limited</h3>
                      <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Healthcare Solutions</p>
                    </div>

                    <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Shield className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">ISO Certified Excellence</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <Globe className="w-3 h-3 text-indigo-400" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">Global Healthcare Reach</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center">
                          <Zap className="w-3 h-3 text-sky-400" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">24/7 Dedicated Support</span>
                      </div>
                    </div>

                    <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5 mt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                          <Lock className="w-3 h-3 text-teal-400" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">Enterprise Data Security</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <Layers className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">Seamless Integration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center">
                          <Server className="w-3 h-3 text-rose-400" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">99.9% Server Uptime</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center group hover:bg-white/10 transition-colors">
                      <p className="text-2xl font-black text-black group-hover:scale-110 transition-transform">50+</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Skilled Professional</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center group hover:bg-white/10 transition-colors">
                      <p className="text-2xl font-black text-black group-hover:scale-110 transition-transform">5+</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Experience</p>
                    </div>
                  </div>

                  {/* Tech Stack Mini-Section */}
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 text-center">Powered By</p>
                    <div className="flex justify-center gap-3">
                      {[
                        { icon: Code2, label: "Web" },
                        { icon: Smartphone, label: "App" },
                        { icon: Database, label: "Data" },
                        { icon: Cloud, label: "Cloud" }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-lg bg-slate-900/50 border border-white/10 flex items-center justify-center hover:border-blue-500/50 transition-colors">
                            <item.icon className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="text-[8px] font-bold text-slate-500 uppercase">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{
                  y: [20, -10, 20],
                  x: [-10, 10, -10]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                // className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-600 rounded-full blur-2xl opacity-40"
              />
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-5 -right-5 w-40 h-40 border border-white/10 rounded-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;