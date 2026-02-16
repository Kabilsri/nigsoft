"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { History, Target, Users2, Sparkles } from "lucide-react";

export default function AboutStory() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Visual Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-blue-100/50 rounded-[3rem] -rotate-3" />
                            <div className="relative aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border border-white">
                                <Image
                                    src="/icons/about.png"
                                    alt="Nigsoft Impact"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
                            </div>

                            {/* Floating Stat Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-10 p-8 bg-white rounded-[2rem] shadow-2xl border border-slate-100 max-w-[240px] hidden lg:block"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <Users2 className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Global Impact</span>
                                </div>
                                <p className="text-3xl font-black text-slate-900 mb-1">Lakhs</p>
                                <p className="text-xs font-bold text-slate-500">of patients served through our platforms worldwide.</p>
                            </motion.div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-6">
                                    <Sparkles className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs font-black text-slate-700 uppercase tracking-widest">Nigsoft Story</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                    Born from a need for <br />
                                    <span className="text-blue-600">Perfect Control</span>
                                </h2>
                            </div>

                            <motion.p variants={itemVariants} className="text-xl text-slate-500 leading-relaxed font-medium">
                                Over a decade ago, we started with a simple belief: healthcare technology shouldn't be a barrier to quality care. When we couldn't find a solution that gave providers the control they needed, we built our own.
                            </motion.p>

                            <div className="space-y-8">
                                <motion.div variants={itemVariants} className="flex gap-6">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Target className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2">Built by Experts</h3>
                                        <p className="text-slate-500 font-medium">Engineered by healthcare professionals and top-tier software architects.</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex gap-6">
                                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <History className="w-7 h-7 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2">Decade of Growth</h3>
                                        <p className="text-slate-500 font-medium">From a team of 5 to 100+ innovators across the globe.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
