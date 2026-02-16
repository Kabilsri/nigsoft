"use client";

import { TrendingUp, Users, Award, Handshake, Target, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Revenue Growth",
    description: "Earn competitive commissions and recurring revenue with our proven healthcare solutions.",
    image: "/icons/career.jpg",
    color: "blue"
  },
  {
    title: "Market Access",
    description: "Tap into the growing healthcare technology market with established demand.",
    image: "/others/market2.jpg",
    color: "indigo"
  },
  {
    title: "Training & Certification",
    description: "Comprehensive training programs and certifications to ensure your success.",
    image: "/others/training.jpg",
    color: "emerald"
  },
  {
    title: "Dedicated Support",
    description: "Personal account management and technical support throughout your journey.",
    image: "/others/support.jpg",
    color: "violet"
  },
  {
    title: "Marketing Resources",
    description: "Access to marketing materials, case studies, and co-marketing opportunities.",
    image: "/others/market.jpg",
    color: "sky"
  },
  {
    title: "Proven Solutions",
    description: "Partner with battle-tested products trusted by 30+ healthcare organizations.",
    image: "/others/success.jpg",
    color: "blue"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

export default function PartnerBenefits() {
  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">Partnership Benefits</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Why Choose <span className="text-blue-600">Nigsoft</span> Partnership?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 leading-relaxed"
          >
            Empower your business with reliable healthcare technology.
            We provide the tools, expertise, and support needed to succeed in the digital health space.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" /> */}
                <div className="absolute bottom-4 left-6">
                  <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                    {benefit.title.split(' ')[0]}
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6 italic">
                  "{benefit.description}"
                </p>

                
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Unified Ecosystem CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"
        >
          <div className="bg-white rounded-[2.4rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Ready to Win <span className="text-blue-600 italic">Together?</span>
            </h3>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join the Nigsoft Partner Program today and transform how healthcare organizations deliver care through technology.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-blue-600 transition-colors shadow-2xl shadow-slate-900/20"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}