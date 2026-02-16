"use client";

import { motion } from "framer-motion";
import { Globe, Users, Award, ShieldCheck, MapPin } from "lucide-react";

const GlobalPresence = () => {
    const stats = [
        { label: "Active Clients", value: "1000+", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
        { label: "Years Experience", value: "5+", icon: Globe, color: "text-emerald-500", bg: "bg-emerald-50" },
        { label: "Successful Projects", value: "100+", icon: Award, color: "text-orange-500", bg: "bg-orange-50" },
        { label: "Client Satisfaction", value: "99%", icon: ShieldCheck, color: "text-purple-500", bg: "bg-purple-50" }
    ];

    const locations = [
        { id: "Delhi", x: "15%", y: "10%", delay: 0.2 },
        { id: "Mumbai", x: "5%", y: "45%", delay: 0.4 },
        { id: "Ahmedabad", x: "25%", y: "25%", delay: 0.6 },
        { id: "Pune", x: "15%", y: "70%", delay: 0.8 },
        { id: "Hyderabad", x: "75%", y: "20%", delay: 1.0 },
        { id: "Bangalore", x: "85%", y: "55%", delay: 1.2 },
        { id: "Chennai", x: "70%", y: "85%", delay: 1.4 },
        { id: "Kochi", x: "40%", y: "90%", delay: 1.6 },
        { id: "Lucknow", x: "55%", y: "5%", delay: 1.8 },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">
            {/* Engineering Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Side: Connectivity Network */}
                    <div className="flex-1 relative w-full min-h-[500px] flex items-center justify-center hidden lg:flex">
                        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full" />

                        {/* Central Hub */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative z-20 w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-blue-50 p-6"
                        >
                            <Globe className="w-full h-full text-blue-600" />
                            <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/20 animate-ping" />
                        </motion.div>

                        {/* City Nodes */}
                        <div className="absolute inset-0">
                            {locations.map((loc) => (
                                <motion.div
                                    key={loc.id}
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: loc.delay, duration: 0.6 }}
                                    className="absolute z-20"
                                    style={{ left: loc.x, top: loc.y }}
                                >
                                    <div className="group relative">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-100 rounded-xl shadow-lg hover:shadow-blue-500/10 hover:border-blue-200 transition-all cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="font-bold text-slate-900 text-sm whitespace-nowrap">{loc.id}</span>
                                        </div>

                                        {/* Connectivity Line (Visual representation) */}
                                        <div className="absolute top-1/2 left-1/2 w-[200px] h-px bg-gradient-to-r from-blue-500/20 to-transparent -z-10 origin-left opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{
                                                transform: `rotate(${Math.random() * 360}deg)`
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Background Decoration */}
                        <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" viewBox="0 0 500 500">
                            <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-blue-400" />
                            <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" className="text-slate-200" />
                        </svg>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 space-y-12">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-100">
                                <MapPin className="w-3 h-3" /> Digital Connectivity
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Delivering Excellence <span className="text-blue-600">Across Borders</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-500 font-medium mt-8 leading-relaxed max-w-xl">
                                From major metros to emerging tech hubs, Nigsoft powers healthcare innovation with a robust digital network designed for reliability and scale.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex gap-4">
                                        <div className={`w-14 h-14 shrink-0 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center border border-current/10 group-hover:scale-110 transition-transform`}>
                                            <stat.icon className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                                            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;
