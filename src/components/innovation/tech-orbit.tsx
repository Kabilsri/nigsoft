"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
    { id: 1, name: "React", icon: "/icons/react.png", radius: 250, delay: 0 },
    { id: 2, name: "Python", icon: "/icons/python.png", radius: 320, delay: 2 },
    { id: 3, name: "Flutter", icon: "/icons/flutter.png", radius: 250, delay: 5 },
    { id: 4, name: "Next.js", icon: "/icons/react.png", radius: 320, delay: 7 },
    { id: 5, name: "PHP", icon: "/icons/php.png", radius: 250, delay: 10 },
    { id: 6, name: "Node", icon: "/icons/node.png", radius: 320, delay: 12 },
    { id: 7, name: "MySQL", icon: "/icons/sql.png", radius: 250, delay: 15 },
    { id: 8, name: "AWS", icon: "/icons/aws.png", radius: 320, delay: 17 },
];

const ORBIT_SPEED = 20; // Constant speed for all orbits

export default function TechOrbit() {
    const [radiusMultiplier, setRadiusMultiplier] = React.useState(1);

    React.useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 640) {
                setRadiusMultiplier(0.45);
            } else if (window.innerWidth < 1024) {
                setRadiusMultiplier(0.7);
            } else {
                setRadiusMultiplier(1);
            }
        };

        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, []);

    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Cutting-Edge Tech Stack</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our innovation is powered by the world's most robust technologies, orbiting around our core mission to deliver excellence.
                    </p>
                </motion.div>

                <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
                    {/* Central Hub */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-[0_0_100px_rgba(37,99,235,0.4)]"
                    >
                        <div className="absolute inset-2 border-2 border-white/20 rounded-full animate-spin-slow" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                            className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-3xl rounded-3xl flex items-center justify-center border border-white/20"
                        >
                            <span className="text-white font-black text-2xl">NI</span>
                        </motion.div>
                    </motion.div>

                    {/* Orbits */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div
                            className="border border-white/5 rounded-full"
                            style={{ width: 500 * radiusMultiplier, height: 500 * radiusMultiplier }}
                        />
                        <div
                            className="absolute border border-white/5 rounded-full"
                            style={{ width: 640 * radiusMultiplier, height: 640 * radiusMultiplier }}
                        />
                    </div>

                    {/* Orbiting Icons */}
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.id}
                            className="absolute pointer-events-auto cursor-pointer group"
                            style={{
                                width: 60,
                                height: 60,
                            }}
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: ORBIT_SPEED,
                                repeat: Infinity,
                                ease: "linear",
                                delay: tech.delay,
                            }}
                        >
                            <motion.div
                                style={{
                                    x: tech.radius * radiusMultiplier,
                                }}
                                whileHover={{ scale: 1.3 }}
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    rotate: {
                                        duration: ORBIT_SPEED,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: tech.delay,
                                    }
                                }}
                                className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-lg transition-colors group-hover:border-blue-500/50 group-hover:bg-blue-500/10"
                            >
                                <div className="relative w-8 h-8 md:w-10 md:h-10">
                                    <img
                                        alt={tech.name}
                                        src={tech.icon}
                                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>

                                {/* Tooltip */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {tech.name}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    );
}
