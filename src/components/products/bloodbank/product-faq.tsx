"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-[24px] text-left transition-all duration-200 focus:outline-none group"
      >
        <h3
          className={cn(
            "text-[18px] md:text-[20px] font-semibold leading-[1.3] transition-colors duration-200",
            isOpen ? "text-[#195AFF]" : "text-[#020D2C] group-hover:text-[#195AFF]"
          )}
        >
          {question}
        </h3>
        <span className="ml-4 shrink-0 text-[#020D2C]">
          {isOpen ? (
            <ChevronUp className="h-[24px] w-[24px] transition-transform text-[#195AFF]" />
          ) : (
            <ChevronDown className="h-[24px] w-[24px] transition-transform" />
          )}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-height-[500px] opacity-100 pb-[24px]" : "max-height-0 opacity-0"
        )}
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <p className="text-[16px] text-[#4E5B7D] leading-[1.6] max-w-[1000px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function GrowSuiteFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is GrowSuite and how does it help businesses grow?",
      answer:
        "GrowSuite is an all-in-one business growth platform that offers CRM, HRM, Marketing Automation, Sales Pipeline Management, Analytics, and Lead Management—all in one place. It helps startups and growing businesses automate tasks, improve sales and marketing, and streamline team operations.",
    },
    {
      question: "How does GrowSuite CRM improve lead management and sales conversion?",
      answer:
        "Our CRM organizes all your customer interactions, tracks leads through every stage of the funnel, and uses automated follow-ups to ensure no opportunity is missed, significantly boosting conversion rates.",
    },
    {
      question: "Is GrowSuite suitable for startups and small businesses?",
      answer:
        "Absolutely. GrowSuite is designed specifically with scalability in mind, offering powerful enterprise-grade tools with the flexibility and ease of use that small teams and startups require.",
    },
    {
      question: "Can I use GrowSuite for managing teams and payroll?",
      answer:
        "Yes, GrowSuite includes a comprehensive HRM module that allows you to manage employee records, attendance, leave requests, and payroll processing seamlessly within the same platform.",
    },
    {
      question: "Can I automate my email and WhatsApp marketing with GrowSuite?",
      answer:
        "Yes, our marketing automation tools allow you to create automated campaigns across both Email and WhatsApp, reaching your customers where they are most active with personalized content.",
    },
  ];

  return (
    <section className="bg-white py-[60px] md:py-[100px] px-4">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[40px] md:mb-[60px] text-center">
          <h2 className="text-[32px] md:text-[50px] font-bold text-[#020D2C] leading-tight tracking-tight">
            Your questions Our Answers
          </h2>
        </div>

        <div className="mx-auto max-w-[950px]">
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          <div className="mt-[48px] flex justify-center">
            <button className="inline-flex h-[45px] items-center justify-center rounded-[12px] border border-[#EFF4FF] bg-white px-[24px] py-[12px] text-[16px] font-medium text-[#195AFF] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all hover:bg-[#EFF4FF]">
              Show More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}