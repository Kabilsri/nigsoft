"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  "Radiology",
  "Pathology",
  "Microbiology",
  "Nig Dents",
  "Nig HR",
  "Blood Bank",
  "Nig Bills",
  "Gell+",
];

export default function ProductDetailsSection({ id }: { id?: string }) {
  const [activeTab, setActiveTab] = useState("Nig Labs");

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <section
      id={id}
      className="relative pt-[56px] md:pt-14 pb-[80px] md:pb-[120px] overflow-hidden font-sans"
    >
      <div className="container mx-auto relative z-10 px-4">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="bg-gradient-to-r from-[#00B2F9] via-[#00B2F9] to-[#9D00EB] bg-clip-text text-transparent text-[32px] md:text-[48px] font-black leading-[120%] mb-4">
            Nigsoft <span className="text-slate-900">Healthcare & Enterprise</span> Products
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Modular, cloud-based software solutions for laboratories, hospitals,
            clinics, pharmacies, dental centers, blood banks, and billing teams.
          </p>
        </motion.div>

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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {activeTab === "Nig Labs" && (
              <>
                <Card
                  title="Revenue & Referral Analytics"
                  desc="Track daily collections, pending payments, and referral-wise revenue with real-time visual reports."
                  img="/images/niglab1.png"
                  href="/product/labmanagementsoftwaremanagementsoftware"
                />
                <Card
                  title="Smart Billing & Payment Management"
                  desc="Monitor and manage payments across all modes with detailed credit, debit, and exportable reports."
                  img="/images/niglab2.png"
                  href="/product/labmanagementsoftwaremanagementsoftware"
                />
                <Card
                  title="Test Workflow Management"
                  desc="Control the complete test lifecycle with real-time billing, status tracking, and operational insights."
                  img="/images/niglab3.png"
                  href="/product/labmanagementsoftwaremanagementsoftware"
                />
              </>
            )}

            {activeTab === "Nig Medi" && (
              <>
                <Card
                  title="Pharmacy Operations Management"
                  desc="Manage prescriptions, stock levels, expiry tracking, and pharmacy workflows from one dashboard."
                  img="/images/nigmedi1.png"
                  href="/product/pharmacymanagementsoftwaremanagementsoftware"
                />
                <Card
                  title="Inventory & Billing Control"
                  desc="Monitor medicine purchases, sales, and billing while maintaining compliance and accuracy."
                  img="/images/nigmedi2.png"
                  href="/product/pharmacymanagementsoftwaremanagementsoftware"
                />
                <Card
                  title="Smart Demand Analysis"
                  desc="Use analytics to predict medicine demand, reduce wastage, and optimize procurement."
                  img="/images/nigmedi3.png"
                  href="/product/pharmacymanagementsoftwaremanagementsoftware"
                />
              </>
            )}

            {activeTab === "Nig Doc" && (
              <>
                <Card
                  title="Patient Clinical History Overview"
                  desc="Detailed patient profile displaying OP visit history, doctors consulted, visit dates, and billed amounts."
                  img="/images/nigdoc1.png"
                  href="/product/hospitalerpsoftwareerpsoftware"
                />
                <Card
                  title="IP Admission List"
                  desc="In-patient admission management with room/ward details, billing amounts, payments, and discharge actions."
                  img="/images/nigdoc2.png"
                  href="/product/hospitalerpsoftwareerpsoftware"
                />
                <Card
                  title="Laboratory Test Details"
                  desc="Patient-wise diagnostic test records with bill numbers, test names, and billing timestamps."
                  img="/images/nigdoc3.png"
                  href="/product/hospitalerpsoftwareerpsoftware"
                />
              </>
            )}

            {activeTab === "Nig Dents" && (
              <>
                <Card
                  title="Dental Treatment Planning Screen"
                  desc="Interactive dental chart for selecting teeth, assigning treatments/products, and auto-calculating treatment costs."
                  img="/images/nigdent1.png"
                  href="/product/dentalclinicsoftwareclinicsoftware"
                />
                <Card
                  title="Treatment Bill Report List"
                  desc="Tabular view of all dental treatment invoices with billing status, balance, and quick action buttons."
                  img="/images/nigdent2.png"
                  href="/product/dentalclinicsoftwareclinicsoftware"
                />
                <Card
                  title="Patient List Management"
                  desc="Central patient registry showing demographics, registration details, and quick actions like edit, print, and plan."
                  img="/images/nigdent3.png"
                  href="/product/dentalclinicsoftwareclinicsoftware"
                />
              </>
            )}

            {activeTab === "Nig HR" && (
              <>
                <Card
                  title="Monthly Payroll & Payslip Access"
                  desc="Employees can securely view, submit, and print monthly payslips with clear salary breakup and payroll period details."
                  href="/product/hrmssoftwaremssoftware"
                  img="/images/nighr1.png"
                />
                <Card
                  title="Centralized Employee Master Profile"
                  desc="Maintain complete employee information including personal details, contact info, bank details, salary, and leave records in one unified profile."
                  href="/product/hrmssoftwaremssoftware"
                  img="/images/nighr2.png"
                />
                <Card
                  title="Daily Attendance Tracking & Reporting"
                  desc="Track employee in-time, out-time, working hours, attendance status, and work location with export options for CSV, Excel, and PDF."
                  href="/product/hrmssoftwaremssoftware"
                  img="/images/nighr3.png"
                />
              </>
            )}

            {activeTab === "Blood Bank" && (
              <>
                <Card
                  title="Donor & Volunteer Registration"
                  desc="Digitally register blood donors with personal details, health screening, eligibility checks, donation history, and next donation scheduling for better donor management."
                  href="/product/bloodbankmanagementsoftwaremanagementsoftware"
                  img="/images/blood1.png"
                />
                <Card
                  title="Blood Collection & Inventory Management"
                  desc="Track blood donations with donor details, blood group, expiry dates, status (sold/unsold), and inventory movement to ensure safe and efficient blood management."
                  href="/product/bloodbankmanagementsoftwaremanagementsoftware"
                  img="/images/blood2.png"
                />
                <Card
                  title="Blood Bank Dashboard & Stock Overview"
                  desc="Real-time dashboard displaying available blood units, expiring stock, spoiled blood, and today’s collections with quick alerts and actionable insights."
                  href="/product/bloodbankmanagementsoftwaremanagementsoftware"
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
          </motion.div>
        </AnimatePresence>
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
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as any
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-2 mb-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
          <img src={img} alt={title} className="w-full h-auto drop-shadow-2xl rounded-2xl object-cover object-right" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-slate-500 font-medium leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
