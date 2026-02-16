"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const footerLinks = {
  products: [
    { name: "HR Management", href: "/product/hrmssoftware" },
    { name: "Hospital Management", href: "/product/hospitalerpsoftware" },
    { name: "Pharmacy Management", href: "/product/pharmacymanagementsoftware" },
    { name: "Lab Management", href: "/product/labmanagementsoftware" },
    { name: "Dental Management", href: "/product/dentalclinicsoftware" },
    { name: "Billing Management", href: "/product/billinginvoicesoftware" },
    { name: "Blood Bank Management", href: "/product/bloodbankmanagementsoftware" },
    { name: "Gell+", href: "/product/mobileappforpatients" },
  ],
  solutions: [
    { name: "AI Integration", href: "/services/ai-integration" },
    { name: "BPO Services", href: "/services/bpo" },
    { name: "Designing", href: "/services/designing" },
    { name: "E-commerce Development", href: "/services/ecommerce-development" },
    { name: "Mobile App Development", href: "/services/mobile-development" },
    { name: "Project Development", href: "/services/project-development" },
    { name: "SEO & SMM", href: "/services/seo-smm" },
    { name: "UI/UX Development", href: "/services/ui-ux-development" },
    { name: "Web Development", href: "/services/web-development" },
  ],
  company: [
    { name: "Careers", href: "/career" },
    { name: "Partners", href: "/partners" },
    { name: "Academy", href: "/hims-certification" },
    { name: "Shop", href: "/shop" },
    ({ name: "Blog", href: "https://blog.nigsoft.com", external: true }),
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },

  ],
  policy: [
    { name: "Privacy Policy", href: "/privacypolicy" },
    { name: "Terms of Service", href: "/termsofservice" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

const companyData = {
  mainOffice: {
    address: "133/31A Sedhu Krishna Trade Centre, 3rd floor Trichy Main Road Gugai, Salem Town, Thathaka patti, next to Prabhath Theater,",
    city: "Salem",
    state: "Tamil Nadu",
    zip: "- 636006",
    googleMapsLink: "https://www.google.com/maps/place/NIGSOFT+PRIVATE+LIMITED/@11.6429267,78.1507301,17z/data=!3m2!4b1!5s0x3babefd586d334eb:0xa41a820ecf3ef991!4m6!3m5!1s0x3babeffd89cb1eb3:0xc579d53212831026!8m2!3d11.6429215!4d78.153305!16s%2Fg%2F11lfh37m5t?entry=tts"
  },
  branchOffice: {
    address: "No.15, First Floor, Walajabad Road, Vandalur,",
    city: "Chennai",
    state: "Tamil Nadu",
    zip: "- 600048",
    googleMapsLink: "https://www.google.com/maps/place/Nigsoft+-+Hospital+Management+Software/@12.8935847,80.0787098,1942m/data=!3m1!1e3!4m10!1m2!2m1!1sNo.15,+First+Floor,+Walajabad+Road,+Vandalur,+Chennai+-+600048!3m6!1s0x3a52f5310eec5bab:0xdeb5e43e7850f968!8m2!3d12.8937804!4d80.0811764!15sCj5Oby4xNSwgRmlyc3QgRmxvb3IsIFdhbGFqYWJhZCBSb2FkLCBWYW5kYWx1ciwgQ2hlbm5haSAtIDYwMDA0OJIBH2hvc3BpdGFsX2FuZF9lcXVpcG1lbnRfc3VwcGxpZXPgAQA!16s%2Fg%2F11msdnk37k?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  email: "info@nigsoft.com",
  emailLink: "mailto:info@nigsoft.com",
  socialMedia: {
    instagram: "https://www.instagram.com/nigsoft_pvt_ltd?igsh=MXUwcGlueTFqemowdw==",
    whatsapp: "https://whatsapp.com/channel/0029VaZjTJaEgGfI36KCjo3X",
    youtube: "https://youtube.com/@nigsoftpvtltd?si=azeC46XUr13WKc1Z",
    facebook: "https://m.facebook.com/Nigsoft/",
    linkedin: "https://www.linkedin.com/company/nigsoft-pvt-ltd/"
  }
};

const Footer = () => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (section: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-[#020617] relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container pt-12 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Company Info & Contact */}
          <div className="max-w-sm">
            <div className="space-y-6">
              <div>
                <h2 className="font-semibold text-sm text-white mb-2 uppercase tracking-wide">Main Office</h2>
                <a
                  href={companyData.mainOffice.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors leading-relaxed cursor-pointer"
                >
                  {companyData.mainOffice.address}<br />
                  {companyData.mainOffice.city}, {companyData.mainOffice.state} {companyData.mainOffice.zip}
                </a>
              </div>

              <div>
                <h2 className="font-semibold text-sm text-white mb-2 uppercase tracking-wide">Branch Office</h2>
                <a
                  href={companyData.branchOffice.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors leading-relaxed cursor-pointer"
                >
                  {companyData.branchOffice.address}<br />
                  {companyData.branchOffice.city}, {companyData.branchOffice.state} {companyData.branchOffice.zip}
                </a>
              </div>

              <div>
                <h2 className="font-semibold text-sm text-white mb-2 uppercase tracking-wide">Email</h2>
                <a
                  href={companyData.emailLink}
                  className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
                >
                  {companyData.email}
                </a>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="font-semibold text-sm text-white mb-3 uppercase tracking-wide">Follow Us</h2>
                <div className="flex gap-3">
                  <a href={companyData.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#E4405F] transition-colors" aria-label="Follow us on Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a href={companyData.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors" aria-label="Join our WhatsApp channel">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </a>

                  <a href={companyData.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#FF0000] transition-colors" aria-label="Subscribe to our YouTube channel">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  <a href={companyData.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition-colors" aria-label="Like our Facebook page">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a href={companyData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors" aria-label="Connect with us on LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:grid flex-grow grid-cols-4 gap-8">
            <div>
              <h2 className="font-semibold text-sm text-white mb-4 uppercase tracking-wide">Products</h2>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-sm text-white mb-4 uppercase tracking-wide">Services</h2>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-sm text-white mb-4 uppercase tracking-wide">Company</h2>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-sm text-white mb-4 uppercase tracking-wide">Policy</h2>
              <ul className="space-y-3">
                {footerLinks.policy.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Dropdowns */}
          <div className="lg:hidden w-full space-y-4">
            {/* Products Dropdown */}
            <div className="border-b border-white/10 pb-4">
              <button
                onClick={() => toggleDropdown('products')}
                className="flex items-center justify-between w-full text-left"
              >
                <h2 className="font-semibold text-sm text-white uppercase tracking-wide">Products</h2>
                {openDropdowns.products ? (
                  <ChevronUp className="w-4 h-4 text-white" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white" />
                )}
              </button>
              {openDropdowns.products && (
                <ul className="mt-3 space-y-2 pl-4">
                  {footerLinks.products.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors block py-1">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="border-b border-white/10 pb-4">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center justify-between w-full text-left"
              >
                <h2 className="font-semibold text-sm text-white uppercase tracking-wide">Services</h2>
                {openDropdowns.services ? (
                  <ChevronUp className="w-4 h-4 text-white" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white" />
                )}
              </button>
              {openDropdowns.services && (
                <ul className="mt-3 space-y-2 pl-4">
                  {footerLinks.solutions.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors block py-1">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="border-b border-white/10 pb-4">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center justify-between w-full text-left"
              >
                <h2 className="font-semibold text-sm text-white uppercase tracking-wide">Company</h2>
                {openDropdowns.company ? (
                  <ChevronUp className="w-4 h-4 text-white" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white" />
                )}
              </button>
              {openDropdowns.company && (
                <ul className="mt-3 space-y-2 pl-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors block py-1">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Policy Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('policy')}
                className="flex items-center justify-between w-full text-left"
              >
                <h2 className="font-semibold text-sm text-white uppercase tracking-wide">Policy</h2>
                {openDropdowns.policy ? (
                  <ChevronUp className="w-4 h-4 text-white" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white" />
                )}
              </button>
              {openDropdowns.policy && (
                <ul className="mt-3 space-y-2 pl-4">
                  {footerLinks.policy.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors block py-1">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-sm text-slate-300 text-center">
            © {new Date().getFullYear()} Nigsoft Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;