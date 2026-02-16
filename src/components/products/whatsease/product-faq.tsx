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
    <div className="border-b border-[#E2E8F0] py-6">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <span
          className={cn(
            "text-[18px] md:text-[22px] font-[500] leading-[1.4] transition-colors duration-200",
            isOpen ? "text-[#195AFF]" : "text-[#2A3B2B] group-hover:text-[#195AFF]"
          )}
        >
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-[#195AFF] shrink-0" />
        ) : (
          <ChevronDown className="h-6 w-6 text-[#195AFF] shrink-0" />
        )}
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-height-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-[#2A3B2B] text-[16px] md:text-[18px] leading-[1.8] font-normal">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function WhatsEaseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is WhatsEase?",
      answer:
        "WhatsEase is a WhatsApp automation tool designed to help businesses handle customer interactions, inquiries, and support - all through WhatsApp. It eliminates the need for expensive app development by turning WhatsApp into a powerful, automated service channel.",
    },
    {
      question: "How does WhatsEase improve customer experience?",
      answer:
        "By providing instant, 24/7 automated replies and structured bot flows, WhatsEase ensures your customers never have to wait for a response. It delivers a familiar, native chat experience that customers already love and trust.",
    },
    {
      question: "Is WhatsEase safe for my Business?",
      answer:
        "Yes, WhatsEase uses the official WhatsApp Cloud API, ensuring compliance with WhatsApp's policies and providing a secure environment for your business communications and customer data.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "You can get started almost instantly! Once you connect your WhatsApp Business Account and upload your audience, you can begin launching campaigns and setting up bot flows within minutes.",
    },
    {
      question: "Is customer data safe with WhatsEase?",
      answer:
        "Absolutely. Data security is our top priority. We use industry-standard encryption and follow strict privacy protocols to ensure that all customer data processed through our platform remains confidential and protected.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[80px] md:py-[120px]">
      <div className="container px-4 md:px-0 max-w-[900px]">
        <div className="text-center mb-[60px]">
          <h3 className="text-[#013F1B] text-[24px] md:text-[32px] font-[700] mb-4 tracking-tight">
            Frequently Asked Questions?
          </h3>
          <h2 className="text-[#013F1B] text-[40px] md:text-[56px] font-[700] leading-[1.1] tracking-tight">
            Your questions Our Answers
          </h2>
        </div>

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}