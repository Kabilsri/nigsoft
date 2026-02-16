"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProductCTA() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EFF4FF] via-white to-[#CBE3FA] p-8 lg:p-16">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#6F9CFF] bg-white px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Start Your Free Trial Today
              </span>
            </div>

            <h2 className="mb-4 text-[32px] font-bold leading-[120%] text-[#090D28] lg:text-[48px]">
              Ready to Launch Your{" "}
              <span className="italic bg-gradient-to-b from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">
                Online Store?
              </span>
            </h2>

            <p className="mb-8 text-lg text-[#373844]">
              Join thousands of successful merchants who trust our platform. 
              No credit card required. Setup in minutes.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:gap-3"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#"
                className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-primary bg-white px-8 text-lg font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Schedule Demo
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#373844]">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#195AFF] opacity-10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FF7A00] opacity-10 blur-[80px]" />
        </div>
      </div>
    </section>
  );
}
