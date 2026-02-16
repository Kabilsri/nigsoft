"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface StatItemProps {
  target: number;
  unit: string;
  description: string;
  decimals?: number;
}

const AnimatedNumber = ({
  value,
  decimals = 1,
}: {
  value: number;
  decimals?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    current.toFixed(decimals === 0 ? 0 : decimals)
  );

  const [count, setCount] = useState("0");

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  useEffect(() => {
    return display.on("change", (latest) => setCount(latest));
  }, [display]);

  return <span ref={ref}>{count}</span>;
};

const StatsSection: React.FC = () => {
  const stats: StatItemProps[] = [
    { target: 12.8, unit: "x", description: "Faster patient onboarding", decimals: 1 },
    { target: 33, unit: "%", description: "More patients, more growth", decimals: 0 },
    { target: 4.9, unit: "x", description: "Staff efficiency increase", decimals: 1 },
  ];

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto text-center">

      {/* Section Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm font-semibold tracking-widest text-slate-500 mb-10 uppercase"
      >
        Designed for clinics that want to grow faster
      </motion.p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            {/* Number */}
            <div className="text-5xl md:text-6xl font-semibold text-black-600 flex items-baseline">
              <AnimatedNumber value={stat.target} decimals={stat.decimals} />
              <span className="ml-1 text-black-600">{stat.unit}</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-slate-600 font-medium max-w-[220px]">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
