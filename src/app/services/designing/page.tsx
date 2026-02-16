import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.designing.title,
  description: SEO_CONFIG.designing.description,
  keywords: SEO_CONFIG.designing.keywords,
  alternates: {
    canonical: SEO_CONFIG.designing.canonical,
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

export default function DesigningPage() {
  const designFeatures = [
    {
      id: 'branding',
      title: "Brand Identity & Logo Design",
      description: "Create memorable brand identities that represent your business values:",
      features: [
        "Logo design & branding",
        "Brand guidelines & style guides",
        "Color palette & typography",
        "Brand asset creation"
      ]
    },
    {
      id: 'web',
      title: "Web & Digital Design",
      description: "Modern, responsive designs for websites and digital platforms:",
      features: [
        "Website design & layouts",
        "Mobile app UI design",
        "Landing page design",
        "Digital marketing materials"
      ]
    },
    {
      id: 'print',
      title: "Print & Marketing Design",
      description: "Professional print materials and marketing collateral:",
      features: [
        "Business cards & stationery",
        "Brochures & flyers",
        "Posters & banners",
        "Packaging design"
      ]
    },
    {
      id: 'graphics',
      title: "Graphic Design & Illustrations",
      description: "Custom graphics and illustrations for various applications:",
      features: [
        "Custom illustrations",
        "Icon design & graphics",
        "Social media graphics",
        "Infographic design"
      ]
    }
  ];

  const processSteps = [
    { icon: "Search", title: "Creative Brief", description: "Understand your design needs, target audience, and brand requirements." },
    { icon: "FileText", title: "Concept Development", description: "Create initial design concepts and mood boards for your approval." },
    { icon: "Users", title: "Design & Refinement", description: "Develop final designs with multiple revisions based on your feedback." },
    { icon: "Phone", title: "Delivery & Support", description: "Deliver final design files and provide ongoing design support as needed." }
  ];

  const designFaqs = [
    {
      question: "How many logo concepts do you provide initially?",
      answer: "We typically provide 3-4 distinct creative directions for your logo. Each concept explores a different facet of your brand identity, giving you a range of options to choose from and refine."
    },
    {
      question: "In what formats will I receive the final design files?",
      answer: "We provide high-resolution, industry-standard vector formats (AI, EPS, SVG) for scalability and raster formats (PNG, JPG) for digital and social media use, ensuring you have the right files for any medium."
    },
    {
      question: "Do I own the full copyright to the designs you create?",
      answer: "Yes, once final payment is made, you own 100% of the rights to the final designs. We provide you with all source files and the full legal ownership of your brand assets."
    },
    {
      question: "Can you help with printing our marketing materials?",
      answer: "While we are primarily a design agency, we have established partnerships with world-class print shops. We handle the entire prepress process and can coordinate with printers to ensure the final product meets our quality standards."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceHero
        title="Creative Design"
        subtitle=" Services"
        description="Bring your brand to life with stunning visual designs. We create compelling graphics, logos, and marketing materials that capture attention and communicate your message effectively."
        imagePath="/service/design.jpg"
        imageAlt="Creative Design Services - Graphics and Brand Identity"
        tags={["#Logo Design", "#Brand Identity", "#Web Design", "#Print Design", "#Graphic Design"]}
      />
      <PartnersMarquee />
      <DynamicFeatures title="Creative Design" highlightText="Services" features={designFeatures} />
      <ServiceStats />
      <ServiceProcess title="Our Design Process" subtitle="A creative approach to developing visual designs that effectively communicate your brand message." steps={processSteps} />
      <ServiceFAQ items={designFaqs} />

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
              Our creative solutions are built on a world-class technology ecosystem.
              Discover the technical excellence and research that drives our design innovation.
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