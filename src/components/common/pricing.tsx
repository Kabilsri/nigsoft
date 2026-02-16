"use client";

import React, { useState } from 'react';

// Hardcoded pricing data
const plans = [
  {
    planName: "Starter",
    monthlyPrice: "$99",
    annualPrice: "$89",
    features: [
      "Up to 5 users",
      "Basic reporting",
      "Email support",
      "Standard templates",
      "Mobile app access"
    ],
    isFeatured: false,
    buttonColor: "bg-[#040E56] hover:bg-[#00208E]",
    buttonText: "Start Trial"
  },
  {
    planName: "Professional",
    monthlyPrice: "$199",
    annualPrice: "$179",
    features: [
      "Up to 25 users",
      "Advanced reporting",
      "Priority support",
      "Custom templates",
      "API access",
      "Advanced integrations"
    ],
    isFeatured: true,
    buttonColor: "bg-[#00AA72] hover:bg-[#006D56]",
    buttonText: "Get Started"
  },
  {
    planName: "Enterprise",
    monthlyPrice: "$399",
    annualPrice: "$359",
    features: [
      "Unlimited users",
      "Custom reporting",
      "24/7 phone support",
      "White-label solution",
      "Custom integrations",
      "Dedicated account manager"
    ],
    isFeatured: false,
    buttonColor: "bg-[#040E56] hover:bg-[#00208E]",
    buttonText: "Contact Sales"
  }
];

// =======================================================
// HELPER COMPONENT: PricingCard
// Handles the structure and styling for individual pricing tiers.
// =======================================================

const PricingCard = ({ planName, price, features, isFeatured, buttonColor, buttonText }: {
  planName: string,
  price: string,
  features: string[],
  isFeatured: boolean,
  buttonColor: string,
  buttonText: string
}) => (
  // ADDED HOVER EFFECTS: subtle lift and shadow increase on interaction
  <div 
    className={`p-6 hover:cursor-pointer transition-all duration-300 transform 
    ${isFeatured 
      ? 'bg-white text-gray-900 shadow-2xl scale-[1.03] border-4 border-[#00AA72] hover:scale-[1.06] hover:shadow-3xl' 
      : 'bg-white/90 text-gray-800 shadow-lg hover:scale-[1.05] hover:shadow-2xl' 
    } rounded-xl`}
  >
    {isFeatured && (
      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#00AA72] rounded-full mb-4">
        Popular
      </span>
    )}
    <h3 className="text-xl font-bold mb-1">{planName}</h3>
    <p className="text-sm text-gray-500 mb-6">For teams of all sizes</p>
    <p className="text-4xl font-extrabold mb-6">
      {price}
      <span className="text-base font-normal text-gray-500">/mo</span>
    </p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="flex-shrink-0 w-5 h-5 text-[#00AA72] mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 rounded-lg font-semibold text-white transition-colors duration-300 ${buttonColor}`}
      tabIndex={0}
    >
      {buttonText}
    </button>
  </div>
);


// =======================================================
// MAIN COMPONENT: PricingSection
// Includes the state management for the Monthly/Yearly toggle.
// =======================================================

const PricingSection: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="py-[60px] md:py-[120px] px-4 bg-gradient-to-b from-[#00AA72] to-[#006D56]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-white text-center text-[24px] mb-[16px] md:text-[40px] font-bold leading-[120%]">
            We Grow When Your
            <br />
            Business Grows
          </h1>
          <p className="text-[#CDDFDB] text-center text-[14px] font-normal leading-[150%] mb-[24px] md:text-[18px]">
            Enhance your online presence with a stunning profile
            <br />
            and premium visuals that captivate and engage.
          </p>

          {/* Toggle Buttons (Monthly/Yearly) */}
          <div className="flex items-center bg-white rounded-[28px] w-fit mx-auto justify-center gap-[12px] mb-[50px] p-[2px]">
            <button
              className={`px-6 py-[12px] text-[14px] font-medium leading-[100%] rounded-full transition-colors ${isMonthly ? 'bg-[#00AA72] text-white' : 'bg-transparent text-[#00AA72]'}`}
              tabIndex={0}
              // FIX: Add onClick handler to switch to Monthly pricing
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-[12px] text-[14px] font-medium leading-[100%] rounded-full transition-colors ${!isMonthly ? 'bg-[#00AA72] text-white' : 'bg-transparent text-[#00AA72]'}`}
              tabIndex={0}
              // FIX: Add onClick handler to switch to Yearly pricing
              onClick={() => setIsMonthly(false)}
            >
              Yearly <span className="text-white text-xs bg-red-500 px-2 py-0.5 rounded-full ml-1">Save 10%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const displayPrice = isMonthly ? plan.monthlyPrice : plan.annualPrice;
            return (
              <PricingCard 
                key={index} 
                planName={plan.planName}
                price={displayPrice}
                features={plan.features}
                isFeatured={plan.isFeatured || false}
                buttonColor={plan.buttonColor || "bg-[#040E56] hover:bg-[#00208E]"}
                buttonText={plan.buttonText || "Start Trial"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;