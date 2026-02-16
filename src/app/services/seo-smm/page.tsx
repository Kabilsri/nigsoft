import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.seo_smm.title,
  description: SEO_CONFIG.seo_smm.description,
  keywords: SEO_CONFIG.seo_smm.keywords,
  alternates: {
    canonical: SEO_CONFIG.seo_smm.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import ServiceHero from "@/components/services/service-hero";
import ServiceProcess from "@/components/services/service-process";
import DynamicFeatures from "@/components/services/card";
import ServiceStats from "@/components/services/service-stats";
import ServiceFAQ from "@/components/services/service-faq";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import PartnersMarquee from "@/components/common/partners-marquee";

export default function SEOSMMPage() {
  const seoSmmFeatures = [
    {
      id: 'seo',
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility and ranking on search engines:",
      features: [
        "Keyword research & optimization",
        "On-page & technical SEO",
        "Content optimization",
        "Local SEO & Google My Business"
      ]
    },
    {
      id: 'smm',
      title: "Social Media Marketing (SMM)",
      description: "Build your brand presence and engage with customers on social platforms:",
      features: [
        "Social media strategy",
        "Content creation & scheduling",
        "Community management",
        "Social media advertising"
      ]
    },
    {
      id: 'content',
      title: "Content Marketing",
      description: "Create valuable content that attracts and engages your target audience:",
      features: [
        "Blog writing & optimization",
        "Video content creation",
        "Infographic design",
        "Email marketing campaigns"
      ]
    },
    {
      id: 'analytics',
      title: "Analytics & Reporting",
      description: "Track performance and optimize your digital marketing efforts:",
      features: [
        "Google Analytics setup",
        "Performance tracking",
        "Monthly reports & insights",
        "ROI measurement"
      ]
    }
  ];

  const processSteps = [
    { icon: "Search", title: "Digital Audit", description: "Analyze your current online presence, SEO performance, and social media status." },
    { icon: "FileText", title: "Strategy Development", description: "Create comprehensive SEO and social media marketing strategies." },
    { icon: "Users", title: "Implementation", description: "Execute SEO optimizations and social media campaigns with regular monitoring." },
    { icon: "Phone", title: "Optimization & Reporting", description: "Continuously optimize campaigns and provide detailed performance reports." }
  ];

  const seoSmmFaqs = [
    {
      question: "How long until we see first page results for our target keywords?",
      answer: "SEO is a marathon. Typically, you'll see movement within 3 months, but significant first-page rankings for competitive terms usually take 6 to 9 months of consistent effort and high-quality content production."
    },
    {
      question: "Which social media platforms should my business be on?",
      answer: "We don't believe in being everywhere. We analyze where your customers spend their time. For B2B, LinkedIn is king. For lifestyle and retail, Instagram and TikTok are essential. We help you focus where the ROI is highest."
    },
    {
      question: "What is the difference between On-Page and Technical SEO?",
      answer: "On-Page SEO is about the content and keywords users see. Technical SEO is about the backend—site speed, schema markup, and crawlability—ensuring search engines can understand and rank your site efficiently."
    },
    {
      question: "Do you handle paid advertising (PPC) along with organic SEO?",
      answer: "Yes, we provide full-funnel digital marketing. We often recommend a hybrid strategy where PPC provides instant traffic while organic SEO builds a sustainable, long-term lead generation engine."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceHero
        title="SEO & Social Media"
        subtitle=" Marketing"
        description="Boost your online visibility and reach more customers. We provide comprehensive SEO and social media marketing services to grow your digital presence and drive business results."
        imagePath="/service/marketing.jpg"
        imageAlt="SEO & Social Media Marketing - Digital Marketing Services"
        tags={["#SEO Optimization", "#Social Media Marketing", "#Content Marketing", "#Google Analytics", "#Digital Strategy"]}
      />
      <PartnersMarquee />
      <DynamicFeatures title="SEO & SMM" highlightText="Services" features={seoSmmFeatures} />
      <ServiceStats />
      <ServiceProcess title="Our Digital Marketing Process" subtitle="A data-driven approach to improving your online visibility and social media presence." steps={processSteps} />
      <ServiceFAQ items={seoSmmFaqs} />

      {/* Innovation Connection Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900 font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powered by <span className="text-blue-400">Innovation</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
              Our marketing strategies are built on a world-class technology ecosystem.
              Discover the technical excellence and data research that drives our digital growth success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/innovation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/20"
              >
                Visit Innovation Hub
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}