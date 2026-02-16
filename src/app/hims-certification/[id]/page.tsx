"use client";

import { notFound, useParams } from "next/navigation";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { ArrowRight, CheckCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Data for each audience segment
const audienceData = {
    "mbbs-interns": {
        title: "MBBS Interns",
        subtitle: "Graduate as a Medical Technologist, not just a Doctor.",
        description: "The medical landscape is shifting. Hospitals are no longer just looking for clinical skills; they need doctors who can navigate the complex digital ecosystems that drive modern healthcare. As an intern, adding HIMS certification to your portfolio distinguishes you immediately.",
        benefits: [
            "Understand the 'Business of Medicine' before you even start practicing.",
            "Secure premium placements in tech-forward corporate hospitals.",
            "Reduce administrative burnout by mastering the tools early.",
            "Bridge the gap between clinical practice and hospital management."
        ],
        curriculumHighlight: "Module 1: Digital Patient Flow & Triage Automation"
    },
    "freshers-juniors": {
        title: "Freshers & Junior Doctors",
        subtitle: "Flatten the steep learning curve.",
        description: "Your first few years of practice are overwhelming. Between patient loads and administrative protocols, burnout is real. Mastering HIMS allows you to efficiently manage patient data, automate improved discharge summaries, and focus on what matters: the patient.",
        benefits: [
            "Slash documentation time by 40% with efficient HIMS usage.",
            "Minimize medico-legal errors through accurate digital record keeping.",
            "Gain a competitive edge for promotions and fellowship applications.",
            "Understand hospital KPIs and how your work impacts them."
        ],
        curriculumHighlight: "Module 2: Electronic Health Records (EHR) & Clinical Decision Support"
    },
    "senior-professionals": {
        title: "Senior Professionals",
        subtitle: "Transition into Leadership & Administration.",
        description: "You've mastered the clinical side. Now, lead the hospital. Senior roles require a deep understanding of hospital operations, resource allocation, and data-driven decision making. HIMS certification is your gateway to the C-suite or Medical Director roles.",
        benefits: [
            "Interpret complex hospital analytics to improve department efficiency.",
            "Lead digital transformation initiatives within your organization.",
            "Optimize resource allocation based on data, not intuition.",
            "Mentor junior staff on best practices for digital health."
        ],
        curriculumHighlight: "Module 3: Healthcare Analytics & Administrative Dashboards"
    }
};

export default function AudienceDetailPage() {
    // Use useParams to get the slug
    const params = useParams();
    const id = params?.id as string;

    const data = audienceData[id as keyof typeof audienceData];

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
                    <p className="text-slate-600 mb-6">Audience segment not found.</p>
                    <Link href="/hims-certification" className="text-blue-600 hover:underline">Return to Certification Page</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <Navigation />

            {/* Background Pattern */}
            {/* <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
            </div> */}

            <main className="pt-32 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <Link href="/hims-certification" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors mb-8 group">
                        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to Certification
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                            Target Audience Profile
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            {data.title}
                        </h1>
                        <p className="text-2xl text-blue-600 font-medium mb-12 leading-relaxed">
                            {data.subtitle}
                        </p>

                        <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-[2rem] shadow-xl mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why This Matters</h2>
                            <p className="text-lg text-slate-600 leading-loose mb-10">
                                {data.description}
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h3>
                            <ul className="space-y-4 mb-10">
                                {data.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                        <span className="text-slate-700 text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                                <span className="block text-blue-600 text-sm font-bold uppercase tracking-widest mb-2">curriculum highlight</span>
                                <p className="text-blue-900 font-bold text-lg">{data.curriculumHighlight}</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-slate-500 mb-6">Ready to upgrade your career capability?</p>
                            <Link href="/hims-apply" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                                Enroll in the Certification
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
