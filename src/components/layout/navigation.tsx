"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ===================== NAV DATA ===================== */
const navLinks = [
  {
    name: "Products",
    href: "#",
    hasDropdown: true,
    aria: "Products",
    dropdownItems: [
      { name: "HR Management", href: "/product/hrmssoftware" },
      { name: "Hospital Management", href: "/product/hospitalerpsoftware" },
      { name: "Pharmacy Management", href: "/product/pharmacymanagementsoftware" },
      { name: "Lab Management", href: "/product/labmanagementsoftware" },
      { name: "Dental Management", href: "/product/dentalclinicsoftware" },
      { name: "Billing Management", href: "/product/billinginvoicesoftware" },
      { name: "Blood Bank Management", href: "/product/bloodbankmanagementsoftware" },
      { name: "Gell+", href: "/product/mobileappforpatients" },
    ],
  },
  {
    name: "Services",
    href: "#",
    hasDropdown: true,
    aria: "Services",
    dropdownItems: [
      { name: "BPO Services", href: "/services/bpo" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Development", href: "/services/mobile-development" },
      { name: "SaaS Development", href: "/services/saas-development" },
      { name: "E-commerce Development", href: "/services/ecommerce-development" },
      { name: "Project Development", href: "/services/project-development" },
      { name: "Corporate Website", href: "/services/corporate-website" },
      { name: "CMS Development", href: "/services/cms-development" },
      { name: "Website Maintenance", href: "/services/website-maintenance" },
      { name: "UI/UX Development", href: "/services/ui-ux-development" },
      { name: "AI Integration", href: "/services/ai-integration" },
      { name: "Designing", href: "/services/designing" },
      { name: "SEO & SMM", href: "/services/seo-smm" },
    ],
  },
  { name: "Partners", href: "/partners", hasDropdown: false, aria: "View our partners", external: false },
  { name: "Careers", href: "/career", hasDropdown: false, aria: "View our careers", external: false },
  { name: "Academy", href: "/hims-certification", hasDropdown: false, aria: "HIMS Certification", external: false },

  { name: "Shop", href: "/shop", hasDropdown: false, aria: "Shop Products", external: false },
  { name: "Blog", href: "https://blog.nigsoft.com", hasDropdown: false, aria: "Blog", external: true },

  {
    name: "More",
    href: "#",
    hasDropdown: true,
    aria: "More",
    dropdownItems: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Innovation", href: "/innovation"},
    ],
  },
];

