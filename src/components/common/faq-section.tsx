"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our products and services.",
  faqs
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Questions <span className="text-blue-600">Our Answers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors focus:outline-none"
              >
                <span className={`font-semibold text-lg transition-colors duration-300 ${openIndex === index ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown
                    className={`w-6 h-6 ${openIndex === index ? 'text-blue-600' : 'text-gray-400'
                      }`}
                  />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;