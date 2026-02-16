"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CurriculumAccordion() {
    const [openWeek, setOpenWeek] = useState<number | null>(null);

    const toggleWeek = (week: number) => {
        setOpenWeek(openWeek === week ? null : week);
    };

    const curriculumData = [
        {
            week: 1,
            title: "Week 1: Digital Foundations & HIMS Core",
            content: "Moving beyond basic computer literacy. Understanding Server vs. Cloud, data security, and mastering the Hospital Information Management System (HIMS) workflow. How to manage patient data without error."
        },
        {
            week: 2,
            title: "Week 2: The Digital Doctor's Toolkit",
            content: "Telemedicine protocols, electronic prescribing, digital diagnostics integration, and the architecture of modern hospitals (LIMS, RIS, PACS integration). Mastering the Nigsoft ecosystem."
        },
        {
            week: 3,
            title: "Week 3: AI in Healthcare - The New Stethoscope",
            content: "Demystifying AI. Predictive analytics, clinical decision support systems (CDSS), and how Machine Learning is diagnosing diseases earlier than humans can. Why you need to trust (and verify) the algorithm."
        },
        {
            week: 4,
            title: "Week 4: Future-Proofing & Leadership",
            content: "Robotics, IoT in patient monitoring, and the ethical use of tech. The 30-Task Examination Challenge. How to lead a tech-enabled team and optimize hospital operations."
        }
    ];

    return (
        <div className="max-w-3xl mx-auto mt-20">
            <h3 className="text-3xl font-black text-slate-900 mb-8 text-center tracking-tight">The Curriculum</h3>
            <div className="space-y-4">
                {curriculumData.map((week) => (
                    <div key={week.week} className="bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
                        <button
                            onClick={() => toggleWeek(week.week)}
                            className="w-full flex justify-between items-center p-6 text-left group"
                        >
                            <span className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">{week.title}</span>
                            <ChevronDown
                                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openWeek === week.week ? "rotate-180 text-blue-600" : "group-hover:text-blue-500"}`}
                            />
                        </button>
                        <AnimatePresence>
                            {openWeek === week.week && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="border-t border-slate-100 bg-white/40">
                                        <div className="p-6 pt-2">
                                            <p className="text-slate-600 leading-relaxed">{week.content}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
