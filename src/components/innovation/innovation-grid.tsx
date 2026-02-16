"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Rocket, Shield, Zap, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const innovationAreas = [
    {
        title: "Healthcare Technology",
        description: "Developing specialized software solutions for hospitals, labs, and healthcare providers.",
        icon: Cpu,
        color: "from-blue-500 to-cyan-400",
        glow: "shadow-blue-500/20",
        link: "/services/bpo"
    },
    {
        title: "Cloud Solutions",
        description: "Building secure, scalable cloud-based systems that grow with your business needs.",
        icon: Globe,
        color: "from-purple-500 to-indigo-400",
        glow: "shadow-purple-500/20"
    },
    {
        title: "Custom Development",
        description: "Creating tailored software solutions designed specifically for your unique requirements.",
        icon: Rocket,
        color: "from-rose-500 to-orange-400",
        glow: "shadow-rose-500/20"
    },
    {
        title: "Data Security",
        description: "Implementing robust security measures to protect sensitive healthcare and business data.",
        icon: Shield,
        color: "from-emerald-500 to-teal-400",
        glow: "shadow-emerald-500/20"
    },
    {
        title: "Modern Web Tech",
        description: "Leveraging the latest web technologies for fast, responsive, and user-friendly applications.",
        icon: Zap,
        color: "from-yellow-500 to-amber-400",
        glow: "shadow-yellow-500/20"
    },
    {
        title: "Artificial Intelligence",
        description: "Integrating AI technologies to enhance healthcare workflows and automate routine tasks.",
        icon: Layers,
        color: "from-fuchsia-500 to-pink-400",
        glow: "shadow-fuchsia-500/20"
    }
];

export default function InnovationGrid() {
    return (
        <section className="relative py-24 bg-[#020617]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {innovationAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[320px] rounded-[40px] bg-white/5 border border-white/10 p-10 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-white/20 shadow-2xl"
                        >
                            {/* Animated Accent Background */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.color} blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-8 shadow-2xl ${area.glow} group-hover:scale-110 transition-transform`}>
                                    <area.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {area.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {area.description}
                                </p>

                                {/* <div className="mt-auto">
                                    {area.link ? (
                                        <Link
                                            href={area.link}
                                            className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm group-hover:gap-3 transition-all"
                                        >
                                            SEE IT IN ACTION <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    ) : (
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-blue-400 font-bold text-sm">
                                            LEARN MORE <ArrowRight className="w-4 h-4" />
                                        </div>
                                    )}
                                </div> */}
                            </div>

                            {/* Glass Reflection Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
