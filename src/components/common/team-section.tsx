"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Star, User } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const GOOGLE_ICON_URL =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/554408d1-ba11-4d3b-8359-795de68de9f7-vilvabusiness-com/assets/images/images_21.png";

/* ---------------- Counter ---------------- */

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStarted(true),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;

    const step = (t: number) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setCount(Math.round(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={ref}>{count}</span>;
};

/* ---------------- App Download ---------------- */

const AppDownload = ({
  playStoreUrl,
  appleStoreUrl,
}: {
  playStoreUrl?: string;
  appleStoreUrl?: string;
}) => (
  <div className="flex flex-wrap justify-center gap-4 mt-8">
    {playStoreUrl && (
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download from Google Play"
        className="inline-flex transition-all hover:scale-105 active:scale-95"
      >
        <Image
          src="/nigicon/playstore.png"
          alt="Google Play"
          width={180}
          height={54}
          className="h-12 w-auto object-contain"
        />
      </a>
    )}
    {appleStoreUrl && (
      <a
        href={appleStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download from App Store"
        className="inline-flex transition-all hover:scale-105 active:scale-95"
      >
        <Image
          src="/nigicon/apple2.png"
          alt="App Store"
          width={180}
          height={54}
          className="h-12 w-auto object-contain rounded-lg"
        />
      </a>
    )}
  </div>
);

/* ---------------- Main Section ---------------- */

const stats = [
  { value: 5, label: "Years of Experience" },
  { value: 100, label: "Happy Clients" },
  { value: 200, label: "Projects Delivered" },
];

interface ScreenData {
  src: string;
  title: string;
  description: string;
}

export default function TeamWithAppDownload({
  playStoreUrl,
  appleStoreUrl,
  appScreens = ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03db9a00-2796-451a-a02b-b3aebd269946-vilvabusiness-com/assets/images/images_10.png"],
  screenData,
  titlePre = "Next-Gen",
  titleHighlight = "Mobile Experience",
  description = "Experience the power of seamless healthcare management right at your fingertips. Built for speed, security, and scalability."
}: {
  playStoreUrl?: string;
  appleStoreUrl?: string;
  appScreens?: string[];
  screenData?: ScreenData[];
  titlePre?: string;
  titleHighlight?: string;
  description?: string;
}) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number>(0);

  // Normalize data: use screenData if available, otherwise map appScreens
  const displayData: ScreenData[] = screenData || appScreens.map((src, i) => ({
    src,
    title: `Feature ${i + 1}`,
    description: "Explore the innovative features designed to streamline your workflow and enhance productivity."
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (x - centerX) / 10;
    const rotateY = (centerY - y) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="relative bg-white py-10 md:py-10 overflow-hidden font-sans">
      {/* Premium Dynamic Background */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-400/5 rounded-full blur-[150px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.02)_0%,transparent_70%)]" />

      
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">

        {/* Hero Header */}
        <div className="mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Mobile Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#090D28] tracking-tight leading-tight px-2">
            {titlePre} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">{titleHighlight}</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            {description}
          </p>
        </div>

        {/* 3D App Showcase */}
        <div className="mb-12 flex flex-col items-center w-full">
          <div className={`grid grid-cols-1 ${displayData.length > 1 ? 'md:grid-cols-3' : 'md:grid-cols-1'} gap-12 md:gap-16 w-full max-w-[1200px] px-4 items-center`}>
            {displayData.map((item, index) => (
              <div
                key={index}
                className="relative perspective-[2000px] group mx-auto w-full max-w-[200px] md:max-w-[260px]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Floating Elements */}
                {/* <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-colors duration-500" /> */}

                <div
                  className={`relative transition-all duration-500 ease-out shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] md:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 border-[6px] md:border-[8px] aspect-[9/19.5] w-full group-hover:shadow-[0_30px_60px_-10px_rgba(59,130,246,0.15)] md:group-hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.15)] ring-1 ring-black/10 ${activeCard === index ? 'border-gray-250 scale-105' : 'border-gray-200'}`}
                  style={{
                    transform: `rotateX(${activeCard === index ? rotation.y / 1.5 : 0}deg) rotateY(${activeCard === index ? rotation.x / 1.5 : 0}deg) scale(${activeCard === index ? 1.05 : 1})`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Android Pinhole Camera */}
                  <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full z-30 border border-white/5 shadow-inner"></div>

                  {/* Side Buttons (Android Style) */}
                  <div className="absolute -right-[9px] md:-right-[11px] top-12 md:top-16 w-[2px] md:w-[3px] h-4 md:h-6 bg-slate-800 rounded-r-lg z-30"></div>
                  <div className="absolute -right-[9px] md:-right-[11px] top-20 md:top-28 w-[2px] md:w-[3px] h-8 md:h-12 bg-slate-800 rounded-r-lg z-30"></div>

                  {/* Screen Content Container */}
                  <div className="relative w-full h-full bg-white overflow-hidden rounded-[1.6rem] md:rounded-[2.1rem]">
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/5 z-20 pointer-events-none" />

                    <Image
                      src={item.src}
                      alt={`Mobile App Screen ${index + 1}`}
                      fill
                      className="object-cover z-10"
                      priority
                    />

                    {/* Bottom Fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent z-20" />

                    {/* Android Gestural Bottom Bar */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-black/20 rounded-full z-30"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Description Box Animation */}
          <div className="w-full max-w-2xl mt-16 min-h-[120px] md:h-32 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative md:absolute inset-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-blue-50/50 border border-blue-100 backdrop-blur-md text-center"
              >
                <h4 className="text-lg md:text-2xl font-bold text-black mb-2">
                  {displayData[activeCard]?.title}
                </h4>
                <p className="text-slate-600 text-xs md:text-base max-w-lg">
                  {displayData[activeCard]?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        {(playStoreUrl || appleStoreUrl) && (
          <div className="relative z-10 pb-10">
            <h3 className="text-xl md:text-3xl font-bold text-[#090D28] mb-8 tracking-tight px-4">
              Download the <span className="text-blue-600">App</span> Today
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
              {playStoreUrl && (
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src="/nigicon/playstore.png"
                    alt="Google Play"
                    width={160}
                    height={48}
                    className="h-8 md:h-10 w-auto object-contain relative z-10"
                  />
                </a>
              )}
              {appleStoreUrl && (
                <a
                  href={appleStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src="/nigicon/apple2.png"
                    alt="App Store"
                    width={160}
                    height={48}
                    className="h-8 md:h-10 w-auto object-contain relative z-10 rounded-lg"
                  />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
