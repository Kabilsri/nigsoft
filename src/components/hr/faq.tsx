"use client";
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is GrowSuite? how does it help businesses grow?",
    answer: "GrowSuite is an all-in-one business growth platform that offers CRM, HRM, Marketing Automation, Sales Pipeline Management, Analytics, and Lead Management—all in one place. It helps startups and growing businesses automate tasks, improve sales and marketing, and streamline team operations."
  },
  {
    question: "How does GrowSuite CRM improve lead management and sales conversion?",
    answer: "GrowSuite CRM centralizes lead data, automates workflows, scores leads based on engagement, and helps sales teams prioritize high-quality leads—leading to faster conversions and higher revenue."
  },
  {
    question: "Is GrowSuite suitable for startups and small businesses?",
    answer: "Yes, GrowSuite is built specifically for startups and small to medium-sized businesses. It offers scalable features, affordable pricing, and easy-to-use interfaces to help teams grow without tech barriers."
  },
  {
    question: "What makes GrowSuite HRM effective for managing teams and payroll?",
    answer: "GrowSuite HRM automates attendance tracking, leave management, payroll processing, employee onboarding, and performance monitoring—perfect for in-office or remote teams."
  },
  {
    question: "Can I automate my email and WhatsApp marketing with GrowSuite?",
    answer: "Absolutely. GrowSuite includes integrated marketing automation for email campaigns, WhatsApp messaging, and customer follow-ups—allowing for smarter, hands-free marketing."
  }
  // ... you can add the remaining items here
];

const AccordionItem: React.FC<{ 
  item: FAQItem; 
  isOpen: boolean; 
  onClick: () => void 
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="transition-all duration-200 py-[16px] border-b-2 border-[#D8E9FF]">
      <button 
        type="button" 
        onClick={onClick}
        className="flex items-center text-start justify-between w-full focus:outline-none"
      >
        <span className={`schibsted-grotesk text-[18px] md:text-[20px] font-[600] leading-[30px] transition-colors ${isOpen ? 'text-[#195AFF]' : 'text-black'}`}>
          {item.question}
        </span>
        <div className="w-[20px] flex-shrink-0 ml-4">
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1558BC]' : 'text-black'}`} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="text-[#2D3238] mt-[8px] schibsted-grotesk text-[16px] font-normal leading-[150%]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="mt-[120px] text-[#090D28] text-center text-[32px] md:text-[48px] font-extrabold leading-[120%] font-NeueMontreal mb-8">
          Your questions Our Answers
        </h2>
        
        <div className="max-w-3xl mx-auto mt-[24px] md:mt-[27px]">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}

          <div className="text-center mt-8">
            <button className="inline-flex h-[48px] px-[24px] py-[16px] justify-center items-center text-[#195AFF] text-[16px] md:text-[18px] font-semibold rounded-[8px] bg-white shadow-lg hover:bg-gray-50 transition-colors">
              Show Less
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;