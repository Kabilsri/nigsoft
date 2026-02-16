"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users2, ShieldCheck } from "lucide-react";
import React, { useRef } from "react";

export default function PartnerHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-32 pb-8 md:pb-20 overflow-hidden bg-white font-sans">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] blur-3xl animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(25,90,255,0.05)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Partner Ecosystem</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Business</span>
                <span className="block text-3xl md:text-5xl font-semibold text-slate-700 mt-2 italic line-clamp-2 md:line-clamp-none">with Healthcare Tech</span>
              </h1>
              <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-xl">
                Join our elite partner network and deliver future-proof healthcare management solutions.
                Get exclusive access to enterprise resources, technical training, and co-marketing benefits.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#benefits"
                className="px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 active:scale-95 text-center"
              >
                View Benefits
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-6 border-t border-slate-100">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-slate-900">1000+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Active Clients</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-slate-900">50+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Global Partners</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-slate-900">5+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-[4/3] rounded-[2rem] overflow-visible cursor-crosshair transform-gpu"
              style={{
                perspective: "1500px",
              }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] rounded-[2rem] overflow-hidden"
              >
                <Image
                  src="/icons/partner.png"
                  alt="Nigsoft Global Partners"
                  fill
                  className="object-cover scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20" style={{ transform: "translateZ(50px)" }}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold leading-none">Collaborative Growth</h4>
                      <p className="text-white/70 text-sm mt-1">Expanding our healthcare footprint globally.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 md:-top-10 -right-4 md:-right-6 p-4 md:p-6 bg-white rounded-3xl shadow-xl border border-slate-100 z-20 flex items-center gap-3 md:gap-4 scale-75 md:scale-100 origin-right"
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold leading-none italic text-sm md:text-base">Certified Partner</div>
                  <div className="text-slate-400 text-[10px] md:text-xs mt-1">Nigsoft Authorized</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 md:-bottom-10 -left-4 md:-left-6 p-4 md:p-6 bg-slate-900 rounded-3xl shadow-2xl z-20 flex items-center gap-3 md:gap-4 scale-75 md:scale-100 origin-left"
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Users2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold leading-none italic text-sm md:text-base">Global Network</div>
                  <div className="text-blue-400 text-[10px] md:text-xs mt-1">Join 50+ partners</div>
                </div>
              </motion.div>

              {/* Decorative Blobs */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 rounded-full blur-3xl opacity-50" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}