"use client";
import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-[60px] md:py-[120px] bg-[#081328] relative overflow-hidden">
      <div className="w-full h-[349px] rounded-[1143px] bg-[#0375FF] opacity-50 animate-pulse absolute -bottom-[250px] left-1/2 -translate-x-1/2 blur-[100px] flex-shrink-0"></div>
      <div className="w-full md:w-[619px] h-[211px] flex-shrink-0 rounded-[619px] bg-[#B6CEFF] animate-pulse absolute -bottom-[150px] left-1/2 -translate-x-1/2 blur-[100px]"></div>

      <div className="flex container mx-auto flex-col gap-[16px] md:flex-row justify-between mb-[40px] md:mb-[96px] items-start">
        <h3 className="text-white w-full md:w-1/2 gap-[16px] font-bold text-[36px] md:text-[52px] font-normal leading-[120%]">
          Built to Simplify, Scale & Secure Your Revenue
        </h3>
        <p className="text-white w-full md:w-1/2 font-normal text-[16px] md:text-[18px] font-normal leading-[150%]">
          Nigsoft Billing Software unifies invoice generation, payment tracking, GST compliance, and financial analytics into one intelligent platform. It automates repetitive billing tasks, provides real-time cash flow visibility, and helps businesses scale their revenue collection efficiently—whether you are a small startup or a large enterprise.
        </p>
      </div>

      <div className="grid px-4 container mx-auto grid-cols-1 sm:grid-cols-2 gap-[32px] lg:grid-cols-4">
        <div className="relative z-50 group overflow-hidden">
          <div className="rounded-[0px_24px] relative z-50 overflow-hidden border-[0.8px] border-none bg-gradient-to-b from-[rgba(155,199,255,0.20)] to-[rgba(117,221,255,0.20)] backdrop-blur-[10px] p-6">
            <div className="rounded-[4px] w-fit mb-[10px] bg-[#0A518F] p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 7.5C11.4808 7.5 10.9733 7.34605 10.5416 7.05761C10.11 6.76917 9.7735 6.3592 9.57482 5.87955C9.37614 5.39989 9.32415 4.87209 9.42544 4.36289C9.52673 3.85369 9.77673 3.38596 10.1438 3.01885C10.511 2.65173 10.9787 2.40173 11.4879 2.30044C11.9971 2.19915 12.5249 2.25114 13.0045 2.44982C13.4842 2.6485 13.8942 2.98495 14.1826 3.41663C14.471 3.84831 14.625 4.35583 14.625 4.875C14.6242 5.57095 14.3474 6.23817 13.8553 6.73028C13.3632 7.22239 12.696 7.49921 12 7.5Z" fill="white" />
              </svg>
            </div>
            <p className="text-[48px] mb-1 font-normal leading-[120%] text-[#4BABFF] font-bold">60%</p>
            <p className="text-[20px] mb-4 font-normal leading-[100%] text-white font-semibold">Faster Invoice Processing ↑</p>
            <p className="text-[14px] font-normal leading-[150%] text-[#8BB4DF] font-normal">Automated batch invoicing and recurring billing reduce administrative overhead and speed up the entire billing cycle.</p>
          </div>
          <div className="absolute inset-0 rounded-[0px_24px] bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>

        <div className="relative z-50 group overflow-hidden">
          <div className="rounded-[0px_24px] relative z-50 overflow-hidden border-[0.8px] border-none bg-gradient-to-b from-[rgba(155,199,255,0.20)] to-[rgba(117,221,255,0.20)] backdrop-blur-[10px] p-6">
            <div className="rounded-[4px] w-fit mb-[10px] bg-[#0A518F] p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 7.5C11.4808 7.5 10.9733 7.34605 10.5416 7.05761C10.11 6.76917 9.7735 6.3592 9.57482 5.87955C9.37614 5.39989 9.32415 4.87209 9.42544 4.36289C9.52673 3.85369 9.77673 3.38596 10.1438 3.01885C10.511 2.65173 10.9787 2.40173 11.4879 2.30044C11.9971 2.19915 12.5249 2.25114 13.0045 2.44982C13.4842 2.6485 13.8942 2.98495 14.1826 3.41663C14.471 3.84831 14.625 4.35583 14.625 4.875C14.6242 5.57095 14.3474 6.23817 13.8553 6.73028C13.3632 7.22239 12.696 7.49921 12 7.5Z" fill="white" />
              </svg>
            </div>
            <p className="text-[48px] mb-1 font-normal leading-[120%] text-[#4BABFF] font-bold">35%</p>
            <p className="text-[20px] mb-4 font-normal leading-[100%] text-white font-semibold">Better Payment Collection ↑</p>
            <p className="text-[14px] font-normal leading-[150%] text-[#8BB4DF] font-normal">Integrated payment gateways and automated follow-ups ensure invoices are paid on time, significantly improving cash flow.</p>
          </div>
          <div className="absolute inset-0 rounded-[0px_24px] bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>

        <div className="relative z-50 group overflow-hidden">
          <div className="rounded-[0px_24px] relative z-50 overflow-hidden border-[0.8px] border-none bg-gradient-to-b from-[rgba(155,199,255,0.20)] to-[rgba(117,221,255,0.20)] backdrop-blur-[10px] p-6">
            <div className="rounded-[4px] w-fit mb-[10px] bg-[#0A518F] p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 7.5C11.4808 7.5 10.9733 7.34605 10.5416 7.05761C10.11 6.76917 9.7735 6.3592 9.57482 5.87955C9.37614 5.39989 9.32415 4.87209 9.42544 4.36289C9.52673 3.85369 9.77673 3.38596 10.1438 3.01885C10.511 2.65173 10.9787 2.40173 11.4879 2.30044C11.9971 2.19915 12.5249 2.25114 13.0045 2.44982C13.4842 2.6485 13.8942 2.98495 14.1826 3.41663C14.471 3.84831 14.625 4.35583 14.625 4.875C14.6242 5.57095 14.3474 6.23817 13.8553 6.73028C13.3632 7.22239 12.696 7.49921 12 7.5Z" fill="white" />
              </svg>
            </div>
            <p className="text-[48px] mb-1 font-normal leading-[120%] text-[#4BABFF] font-bold">50%</p>
            <p className="text-[20px] mb-4 font-normal leading-[100%] text-white font-semibold">Improved Financial Accuracy ↑</p>
            <p className="text-[14px] font-normal leading-[150%] text-[#8BB4DF] font-normal">Centralized tracking of all transactions and automated accounting integrations eliminate manual calculation errors and reconciliation issues.</p>
          </div>
          <div className="absolute inset-0 rounded-[0px_24px] bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>

        <div className="relative z-50 group overflow-hidden">
          <div className="rounded-[0px_24px] relative z-50 overflow-hidden border-[0.8px] border-none bg-gradient-to-b from-[rgba(155,199,255,0.20)] to-[rgba(117,221,255,0.20)] backdrop-blur-[10px] p-6">
            <div className="rounded-[4px] w-fit mb-[10px] bg-[#0A518F] p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 7.5C11.4808 7.5 10.9733 7.34605 10.5416 7.05761C10.11 6.76917 9.7735 6.3592 9.57482 5.87955C9.37614 5.39989 9.32415 4.87209 9.42544 4.36289C9.52673 3.85369 9.77673 3.38596 10.1438 3.01885C10.511 2.65173 10.9787 2.40173 11.4879 2.30044C11.9971 2.19915 12.5249 2.25114 13.0045 2.44982C13.4842 2.6485 13.8942 2.98495 14.1826 3.41663C14.471 3.84831 14.625 4.35583 14.625 4.875C14.6242 5.57095 14.3474 6.23817 13.8553 6.73028C13.3632 7.22239 12.696 7.49921 12 7.5Z" fill="white" />
              </svg>
            </div>
            <p className="text-[48px] mb-1 font-normal leading-[120%] text-[#4BABFF] font-bold">99.9%</p>
            <p className="text-[20px] mb-4 font-normal leading-[100%] text-white font-semibold">Tax Compliance Accuracy ↑</p>
            <p className="text-[14px] font-normal leading-[150%] text-[#8BB4DF] font-normal">Real-time GST calculations, HSN/SAC support, and automated tax reporting ensure your business stays compliant without the headache.</p>
          </div>
          <div className="absolute inset-0 rounded-[0px_24px] bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;