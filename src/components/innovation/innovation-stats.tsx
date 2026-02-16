"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface StatItemProps {
    label: string;
    value: number;
    suffix?: string;
    color: string;
    description: string;
}

function Counter({ value, suffix }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const spring = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const display = useTransform(spring, (current) =>
        Math.floor(current).toLocaleString()
    );

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    return (
        <span ref={ref}>
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}

const stats: StatItemProps[] = [
    {
        label: "Client Satisfaction",
        value: 98,
        suffix: "%",
        color: "from-cyan-400 to-blue-500",
        description: "High satisfaction rate from our healthcare clients."
    },
    {
        label: "Development Hours",
        value: 5000,
        suffix: "+",
        color: "from-purple-500 to-pink-500",
        description: "Hours invested in building quality healthcare solutions."
    },
    {
        label: "Active Clients",
        value: 100,
        suffix: "+",
        color: "from-amber-400 to-orange-500",
        description: "Healthcare providers trusting our software solutions."
    },
    {
        label: "System Uptime",
        value: 99,
        suffix: ".9%",
        color: "from-emerald-400 to-teal-500",
        description: "Reliable cloud infrastructure ensuring continuous service."
    }
];

export default function InnovationStats() {
    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="relative group h-full"
                        >
                            <div className="h-full p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500">
                                <div className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-4 flex items-baseline gap-1`}>
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">{stat.label}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {stat.description}
                                </p>

                                {/* Decorative Line */}
                                <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${stat.color} opacity-30 group-hover:w-full transition-all duration-700`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
