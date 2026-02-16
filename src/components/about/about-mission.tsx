"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Rocket } from "lucide-react";

export default function AboutMission() {
    const values = [
        {
            title: "Our Mission",
            desc: "Empowering healthcare providers with intuitive technology to eliminate operational barriers.",
            icon: Target,
            color: "blue"
        },
        {
            title: "Our Vision",
            desc: "To be the global nervous system of healthcare operations, connecting every touchpoint.",
            icon: Eye,
            color: "indigo"
        },
        {
            title: "Our Core",
            desc: "Patient-centric innovation drives every line of code we write and every feature we deploy.",
            icon: Heart,
            color: "rose"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 font-sans">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                        <Rocket className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-black text-slate-700 uppercase tracking-widest">Purpose Driven</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Building the Future of Care</h2>
                    <p className="text-xl text-slate-500 font-medium">We believe quality healthcare should be accessible, efficient, and data-driven for everyone.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all group"
                        >
                            <div className={`w-16 h-16 bg-${v.color}-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <v.icon className={`w-8 h-8 text-${v.color}-600`} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{v.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
