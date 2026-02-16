"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Elite Application",
    description: "Submit your comprehensive partner credentials and strategic growth objectives.",
    icon: "/others/application.jpg"
  },
  {
    step: "02",
    title: "Strategic Review",
    description: "Our senior executives conduct a thorough evaluation and alignment consultation.",
    icon: "/others/evaluation.jpg"
  },
  {
    step: "03",
    title: "Partnership Onboarding",
    description: "Execute the contract and unlock access to our premium resource ecosystem.",
    icon: "/others/agreement.jpg"
  },
  {
    step: "04",
    title: "Technical Enablement",
    description: "Complete our certification program and receive your specialized GTM toolkit.",
    icon: "/others/enablement.jpg"
  },
  {
    step: "05",
    title: "Success Launch",
    description: "Kick off your journey with dedicated support and advanced tech resources.",
    icon: "/others/launch.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

export default function PartnerProcess() {
  return (
    <section className="py-32 bg-white relative overflow-hidden font-sans">
      {/* Background Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">Our Methodology</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Your Path to <span className="text-blue-600 italic">Premium</span> Success
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
            A seamless, structured onboarding process designed to get you certified and generating revenue as quickly as possible.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12 relative"
        >
          {/* Progress Line */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-600 origin-left"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative z-10 text-center group"
            >
              {/* Step Marker */}
              <div className="relative mb-10 inline-block">
                <div className="w-32 h-32 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl flex items-center justify-center mx-auto overflow-hidden group-hover:scale-110 group-hover:shadow-blue-500/20 transition-all duration-500 transform-gpu rotate-6 group-hover:rotate-0">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-cover opacity-60  group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 text-white text-xs font-black tracking-widest shadow-lg">
                  STEP {step.step}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-4 px-2">
                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global CTA Section Integration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          <div className="relative bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                Ready to Revolutionize <br />
                <span className="text-blue-400 italic">Healthcare Delivery?</span>
              </h3>
              <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join our ecosystem of elite partners and start building the future of medical technology today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-900/40 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                >
                  Apply for Partnership <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#benefits"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl backdrop-blur-md border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  Explore Benefits
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}