"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, TrendingUp, Users2, ShieldCheck } from "lucide-react";

interface Stat {
    label: string;
    value: string;
    subValue: string;
    icon: any;
    color: string;
}

const stats: Stat[] = [
    {
        label: "Project Efficiency",
        value: "95%",
        subValue: "+12% this year",
        icon: TrendingUp,
        color: "from-blue-500 to-cyan-400"
    },
    {
        label: "Data Security",
        value: "100%",
        subValue: "Military Grade",
        icon: ShieldCheck,
        color: "from-emerald-500 to-teal-400"
    },
    {
        label: "Customer Support",
        value: "24/7",
        subValue: "Instant Response",
        icon: Users2,
        color: "from-purple-500 to-indigo-400"
    },
    {
        label: "Process Uptime",
        value: "99.9%",
        subValue: "High Availability",
        icon: CheckCircle2,
        color: "from-rose-500 to-orange-400"
    }
];

export default function ServiceStats() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden font-sans">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Text */}
                    <div className="lg:w-1/2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                REAL-TIME <span className="text-blue-600">PERFORMANCE</span> METRICS
                            </h2>
                            <p className="text-slate-600 text-lg mt-4 max-w-xl font-medium leading-relaxed">
                                We believe in absolute transparency. Monitor the core vitals of our service delivery through high-performance indicators that guarantee your business success.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex items-center gap-4 pt-4"
                        >
                            {/* <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 shadow-sm" />
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                                    +500
                                </div>
                            </div> */}
                            <p className="text-slate-500 font-bold text-sm">Trusted by Industry Leaders</p>
                        </motion.div>
                    </div>

                    {/* Right Side: Stats Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:bg-white"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg shadow-blue-500/10`}>
                                    <stat.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-slate-900 tracking-tighter mb-1">{stat.value}</span>
                                    <span className="text-slate-900 font-bold text-base mb-1">{stat.label}</span>
                                    <span className="text-slate-400 text-xs font-medium">{stat.subValue}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
