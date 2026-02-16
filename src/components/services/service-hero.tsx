"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { MousePointer2, Sparkles, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  scrollTarget?: string;
  imagePath?: string;
  imageAlt?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  tags = ["#App Development", "#Website Design", "#Admin Panels", "#Fintech Platforms", "#SaaS Dashboards"],
  scrollTarget = "dynamicfeatures",
  imagePath = "/icons/report.png",
  imageAlt = "Custom Software Development - Mobile and Desktop Applications"
}: HeroSectionProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleScrollToServices = () => {
    const element = document.getElementById(scrollTarget);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[100px] -ml-48 -mb-48 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side: Image and Floating Tags */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative order-2 lg:order-1 hidden lg:block"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative z-10 transition-transform duration-300"
              style={{
                transform: `rotateX(${rotation.y / 2}deg) rotateY(${rotation.x / 2}deg)`,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-teal-500/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Image
                  alt={imageAlt}
                  width={1480}
                  height={849}
                  priority
                  className="w-full h-auto object-contain relative z-10 scale-105"
                  src={imagePath}
                />
              </div>

              {/* Decorative Icons around image */}
             
            </div>

            {/* Floating Tags */}
            <div className="pointer-events-none contents">
              {[
                { tag: tags[0], className: "absolute -left-12 top-10", delay: '0s', rotate: -5 },
                { tag: tags[1], className: "absolute -right-8 top-20", delay: '0.2s', rotate: 5 },
                { tag: tags[2], className: "absolute right-0 bottom-32", delay: '0.4s', rotate: -8 },
                { tag: tags[3], className: "absolute left-10 bottom-10", delay: '0.6s', rotate: 8 },
                { tag: tags[4], className: "absolute -left-16 top-1/2", delay: '0.8s', rotate: -12 },
              ].map((item: any, idx) => (
                <div
                  key={idx}
                  className={`${item.className} z-20 pointer-events-auto animate-float`}
                  style={{ animationDelay: item.delay }}
                >
                  <div
                    style={{ transform: `rotate(${item.rotate}deg)` }}
                    className="px-3 py-2 md:px-5 md:py-3 font-semibold text-indigo-700 bg-white/80 border border-indigo-100 backdrop-blur-md rounded-full text-[10px] md:text-sm shadow-lg hover:shadow-indigo-200/50 hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    {item.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Text and Buttons */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide uppercase">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
               Perfect Solutions
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.2] lg:leading-[1.1] text-slate-900">
                {title}
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                  {subtitle}
                </span>
              </h1>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleScrollToServices}
                className="group inline-flex items-center justify-center gap-2 h-14 bg-blue-600 text-white px-8 py-4 text-lg font-bold rounded-2xl hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-blue-500/25 w-full sm:w-auto"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm font-medium">
              <p className="text-slate-500 text-center lg:text-left">
                Grow your business with us.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
