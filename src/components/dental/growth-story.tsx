import React from 'react';

const GrowthStory = () => {
  return (
    <section className="bg-white text-white relative overflow-hidden">
      {/* Decorative lines/paths (simplified) */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 100,0 L 100,200 Q 100,300 200,300 L 400,300"
            fill="none"
            stroke="#195AFF"
            strokeWidth="2"
          />
          <path
            d="M 1820,0 L 1820,200 Q 1820,300 1720,300 L 1520,300"
            fill="none"
            stroke="#195AFF"
            strokeWidth="2"
          />
        </svg>
      </div> */}

      <div className="container relative z-10 px-4 mx-auto py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-4">
            Behind Every Successful Dental Clinic Is a<br />
            <span className="bg-gradient-to-r from-[#EB7AFF] to-[#5EC1FF] bg-clip-text text-transparent">Smarter System</span>
          </h2>
          <p className="text-grey-500 max-w-3xl mx-auto text-base">
            Trusted by dental clinics and hospitals to deliver secure, efficient, and patient-centric clinic management at every step.
          </p>
        </div>

        {/* Features Grid Layout */}
        <div className="max-w-[1024px] mx-auto space-y-4">
          {/* Row 1: Uptime (Full width) */}
          <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-8 transition-colors hover:border-blue-300">
            <h3 className="text-[24px] font-bold text-slate-800 mb-2">99.9% System Uptime</h3>
            <p className="text-slate-600 text-sm">
              Built on a reliable cloud infrastructure to ensure uninterrupted clinic operations and secure patient data access.
            </p>
          </div>

          {/* Row 2: Onboarding & Cost-Efficiency */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 bg-blue-50 border border-blue-200 rounded-[12px] p-8">
              <h3 className="text-[24px] font-bold text-slate-800 mb-2">Faster Patient Onboarding</h3>
              <p className="text-slate-600 text-sm">
                Register patients, manage histories, and schedule appointments instantly with minimal manual effort.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[12px] p-8 transition-colors hover:border-blue-300">
              <h3 className="text-[24px] font-bold text-slate-800 mb-2">Cost-Efficient Operations</h3>
              <p className="text-slate-600 text-sm">
                Reduce administrative overhead and optimize clinic costs with an all-in-one dental management platform.
              </p>
            </div>
          </div>

          {/* Row 3: Global Reach */}
          <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-8 transition-colors hover:border-blue-300">
            <h3 className="text-[24px] font-bold text-slate-800 mb-2">Multi-Clinic Ready</h3>
            <p className="text-slate-600 text-sm">
              Manage single or multiple dental clinics from one centralized dashboard with real-time visibility.
            </p>
          </div>

          {/* Row 4: Compliance & Support */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-[12px] p-8 transition-colors hover:border-blue-300">
              <h3 className="text-[24px] font-bold text-slate-800 mb-2">Compliance Ready</h3>
              <p className="text-slate-600 text-sm">
                Designed to support healthcare data standards and ensure patient data privacy and security.
              </p>
            </div>
            <div className="md:col-span-5 bg-blue-50 border border-blue-200 rounded-[12px] p-8">
              <h3 className="text-[24px] font-bold text-slate-800 mb-2">24/7 Dedicated Support</h3>
              <p className="text-slate-600 text-sm">
                Our expert support team is available round the clock to keep your clinic running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthStory;