"use client";

import Image from "next/image";

const heroItems = [
  {
    id: 'nighr',
    title: 'NigHR',
    icon: '/nigicon/hr.png',
    heading: 'Core Application to Manage Staff',
    description: 'Simple and Effective HRMS Platform for Hospitals'
  },
  {
    id: 'nigdoc',
    title: 'NigDoc',
    icon: '/nigicon/nigdoc.png',
    heading: 'Clinic & Patient Management Software',
    description: 'Comprehensive suite to manage OP/IP Billing & Doctors'
  },
  {
    id: 'nigmedi',
    title: 'NigMedi',
    icon: '/nigicon/nigmedi.png',
    heading: 'Efficient Pharmacy Management Software',
    description: 'Built for Pharmacy Owners for Min Loss & Max Profit'
  },
  {
    id: 'niglabs',
    title: 'NigLabs',
    icon: '/nigicon/niglab.png',
    heading: 'Diagnostic Labs Software - Pathology & Radiology',
    description: 'Appointment Booking, NigDoc Integration, Patient Login & PACS Integration'
  },
  {
    id: 'nigdent',
    title: 'NigDent',
    icon: '/nigicon/nigdents.png',
    heading: 'Complete Dental Clinic Management Software',
    description: 'Patient records, treatment plans, billing & appointment scheduling for dental clinics'
  },
  {
    id: 'nigbills',
    title: 'NigBills',
    icon: '/nigicon/nigbill.png',
    heading: 'Advanced Billing & Accounting Solutions',
    description: 'Comprehensive billing system with insurance claims, payments & financial reporting'
  },
  {
    id: 'bloodbank',
    title: 'Blood Bank',
    icon: '/nigicon/bloodbank.png',
    heading: 'Blood Bank Management System',
    description: 'Donor management, blood inventory, cross-matching & transfusion tracking'
  },
  {
    id: 'gellplus',
    title: 'Gell+',
    icon: '/nigicon/gell+.png',
    heading: 'Advanced Laboratory Information System',
    description: 'Next-gen lab management with AI-powered diagnostics & automated reporting'
  }
];

const StarIcon = () => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FBBF24" />
  </svg>
);

const HeroItem = ({ item }: { item: typeof heroItems[0] }) => {
  const scrollToProduct = () => {
    const element = document.getElementById('indexfeatures2');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const tabMap: { [key: string]: string } = {
          'nighr': 'Nig HR',
          'nigdoc': 'Nig Doc',
          'nigmedi': 'Nig Medi',
          'niglabs': 'Nig Labs',
          'nigdent': 'Nig Dents',
          'nigbills': 'Nig Bills',
          'bloodbank': 'Blood Bank',
          'gellplus': 'Gell+'
        };
        const tabName = tabMap[item.id];
        if (tabName) {
          const event = new CustomEvent('changeProductTab', { detail: tabName });
          window.dispatchEvent(event);
        }
      }, 500);
    }
  };

  return (
    <div
      onClick={scrollToProduct}
      className="group p-4 bg-white rounded-xl border border-slate-100 shadow-sm transition-all duration-300 h-full flex flex-col items-start text-left cursor-pointer hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      <div className="flex items-start gap-3 w-full mb-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center p-2 group-hover:bg-[#00B2F9] transition-colors duration-300">
          <Image
            src={item.icon}
            alt={`${item.title} Icon`}
            width={32}
            height={32}
            className="w-full h-full object-contain brightness-100 group-hover:brightness-100 transition-all duration-300"
          />
        </div>

        <p className="font-bold text-blue-600 text-xs leading-snug flex-1 uppercase tracking-wide pt-1">
          {item.heading}
        </p>
      </div>

      <div className="space-y-2 w-full">
        <h3 className="font-black text-slate-800 text-sm group-hover:text-blue-700 transition-colors">
          {item.title}
        </h3>

        <p className="text-slate-500 text-xs leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-white z-30 relative overflow-hidden font-sans">
      {/* Refined Background - Clean & Professional */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Soft Ambient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-50/80 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-indigo-50/60 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 pt-15 pb-10 md:pt-25 md:pb-7">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-sm">
              #1 Best Hospital Management Software
            </div>

            {/* Main Headline - Clean & Authoritative */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[ rgb(30, 30, 30)] leading-[1.15] tracking-tight mb-8">
              Comprehensive  <br className="hidden md:block" />
              <span className="text-[#00B2F9]"> Hospital Business Apps</span><br /> in One Platform
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-5 font-medium">
              Enterprise-grade custom software solutions designed to streamline operations for hospitals, laboratories, and healthcare providers.
            </p>
            <div className="mb-5 flex flex-wrap justify-center items-center gap-2 md:gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/others/iso.png"
                  alt="iso "
                  width={100}
                  height={100}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <a href="https://www.google.com/maps/place/NIGSOFT+PRIVATE+LIMITED/@11.6428042,78.1506282,976m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3babeffd89cb1eb3:0xc579d53212831026!8m2!3d11.642799!4d78.1532031!16s%2Fg%2F11lfh37m5t?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex items-center gap-3 group">
                <Image src="/others/google.png" alt="Google" width={40} height={40} className="w-10 h-10 object-contain" />
                <div className="text-left">
                  <p className="text-base font-bold text-slate-900 group-hover:text-blue-600">4.6/5 Rating</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
                  </div>
                </div>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
              <a href="/book-demo" className="min-w-[180px] h-14 flex items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all active:scale-95">
                Book Free Demo
              </a>
              <a href="#indexfeatures2" className="min-w-[180px] h-14 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-lg hover:border-blue-200 hover:bg-blue-50/50 transition-all active:scale-95">
                Explore Products
              </a>
            </div>
            

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {heroItems.map((item) => (
                <HeroItem key={item.id} item={item} />
              ))}
            </div>

            {/* Social Proof */}
            

          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
