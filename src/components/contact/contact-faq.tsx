"use client";

import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How quickly can I expect a response?",
        answer: "Our strategy team typically responds to all inquiries within 24 business hours. Priority support is available for existing enterprise clients."
    },
    {
        question: "Do you offer free consultation calls?",
        answer: "Yes, we provide a complimentary 30-minute discovery session to understand your requirements and outline a potential solution roadmap."
    },
    {
        question: "Can you migrate data from my existing system?",
        answer: "Absolutely. We specialize in secure data migration from legacy platforms to our modern, cloud-native healthcare and ERP solutions."
    },
    {
        question: "What industries do you specialize in?",
        answer: "While we have deep expertise in Healthcare (Labs, Hospitals, Pharmacy), we also provide custom software solutions for Finance, E-commerce, and Enterprise Resource Planning."
    },
    {
        question: "Do you provide on-site training?",
        answer: "Yes, we offer both remote and on-site training sessions for your staff to ensure a smooth transition and maximum adoption of our platforms."
    }
];

const ContactFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6">
                            <HelpCircle className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-black text-slate-700 uppercase tracking-widest">Support FAQ</span>
                        </div>
                        <h2 className="text-4xl font-black text-slate-900">Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group border border-slate-100 rounded-3xl overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-8 text-left"
                                >
                                    <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-400"}`}>
                                        {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{ height: openIndex === idx ? "auto" : 0, opacity: openIndex === idx ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;
