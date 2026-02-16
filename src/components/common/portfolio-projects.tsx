"use client";

import Image from "next/image";

const projects = [
  {
    title: "Book NXT App",
    description: "Modern and minimal design solutions for job referrals and application tracking.",
    metrics: "60% faster order processing, 3x more leads",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/554408d1-ba11-4d3b-8359-795de68de9f7-vilvabusiness-com/assets/images/images_14.png",
  },
  {
    title: "Vilva One App",
    description: "Book your bus tickets & Order your groceries within a second",
    metrics: "60% faster order processing, 3x more leads",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/554408d1-ba11-4d3b-8359-795de68de9f7-vilvabusiness-com/assets/images/images_15.png",
  },
  {
    title: "Q-Commerce App",
    description: "Modern and minimal design solutions for job referrals and application tracking.",
    metrics: "60% faster order processing, 3x more leads",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/554408d1-ba11-4d3b-8359-795de68de9f7-vilvabusiness-com/assets/images/images_16.png",
  },
  {
    title: "Ecommerce Dashboard",
    description: "Modern and minimal design solutions for job referrals and application tracking.",
    metrics: "60% faster order processing, 3x more leads",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/554408d1-ba11-4d3b-8359-795de68de9f7-vilvabusiness-com/assets/images/images_17.png",
  },
  {
    title: "Fintech Dashboard",
    description: "Book your bus tickets & Order your groceries within a second",
    metrics: "60% faster order processing, 3x more leads",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/554408d1-ba11-4d3b-8359-795de68de9f7-vilvabusiness-com/assets/images/images_18.png",
  },
  {
    title: "Interactive Website",
    description: "Modern and minimal design solutions for job referrals and application tracking.",
    metrics: "60% faster order processing, 3x more leads",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/554408d1-ba11-4d3b-8359-795de68de9f7-vilvabusiness-com/assets/images/images_19.png",
  },
];

export default function PortfolioProjects() {
  return (
    <section className="bg-[#0D1B40] w-full py-16 md:py-24 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col gap-6 cursor-default">
              <div className="w-full aspect-[4/3] rounded-[12px] bg-gradient-to-br from-[#1a2c5b] to-[#0f182b] border border-[#ffffff10] overflow-hidden relative shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">{project.title}</h3>
                <p className="text-[#D4D7E3] text-[14px] md:text-base leading-[160%] font-normal max-w-sm">{project.description}</p>
                <div className="mt-1">
                  <p className="text-white text-[14px] font-bold tracking-wide">{project.metrics}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
