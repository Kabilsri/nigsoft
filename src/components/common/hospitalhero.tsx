"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MousePointer2, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection2() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any,
        },
    };

    const floatingVariants = (delay: number) => ({
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            } as any,
        },
    });

    return (
        <section className="relative w-full overflow-hidden bg-gray-100 pt-24 lg:pt-32 pb-20 lg:pb-32">
            {/* Premium Background Glow System */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-400/20 blur-[150px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Side: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left space-y-8"
                    >
                        {/* Label Badge */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Next-Gen Hospital Management</span>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-[#090D28]">
                                <span className="bg-gradient-to-r from-[#195AFF] via-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent">Complete</span> <br />
                                Hospital System <br />
                                for <span className="text-[#195AFF]">Modern Healthcare</span>
                            </h1>
                            <p className="text-[#4B5563] text-lg md:text-xl mt-6 max-w-xl font-medium leading-relaxed">
                                Streamline patient care, optimize hospital operations, and enhance digital efficiency with our enterprise-grade HIPAA compliant solution.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-start items-center pt-4">
                            <Link href="/book-demo" className="w-full sm:w-auto">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative inline-flex items-center justify-center h-14 px-10 bg-[#195AFF] text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/25 overflow-hidden min-w-[180px]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Book a Free Demo
                                        <Play className="w-4 h-4 fill-current ml-1" />
                                    </span>
                                </motion.div>
                            </Link>

                            <Link href="https://nigdoc.com" className="w-full sm:w-auto">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative inline-flex items-center justify-center h-14 px-10 bg-white border-2 border-[#195AFF] text-[#195AFF] hover:bg-[#195AFF] hover:text-white font-bold rounded-xl transition-all duration-300 shadow-lg overflow-hidden min-w-[180px]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#195AFF] to-[#1344C3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get Started Now
                                    </span>
                                </motion.div>
                            </Link>
                           
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center justify-start gap-2">
                            <div className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-[#10B981] text-xs font-bold uppercase tracking-widest">
                                Available 24/7 Support
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Visual Showcase Section */}
                    <div className="relative w-full hidden lg:block">
                        {/* Main Hero Asset Container */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                            className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-white border-4 border-white group"
                        >
                            <Image
                                alt="Professional Hospital Management Dashboard Interface"
                                width={1480}
                                height={849}
                                priority
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                src="/icons/doctor.jpg"
                            />
                            {/* Gloss Reflection Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/5 pointer-events-none" />
                        </motion.div>

                        {/* Floating Feature Tags */}
                        <div className="absolute inset-0 pointer-events-none z-20">
                            <motion.div
                                variants={floatingVariants(0)}
                                animate="animate"
                                className="absolute -top-6 -left-4 lg:-top-10 lg:-left-10"
                            >
                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-2xl shadow-xl border border-blue-50 flex items-center gap-2 lg:gap-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <span className="font-bold text-blue-600 text-[10px] lg:text-sm">P</span>
                                    </div>
                                    <span className="font-bold text-[#090D28] text-[10px] lg:text-sm whitespace-nowrap">Patient Management</span>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={floatingVariants(1)}
                                animate="animate"
                                className="absolute -top-8 -right-8 lg:-right-16"
                            >
                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-2xl shadow-xl border border-blue-50 flex items-center gap-2 lg:gap-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <span className="font-bold text-emerald-600 text-[10px] lg:text-sm">H</span>
                                    </div>
                                    <span className="font-bold text-[#090D28] text-[10px] lg:text-sm whitespace-nowrap">EMR/EHR Integrated</span>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={floatingVariants(2)}
                                animate="animate"
                                className="absolute bottom-[10%] -left-6 lg:-left-20"
                            >
                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-2xl shadow-xl border border-blue-50 flex items-center gap-2 lg:gap-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-pink-100 flex items-center justify-center">
                                        <span className="font-bold text-pink-600 text-[10px] lg:text-sm">B</span>
                                    </div>
                                    <span className="font-bold text-[#090D28] text-[10px] lg:text-sm whitespace-nowrap">Smart Billing System</span>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={floatingVariants(1.5)}
                                animate="animate"
                                className="absolute -bottom-6 right-0 lg:-bottom-10 lg:-right-6"
                            >
                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-2xl shadow-xl border border-blue-50 flex items-center gap-2 lg:gap-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                        <span className="font-bold text-amber-600 text-[10px] lg:text-sm">L</span>
                                    </div>
                                    <span className="font-bold text-[#090D28] text-[10px] lg:text-sm whitespace-nowrap">Advanced LIS Engine</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Device Shadow Anchor */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-blue-900/10 blur-3xl -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}