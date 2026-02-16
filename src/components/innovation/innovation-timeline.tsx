"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Milestone, Trophy, Globe, Rocket, Zap, Heart } from "lucide-react";

const milestones = [
    {
        year: "2020",
        title: "The Genesis",
        description: "Founded Nigsoft with a vision to simplify healthcare operations through innovative software solutions.",
        icon: Rocket,
        color: "from-blue-500 to-indigo-600"
    },
    {
        year: "2021",
        title: "First Healthcare Solutions",
        description: "Launched our first Laboratory Management System, serving local healthcare providers.",
        icon: Heart,
        color: "from-rose-500 to-pink-600"
    },
    {
        year: "2022",
        title: "Product Expansion",
        description: "Expanded to Hospital, Pharmacy, and Dental Management systems, growing our client base.",
        icon: Globe,
        color: "from-cyan-500 to-blue-600"
    },
    {
        year: "2023",
        title: "Technology Innovation",
        description: "Integrated modern web technologies and cloud solutions to enhance system performance.",
        icon: Zap,
        color: "from-amber-500 to-orange-600"
    },
    {
        year: "2024",
        title: "Service Diversification",
        description: "Expanded into custom software development and comprehensive digital solutions.",
        icon: Milestone,
        color: "from-emerald-500 to-teal-600"
    },
    {
        year: "2025",
        title: "Growth & Innovation",
        description: "Continuing to grow and innovate, building solutions that make a real difference for our clients.",
        icon: Trophy,
        color: "from-purple-500 to-fuchsia-600"
    }
];

export default function InnovationTimeline() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="innovation-timeline" className="relative py-24 bg-[#020617] overflow-hidden font-sans">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter"
                    >
                        OUR <span className="text-blue-500">JOURNEY</span> OF INNOVATION
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 max-w-2xl mx-auto text-lg"
                    >
                        A journey of growth and innovation, from startup to trusted healthcare technology partner.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 -translate-x-1/2 hidden md:block shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    />

                    <div className="space-y-12 md:space-y-24">
                        {milestones.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Year Badge */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 px-4 md:px-0">
                                    <div className="group p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-500 hover:border-white/20">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-2xl`}>
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="text-blue-500 font-black text-2xl tracking-tighter">{item.year}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-400 font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for empty side */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
