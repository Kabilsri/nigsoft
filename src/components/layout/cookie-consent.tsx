"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-2 left-0 right-0 z-50 flex justify-center md:justify-end md:px-2 pointer-events-none">
      <div
        className="pointer-events-auto mx-auto md:mx-0 w-[90%] md:w-[399px] p-6 flex flex-col justify-center items-start gap-4 rounded-[12px] border-[2px] border-[#E9F0FF] bg-gradient-to-b from-[#F2F6FF] to-white shadow-lg"
        role="dialog"
        aria-labelledby="cookie-heading"
        aria-describedby="cookie-description"
      >
        <div className="w-full">
          <h2 id="cookie-heading" className="text-[#00021F] font-semibold text-[18px] font-sans leading-[100%] mb-4">
            Cookie Consent
          </h2>
          <p id="cookie-description" className="text-[#373844] text-[14px] font-normal font-sans leading-[150%]">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.{" "}
            <Link href="/privacy-policy" className="text-[#195AFF] text-[14px] font-normal leading-[150%] underline hover:no-underline font-sans">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleReject}
            className="rounded-[8px] border border-[#6F9CFF] whitespace-nowrap bg-[#EFF4FF] flex w-[120px] h-[40px] px-[26px] py-[16px] justify-center items-center text-[#195AFF] font-semibold md:text-[16px] text-[14px] leading-[120%] hover:bg-[#E5EAFA] transition-colors font-sans"
          >
            Reject all
          </button>
          <button
            onClick={handleAccept}
            className="rounded-[8px] bg-[#195AFF] whitespace-nowrap text-white flex h-[40px] px-[26px] py-[16px] justify-center items-center font-semibold md:text-[16px] text-[14px] leading-[120%] hover:bg-blue-700 transition-colors font-sans"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
