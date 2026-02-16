"use client";

import type { Metadata } from "next";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { ArrowRight, ShieldAlert, TrendingUp, Cpu, Monitor, Clock, CheckCircle, Brain, Award, Star, Users, Briefcase } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import CurriculumAccordion from "@/components/common/curriculum-accordion";
import { useEffect } from "react";
import PricingSection from "@/components/pharmacy/pricing";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function HIMSCertificationPage() {
  useEffect(() => {
    document.title = "HIMS Certification | AI-Enabled Healthcare Professional Training | Nigsoft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master Hospital Information Management Systems in 30 days. Join the next generation of AI-enabled doctors and healthcare professionals. Live training, practical tasks, career transformation.');
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'HIMS certification, hospital management training, healthcare IT course, medical software training, AI healthcare, MBBS internship, doctor training program, hospital information system, healthcare technology certification');
    }
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-900 overflow-x-hidden">
      <Navigation />

      

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        {/* <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        </div> */}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/50 shadow-[0_0_15px_rgba(59,130,246,0.1)] text-blue-700 text-sm font-semibold mb-10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-shadow duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New Cohort Starting Soon
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[1.05]"
          >
            AI Won&apos;t Replace Doctors.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 drop-shadow-sm">
              But AI-Enabled Doctors Will.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-14 leading-relaxed font-medium"
          >
            The stethoscope is no longer enough. The future belongs to Medicos who master the algorithm.
            Join the <span className="text-slate-900 font-bold decoration-blue-500/30 underline underline-offset-4 decoration-2">Nigsoft HIMS Certification</span> and secure your career against obsolescence.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-center gap-5"
          >
            <Link href="/hims-apply" className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold text-lg hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Evolution
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <button className="w-full md:w-auto px-10 py-5 bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
              Download Syllabus
            </button>
          </motion.div>

          {/* Social Proof / Trust Indicators */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 pt-10 border-t border-slate-200/60 max-w-5xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 text-slate-500"
          >
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3 bg-yellow-100/50 rounded-2xl text-yellow-600 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <span className="font-bold text-lg group-hover:text-yellow-600 transition-colors">4.9/5 Rating</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3 bg-blue-100/50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 fill-current" />
              </div>
              <span className="font-bold text-lg group-hover:text-blue-600 transition-colors">500+ Alumni</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3 bg-green-100/50 rounded-2xl text-green-600 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 fill-current" />
              </div>
              <span className="font-bold text-lg group-hover:text-green-600 transition-colors">100% Placement</span>
            </div>
          </motion.div> */}
        </div>
      </section>
      <PricingSection/>

      {/* Reality Check */}
      <section className="py-28 bg-slate-950 relative overflow-hidden">
        {/* Dark Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                The Era of the <span className="relative whitespace-nowrap"><span className="relative z-10 text-slate-500 line-through decoration-red-500 decoration-[6px]">Paper Doctor</span></span> is Over.
              </h2>
              <p className="text-slate-400 mb-8 text-xl leading-relaxed">
                Hospital management is rapidly shifting to automated, data-driven environments.
                From AI-diagnostics to automated patient flow, the infrastructure of healthcare has fundamentally changed.
              </p>
              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm border border-white/10">
                <p className="text-slate-200 font-bold text-lg italic">
                  &quot;Those who cannot navigate a complex HIMS or interpret data analytics will find themselves
                  pushed to the periphery of modern medicine.&quot;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="md:w-1/2 grid grid-cols-1 gap-6"
            >
              <motion.div variants={fadeInUp} className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 group">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <TrendingUp className="w-7 h-7 text-green-400" />
                </div>
                <h4 className="text-2xl text-white font-bold mb-3">Efficiency Demand</h4>
                <p className="text-slate-400 leading-relaxed text-lg">Hospitals now hire based on technical efficiency. It's not just about what you know, but how fast and accurately you can apply it using modern tools.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <Cpu className="w-7 h-7 text-blue-400" />
                </div>
                <h4 className="text-2xl text-white font-bold mb-3">AI Integration</h4>
                <p className="text-slate-400 leading-relaxed text-lg">Diagnostic AI is becoming standard. You need to know how to work *with* it, interpret its outputs, and validate its suggestions.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 blur-[120px] rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 blur-[120px] rounded-full mix-blend-multiply"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">A Bootcamp for the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Modern Medico</span></h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium">30 Days. 1 Hour Per Day. A Career-Defining Shift.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Monitor, color: "text-blue-600", bg: "bg-blue-50", ring: "ring-blue-100", title: "Zoom Live Sessions", desc: "Interactive, high-intensity learning from Nigsoft experts. No boring pre-recorded lectures." },
              { icon: Clock, color: "text-purple-600", bg: "bg-purple-50", ring: "ring-purple-100", title: "30-Day Sprint", desc: "Just 1 hour a day. Designed to fit into the schedule of interns and busy professionals." },
              { icon: CheckCircle, color: "text-teal-600", bg: "bg-teal-50", ring: "ring-teal-100", title: "30 Practical Tasks", desc: "Theory is useless without execution. You will perform 30 real-world HIMS tasks to pass." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`w-20 h-20 ${item.bg} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm ring-4 ${item.ring}`}>
                  <item.icon className={`w-10 h-10 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Curriculum Accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <CurriculumAccordion />
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-28 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Who Needs This Certification?</h2>
            <p className="text-xl text-slate-400 font-medium">Designed for every stage of your medical career.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { id: "mbbs-interns", icon: Brain, title: "MBBS Interns", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20", desc: "Don't just graduate as a doctor. Graduate as a Medical Technologist. Secure the best placements by offering skills traditional curriculums ignore." },
              { id: "freshers-juniors", icon: TrendingUp, title: "Freshers & Junior Doctors", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", desc: "The learning curve is steep. Flatten it. Understand the systems that run modern hospitals so you can focus on patients, not fighting with software." },
              { id: "senior-professionals", icon: Award, title: "Senior Professionals", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20", desc: "Don't let the juniors outpace you. Transition into administrative and leadership roles by understanding the 'Business of Care' through technology." }
            ].map((item, index) => (
              <Link href={`/hims-certification/${item.id}`} key={index} className="block group">
                <motion.div
                  variants={fadeInUp}
                  className="h-full p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm hover:border-white/20"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                    <item.icon className="w-48 h-48 -mr-16 -mt-16 text-white" />
                  </div>
                  <div className={`mb-8 p-4 ${item.bg} rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300 ring-1 ${item.border}`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg relative z-10 mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center text-sm font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full mix-blend-multiply animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">Don&apos;t Be Left Behind.</h2>
            <p className="text-2xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
              The next generation of healthcare leaders are <span className="text-blue-600 font-bold">Tech-First</span>. <br />
              Secure your place in the future of medicine.
            </p>

            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 max-w-2xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="grid grid-cols-2 gap-8 mb-10 relative z-10">
                <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="block text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Next Batch</span>
                  <span className="block text-slate-900 font-black text-3xl">Monday</span>
                </div>
                <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="block text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Duration</span>
                  <span className="block text-slate-900 font-black text-3xl">30 Days</span>
                </div>
              </div>

              <Link href="/hims-apply" className="w-full py-5 bg-blue-600 text-white font-bold text-xl rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 relative z-10 shadow-blue-200">
                Secure Your Spot Now
                <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="text-sm text-slate-500 mt-8 flex items-center justify-center gap-2 relative z-10">

                Limited seats available for personalized attention.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
