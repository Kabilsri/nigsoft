import React from 'react';
import Image from 'next/image';

const StatsAndReviews = () => {
  return (
    <section className="bg-[#000B29] py-[100px] text-white overflow-hidden">
      <div className="container max-w-[1280px] mx-auto px-4">
        {/* Header Content */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold mb-4 bg-[linear-gradient(90deg,#F7B831_0%,#F12979_61.54%)] bg-clip-text text-transparent">
            We Make for Your Team
          </h2>
          <p className="text-[#4E5B7D] text-base md:text-[16px] max-w-2xl mx-auto mb-8">
            Our team ensures timely results without compromising quality
          </p>

          {/* Google Reviews Integration */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center space-x-[-8px] mb-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#000B29] bg-[#195AFF] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#000B29] bg-[#10B981] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#000B29] bg-[#F59E0B] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#000B29] bg-[#8B5CF6] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-transparent">
              <div className="flex items-center gap-1.5">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c56cb14b-966a-449f-ae3b-90968e79f85f-vilvabusiness-com/assets/images/images_21.png" 
                  alt="Google" width={18} height={18} 
                />
                <span className="text-[12px] font-medium text-white/90">Google Reviews</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[14px] font-bold">4.7</span>
              <div className="flex text-[#FFB400]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.374-2.448a1 1 0 00-1.175 0l-3.374 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118l-3.37-2.448c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 mt-20 max-w-5xl mx-auto">
          {/* Stat 1 */}
          <div className="py-10 md:py-4 px-8 text-center flex flex-col items-center justify-center">
            <span className="text-[48px] md:text-[50px] font-bold text-[#195AFF] block leading-none mb-4">
              6+
            </span>
            <span className="text-[#4E5B7D] text-[16px] font-medium uppercase tracking-wider">
              Years in business
            </span>
          </div>

          {/* Stat 2 */}
          <div className="py-10 md:py-4 px-8 text-center flex flex-col items-center justify-center">
            <span className="text-[48px] md:text-[50px] font-bold text-[#195AFF] block leading-none mb-4">
              200+
            </span>
            <span className="text-[#4E5B7D] text-[16px] font-medium uppercase tracking-wider">
              Happy Customers
            </span>
          </div>

          {/* Stat 3 */}
          <div className="py-10 md:py-4 px-8 text-center flex flex-col items-center justify-center">
            <span className="text-[48px] md:text-[50px] font-bold text-[#195AFF] block leading-none mb-4">
              100+
            </span>
            <span className="text-[#4E5B7D] text-[16px] font-medium uppercase tracking-wider">
              Projects Delivered
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndReviews;