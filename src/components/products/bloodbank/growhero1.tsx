"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-white bg-texture font-sans selection:bg-maroon selection:text-white">
            {/* Wavy Background Container - Right Side */}
            <div className="absolute inset-0 z-0">
                <svg
                    viewBox="0 0 1440 1024"
                    className="h-full w-full object-cover"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1440 0H640C690 150 940 250 990 400C1040 550 790 650 890 850C940 950 1240 1024 1440 1024V0Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1440"
                            y1="0"
                            x2="720"
                            y2="1024"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#cb2525ff" />
                            <stop offset="1" stopColor="#843232ff" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 grid min-h-screen grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-24">
                {/* Left Section: Text Content */}


                {/* Right Section: 3D Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    {/* Subtle Shadow beneath the drop */}
                    <div className="absolute bottom-20 h-10 w-48 rounded-[100%] bg-black/10 blur-2xl" />

                    <img
                        src="/icons/blood1.png"
                        alt="3D Blood Drop"
                        className="relative z-10 w-full max-w-lg drop-shadow-[0_20px_50px_rgba(77,0,0,0.3)]"
                    />
                </motion.div>
                <div className="flex flex-col space-y-8 max-w-xl mt-16 sm:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-red-500/30 ring-1 ring-red-400/50 backdrop-blur-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                            Save Blood, Save Life
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black md:text-7xl lg:leading-[1.1]">
                            BLOOD BANK <br />
                            MANAGEMENT
                        </h1>
                        <p className="text-lg font-medium leading-relaxed text-black md:text-xl">
                            Nigsoft Blood Bank System is an all-in-one healthcare platform designed for blood banks and hospitals. It intelligently manages donor records, blood inventory, testing, compatibility, distribution, and analytics through one secure, centralized dashboard.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <Button
                            size="lg"
                            className="h-14 rounded-2xl bg-[#FFD6D6] px-10 text-lg font-bold text-[#FF4D4D] shadow-[0_10px_30px_rgba(255,214,214,0.3)] transition-all hover:scale-105 hover:bg-[#FFCACA] active:scale-95"
                            onClick={() => window.location.href = 'https://nigblood.com/'}
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 rounded-2xl border-none bg-white px-10 text-lg font-bold text-[#333333] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all hover:scale-105 hover:bg-neutral-50 active:scale-95"
                            onClick={() => window.location.href = '/book-demo'}
                        >
                            Book Now
                        </Button>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
        </main>
    )
}
