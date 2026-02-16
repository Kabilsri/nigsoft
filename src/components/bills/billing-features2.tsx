"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


interface Feature {
    id: number;
    title: string;
    description: string;
    imageAlt: string;
    imageSrc: string;
}

const billingFeatures: Feature[] = [
    {
        id: 1,
        title: 'Recurring Billing & Subscriptions',
        description: 'Easily manage AMCs, service contracts, and subscription plans with automated recurring invoice generation and expiry alerts.',
        imageAlt: 'Recurring Billing',
        imageSrc: '/service/management.jpg',
    },
    {
        id: 2,
        title: 'Smart Inventory & Stock Alerts',
        description: 'Track stock levels in real-time across multiple locations. Get automated low-stock notifications and manage HSN/SAC codes effortlessly.',
        imageAlt: 'Inventory Management',
        imageSrc: '/service/analysis.jpg',
    },
    {
        id: 3,
        title: 'Expense & Vendor Management',
        description: 'Monitor business expenses, manage supplier payments, and track purchase orders to maintain a complete 360-degree view of your finances.',
        imageAlt: 'Expense Tracking',
        imageSrc: '/service/seo.jpg',
    },
    {
        id: 4,
        title: 'Advanced Growth Analytics',
        description: 'Access detailed P&L reports, customer lifetime value insights, and sales performance trends to make data-driven decisions for your business.',
        imageAlt: 'Growth Analytics',
        imageSrc: '/service/ai.jpg',
    },
];

const BillingFeatures: React.FC = () => {
    const [activeFeatureId, setActiveFeatureId] = useState<number>(billingFeatures[0].id);
    const activeFeature = billingFeatures.find(f => f.id === activeFeatureId);

    return (
        <section className="py-[60px] md:py-[80px] px-4 bg-[#FFF]">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full mx-auto text-center font-heading text-[32px] md:text-[40px] font-normal leading-[120%] mb-[16px]"
            >
                Advanced Management & Growth Tools
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#374577] px-0 md:px-4 mb-[40px] relative w-full md:w-[600px] mx-auto z-40 text-center font-normal text-[16px] md:text-[20px] leading-[150%]"
            >
                Go beyond simple invoicing. Nigsoft provides powerful tools to manage your entire business operation, from stock to expenses and growth strategy.
            </motion.p>

            <div className="md:container mx-auto bg-[#EDF5FE] md:!p-[16px] rounded-[24px] flex flex-col lg:flex-row items-center justify-center gap-[16px]">
                <div className="w-full lg:w-2/5 hidden sm:block relative h-[600px] md:h-[500px] lg:h-[500px]">
                    <AnimatePresence mode="wait">
                        {activeFeature && (
                            <motion.div
                                key={activeFeatureId}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    alt={activeFeature.imageAlt}
                                    loading="lazy"
                                    fill
                                    src={activeFeature.imageSrc}
                                    className="object-cover rounded-[8px]"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="w-full lg:w-3/5">
                    <div className="h-[300px] sm:h-[500px] mt-[16px] sm:hidden relative">
                        <AnimatePresence mode="wait">
                            {activeFeature && (
                                <motion.div
                                    key={activeFeatureId}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        alt={activeFeature.imageAlt}
                                        loading="lazy"
                                        fill
                                        src={activeFeature.imageSrc}
                                        className="object-contain rounded-[8px]"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                        {billingFeatures.map((feature, index) => {
                            const isActive = feature.id === activeFeatureId;
                            const bgColor = isActive
                                ? 'bg-gradient-to-br from-[#195AFF] to-[#001165]'
                                : 'bg-white';
                            const titleColor = isActive ? 'text-white' : 'text-black';
                            const descriptionColor = isActive ? 'text-[#E4EAF8]' : 'text-[#373844]';

                            return (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex flex-col px-[16px] md:px-0"
                                    onMouseEnter={() => setActiveFeatureId(feature.id)}
                                >
                                    <div
                                        className={`rounded-[12px] h-fit md:h-[240px] px-[16px] md:px-[24px] py-[24px] transition-all duration-300 cursor-pointer shadow-sm ${bgColor}`}
                                    >
                                        <p className={`font-bold text-[20px] leading-[120%] mb-[10px] transition-colors duration-300 ${titleColor}`}>
                                            {feature.title}
                                        </p>
                                        <p className={`font-normal text-[16px] leading-[150%] transition-colors duration-300 ${descriptionColor}`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};



export default BillingFeatures;
