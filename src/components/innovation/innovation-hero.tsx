"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function InnovationHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20"
        >
            {/* Dynamic Background Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,#020617_100%)]" />
                <motion.div
                    style={{ y: y1, opacity }}
                    className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-30"
                >
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-4"
                    >
                        <Sparkles className="w-5 h-5 text-blue-400" />
                        <span className="text-blue-200 text-sm font-bold tracking-widest uppercase">The Future of Code</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] sm:leading-none">
                        <motion.span
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1.2 }}
                            className="inline-block"
                        >
                            DRIVING
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ filter: "blur(20px)", opacity: 0, x: -50 }}
                            animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1.2 }}
                            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400"
                        >
                            INNOVATION
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-slate-400 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed px-4 sm:px-0"
                    >
                        At Nigsoft, we don't just follow tech trends—we define them. Experience our ecosystem of cutting-edge solutions built for the next generation of digital excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                    >
                        <button
                            onClick={() => {
                                document.getElementById('innovation-timeline')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/25 w-full sm:w-auto"
                        >
                            <span className="relative z-10 text-white font-bold text-lg flex items-center justify-center gap-2">
                                Our Journey
                                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                        <Link
                            href="/partners"
                            className="px-8 py-4 sm:px-10 sm:py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-md w-full sm:w-auto text-center"
                        >
                            Partner with us
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            // className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                {/* <span className="text-xs font-bold uppercase tracking-widest">Discovery</span> */}
                <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
            </motion.div>
        </section>
    );
}
