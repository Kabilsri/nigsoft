"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { useJobs } from "@/contexts/job-context";

const HeroSection = () => {
  const { jobs } = useJobs();

  // Calculate unique locations
  const uniqueLocations = Array.isArray(jobs) ? [...new Set(jobs.map(job => job.location))].length : 0;
  const badges = [
    {
      text: "Marketing Analyst",
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-200/50",
      top: "top-[49px]",
      left: "left-[2%] md:left-[2%]",
      delay: "200ms",
      className: "hidden md:flex",
    },
    {
      text: "Software Developer",
      bgColor: "bg-yellow-500/10",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-200/50",
      top: "top-[280px] md:top-[367px]",
      left: "left-[10%] md:left-[29%]",
      delay: "400ms",
      className: "flex",
    },
    {
      text: ".Net Developer",
      bgColor: "bg-red-500/10",
      textColor: "text-red-700",
      borderColor: "border-red-200/50",
      top: "top-[128px]",
      left: "left-[35%]",
      delay: "600ms",
      className: "hidden lg:flex",
    },
    {
      text: "Sales Executive",
      bgColor: "bg-fuchsia-500/10",
      textColor: "text-fuchsia-700",
      borderColor: "border-fuchsia-200/50",
      top: "top-[4px]",
      left: "left-[62%]",
      delay: "800ms",
      className: "hidden md:flex",
    },
    {
      text: "App Developer",
      bgColor: "bg-rose-500/10",
      textColor: "text-rose-700",
      borderColor: "border-rose-200/50",
      top: "top-[280px] md:top-[322px]",
      left: "left-[55%] md:left-[67%]",
      delay: "1000ms",
      className: "flex",
    },
  ];

  const images = [
    {
      src: "/icons/career1.jpg",
      alt: "Tempimagehcszl",
      top: "top-[40px] md:top-[57px]",
      left: "left-[5%] md:left-[14%]",
      rounded: "rounded-[20px] md:rounded-[30px]",
      delay: "0ms",
      className: "block",
    },
    {
      src: "/icons/career2.jpg",
      alt: "Tempimagezdccbb",
      top: "top-[10px] md:top-[8px]",
      left: "left-[35%] md:left-[47%]",
      rounded: "rounded-[20px] md:rounded-[30px]",
      delay: "200ms",
      className: "block",
    },
    {
      src: "/icons/career3.jpg",
      alt: "Tempimagewexlb",
      top: "top-[40px] md:top-[57px]",
      left: "left-[65%] md:left-[79%]",
      rounded: "rounded-[20px] md:rounded-[30px]",
      delay: "400ms",
      className: "block",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-white to-[#F8F9FA] w-full relative overflow-hidden flex flex-col items-center pt-[30px] md:pt-[40px] pb-[30px] md:pb-[50px]">
      {/* Content Section */}
      <div className="text-center z-10 w-full px-4 max-w-[1440px] mt-6 md:mt-8">

        {/* <span className="w-2 h-2 bg-[#1D31C3] rounded-full animate-pulse"></span>
          <p className="text-[#1D31C3] text-[13px] font-semibold tracking-wide">
            Hiring Now
          </p> */}


        <p className="text-[#6B7280] text-[13px] font-semibold mb-3 tracking-widest uppercase">
          <span className="text-[#1D31C3] font-bold">{Array.isArray(jobs) ? jobs.length : 0}</span> Jobs • <span className="text-[#1D31C3] font-bold">2</span> Location
        </p>
        <h1 className="text-[36px] md:text-[56px] font-bold mb-4 bg-gradient-to-r from-[#000985] via-[#1D31C3] to-[#3345C7] bg-clip-text text-transparent leading-[1.15] tracking-tight">
          Start with a Goal.<br className="md:hidden" /> Make a Difference.
        </h1>

        <p className="text-[#4B5563] text-[15px] md:text-[17px] max-w-[850px] mx-auto mb-7 font-medium leading-relaxed opacity-95">
          At Vilva Business, we fuel your ambition with powerful, future-ready solutions. Our platform streamlines everyday tasks, making growth easier and smarter than ever.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#1D31C3] to-[#162299] text-white py-3 px-7 rounded-lg text-[16px] font-semibold hover:shadow-lg hover:shadow-[#1D31C3]/25 transition-all duration-300 flex items-center gap-2 group"
          >
            Explore all jobs
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          {/* <button
            onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-[#1D31C3] text-[#1D31C3] bg-white py-2.5 px-7 rounded-lg text-[16px] font-semibold hover:bg-[#1D31C3]/5 transition-all duration-300"
          >
            Learn More
          </button> */}
        </div>

        {/* Additional Info - Compact */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="text-center">
            <p className="text-[#1D31C3] font-bold text-xl">100%</p>
            <p className="text-[#6B7280] text-xs font-medium">Talent Focused</p>
          </div>
          <div className="w-px h-10 bg-[#E5E7EB]"></div>
          <div className="text-center">
            <p className="text-[#1D31C3] font-bold text-xl">∞</p>
            <p className="text-[#6B7280] text-xs font-medium">Growth</p>
          </div>
          <div className="w-px h-10 bg-[#E5E7EB]"></div>
          <div className="text-center">
            <p className="text-[#1D31C3] font-bold text-xl">24/7</p>
            <p className="text-[#6B7280] text-xs font-medium">Support</p>
          </div>
        </div>
      </div>

      {/* Animated Assets Section */}
      <div className="relative w-full max-w-[1440px] h-[380px] md:h-[450px] shrink-0 mt-[40px] md:mt-[50px]">
        {images.map((image: any, index: number) => (
          <div
            key={`image-${index}`}
            className={`absolute ${image.top} ${image.left} ${image.className} w-[100px] sm:w-[150px] md:w-[250px] h-auto aspect-[250/371] translate-y-[-1rem] animate-fade-in opacity-0 shadow-lg`}
            style={{ animationDelay: image.delay }}
          >
            <Image
              className={`${image.rounded} object-cover w-full h-full`}
              alt={image.alt}
              src={image.src}
              width={250}
              height={371}
              priority
            />
          </div>
        ))}

        {badges.map((badge: any, index: number) => (
          <Badge
            key={`badge-${index}`}
            className={`absolute ${badge.top} ${badge.left} ${badge.className} w-28 sm:w-32 md:w-56 h-7 sm:h-8 md:h-11 ${badge.bgColor} ${badge.textColor} border ${badge.borderColor} backdrop-blur-md rounded-full shadow-[0px_8px_20px_rgba(0,0,0,0.06)] items-center justify-center font-sans font-semibold text-[10px] sm:text-xs md:text-[15px] tracking-tight leading-normal translate-y-[-1rem] animate-fade-in opacity-0 transition-all hover:scale-110 hover:shadow-lg whitespace-nowrap`}
            style={{ animationDelay: badge.delay }}
          >
            {badge.text}
          </Badge>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-[#6B7280] font-medium">Scroll to explore</p>
          <svg
            className="w-5 h-5 text-[#1D31C3]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;