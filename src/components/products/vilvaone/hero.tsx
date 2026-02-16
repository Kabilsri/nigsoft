import React from 'react';

const VilvaHero: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-[60px] lg:py-24">
        <div className="mx-auto container px-4 md:px-7">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-2">

            {/* Left Content Column */}
            <div>
              <p className="text-[18px] md:text-[20px] text-[#E80000] font-semibold font-normal leading-[100%] tracking-[3.2px] uppercase">
                VilvaOne
              </p>
              <h1 className="text-[#090D28] my-4 font-heading text-[40px] md:text-[40px] lg:text-[56px] not-italic font-[700] leading-[120%] self-stretch">
                Launch fully functional Apps and Admin Dashboards
              </h1>
              <p className="text-[#373844] mb-6 font-normal text-[18px] lg:text-[20px] not-italic leading-[150%]">
                VilvaOne gives you the complete toolkit to run both a transport service and a delivery marketplace.
                Whether you're a startup or scaling enterprise, deploy branded apps, manage operations with
                powerful dashboards, and grow with confidence.
              </p>
              <a
                href="/book-demo"
                title="Book Demo"
                className="text-white font-medium text-[18px] md:text-[20px] not-italic leading-[120%] flex w-[180px] h-[52px] px-8 py-4 justify-center items-center rounded-[8px] bg-[#195AFF] hover:bg-blue-700 transition-colors"
              >
                Book Demo
              </a>
            </div>

            {/* Right Image/Graphic Column */}
            <div>
              <div className="relative px-0 md:px-5 flex items-center justify-center">
                <div className="rounded-[17.6px_17.6px_88px_17.6px] relative md:rounded-[35.2px_35.2px_176px_35.2px] bg-gradient-to-b from-transparent to-[#EBF0FF] w-fit h-fit shrink-0">

                  {/* Floating Badge: Q-Commerce */}
                  <span className="flex w-[61px] md:w-[116px] animate-float3 absolute top-20 -left-2 md:-left-20 h-[18px] md:h-[36px] px-[17px] py-[8px] whitespace-nowrap justify-center items-center shrink-0 rounded-[4px] md:rounded-[8.8px] border border-[#0ABC19] bg-[#EFFFF0] text-[#1FC82D] font-semibold text-[7.7px] md:text-[15.4px] font-normal leading-[120%]">
                    Q-Commerce
                  </span>

                  {/* Floating Badge: Bus Booking */}
                  <span className="flex w-[61px] md:w-[116px] absolute top-36 right-0 md:-right-7 animate-float2 h-[18px] md:h-[36px] px-[17px] py-[8px] whitespace-nowrap justify-center items-center shrink-0 rounded-[4px] md:rounded-[8.8px] border border-[#FF6F6F] bg-[#FFEFEF] text-[#FF1919] font-semibold text-[7.7px] md:text-[15.4px] font-normal leading-[120%]">
                    Bus Booking
                  </span>

                  <img
                    alt="quickAndBus"
                    loading="lazy"
                    width={1651}
                    height={1980}
                    className="w-[85%] sm:w-[300px] md:w-[83%] mr-[2px] ml-[10px] md:mr-0 md:ml-0 md:mx-auto"
                    src="/_next/static/media/BusandQuick.514a0e1b.png" // Update this path to your local asset
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default VilvaHero;