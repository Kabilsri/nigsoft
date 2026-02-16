"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Globe2, Award, Calendar } from "lucide-react";

export default function AboutStats() {
    const stats = [
        { label: "Founded", value: "2020", icon: Calendar, color: "text-blue-600" },
        { label: "Project Completed", value: "100+", icon: Users, color: "text-indigo-600" },
        { label: "Active Clients", value: "1000+", icon: TrendingUp, color: "text-emerald-600" },
        { label: "Presence", value: "Global", icon: Globe2, color: "text-rose-600" }
    ];

    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden font-sans">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_70%)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group text-center space-y-6"
                        >
                            <div className="relative inline-flex items-center justify-center px-4 py-2 bg-white/5 border border-white/10 rounded-full group-hover:bg-white/10 transition-colors">
                                <s.icon className={`w-4 h-4 mr-2 ${s.color}`} />
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
                            </div>
                            <div>
                                <motion.h4
                                    whileHover={{ scale: 1.1 }}
                                    className="text-5xl md:text-6xl font-black text-white tracking-tight"
                                >
                                    {s.value}
                                </motion.h4>
                                <div className={`h-1 w-12 mx-auto mt-4 rounded-full bg-gradient-to-r ${s.color === "text-blue-600" ? "from-blue-600 to-indigo-600" : s.color === "text-emerald-600" ? "from-emerald-600 to-teal-600" : "from-rose-600 to-pink-600"}`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
