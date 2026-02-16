"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="relative py-32 bg-white overflow-hidden font-sans">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto relative p-16 md:p-24 bg-[#020617] rounded-[4rem] overflow-hidden"
                >
                    {/* Animated Glows */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full" />

                    <div className="relative z-10 space-y-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-black text-blue-200 uppercase tracking-widest">Join the Revolution</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                            Ready to Expand the <br />
                            <span className="text-blue-500 italic">Future</span> of Healthcare?
                        </h2>

                        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                            Our ecosystem is growing every day. Whether you're a clinician, developer, or partner, there's a place for you at Nigsoft.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="/career" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-3 active:scale-95">
                                Join the Team <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="/contact" className="px-10 py-5 bg-white/5 text-white rounded-2xl font-black hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md">
                                Partner with Us
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Kinetic Text Background (Optional/Subtle) */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none -z-10" />
        </section>
    );
}
