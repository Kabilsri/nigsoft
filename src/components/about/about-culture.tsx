"use client";

import { motion } from "framer-motion";
import { Coffee, Rocket, Heart, Lightbulb, Users, Zap, Shield, Crown } from "lucide-react";

export default function AboutCulture() {
    const values = [
        {
            title: "Constant Learners",
            desc: "We thrive on change and seek to understand the 'why' behind every challenge.",
            icon: Lightbulb,
            color: "from-amber-400 to-orange-500"
        },
        {
            title: "Impact First",
            desc: "We prioritize work that has a tangible, positive effect on healthcare outcomes.",
            icon: Zap,
            color: "from-blue-400 to-indigo-500"
        },
        {
            title: "Radical Transparency",
            desc: "Open communication is the foundation of our global collaboration and trust.",
            icon: Shield,
            color: "from-emerald-400 to-teal-500"
        },
        {
            title: "User Empathy",
            desc: "We're not just building features; we're solving real human problems in healthcare.",
            icon: Heart,
            color: "from-rose-400 to-pink-500"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto">

                    {/* Content Side */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-4">Our Culture</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Creating a community <br /> for impact</h2>
                            <p className="text-lg text-slate-500 font-medium mt-6 leading-relaxed">
                                Nigsoft has grown from a small passionate group to over 100 global innovators. We're united by a shared obsession with revolutionizing healthcare through technology.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-slate-900 font-black">100+ Team Members</p>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Across 5 Global Regions</p>
                            </div>
                        </div>
                    </div>

                    {/* Grid Side */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl overflow-hidden"
                            >
                                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity`} />

                                <div className={`w-14 h-14 bg-gradient-to-br ${v.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200`}>
                                    <v.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl font-black text-slate-900 mb-2">{v.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
