"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const tabs = [
  "Nig HR",
  "Nig Doc",
  "Nig Medi",
  "Nig Labs",
  "Nig Dents",
  
  "Nig Bills",
  "Blood Bank",
  "Gell+",
];

export default function ProductDetailsSection({ id }: { id?: string }) {
  const [activeTab, setActiveTab] = useState("Nig HR");

  // Listen for tab change events from hero cards
  React.useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('changeProductTab', handleTabChange as EventListener);

    return () => {
      window.removeEventListener('changeProductTab', handleTabChange as EventListener);
    };
  }, []);

  return (
    <section
      id={id}
      className="relative pt-[56px] md:pt-14 pb-[40px] md:pb-[60px] overflow-hidden font-sans"
    >
      <div className="container mx-auto relative z-10 px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="bg-gradient-to-r from-[#00B2F9] via-[#00B2F9] to-[#9D00EB] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">
            Nigsoft <span className="text-slate-900">Healthcare & Enterprise</span> Products
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Modular, cloud-based software solutions for laboratories, hospitals,
            clinics, pharmacies, dental centers, blood banks, and billing teams.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "h-10 rounded-full px-6 text-sm font-bold transition-all duration-300",
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] scale-105"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex md:grid gap-3 md:gap-8 flex-col md:grid-cols-2 lg:grid-cols-3">
          {activeTab === "Nig Labs" && (
            <>
              <Card
                title="Revenue & Referral Analytics"
                desc="Track daily collections, pending payments, and referral-wise revenue with real-time visual reports."
                img="/images/niglab1.png"
                href="/product/labmanagementsoftware"
              />
              <Card
                title="Smart Billing & Payment Management"
                desc="Monitor and manage payments across all modes with detailed credit, debit, and exportable reports."
                img="/images/niglab2.png"
                href="/product/labmanagementsoftware"
              />
              <Card
                title="Test Workflow Management"
                desc="Control the complete test lifecycle with real-time billing, status tracking, and operational insights."
                img="/images/niglab3.png"
                href="/product/labmanagementsoftware"
              />
            </>
          )}

          {activeTab === "Nig Medi" && (
            <>
              <Card
                title="Pharmacy Operations Management"
                desc="Manage prescriptions, stock levels, expiry tracking, and pharmacy workflows from one dashboard."
                img="/images/nigmedi1.png"
                href="/product/pharmacymanagementsoftware"
              />
              <Card
                title="Inventory & Billing Control"
                desc="Monitor medicine purchases, sales, and billing while maintaining compliance and accuracy."
                img="/images/nigmedi2.png"
                href="/product/pharmacymanagementsoftware"
              />
              <Card
                title="Smart Demand Analysis"
                desc="Use analytics to predict medicine demand, reduce wastage, and optimize procurement."
                img="/images/nigmedi3.png"
                href="/product/pharmacymanagementsoftware"
              />
            </>
          )}

          {activeTab === "Nig Doc" && (
            <>
              <Card
                title="Patient Clinical History Overview"
                desc="Detailed patient profile displaying OP visit history, doctors consulted, visit dates, and billed amounts."
                img="/images/nigdoc1.png"
                href="/product/hospitalerpsoftware"
              />
              <Card
                title="IP Admission List"
                desc="In-patient admission management with room/ward details, billing amounts, payments, and discharge actions."
                img="/images/nigdoc2.png"
                href="/product/hospitalerpsoftware"
              />
              <Card
                title="Laboratory Test Details"
                desc="Patient-wise diagnostic test records with bill numbers, test names, and billing timestamps."
                img="/images/nigdoc3.png"
                href="/product/hospitalerpsoftware"
              />
            </>
          )}

          {activeTab === "Nig Dents" && (
            <>
              <Card
                title="Dental Treatment Planning Screen"
                desc="Interactive dental chart for selecting teeth, assigning treatments/products, and auto-calculating treatment costs."
                img="/images/nigdent1.png"
                href="/product/dentalclinicsoftware"
              />
              <Card
                title="Treatment Bill Report List"
                desc="Tabular view of all dental treatment invoices with billing status, balance, and quick action buttons."
                img="/images/nigdent2.png"
                href="/product/dentalclinicsoftware"
              />
              <Card
                title="Patient List Management"
                desc="Central patient registry showing demographics, registration details, and quick actions like edit, print, and plan."
                img="/images/nigdent3.png"
                href="/product/dentalclinicsoftware"
              />
            </>
          )}

          {activeTab === "Nig HR" && (
            <>
              <Card
                title="Monthly Payroll & Payslip Access"
                desc="Employees can securely view, submit, and print monthly payslips with clear salary breakup and payroll period details."
                href="/product/hrmssoftware"
                img="/images/nighr1.png"
              />
              <Card
                title="Centralized Employee Master Profile"
                desc="Maintain complete employee information including personal details, contact info, bank details, salary, and leave records in one unified profile."
                href="/product/hrmssoftware"
                img="/images/nighr2.png"
              />
              <Card
                title="Daily Attendance Tracking & Reporting"
                desc="Track employee in-time, out-time, working hours, attendance status, and work location with export options for CSV, Excel, and PDF."
                href="/product/hrmssoftware"
                img="/images/nighr3.png"
              />
            </>
          )}

          {activeTab === "Blood Bank" && (
            <>
              <Card
                title="Donor & Volunteer Registration"
                desc="Digitally register blood donors with personal details, health screening, eligibility checks, donation history, and next donation scheduling for better donor management."
                href="/product/bloodbankmanagementsoftware"
                img="/images/blood1.png"
              />
              <Card
                title="Blood Collection & Inventory Management"
                desc="Track blood donations with donor details, blood group, expiry dates, status (sold/unsold), and inventory movement to ensure safe and efficient blood management."
                href="/product/bloodbankmanagementsoftware"
                img="/images/blood2.png"
              />
              <Card
                title="Blood Bank Dashboard & Stock Overview"
                desc="Real-time dashboard displaying available blood units, expiring stock, spoiled blood, and today's collections with quick alerts and actionable insights."
                href="/product/bloodbankmanagementsoftware"
                img="/images/blood3.png"
              />
            </>
          )}

          {activeTab === "Nig Bills" && (
            <>
              <Card
                title="Customer Payouts & Outstanding Report"
                desc="Track customer bills, received payments, balances, and aging with instant actions like SMS, and reports."
                href="/product/billinginvoicesoftware"
                img="/images/nigbills1.png"
              />
              <Card
                title="Real-Time Stock & Inventory Updates"
                desc="Monitor product quantities, cost, price, and stock value across branches with low-stock alerts and bulk imports."
                href="/product/billinginvoicesoftware"
                img="/images/nigbills2.png"
              />
              <Card
                title="Supplier Monthly Purchase Report"
                desc="Analyze supplier-wise purchases with GST breakdown, quantities, taxable values, and downloadable monthly reports."
                href="/product/billinginvoicesoftware"
                img="/images/nigbills3.png"
              />
            </>
          )}

          {activeTab === "Gell+" && (
            <>
              <Card
                title="Smart Health Services Hub"
                desc="Get quick access to essential medical services, specialist consultations, and daily fitness tracking—all in one intuitive dashboard designed for effortless navigation."
                img="/images/gell+1.png"
                href="/product/mobileappforpatients"
              />
              <Card
                title="Instant Lab Reports & Billing Status"
                desc="Easily track patient reports, billing details, payment status, and pending dues with a clear, organized interface that ensures transparency and faster report access."
                img="/images/gell+2.png"
                href="/product/mobileappforpatients"
              />
              <Card
                title="Seamless Medicine Ordering System"
                desc="Upload prescriptions, browse available medicines, track stock levels, and create orders effortlessly with a smart and structured multi-step ordering workflow."
                img="/images/gell+3.png"
                href="/product/mobileappforpatients"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------- REUSABLE CARD -------------------- */
function Card({
  title,
  desc,
  img = "/icons/report.png",
  href
}: {
  title: string;
  desc: string;
  img?: string;
  href?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className="md:group md:relative md:bg-white md:rounded-[2.5rem] md:p-8 md:border md:border-slate-100 md:shadow-xl md:shadow-slate-200/50 md:hover:shadow-2xl md:hover:border-blue-100 md:transition-all md:duration-300 md:cursor-pointer md:overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block relative z-10">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-2 mb-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
          <Image 
            src={img} 
            alt={title} 
            width={522}
            height={298}
            className="w-full h-auto drop-shadow-2xl rounded-2xl object-cover object-right" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            priority={false}
          />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-slate-500 font-medium leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Mobile View - Dropdown Accordion */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between hover:border-blue-400 hover:bg-slate-50 transition-all"
        >
          <h3 className="text-base font-bold text-slate-900 text-left pr-4">
            {title}
          </h3>
          <svg 
            className={`flex-shrink-0 w-5 h-5 text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="overflow-hidden animate-fade-in">
            <div className="bg-slate-50 border border-t-0 border-slate-200 rounded-b-xl p-4 space-y-3">
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-2">
                <Image 
                  src={img} 
                  alt={title} 
                  width={400}
                  height={200}
                  className="w-full h-32 object-cover rounded-md"
                  loading="lazy"
                />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {desc}
              </p>
              <button
                onClick={handleClick}
                className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Subtle Glow Effect on Hover - Desktop Only */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
