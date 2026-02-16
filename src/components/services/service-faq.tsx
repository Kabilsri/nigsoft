"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
    question: string;
    answer: string;
}

const defaultFaqs: FAQItem[] = [
    {
        question: "How do you ensure data security in BPO operations?",
        answer: "We utilize multi-layer security protocols including end-to-end encryption, role-based access control, and ISO-aligned compliance frameworks to ensure 100% data integrity and confidentiality."
    },
    {
        question: "What is the typical turnaround time for process integration?",
        answer: "Our standardized onboarding process allows us to integrate and go live with most workflows within 5-10 business days, depending on the complexity and volume."
    },
    {
        question: "Do you offer 24/7 support for global businesses?",
        answer: "Yes, our infrastructure is built for round-the-clock operations, providing seamless 24/7 business continuity support across multiple shifts and time zones."
    },
    {
        question: "How do you handle scaling requirements during peak seasons?",
        answer: "Our resource allocation model is inherently scalable. We maintain a talent pool and specialized systems that allow us to ramp up operations instantly to meet seasonal demands."
    }
];

interface ServiceFAQProps {
    items?: FAQItem[];
}

export default function ServiceFAQ({ items = defaultFaqs }: ServiceFAQProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#F8FAFC] font-sans">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
                            FREQUENTLY ASKED <span className="text-blue-600">QUESTIONS</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">
                            Everything you need to know about our service delivery and operational excellence.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {items.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`rounded-[32px] overflow-hidden border transition-all duration-300 ${activeIndex === idx ? "bg-white border-blue-200 shadow-2xl shadow-blue-500/5 mt-6 mb-6 scale-[1.02]" : "bg-white/50 border-slate-200"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-8 text-left group"
                                >
                                    <span className={`text-xl font-bold transition-colors ${activeIndex === idx ? "text-blue-600" : "text-slate-800"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-xl transition-all duration-300 ${activeIndex === idx ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-500 rotate-0"}`}>
                                        {activeIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>

                                {activeIndex === idx && (
                                    <div className="animate-fade-in">
                                        <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed font-medium pt-0">
                                            <div className="h-px w-full bg-slate-100 mb-6" />
                                            {faq.answer}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
