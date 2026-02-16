"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StatsSection from '../common/stats-section';

const billingFeatures = [
    {
        id: 1,
        title: 'Smart Invoice Generation',
        description: 'Create professional invoices instantly with customizable templates, automated calculations, and multi-currency support.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        color: 'from-blue-500 to-blue-600'
    },
    {
        id: 2,
        title: 'Automated Payment Tracking',
        description: 'Monitor payment status in real-time with automated reminders and comprehensive payment history tracking.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
        color: 'from-green-500 to-green-600'
    },
    {
        id: 3,
        title: 'Inventory Management',
        description: 'Track stock levels, manage suppliers, and get low-stock alerts to maintain optimal inventory levels.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        color: 'from-purple-500 to-purple-600'
    },
    {
        id: 4,
        title: 'GST & Tax Compliance',
        description: 'Stay compliant with automated GST calculations, tax reports, and seamless integration with accounting systems.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        color: 'from-orange-500 to-orange-600'
    },
    {
        id: 5,
        title: 'Multi-Channel Payments',
        description: 'Accept payments through UPI, cards, net banking, and wallets with secure payment gateway integration.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'from-red-500 to-red-600'
    },
    {
        id: 6,
        title: 'Business Analytics',
        description: 'Get detailed insights with revenue reports, customer analytics, and performance dashboards.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        color: 'from-indigo-500 to-indigo-600'
    }
];

const BillingFeatures: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-[#3F92FF] via-[#195AFF] to-[#06B6D4] bg-clip-text text-transparent ">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Complete Billing
                        <span className="text-transparent bg-clip-text bg-[#f9c700]"> Solution</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Transform your business operations with our comprehensive billing platform that handles everything from invoicing to inventory management.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {billingFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#f9c700] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-[#f9c700e0] rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4 text-black">Ready to Streamline Your Billing?</h3>
                        <p className="text-xl mb-8 opacity-90 text-black">Join thousands of businesses already using NigBills to manage their operations efficiently.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.location.href = 'https://bills.nigsoft.com'}
                                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                            >
                                Start Free Trial
                            </button>
                            <button
                                onClick={() => window.location.href = '/book-demo'}
                                className="group px-8 py-4 border-2 border-white text-white rounded-xl font-semibold  transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Book Demo
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


export default BillingFeatures;