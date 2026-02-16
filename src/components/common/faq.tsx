"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const INITIAL_VISIBLE_COUNT = 5;

// Hardcoded FAQ data
const faqs = [
  {
    id: 1,
    question: "What types of software solutions does Nigsoft provide?",
    answer: "Nigsoft specializes in healthcare management software including Lab Management, Pharmacy Management, Hospital Management, Dental Management, Blood Bank Management, HR Management, and custom software development solutions."
  },
  {
    id: 2,
    question: "How secure are your healthcare management systems?",
    answer: "Our systems are built with enterprise-grade security features including data encryption, role-based access control, audit trails, and compliance with healthcare data protection standards to ensure patient information remains secure."
  },
  {
    id: 3,
    question: "Can your software integrate with existing hospital systems?",
    answer: "Yes, our software solutions are designed with integration capabilities to work seamlessly with existing hospital information systems, laboratory equipment, and third-party applications through APIs and standard protocols."
  },
  {
    id: 4,
    question: "Do you provide training and support after implementation?",
    answer: "Absolutely! We provide comprehensive training for your staff, detailed documentation, and ongoing technical support to ensure smooth operation of our software solutions."
  },
  {
    id: 5,
    question: "Is your software cloud-based or on-premise?",
    answer: "We offer both cloud-based and on-premise deployment options to meet your specific requirements, infrastructure preferences, and compliance needs."
  },
  {
    id: 6,
    question: "How long does it take to implement your software solutions?",
    answer: "Implementation time varies based on the complexity and scope of the project. Typically, our solutions can be deployed within 2-8 weeks, including customization, testing, and staff training."
  },
  {
    id: 7,
    question: "Do you offer custom software development services?",
    answer: "Yes, through our Gell+ service, we provide custom software development tailored to your specific business requirements, including web applications, mobile apps, and enterprise solutions."
  },
  {
    id: 8,
    question: "What kind of reporting and analytics features do you provide?",
    answer: "Our software includes comprehensive reporting and analytics features with customizable dashboards, real-time data visualization, automated report generation, and business intelligence tools to help you make informed decisions."
  }
];

const FaqSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleShowMore = () => {
    setVisibleCount(faqs.length);
  };

  const visibleFaqs = faqs.slice(0, visibleCount);

  return (
    <section className="bg-white py-10 relative overflow-hidden font-sans">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(69, 108, 244) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgb(157, 0, 235) 0%, transparent 20%)'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-5">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Everything you need to know about our healthcare solutions, support, and billing.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[800px] space-y-4">
          {visibleFaqs.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-300",
                openIndex === index
                  ? "bg-blue-50/50 border-blue-200 shadow-lg shadow-blue-100/50"
                  : "bg-white border-slate-100 hover:border-slate-200"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 sm:p-8 flex items-start gap-4 cursor-pointer"
              >
                <span className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                  openIndex === index ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                )}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>

                <div className="flex-1">
                  <h3 className={cn(
                    "text-lg font-bold transition-colors duration-300",
                    openIndex === index ? "text-blue-700" : "text-slate-900"
                  )}>
                    {item.question}
                  </h3>

                  {openIndex === index && (
                    <div className="animate-fade-in">
                      <p className="pt-4 text-slate-600 leading-relaxed font-medium">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {visibleCount < faqs.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleShowMore}
              className="group px-8 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm font-bold shadow-sm hover:border-blue-300 hover:shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              Load More Questions
              <Plus size={16} className="text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;
