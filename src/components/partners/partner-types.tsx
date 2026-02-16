"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const partnerTypes = [
  {
    title: "Sales Partner",
    description: "Sell Nigsoft healthcare solutions to your clients with dedicated sales support and training.",
    features: ["10-20% Commission", "Product Training", "Sales Materials", "Lead Support"],
    ideal: "Healthcare Consultants, IT Resellers",
    image: "/icons/nigdoc.png",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Implementation Partner",
    description: "Help healthcare organizations implement and configure Nigsoft solutions effectively.",
    features: ["Implementation Fees", "Technical Training", "Setup Support", "Customer Onboarding"],
    ideal: "Healthcare IT Specialists, System Integrators",
    image: "/icons/niglab1.jpeg",
    color: "from-indigo-600 to-blue-600"
  },
  {
    title: "Referral Partner",
    description: "Refer potential clients to Nigsoft and earn rewards for successful conversions.",
    features: ["Referral Bonuses", "Easy Process", "Marketing Support", "Partner Recognition"],
    ideal: "Healthcare Professionals, Business Networks",
    image: "/icons/niglab2.jpeg",
    color: "from-blue-600 to-sky-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
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

export default function PartnerTypes() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Partnership Models</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Choose Your <span className="text-blue-600">Growth</span> Path
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Explore partnership opportunities that fit your business.
            Whether you sell, implement, or refer, we're here to support your success.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.12)] transition-all duration-500 flex flex-col"
            >
              {/* Header with Styled Image */}
              <div className="relative h-56 overflow-hidden">
                {/* <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40"
                /> */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} mix-blend-multiply opacity-70`} />
                <div className="absolute inset-0 border-[6px] border-white/10 m-4 rounded-[1.5rem]" />

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h3 className="text-3xl font-black text-white text-center leading-tight tracking-tight drop-shadow-lg">
                    {type.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-10 flex-grow flex flex-col">
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  "{type.description}"
                </p>

                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-blue-600" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600 group/item">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-[15px] font-medium group-hover/item:text-slate-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Perfect for</p>
                    <p className="text-sm font-bold text-slate-900 leading-tight">{type.ideal}</p>
                  </div>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}