"use client";

import * as React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { useEffect, useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Hardcoded stats data
const stats = [
  { number: 1000, label: "Happy Clients" },
  { number: 100, label: "Projects Completed" },
  { number: 5, label: "Years Experience" }
];

const testimonials = [
  {
    quote:
      "Software experience is very good and technical support issues are solved quickly. Compared to our old software, this is much better and cost-effective. Happy to refer others.",
    logo: null,
    name: "Lab Owner",
    company: "Saraswathi Clinical Lab",
  },
  {
    quote:
      "Very good software and excellent support. Test format changes were handled smoothly. Much better than our previous software and worth the cost.",
    logo: null,
    name: "Lab Head",
    company: "Ravi Pathology",
  },
  {
    quote:
      "Good software experience with reliable technical support. Clear improvement over our old software and cost-effective. We confidently refer this to others.",
    logo: null,
    name: "Lab Manager",
    company: "Arogya Pathology",
  },
  {
    quote:
      "Super and very good service. Compared to my previous software, this is far better. Cost is effective and I will surely refer more members.",
    logo: null,
    name: "Owner",
    company: "Amma Lab",
  },
  {
    quote:
      "Software is good and service is also good. Required modifications were handled well. Cost-effective and we have already referred multiple labs.",
    logo: null,
    name: "Diagnostics Head",
    company: "Suguna Diagnostics",
  },
  {
    quote:
      "Very good software compared to our previous one. Cost-wise good and service support is excellent. Already referred two labs.",
    logo: null,
    name: "Pathologist",
    company: "Sero Pathology",
  },
  {
    quote:
      "Super software experience with good customer support. Easy to use and convenient. I have already referred another lab.",
    logo: null,
    name: "Lab Admin",
    company: "Innova Lab",
  },
  {
    quote:
      "Good software experience with the best customer support. Cost-effective and reliable for daily lab operations.",
    logo: null,
    name: "Lab Owner",
    company: "Iyappa Lab",
  },
  {
    quote:
      "User-friendly, updated software with speedy technical help and great response. Highly satisfied with the support team.",
    logo: null,
    name: "Shiva Rajan",
    company: "Getwell Lab",
  },
  {
    quote:
      "Very user-friendly software with customization options. Helpdesk is available anytime and service quality is excellent.",
    logo: null,
    name: "Annie Rose",
    company: "Clinical Diagnostics",
  },
  {
    quote:
      "Service wise good and I already referred 4 members to use our software. Very satisfied with cost. It is my 1st software.",
    logo: null,
    name: "Lab Manager",
    company: "Universal Lab",
  },
  {
    quote:
      "It is better compared to previous software. Good services, cost effective and already referred 1 person.",
    logo: null,
    name: "Owner",
    company: "Sri Nethra Diagnostics",
  },
  {
    quote:
      "Very good. Compare to my previous software it is best. Service is good and will refer more members to use.",
    logo: null,
    name: "Lab Head",
    company: "SV Diagnostics",
  },
  {
    quote:
      "Good and compare to my previous software it is too good. Good service and will refer more clients to use.",
    logo: null,
    name: "Owner",
    company: "Sudha Diagnostics",
  },
  {
    quote:
      "NIG software is very good and features are also nice. One of the best medical billing software services.",
    logo: null,
    name: "Vijaykumar Jadav",
    company: "Google Reviews",
  },
];

const PlaceholderLogo = ({ companyName }: { companyName: string }) => {
  const initial = companyName.charAt(0).toUpperCase();
  // Consistent color hashing for a given company name
  const colors = ["bg-sky-500", "bg-amber-500", "bg-emerald-500", "bg-rose-500", "bg-indigo-500"];
  const colorIndex = companyName.length % colors.length;

  return (
    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${colors[colorIndex]}`}>
      <span className="text-white text-xl font-semibold">{initial}</span>
    </div>
  );
};

export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000, // Autoplay delay
      stopOnInteraction: false, // Keeps running after drag
      stopOnMouseEnter: true, // Pause on hover
    })
  );

  const statsRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const counters = statsRef.current?.querySelectorAll("[data-target]");
          counters?.forEach((counter) => {
            const updateCount = () => {
              const target = Number(counter.getAttribute("data-target"));
              const current = Number(counter.textContent?.replace("+", "")) || 0;
              const increment = target / 50;

              if (current < target) {
                counter.textContent = Math.ceil(current + increment).toString();
                requestAnimationFrame(updateCount);
              } else {
                counter.textContent = target + "+";
              }
            };
            updateCount();
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, [stats]);

  return (
    <section className="bg-[#020617] py-16 lg:py-[120px] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-[48px] leading-tight font-bold">
            Why teams love{" "}
            <span className="bg-[linear-gradient(180deg,#FFD439_20.03%,#FF7A00_87.85%)] bg-clip-text text-transparent">
              Working With Us
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-400 font-medium">
            When our customers win, we win. Here's how they've used our tools to succeed.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 mb-12">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#020617] shadow-lg overflow-hidden">
              <Image
                src="/review/1.png"
                alt="User avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#020617] shadow-lg overflow-hidden">
              <Image
                src="/review/2.png"
                alt="User avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#020617] shadow-lg overflow-hidden">
              <Image
                src="/review/3.png"
                alt="User avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#020617] shadow-lg overflow-hidden">
              <Image
                src="/review/4.png"
                alt="User avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <a className="text-sm font-semibold text-white" href="https://www.google.com/maps/place/NIGSOFT+PRIVATE+LIMITED/@11.6428042,78.1506282,976m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3babeffd89cb1eb3:0xc579d53212831026!8m2!3d11.642799!4d78.1532031!16s%2Fg%2F11lfh37m5t?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Google Reviews</a>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-white mr-1">4.6</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#FFD439] fill-[#FFD439]" />
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <Carousel
            plugins={[autoplay.current]}
            opts={{ loop: true }}
            className="w-full"
          >

            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex flex-col items-center justify-between min-h-[320px] md:min-h-[280px]">
                      <p className="text-slate-300 text-base md:text-lg font-medium text-center max-w-2xl">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-6 flex flex-col items-center text-center">
                        {testimonial.logo ? (
                          <Image
                            src={testimonial.logo}
                            alt={`${testimonial.company} logo`}
                            width={56}
                            height={56}
                            className="w-14 h-14 object-contain"
                          />
                        ) : (
                          <PlaceholderLogo companyName={testimonial.company} />
                        )}
                        <p className="font-semibold text-white mt-4">
                          {testimonial.company}
                        </p>
                        <p className="text-sm text-slate-400 font-normal">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 h-8 w-8 text-slate-500 hover:text-white z-10 bg-transparent border-none hover:bg-white/10">
              <ChevronLeft size={32} />
            </CarouselPrevious>
            <CarouselNext className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 h-8 w-8 text-slate-500 hover:text-white z-10 bg-transparent border-none hover:bg-white/10">
              <ChevronRight size={32} />
            </CarouselNext>
          </Carousel>
        </div>

        <div
          ref={statsRef}
          className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-4xl mx-auto"
        >

          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p
                className="font-bold text-5xl lg:text-[56px] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 leading-none"
                data-target={stat.number}
              >
                0
              </p>
              <p className="mt-2 font-normal text-slate-400 text-base md:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}