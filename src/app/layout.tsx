import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import ConsultationModal from "@/components/common/consultation-modal";
import ScrollToTop from "@/components/common/scroll-to-top";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/layout/cookie-consent";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import Script from "next/script";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nigsoft.com'),
  title: {
    default: "Nigsoft Private Limited | Healthcare Management Software",
    template: "%s | Nigsoft Private Limited",
  },
  description: "Next-generation healthcare management solutions for hospitals, clinics, labs, and pharmacies.",
  keywords: ["Nigsoft", "Healthcare Software", "Hospital Management", "EMR", "EHR", "Pharmacy Software", "Lab Management"],
  icons: {
    icon: "/images/logo.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nigsoft.com/",
    siteName: "Nigsoft",
    title: "Nigsoft Private Limited | Healthcare Management Software",
    description: "Next-generation healthcare management solutions for hospitals, clinics, labs, and pharmacies.",
    images: [
      {
        url: "/others/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nigsoft Healthcare Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Suspense fallback={null}>
          <ConditionalAnalytics />
        </Suspense>
      </head>
      <body className={`${inter.variable} antialiased overflow-x-hidden w-full max-w-full font-sans`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <ScrollToTop />
        <ErrorReporter />
        <CookieConsent />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <ConsultationModal />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
