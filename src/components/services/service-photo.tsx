"use client";
import React from 'react';

const HeroStats: React.FC = () => {
  return (
    <section className="bg-white mt-20 mb-20">
      <div className="flex items-center justify-between">
        
        {/* Left Stat Card */}
        <div className="hidden lg:flex flex-col items-center justify-center w-[350px] h-[300px] bg-[#EEF5FF] rounded-r-full">
          <h2 className="text-[#003882] text-4xl font-bold">5+</h2>
          <p className="text-[#090D28] text-sm text-center px-4 mt-2 leading-tight">
            Years business expertise
          </p>
        </div>

        {/* Center Video Card */}
        <div className="relative flex-1 max-w-[850px] aspect-[16/9] md:aspect-auto md:h-[450px] bg-[#050B2C] rounded-[24px] overflow-hidden flex items-center p-8 md:p-12 border-[6px] border-[#EEF5FF]">
          
          
          

          {/* Portrait Image Layer (Right Aligned) */}
          <div className="absolute bottom-0 right-0 h-full w-auto select-none">
            <img 
              src="/icons/report.png" 
              alt="Person" 
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Stat Card */}
        <div className="hidden lg:flex flex-col items-center justify-center w-[350px] h-[300px] bg-[#F1FBFE] rounded-l-full">
          <h2 className="text-[#003882] text-4xl font-bold">100+</h2>
          <p className="text-[#090D28] text-sm text-center px-4 mt-2 leading-tight">
            Projects launched
          </p>
        </div>

        <div className="absolute lg:hidden w-full bottom-0 px-4">
          <div className="flex justify-around">
            <div className="text-center">
              <h2 className="text-[#003882] text-3xl font-bold">5+</h2>
              <p className="text-xs">Years expertise</p>
            </div>
            <div className="text-center">
              <h2 className="text-[#003882] text-3xl font-bold">100+</h2>
              <p className="text-xs">Projects launched</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroStats;