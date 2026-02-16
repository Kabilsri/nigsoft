"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CompanyStats {
  yearsExperience: string;
  projectsLaunched: string;
}

interface ProductHeroStatsProps {
  title: {
    part1: string;
    part2: string;
    part3: string;
  };
  description: string;
  heroText: {
    line1: string;
    line2: string;
    line3: string;
  };
  personImage: string;
  personAlt: string;
}

const ProductHeroStats: React.FC<ProductHeroStatsProps> = ({
  title,
  description,
  heroText,
  personImage,
  personAlt
}) => {
  const [stats, setStats] = useState<CompanyStats>({
    yearsExperience: '5+',
    projectsLaunched: '100+'
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const savedStats = localStorage.getItem('companyStats');
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (e) { console.error(e); }
    }
  }, []);

  const displayYears = hasMounted ? stats.yearsExperience : '5+';
  const displayProjects = hasMounted ? stats.projectsLaunched : '100+';

  return (
    <div className="w-full bg-white">
      {/* SECTION 1: BRAND STORY (TOP) */}
      <section className="pt-15 sm:pt-15 md:pt-15 lg:pt-15 pb-15">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-semibold leading-[120%] mb-6 tracking-wide">
            <span className="bg-[linear-gradient(90deg,#F7B831_0%,#F12979_61.54%)] bg-clip-text text-transparent">
              {title.part1}
            </span>
            <span className="text-[#010839]"> {title.part2} </span>
            <span className="bg-[linear-gradient(90deg,#31B6F8_76.44%,#6717F0_100%)] bg-clip-text text-transparent">
              {title.part3}
            </span>
          </h4>

          <p className="text-sm sm:text-base md:text-lg font-[400] leading-[150%] text-[#090D28] opacity-70 mb-8 max-w-4xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* SECTION 2: HERO & STATS (Full Container Width) */}
      <section className="pb-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between gap-4 lg:gap-0">

            {/* Left Stat Card */}
            <div className="hidden lg:flex flex-col items-center justify-center w-[280px] h-[300px] bg-[#EEF5FF] rounded-r-full shadow-sm">
              <h2 className="text-[#003882] text-4xl font-bold">{displayYears}</h2>
              <p className="text-[#090D28] text-sm text-center px-8 mt-2 leading-tight">
                Years business expertise
              </p>
            </div>

            {/* Center Hero Card */}
            <div className="relative flex-1 max-w-[1000px] aspect-[16/9] md:aspect-auto md:h-[450px] bg-[#050B2C] rounded-[24px] overflow-hidden flex items-center border-[6px] border-[#EEF5FF] mx-4 lg:mx-0 shadow-xl">
              {/* Center Image */}
              <div className="relative w-full h-full select-none">
                <Image
                  src={personImage}
                  alt={personAlt}
                  fill
                  priority
                  className="object-fill"
                />
              </div>
            </div>

            {/* Right Stat Card */}
            <div className="hidden lg:flex flex-col items-center justify-center w-[280px] h-[300px] bg-[#F1FBFE] rounded-l-full shadow-sm">
              <h2 className="text-[#003882] text-4xl font-bold">{displayProjects}</h2>
              <p className="text-[#090D28] text-sm text-center px-8 mt-2 leading-tight">
                Projects launched
              </p>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="lg:hidden w-full mt-8 px-4">
            <div className="flex justify-around bg-[#EEF5FF] py-6 rounded-2xl">
              <div className="text-center">
                <h2 className="text-[#003882] text-3xl font-bold">{displayYears}</h2>
                <p className="text-xs font-medium">Years expertise</p>
              </div>
              <div className="text-center">
                <h2 className="text-[#003882] text-3xl font-bold">{displayProjects}</h2>
                <p className="text-xs font-medium">Projects launched</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductHeroStats;