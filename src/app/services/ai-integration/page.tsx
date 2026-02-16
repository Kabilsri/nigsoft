import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.ai_integration.title,
  description: SEO_CONFIG.ai_integration.description,
  keywords: SEO_CONFIG.ai_integration.keywords,
  alternates: {
    canonical: SEO_CONFIG.ai_integration.canonical,
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

export default function AIIntegrationPage() {
  const aiFeatures = [
    {
      id: 'chatbots',
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI to enhance customer service and engagement:",
      features: [
        "Custom chatbot development",
        "Natural language processing",
        "Multi-platform integration",
        "24/7 automated support"
      ]
    },
    {
      id: 'automation',
      title: "Business Process Automation",
      description: "Streamline operations with AI-powered automation solutions:",
      features: [
        "Workflow automation",
        "Document processing",
        "Data analysis & insights",
        "Predictive analytics"
      ]
    },
    {
      id: 'ml',
      title: "Machine Learning Solutions",
      description: "Custom ML models to solve specific business challenges:",
      features: [
        "Custom model development",
        "Data preprocessing & training",
        "Model deployment & monitoring",
        "Performance optimization"
      ]
    },
    {
      id: 'integration',
      title: "AI API Integration",
      description: "Integrate powerful AI services into your existing applications:",
      features: [
        "OpenAI GPT integration",
        "Computer vision APIs",
        "Speech recognition services",
        "Custom AI model APIs"
      ]
    }
  ];

  const processSteps = [
    {
      icon: "Search",
      title: "Assessment & Roadmap",
      description: "Evaluating your data infrastructure and identifying high-impact opportunities for AI integration."
    },
    {
      icon: "Cpu",
      title: "Model Customization",
      description: "Selecting and fine-tuning AI models to specifically address your unique business challenges."
    },
    {
      icon: "Network",
      title: "System Integration",
      description: "Seamlessly embedding AI capabilities into your existing workflows with rigorous testing and validation."
    },
    {
      icon: "TrendingUp",
      title: "Deployment & Optimization",
      description: "Deploying AI solutions and continuously optimizing performance, accuracy, and operational efficiency."
    }
  ];

  const aiFaqs = [
    {
      question: "How do you ensure AI models are secure and private?",
      answer: "We implement rigorous security measures including data anonymization, encryption at rest and in transit, and private cloud deployments to ensure your sensitive business data never leaves your controlled environment."
    },
    {
      question: "Can you integrate AI into our existing legacy systems?",
      answer: "Yes, our specialty is creating custom API wrappers and middleware that allow modern AI models to communicate seamlessly with legacy infrastructure, enabling transformation without complete system replacement."
    },
    {
      question: "What kind of ROI can we expect from AI integration?",
      answer: "Most of our clients see significant improvements within 3-6 months. Common outcomes include a 40% reduction in manual processing time and up to 25% increase in operational efficiency through predictive insights."
    },
    {
      question: "Do you use pre-trained models or build custom ones?",
      answer: "We use a hybrid approach. We leverage state-of-the-art base models (like GPT-4, Claude, or Llama) and fine-tune them on your specific business data to achieve peak performance for your unique use cases."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceHero
        title="AI Integration"
        subtitle=" Services"
        description="Transform your business with artificial intelligence. We integrate cutting-edge AI technologies to automate processes, enhance customer experiences, and drive innovation."
        imagePath="/service/ai.jpg"
        imageAlt="AI Integration Services - Machine Learning and Automation"
        tags={["#Artificial Intelligence", "#Machine Learning", "#Chatbots", "#Automation", "#AI APIs"]}
      />
      <PartnersMarquee />
      <DynamicFeatures title="AI Integration" highlightText="Services" features={aiFeatures} />
      <ServiceStats />
      <ServiceProcess title="Our AI Integration Process" subtitle="A strategic approach to implementing AI solutions that deliver measurable business value." steps={processSteps} />
      <ServiceFAQ items={aiFaqs} />

      {/* Innovation Connection Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900 font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powered by <span className="text-blue-400">Innovation</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
              Our AI solutions are integrated into a world-class technology ecosystem.
              Discover the technical excellence and research that drives our machine learning success.
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