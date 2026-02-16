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

export default function EcomSaasFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is EcomSaaS and how does it help my business?",
      answer:
        "EcomSaaS is a comprehensive e-commerce platform that provides all the tools you need to build, manage, and scale your online store. It includes inventory management, payment processing, order tracking, and marketing automation—all in one integrated solution.",
    },
    {
      question: "How quickly can I set up my online store?",
      answer:
        "You can have your store up and running within hours. Our intuitive setup wizard guides you through product uploads, payment configuration, and store customization, making the process seamless even for beginners.",
    },
    {
      question: "Does EcomSaaS integrate with popular payment gateways?",
      answer:
        "Yes, we support all major payment gateways including Stripe, PayPal, Razorpay, and more. You can accept payments via credit cards, digital wallets, and local payment methods to maximize conversion rates.",
    },
    {
      question: "Can I customize my store design and branding?",
      answer:
        "Absolutely! EcomSaaS offers extensive customization options including themes, color schemes, fonts, and layout configurations. You can also add custom CSS and HTML to match your brand perfectly.",
    },
    {
      question: "Is there inventory and order management included?",
      answer:
        "Yes, our platform includes comprehensive inventory tracking, automated stock alerts, order processing workflows, and shipping management. You can manage everything from a single dashboard.",
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