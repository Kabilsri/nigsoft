"use client";

import Image from "next/image";

const TechnologyStack = () => {

  return (
    <section className="relative overflow-hidden py-4 lg:py-6 min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/icons/technology.png"
          alt="Technology background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#03008F]/90 via-[#000839]/85 to-[#03008F]/90" /> */}

      <div className="container relative z-20 mx-auto px-6 text-center">
        <h2 className="font-heading text-[28px] font-bold leading-tight text-white md:text-[40px]">
          Our{" "}
          <span className="text-[28px] md:text-[40px] font-extrabold leading-[120%] font-heading 
          bg-gradient-to-r from-[#00B2F9] via-[#00B2F9] to-[#9D00EB] bg-clip-text text-transparent">
            Technology
          </span>{" "}
          <span className="text-[28px] md:text-[40px] font-extrabold leading-[120%] font-heading 
          bg-gradient-to-r from-[#00B2F9] via-[#00B2F9] to-[#9D00EB] bg-clip-text text-transparent">
            Stack
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base text-[#A8B8FF]">
          We leverage cutting-edge technologies including PHP, Python, Flutter, React, and Next.js to deliver scalable, high-performance solutions that drive business growth.
        </p>
        <div className="relative mt-12 h-[320px] w-full pointer-events-none">
          <img src="/icons/android.png" className="tech-icon icon1" alt="android" />
          <img src="/icons/ios.png" className="tech-icon icon2" alt="iOS" />
          <img src="/icons/react.png" className="tech-icon icon3" alt="React" />
          <img src="/icons/php.png" className="tech-icon icon4" alt="PHP" />
          <img src="/icons/node.png" className="tech-icon icon5" alt="Node" />
          <img src="/icons/python.png" className="tech-icon icon6" alt="Python" />
          <img src="/icons/flutter.png" className="tech-icon icon7" alt="Flutter" />
          <img src="/icons/uiux.png" className="tech-icon icon8" alt="uiux" />
          <img src="/icons/bootstrap.png" className="tech-icon icon9" alt="Bootstrap" />
          <img src="/icons/tailwind.png" className="tech-icon icon10" alt="Tailwind" />
        </div>




      </div>
    </section>

  );
};

export default TechnologyStack;