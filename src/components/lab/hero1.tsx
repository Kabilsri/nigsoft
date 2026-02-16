"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MarketingHero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
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

    const floatingBadgeVariants = (delay: number) => ({
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            } as any,
        },
    });

    return (
        <section className="relative overflow-hidden bg-white mb-10 pt-20 lg:pt-32 pb-12 lg:pb-20">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#3E00B0]/5 to-[#00ADEC]/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 12, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#FF7ACE]/5 to-[#C37CEA]/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        {/* Label */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">

                            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">All-in-One Lab Management</span>
                        </motion.div>

                        {/* Premium Headline */}
                        <motion.h1 variants={itemVariants} className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-[400] leading-[115%] font-heading mb-6 text-slate-900">
                            Turn <span className="bg-gradient-to-r from-[#3F92FF] to-[#06B6D4] bg-clip-text text-transparent">
                                Samples into Reports
                            </span> <br /> Effortlessly with Nigsoft
                        </motion.h1>

                        {/* Premium Sub-headline */}
                        <motion.p variants={itemVariants} className="text-[18px] md:text-[20px] font-normal leading-relaxed text-[#6B7280] max-w-xl mb-10">
                            Transform your laboratory operations with a powerful cloud-based solution designed to simplify workflows, improve accuracy, and deliver faster diagnostic reports.
                        </motion.p>

                        {/* Premium CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = 'https://niglabs.com/'}
                                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#4F87FF] to-[#3B82F6] text-white font-semibold text-[16px] rounded-xl shadow-lg transition-all duration-300 min-w-[180px] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Log In to Lab
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = '/book-demo'}
                                className="group w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#E5E7EB] hover:border-[#3B82F6] text-[#374151] hover:text-[#3B82F6] font-semibold text-[16px] rounded-xl transition-all duration-300"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Book Free Demo
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden lg:block relative"
                    >
                        {/* Main Visual Image (using a representative icon as placeholder) */}
                        <div className="relative mx-auto lg:ml-auto w-full max-w-[500px] aspect-square rounded-[3rem] bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 flex items-center justify-center shadow-2xl p-8">
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                                <Image
                                    src="/images/lab.jpg"
                                    alt="Nigsoft Lab Management Interface"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badges/Text */}
                            <motion.div
                                variants={floatingBadgeVariants(0)}
                                animate="animate"
                                className="absolute -top-6 -right-6 md:-right-10 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3 border border-blue-50"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Reports</p>
                                    <p className="text-[14px] text-slate-900 font-black">Faster Accuracy</p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={floatingBadgeVariants(1)}
                                animate="animate"
                                className="absolute top-1/2 -left-12 lg:-left-20 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3 border border-blue-50 z-20"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cloud Based</p>
                                    <p className="text-[14px] text-slate-900 font-black">24x7 Ready</p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={floatingBadgeVariants(2)}
                                animate="animate"
                                className="absolute -bottom-6 right-10 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3 border border-blue-50"
                            >
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 14.535a12.001 12.001 0 0013.396 6.136l.169-.044.116-.037a12.001 12.001 0 007.962-10.584l-.014-.492z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Secure</p>
                                    <p className="text-[14px] text-slate-900 font-black">Bank-Level Safety</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarketingHero;