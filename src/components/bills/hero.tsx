"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const BillsHero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[80vh] md:min-h-[90vh] mb-2 md:mb-5 flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat font-sans " style={{backgroundImage: 'url("/icons/bills.jpg")'}}>
      {/* Background overlay */}
      <div className="absolute inset-0 "></div>

      {/* Dynamic Background */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1)_0%,rgba(15,23,42,1)_70%)]" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

       
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]"
        />
      </div> */}

      <div className="container mx-auto px-4 relative z-10 pt-16 md:pt-20 pb-8 md:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Content Side */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8 mt-8 md:mt-20 lg:mt-2 px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-500 font-medium text-sm backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Smart Billing Architecture
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-black leading-[1.1] tracking-tight"
            >
              NigBills – Smart <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 animate-gradient-x">
                Billing, Inventory & Business<br />
              </span>
               Management Software
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              All-in-one billing solution to manage sales, stocks, suppliers, payouts, and reports — faster, simpler, and smarter.
              Streamline your business operations with automated invoicing, real-time inventory tracking, and comprehensive financial insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => window.location.href = 'https://nigbills.com/'}
                className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] hover:-translate-y-1 w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => window.location.href = '/book-demo'}
                className="px-8 py-4 bg-black/5 border border-black/10 hover:bg-black/10 text-black rounded-xl font-semibold transition-all backdrop-blur-sm w-full sm:w-auto hover:-translate-y-1"
              >
                Book free Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, staggerChildren: 0.1 }}
              className="pt-4 mb-4 border-t border-black/10 grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h4 className="text-2xl font-bold text-black">25k+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Invoices</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <h4 className="text-2xl font-bold text-black">99.9%</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Uptime</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <h4 className="text-2xl font-bold text-black">24/7</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Support</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Side - 3D Mockup */}
          <div className="lg:w-1/2 relative perspective-[2000px] group hidden md:block">
            <motion.div
              style={{ y, opacity }}
              initial={{ opacity: 0, rotateX: 20, rotateY: -20, scale: 0.9 }}
              animate={{ opacity: 1, rotateX: 10, rotateY: -10, scale: 0.85 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 transform-style-3d md:-mr-20"
            >
              {/* Floating Glass Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -left-12 z-30 p-4 bg-white/10 backdrop-blur-xl border border-black/20 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-black-400">Payment Received</p>
                    <p className="text-sm font-bold text-black">₹1,250.00</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -right-8 z-30 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">

                  <div>
                    <p className="text-xs text-black-400">GST</p>
                    <p className="text-sm font-bold text-black">18% added</p>
                  </div>
                </div>
              </motion.div>

              {/* Main Dashboard Preview */}
              <div className="relative rounded-[2rem] overflow-hidden bg-[#1E293B] border border-slate-700/50 shadow-[0_0_100px_-20px_rgba(59,130,246,0.2)]">
                {/* Fake Browser Header */}
                <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 px-3 py-0.5 bg-slate-900/50 rounded-md text-[10px] text-slate-500 font-mono w-40">https://bills.nigsoft.com/</div>
                </div>

                <div className="relative aspect-[4/3] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8">
                    {/* Abstract Dashboard UI */}
                    {/* Dashboard Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-white font-semibold text-lg">Dashboard</h3>
                        <p className="text-slate-400 text-xs">Welcome back, Alex</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div className="h-8 w-8 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/30">
                        <p className="text-[10px] text-slate-400 mb-1">Total Revenue</p>
                        <p className="text-sm font-bold text-white">₹24,500</p>
                        <p className="text-[10px] text-green-400 flex items-center gap-1 mt-1">
                          <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                          +12.5%
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/30">
                        <p className="text-[10px] text-slate-400 mb-1">Outstanding</p>
                        <p className="text-sm font-bold text-white">₹1,250</p>
                        <p className="text-[10px] text-yellow-500 mt-1">3 Invoices</p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/30">
                        <p className="text-[10px] text-slate-400 mb-1">Expenses</p>
                        <p className="text-sm font-bold text-white">₹8,400</p>
                        <p className="text-[10px] text-red-400 flex items-center gap-1 mt-1">
                          <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                          2.4%
                        </p>
                      </div>
                    </div>

                    {/* Recent Invoices List */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xs font-medium text-slate-300">Recent Invoices</h4>
                        <span className="text-[10px] text-blue-400 cursor-pointer">View All</span>
                      </div>
                      {[
                        { client: "Acme Corp", date: "Today", amount: "₹1,200", status: "Paid", color: "text-green-400 bg-green-400/10" },
                        { client: "Global Tech", date: "Yesterday", amount: "₹3,450", status: "Pending", color: "text-yellow-400 bg-yellow-400/10" },
                        { client: "Stark Ind", date: "Jan 12", amount: "₹950", status: "Overdue", color: "text-red-400 bg-red-400/10" },
                      ].map((invoice, i) => (
                        <div key={i} className="h-10 w-full bg-slate-800/30 rounded-lg border border-slate-700/20 flex items-center px-3 gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-indigo-500/20 text-indigo-400' : i === 1 ? 'bg-purple-500/20 text-purple-400' : 'bg-pink-500/20 text-pink-400'}`}>
                            {invoice.client.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-medium text-slate-200 truncate">{invoice.client}</p>
                            <p className="text-[8px] text-slate-500">{invoice.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-medium text-white">{invoice.amount}</p>
                            <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${invoice.color}`}>
                              {invoice.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gradient Overlay for sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillsHero;