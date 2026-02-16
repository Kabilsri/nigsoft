"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Clinic Management Software?",
    answer:
      "Clinic Management Software is a digital solution that helps clinics manage patient records, appointments, billing, staff, and reports efficiently from a single platform.",
  },
  {
    question: "Is Nigsoft software suitable for small and multi-specialty clinics?",
    answer:
      "Yes. Nigsoft is designed to scale seamlessly for small clinics, diagnostic centers, and large multi-specialty hospitals.",
  },
  {
    question: "Is patient data secure?",
    answer:
      "Absolutely. We use secure cloud infrastructure, data encryption, and role-based access control to protect patient information.",
  },
  {
    question: "Can I access the system from mobile and desktop?",
    answer:
      "Yes. Our clinic management system is fully responsive and works smoothly on mobile phones, tablets, and desktop devices.",
  },
  {
    question: "Does it support billing and online payments?",
    answer:
      "Yes. The platform supports billing, invoicing, insurance workflows, and secure online payment integrations.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const displayedFAQ = showAll ? faqData : faqData.slice(0, 4);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[60px] md:py-[120px] px-4 md:px-0 bg-white">
      <div className="container mx-auto max-w-[1280px]">
        <div className="mb-12 text-center">
          <h2 className="text-[#090D28] font-bold text-[32px] md:text-[48px] leading-[120%] tracking-[-0.02em]">
            Your questions Our Answers
          </h2>
        </div>

        <div className="mx-auto max-w-[800px]">
          <div className="flex flex-col">
            {displayedFAQ.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-[#D8E9FF] py-6 last:border-b-0"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between text-left focus:outline-none group"
                  >
                    <span
                      className={`font-semibold text-[18px] md:text-[22px] leading-[120%] transition-colors duration-200 ${
                        isOpen ? "text-[#195AFF]" : "text-[#090D28]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#195AFF]" : "text-[#090D28]"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#373844] text-[16px] md:text-[18px] leading-[150%] font-normal">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {!showAll && faqData.length > 4 && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex h-[52px] items-center justify-center rounded-[8px] bg-white px-8 py-4 text-[16px] font-semibold text-[#195AFF] shadow-[0px_4px_14px_rgba(25,90,255,0.1)] border border-[#EFF4FF] hover:bg-[#EFF4FF] transition-colors duration-200"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;