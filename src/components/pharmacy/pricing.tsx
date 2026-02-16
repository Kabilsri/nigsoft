import React from 'react';
import { Check, Award, BookOpen, Video, Users, FileText, Clock } from 'lucide-react';

const PricingSection: React.FC = () => {
  const basicFeatures = [
    "30-Day Live Training",
    "1 Hour Daily Sessions",
    "30 Practical Tasks",
    "Course Materials",
    "Email Support",
    "Certificate of Completion",
  ];

  const premiumFeatures = [
    "30-Day Live Training",
    "1 Hour Daily Sessions",
    "30 Practical Tasks",
    "Course Materials",
    "Priority Support (24/7)",
    "Industry Certification",
    "Lifetime Access to Recordings",
    "1-on-1 Mentorship Sessions",
    "Job Placement Assistance",
  ];

  return (
    <section className="bg-white py-[38px] md:py-[50px]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[#013f1b] font-display text-[48px] font-bold tracking-tight mb-4">
            Academy Plans
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your learning journey
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-[900px] mx-auto">
          
          {/* Basic Plan Card */}
          <div className="flex-1 group">
            <div className="h-full bg-[#f0fff0] border border-[#e2e8f0] rounded-[24px] overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
              <div className="p-8 pb-0">
                <span className="inline-block bg-blue-100 text-blue-600 text-[14px] font-medium px-4 py-1 rounded-full mb-6">
                  Basic Plan
                </span>
                <div className="mb-4">
                  <h3 className="text-[#0eac0e] text-[42px] font-bold leading-tight">
                    ₹9,999
                  </h3>
                  <p className="text-[#2a3b2b]/60 text-[14px] mt-1">
                    One-Time Payment
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-6 flex-1 flex flex-col">
                <div className="space-y-4 mb-10">
                  {basicFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#0eac0e] flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#0eac0e]" />
                      </div>
                      <span className="text-[#2a3b2b] text-[16px]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-4 text-center">
                  <div className="space-y-1">
                    <p className="text-[#2a3b2b]/50 text-[11px] uppercase tracking-wider">
                      Perfect for Self-Learners
                    </p>
                  </div>
                  <a 
                    href="/hims-apply" 
                    className="block w-full bg-[#013f1b] text-white font-display font-medium py-4 rounded-[12px] transition-colors hover:bg-black"
                  >
                    Enroll Now
                  </a>
                  <p className="text-[#2a3b2b]/50 text-[12px]">
                    Start Learning Today
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Plan Card */}
          <div className="flex-1 relative group">
            <div className="h-full bg-[#013f1b] rounded-[24px] overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
              {/* Popular Tag */}
              <div className="absolute top-0 right-0 bg-[#efff00] text-[#013f1b] font-nav text-[14px] font-semibold px-4 py-1.5 rounded-bl-[12px] rounded-tr-[24px] z-10">
                Recommended
              </div>

              <div className="p-8 pb-0">
                <span className="inline-block bg-[#0eac0e]/20 text-[#0eac0e] text-[14px] font-medium px-4 py-1 rounded-full mb-6">
                  Premium Plan
                </span>
                <div className="mb-4">
                  <h3 className="text-[#0eac0e] text-[42px] font-bold leading-tight">
                    ₹19,999
                  </h3>
                  <p className="text-white/60 text-[14px] mt-1">
                    One-Time Payment
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-6 flex-1 flex flex-col">
                <div className="space-y-4 mb-10">
                  {premiumFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#0eac0e] flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#0eac0e]" />
                      </div>
                      <span className="text-white text-[16px]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-4 text-center">
                  <div className="space-y-1">
                    <p className="text-white/50 text-[11px] uppercase tracking-wider">
                      Best Value for Career Growth
                    </p>
                  </div>
                  <a 
                    href="/hims-apply" 
                    className="block w-full bg-[#efff00] text-[#013f1b] font-display font-bold py-4 rounded-[12px] transition-colors hover:bg-[#d8e600]"
                  >
                    Enroll Now
                  </a>
                  <p className="text-white/50 text-[12px]">
                    Limited Seats Available
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;