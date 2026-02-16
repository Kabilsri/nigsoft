"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import StatsSection from '@/components/common/stats-section';

// Define a type for the feature data
interface Feature {
    id: number;
    title: string;
    description: string;
    imageAlt: string;
    // Placeholder for the image import/path
    imageSrc: string;
}

// Define the feature data for the HR section
const billingFeatures: Feature[] = [
    {
        id: 1,
        title: 'All Billing Data, One Dashboard',
        description: 'View invoice status, pending payments, revenue analytics, and tax summaries in real time — without paperwork or fragmented tools.',
        imageAlt: 'All Billing Data, One Dashboard',
        imageSrc: '/service/analysis.jpg',
    },
    {
        id: 2,
        title: 'End-to-End Invoice Lifecycle',
        description: 'From invoice generation and automated reminders to payment collection and receipting — manage the entire billing workflow seamlessly.',
        imageAlt: 'End-to-End Invoice Lifecycle',
        imageSrc: '/service/management.jpg',
    },
    {
        id: 3,
        title: 'Smart Tax & Compliance',
        description: 'Automate GST calculations, track HSN/SAC codes, and generate audit-ready reports while maintaining compliance with financial standards.',
        imageAlt: 'Smart Tax & Compliance',
        imageSrc: '/service/seo.jpg',
    },
    {
        id: 4,
        title: 'Insights & Secure Access',
        description: 'Gain actionable financial insights through real-time reports and provide role-based access for secure data handling and accountability.',
        imageAlt: 'Insights & Secure Access',
        imageSrc: '/service/ai.jpg',
    },
];

const BillingFeaturesSection: React.FC = () => {
    // State to track the currently active (hovered/selected) feature
    const [activeFeatureId, setActiveFeatureId] = useState<number>(billingFeatures[0].id);
    const activeFeature = billingFeatures.find(f => f.id === activeFeatureId);

    return (
        <section className="py-[60px] md:py-[120px] px-4 bg-[#FFF]">
            <h2 className="relative w-full mx-auto text-center font-heading text-[32px] md:text-[48px] font-normal leading-[120%] mb-[16px]">
                Effortless Billing Operations
            </h2>
            <p className="text-[#374577] px-0 md:px-4 mb-[40px] relative w-full md:w-[600px] mx-auto z-40 text-center font-normal text-[16px] md:text-[20px] leading-[150%]">
                No more manual spreadsheets or disconnected systems. With Nigsoft Billing Management Software, manage invoices, payments, tax compliance, and reporting from one centralized platform.
            </p>

            <div className="md:container bg-[#EDF5FE] md:!p-[16px] rounded-[24px] flex flex-col lg:flex-row items-start justify-center gap-[16px]">

                {/* --- Left Column: Image Display (Desktop/Large Screen) --- */}
                <div className="w-full lg:w-2/5 hidden sm:block relative h-[600px] md:h-[500px] lg:h-[500px]">
                    {/* This block mimics the dynamic image change by iterating through 
            features and controlling opacity based on the activeFeatureId state.
          */}
                    {billingFeatures.map((feature) => (
                        <Image
                            key={feature.id}
                            alt={feature.imageAlt}
                            loading="lazy"
                            width={800}
                            height={600}
                            src={feature.imageSrc}
                            className={`w-full py-1 h-full md:object-contain lg:object-cover rounded-[8px] absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${feature.id === activeFeatureId ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                </div>

                {/* --- Right Column: Feature Cards Grid --- */}
                <div className="w-full lg:w-3/5">
                    {/* Mobile Image (Visible only on small screens, outside of the grid layout) */}
                    <div className="h-[300px] sm:h-[500px] mt-[16px] sm:hidden">
                        {activeFeature && (
                            <Image
                                alt={activeFeature.imageAlt}
                                loading="lazy"
                                width={800}
                                height={600}
                                src={activeFeature.imageSrc}
                                className="w-full h-full object-contain rounded-[8px] slide-up"
                            />
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                        {billingFeatures.map((feature) => {
                            const isActive = feature.id === activeFeatureId;
                            const bgColor = isActive
                                ? 'bg-[radial-gradient(360.25%_138.62%_at_5.57%_2.63%,_#2793FF_0%,_#001165_100%)]'
                                : 'bg-white';
                            const titleColor = isActive ? 'text-white' : 'text-black';
                            const descriptionColor = isActive ? 'text-[#E4EAF8]' : 'text-[#373844]';

                            return (
                                <div
                                    key={feature.id}
                                    className="flex flex-col px-[16px] md:px-0"
                                    onMouseEnter={() => setActiveFeatureId(feature.id)}
                                // Optional: For touch devices, you might handle clicks or a shared state differently
                                // onClick={() => setActiveFeatureId(feature.id)}
                                >
                                    <div
                                        className={`rounded-[8px] h-fit md:h-[240px] px-[16px] md:px-[24px] py-[24px] transition-all duration-300 cursor-pointer shadow-[inset_0px_0px_10px_0px_rgba(25,90,255,0.10)] ${bgColor}`}
                                    >
                                        <p className={`font-bold text-[20px] font-normal leading-[120%] mb-[10px] transition-colors duration-300 ${titleColor}`}>
                                            {feature.title}
                                        </p>
                                        <p className={`font-normal text-[16px] leading-[150%] transition-colors duration-300 ${descriptionColor}`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const BillingFeaturesWithStats: React.FC = () => {
    return (
        <>
            <BillingFeaturesSection />
            <StatsSection />
        </>
    );
};

export default BillingFeaturesWithStats;