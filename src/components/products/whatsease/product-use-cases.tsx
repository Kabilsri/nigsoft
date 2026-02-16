"use client";

import { 
  ShoppingBag, 
  GraduationCap, 
  Home, 
  Stethoscope, 
  Hotel,
  Utensils
} from "lucide-react";

const useCases = [
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Send order confirmations, shipping updates, abandoned cart reminders, and promotional offers to boost sales.",
    gradient: "from-[#195AFF] to-[#426CF4]"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Share course updates, assignment reminders, attendance notifications, and communicate with students and parents.",
    gradient: "from-[#19ADBB] to-[#19A7FF]"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Send property listings, schedule viewings, share virtual tours, and maintain relationships with potential buyers.",
    gradient: "from-[#FF7A00] to-[#FFD439]"
  },
  // {
  //   icon: Stethoscope,
  //   title: "Healthcare",
  //   description: "Appointment reminders, prescription notifications, health tips, and enable secure patient communication.",
  //   gradient: "from-[#25D366] to-[#19ADBB]"
  // },
  // {
  //   icon: Hotel,
  //   title: "Hospitality",
  //   description: "Booking confirmations, check-in reminders, service requests, and enhance guest experience at hotels and resorts.",
  //   gradient: "from-[#A8B8FF] to-[#6F9CFF]"
  // },
  // {
  //   icon: Utensils,
  //   title: "Food & Beverage",
  //   description: "Menu updates, order taking, delivery tracking, table reservations, and build loyal customer base for restaurants.",
  //   gradient: "from-[#E84F4F] to-[#FF7A00]"
  // }
];

export default function ProductUseCases() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#090D28] mb-4">
            Perfect for{" "}
            <span className="bg-gradient-to-r from-[#195AFF] to-[#19ADBB] bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-lg text-[#373844] max-w-2xl mx-auto">
            WhatsEase adapts to your business needs, no matter what industry you're in
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-[#F8F9FA] p-8 rounded-2xl border border-[#E5E5E5] hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#090D28] mb-4">
                  {useCase.title}
                </h3>
                <p className="text-[#373844] leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