/* ===================== COMPONENT ===================== */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  /* Scroll trigger */
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    if (!isMenuOpen) setOpenDropdown(null);
  }, [isMenuOpen]);

  return (
    <>
      {/* ===================== HEADER ===================== */}
      <header
        className="fixed left-0 right-0 z-50 flex justify-center md:px-8 lg:px-12 pointer-events-none transition-all duration-500"
        style={{
          margin: '0px auto',
          top: hasScrolled ? '0px' : '8px',
          maxWidth: '1280px'
        }}
      >
        {/* ===================== DESKTOP NAV ===================== */}
        <nav
          className={`
            pointer-events-auto
            hidden lg:grid items-center w-full rounded-xl text-sm font-medium
            transition-all duration-500 ease-out
            ${hasScrolled
              ? "grid-cols-[auto_1fr_auto] gap-1 px-4 py-2"
              : "grid-cols-3 gap-3 px-6 py-3"
            }
          `}
          style={{
            backgroundColor: hasScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
            backdropFilter: hasScrolled ? 'blur(16px)' : 'blur(0px)',
            boxShadow: hasScrolled
              ? 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'
              : 'transparent 0px 10px 15px -3px, transparent 0px 0px 0px 1px',
          }}
        >
          {/* LEFT — LOGO */}
          <Link href="/" className={`transition-all duration-500 ${hasScrolled ? 'px-2 py-1' : 'px-3 py-2'} w-fit`}>
            <Image
              src="/icons/niglogo-2.png"
              alt="Nigsoft"
              width={150}
              height={55}
              className={`transition-all duration-500 ${hasScrolled ? 'h-8' : 'h-10'} w-auto`}
            />
          </Link>

          {/* CENTER — NAV ITEMS */}
          <nav className="flex items-center justify-self-center w-fit">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.name ? null : link.name)
                        }
                        className={`
                          group relative flex items-center gap-0.5 text-sm font-medium text-gray-800
                          transition-all duration-500 hover:text-primary cursor-pointer
                          ${hasScrolled ? 'px-2 py-2' : 'px-3 py-3.5'}
                        `}
                        aria-label={link.aria}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-3.5 w-3.5 opacity-60 transition-transform duration-300 ${openDropdown === link.name ? "rotate-180" : ""}`}
                        />
                        <span className="absolute inset-x-1 -bottom-0.25 h-px bg-gradient-to-r from-primary/0 from-10% via-primary to-primary/0 to-90% transition duration-150 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100" />
                      </button>

                      {/* Enhanced Dropdown */}
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className={`absolute left-0 top-full pt-2 z-50 ${link.name === 'Services' ? 'w-[500px]' : 'w-64'}`}
                          >
                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 backdrop-blur-sm">
                              <div className="px-3 pb-2 mb-2 border-b border-gray-100">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{link.name}</p>
                              </div>
                              {link.name === 'Services' ? (
                                <div className="grid grid-cols-2 gap-1 px-2">
                                  {link.dropdownItems?.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="group flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-blue-600/5 hover:text-blue-600 transition-all duration-200 cursor-pointer rounded-lg"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <div className="flex items-center justify-between w-full">
                                        <span className="font-medium text-xs">{item.name}</span>
                                        <ChevronDown className="h-3 w-3 opacity-0 group-hover:opacity-100 rotate-[-90deg] transition-all duration-200" />
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                link.dropdownItems?.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-blue-600/5 hover:text-blue-600 transition-all duration-200 cursor-pointer rounded-lg mx-2"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    <div className="flex items-center justify-between w-full">
                                      <span className="font-medium">{item.name}</span>
                                      <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 rotate-[-90deg] transition-all duration-200" />
                                    </div>
                                  </Link>
                                ))
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      target="_self"
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={`
                        group relative block text-sm font-medium text-gray-800
                        transition-all duration-500 hover:text-primary
                        ${hasScrolled ? 'px-2 py-2' : 'px-3 py-3.5'}
                      `}
                    >
                      {link.name}
                      <span className="absolute inset-x-1 -bottom-0.25 h-px bg-gradient-to-r from-primary/0 from-10% via-primary to-primary/0 to-90% transition duration-150 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT — BUTTONS */}
          <div className={`flex items-center w-fit justify-self-end transition-all duration-500 ${hasScrolled ? 'gap-1.5' : 'gap-2'}`}>
            <Link
              href="/book-demo"
              className={`
                group relative inline-flex items-center justify-center bg-gradient-to-r from-[#E12E34] to-[#ff4d52] 
                text-white font-medium shadow-md hover:from-[#c02329] hover:to-[#E12E34] 
                transition-all duration-500 cursor-pointer shrink-0 rounded-lg
                ${hasScrolled ? 'h-7 px-2.5 text-xs' : 'h-8 px-3 text-sm'}
              `}
            >
              Book Demo
            </Link>
          </div>
        </nav>

        {/* ===================== MOBILE HEADER ===================== */}
        <div
          className={`
            lg:hidden flex items-center justify-between w-full pointer-events-auto
            transition-all duration-500
            ${hasScrolled
              ? "rounded-xl bg-white/80 backdrop-blur-md shadow-sm px-4 py-2 mx-2"
              : "px-4 py-3"}
          `}
        >
          <Link href="/">
            <Image
              src="/icons/niglogo-2.png"
              alt="Nigsoft"
              width={120}
              height={40}
              className={`transition-all duration-500 ${hasScrolled ? 'h-6' : 'h-8'} w-auto`}
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="size-10 rounded-md cursor-pointer flex items-center justify-center text-gray-800 transition-all hover:bg-gray-100 active:scale-95 z-50 bg-white border border-gray-200"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* ===================== MOBILE MENU ===================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-x-0 z-40 mx-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg overflow-hidden top-[80px]"
          >
            <div className="px-6 py-4 overflow-y-auto max-h-[70vh]">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        className="flex w-full items-center justify-between py-3 text-base font-medium text-gray-800 dark:text-gray-200"
                      >
                        {link.name}
                        <motion.div
                          animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pb-2 pl-4 overflow-hidden"
                          >
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      target="_self"
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-1 py-3 text-base font-medium text-gray-800 dark:text-gray-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      {link.external && <ExternalLink className="size-3 opacity-60" />}
                    </a>
                  )}
                </div>
              ))}

              <div className="flex flex-col space-y-3 pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">

                <Link href="/book-demo" className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#E12E34] to-[#ff4d52] text-sm font-semibold text-white">
                  Book Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}