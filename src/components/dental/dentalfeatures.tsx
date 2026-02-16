"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const dentalFeatures = [
  {
    title: "Live Check-in",
    description: "When a patient arrives to your reception within seconds you can check-in them with a token number.",
    features: ["Instant Check-in", "Token Number System", "Queue Management", "Reception Dashboard"],
    ideal: "Reception Staff, Front Desk",
    image: "/icons/nigdents1.png",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Online Appointment",
    description: "You will get a separate link where you can share that to your clients to book online appointment.",
    features: ["Shareable Booking Link", "24/7 Online Booking", "Automated Scheduling", "Calendar Integration"],
    ideal: "Dental Clinics, Patient Coordinators",
    image: "/icons/nigdents1.png",
    color: "from-indigo-600 to-blue-600"
  },
  {
    title: "Dental Chart",
    description: "Our digital dental chart will make your work very easy, fun and simple.",
    features: ["Digital Tooth Chart", "Treatment Tracking", "Visual Documentation", "Easy Navigation"],
    ideal: "Dentists, Dental Hygienists",
    image: "/icons/nigdents1.png",
    color: "from-blue-600 to-sky-500"
  },
  {
    title: "Dental Billing",
    description: "Not only you can generate bill using our software, you can also generate bill for finance purpose.",
    features: ["Invoice Generation", "Financial Reports", "Payment Tracking", "Tax Management"],
    ideal: "Billing Staff, Practice Managers",
    image: "/icons/nigdents1.png",
    color: "from-sky-500 to-blue-600"
  },
  {
    title: "Patient Communication",
    description: "Engage your clients by sending SMS through our software its very easy and customisable.",
    features: ["SMS Integration", "Appointment Reminders", "Custom Messages", "Bulk Messaging"],
    ideal: "Patient Coordinators, Reception",
    image: "/icons/nigdents1.png",
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "Business Reports",
    description: "It is also quite an efficient way for analyzing the in and out of your business, to have steady growth.",
    features: ["Revenue Analytics", "Patient Statistics", "Growth Tracking", "Performance Metrics"],
    ideal: "Practice Owners, Managers",
    image: "/icons/nigdents1.png",
    color: "from-purple-600 to-blue-600"
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

export default function DentalFeatures() {
  return (
    <section className="py-8 md:py-16 bg-white relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">All in One platform</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Complete <span className="text-blue-600">Dental Practice</span> Solution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Streamline your dental practice with our comprehensive management system.
            From patient care to billing, everything you need in one platform.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {dentalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.12)] transition-all duration-500 flex flex-col `}
            >
              {/* Header with Styled Image */}
              <div className="relative h-24 sm:h-32 md:h-40 overflow-hidden">
                {/* <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40"
                /> */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} mix-blend-multiply opacity-70`} />
                <div className="absolute inset-0 border-[6px] border-white/10 m-4 rounded-[1.5rem]" />

                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-black text-white text-center leading-tight tracking-tight drop-shadow-lg">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-3 sm:p-5 md:p-6 flex-grow flex flex-col">
                <p className="text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed font-medium text-xs sm:text-sm">
                  "{feature.description}"
                </p>

                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-6 hidden sm:block">
                  <h4 className="font-bold text-slate-900 text-[8px] sm:text-xs uppercase tracking-widest flex items-center gap-2">
                    <span className="w-4 h-[2px] bg-blue-600" />
                    Key Features
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {feature.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600 group/item">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium group-hover/item:text-slate-900 transition-colors">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-2 sm:pt-3 md:pt-4 border-t border-slate-100 flex items-center justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <p className="text-[7px] sm:text-[9px] text-slate-400 font-black uppercase tracking-[0.1em] mb-0.5 sm:mb-1">Ideal for</p>
                    <p className="text-[9px] sm:text-xs font-bold text-slate-900 leading-tight">{feature.ideal}</p>
                  </div>
                  <motion.a
                    href="/book-demo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg flex-shrink-0"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
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