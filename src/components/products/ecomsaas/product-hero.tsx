"use client";

import Link from "next/link";
import { ShoppingCart, Zap, TrendingUp } from "lucide-react";

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-4 border-[rgba(223,234,255,0.4)] bg-gradient-to-r from-[#CBE3FA] to-[#FCEEFF] px-6 py-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <span className="text-base font-medium bg-gradient-to-r from-[#19A7FF] to-[#426CF4] bg-clip-text text-transparent">
              E-Commerce SaaS Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-[42px] font-extrabold leading-[120%] text-[#090D28] lg:text-[68px]">
            Power Your Online Store with{" "}
            <span className="italic bg-gradient-to-b from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">
              Next-Gen E-Commerce
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 mx-auto max-w-3xl text-lg text-[#373844] lg:text-xl">
            Launch, manage, and scale your e-commerce business with our comprehensive SaaS platform. 
            Everything you need from inventory management to checkout, all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-[#6F9CFF] bg-secondary px-8 text-base font-semibold text-primary transition-colors hover:bg-secondary/80"
            >
              Watch Demo
            </Link>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Key Metrics */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary lg:text-4xl">99.9%</div>
              <div className="text-sm text-[#373844]">Uptime Guarantee</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary lg:text-4xl">10K+</div>
              <div className="text-sm text-[#373844]">Active Stores</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary lg:text-4xl">3X</div>
              <div className="text-sm text-[#373844]">Average Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -top-20 left-0 h-40 w-40 rounded-full bg-[#CBE3FA] opacity-20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#FFD439] opacity-20 blur-[100px]" />
    </section>
  );
}
