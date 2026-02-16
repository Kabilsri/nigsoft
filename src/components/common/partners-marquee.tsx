"use client";

import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'AAA', src: '/partner/aaa.png' },
  { name: 'Albumati', src: '/partner/albumati.png' },
  { name: 'Bus', src: '/partner/bus.png' },
  { name: 'Gymkom', src: '/partner/gymkom.png' },
  { name: 'Lawe', src: '/partner/lawe.png' },
  { name: 'Masar', src: '/partner/masar.png' },
  { name: 'MGT', src: '/partner/mgt.png' },
  { name: 'Oman', src: '/partner/oman.png' },
  { name: 'Omantel', src: '/partner/omantel.png' },
  { name: 'Superjet', src: '/partner/superjet.png' },
  { name: 'THN', src: '/partner/thn.png' },
];

const PartnersMarquee = () => {
  return (
    <section className="relative pt-15 pb-5 bg-white overflow-hidden">

      <style>{`
        @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }

        /* Default speed (desktop) */
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }

        /* Faster speed for mobile */
        @media (max-width: 768px) {
            .animate-marquee {
                animation-duration: 15s; /* adjust speed here */
            }
        }

        .mask-gradient {
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>


      <h2 className="text-black-600 text-center font-bold mb-10 text-base md:text-lg leading-[1.2] relative z-10">
        Trusted by 50+ global partners
      </h2>
      
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full max-w-7xl" width="1620" height="375" viewBox="0 0 1620 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_203_54)">
              <path d="M-287.217 375C-174.453 375 -47.9042 329.816 112.923 234.35C273.75 138.884 468.207 93.1367 696.294 93.1367C924.382 93.1367 1118.84 138.884 1279.67 234.35C1440.49 329.816 1567.04 375 1679.81 375H-287.217Z" fill="url(#paint0_linear_203_54)"/>
          </g>
          <defs>
              <filter id="filter0_f_203_54" x="-387.217" y="-7.86328" width="2194.43" height="575" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_203_54"/>
              </filter>
              <linearGradient id="paint0_linear_203_54" x1="696.294" y1="93.1367" x2="696.294" y2="375" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ffffffff"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
          </defs>
      </svg>
      
      {/* <div className="absolute top-3 z-10 left-1/2 -translate-x-1/2 w-[200px] md:w-[900px] h-[200px] md:h-[530px] rounded-[1078px] bg-white blur-[100px]"></div> */}

      <div className="relative group z-10 overflow-hidden mt-2 max-w-7xl mx-auto">
        <div className="mask-gradient">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]" style={{ width: `${partners.length * 2 * 180}px` }}>
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 mx-3">
                <Image
                  src={partner.src}
                  alt={`${partner.name} Logo`}
                  width={150}
                  height={100}
                  className="w-[120px] h-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;