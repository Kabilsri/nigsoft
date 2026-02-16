"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function InnovationCTA() {
    return (
        <section className="relative py-32 bg-[#020617] overflow-hidden">
            {/* Background Portal Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto rounded-[60px] bg-white/5 border border-white/10 p-12 md:p-24 backdrop-blur-3xl overflow-hidden relative"
                >
                    {/* Subtle animated pattern */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] mix-blend-overlay" />
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            Ready to evolve?
                        </motion.div>

                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                            SHAPE THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">FUTURE</span> OF YOUR BUSINESS
                        </h2>

                        <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium">
                            Join the league of forward-thinking enterprises leveraging our innovation ecosystem to drive unprecedented growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/contact"
                                className="group relative px-12 py-6 bg-blue-600 rounded-[20px] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.3)]"
                            >
                                <span className="relative z-10 text-white font-black text-xl flex items-center gap-2">
                                    STREATEGIZE NOW
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>

                            <Link
                                href="/about"
                                className="px-12 py-6 bg-white/5 border border-white/10 rounded-[20px] text-white font-black text-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-md"
                            >
                                OUR STORY
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
