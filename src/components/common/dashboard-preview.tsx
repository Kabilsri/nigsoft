"use client";
import React from 'react';
import Image from 'next/image';

const tags1 = [
  "Hospital Management",
  "Lab Management",
  "Clinic Software",
  "Pharmacy Billing",
  "Patient Records",
  "Medical Reports",
  "Appointment Scheduling",
  "Inventory Management",
  "Role Based Access"
];

const tags2 = [
  "Healthcare SaaS",
  "EMR & EHR",
  "WhatsApp Patient Alerts",
  "Automated Reporting",
  "Custom Integrations",
  "Secure Cloud Hosting",
  "Billing & Invoicing",
  "Data Analytics",
  "Compliance Ready"
];
const tags3 = [
  "Enterprise Hospitals",
  "Diagnostic Centers",
  "Multi-Branch Clinics",
  "Scalable Architecture",
  "High Availability",
  "Data Security",
  "Audit Logs",
  "API Integrations",
  "24×7 Support"
];


const Tag = ({ label }: { label: string }) => (
  <div className="flex-shrink-0 cursor-pointer rounded-full border border-white/20 px-6 py-3 transition-colors duration-300 hover:bg-white/10">
    <p className="whitespace-nowrap text-base font-normal text-white">{label}</p>
  </div>
);

const TagRow = ({ tags, direction = 'left' }: { tags: string[]; direction?: 'left' | 'right' }) => {
  const animationClass = direction === 'left' ? 'animate-[scrollLeft_40s_linear_infinite]' : 'animate-[scrollRight_40s_linear_infinite]';
  return (
    <div className="flex overflow-hidden">
      <div className={`flex min-w-full flex-shrink-0 space-x-4 ${animationClass}`}>
        {tags.map((tag, index) => (
          <Tag key={`${tag}-${index}`} label={tag} />
        ))}
      </div>
      <div className={`flex min-w-full flex-shrink-0 space-x-4 ${animationClass}`} aria-hidden="true">
        {tags.map((tag, index) => (
          <Tag key={`${tag}-${index}-clone`} label={tag} />
        ))}
      </div>
    </div>
  );
};


const DashboardPreview = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
      <section
        className="group relative overflow-hidden backdrop-blur-3xl transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #03008F 0%, #000839 50%, #000420 100%)`
        }}
        onMouseMove={handleMouseMove}
      >
        <div
          className="pointer-events-none absolute aspect-square w-[30vmin] animate-[spin_20s_linear_infinite] will-change-transform transition-all duration-500 ease-out"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
          }}
        >
          <div className="h-[254px] w-[254px] rounded-full bg-[#0f1192] blur-[100px] mix-blend-plus-lighter"></div>
        </div>
        <div className="container mx-auto px-6 pt-[30px] md:pt-[60px]">
          <div className="text-center px-6">
            <div className="text-center px-6">
              <h2 className="mx-auto max-w-[900px] font-bold leading-tight text-white text-[32px] md:text-[48px]">
                Simplify Healthcare Operations with a<br></br>
                <span
                  className="bg-gradient-to-r from-[#EB7AFF] to-[#5EC1FF] bg-clip-text text-transparent font-heading text-[32px] md:text-[48px] font-extrabold leading-[120%]"
                >
                  Unified Digital Workspace
                </span>

              </h2>
              <p className="mx-auto mt-4 max-w-[650px] text-white/80 text-base sm:text-lg leading-relaxed">
                Manage patient workflows, laboratory operations, billing, reports, integrations,
                and digital tools — all from a secure, intuitive dashboard built for modern
                healthcare businesses.

              </p>
            </div>
          </div>


          {/* <div className="mt-10 flex justify-center md:mt-[60px]">
            <Image
              src="/icons/nigdoc.png"
              alt="Dashboard Preview"
              width={1280}
              height={789}
              className="mx-auto w-full max-w-6xl rounded-[26px] shadow-[0px_4px_45.8px_0px_rgba(0,0,0,0.25)]"
            />
          </div> */}

          <div className="relative mt-12 pb-[60px] md:mt-24 md:pb-[120px] [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="space-y-4">
              <TagRow tags={tags1} direction="left" />
              <TagRow tags={tags2} direction="right" />
              <TagRow tags={tags3} direction="left" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPreview;