"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const languageContacts = [
    { language: "Tamil", phone: "+91 73396 30007", flag: "🇮🇳" },
    { language: "English", phone: "+91 63692 76848", flag: "🇬🇧" },
    { language: "Hindi", phone: "+91 87784 27748", flag: "🇮🇳" },
    { language: "Telugu", phone: "+91 89258 79971", flag: "🇮🇳" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <div className="bg-white relative overflow-hidden font-sans">
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Direct Support Channels</h2>
            <p className="text-lg text-slate-500 font-medium">Connect with specialized departments for faster resolution and personalized assistance.</p>
          </div>

          {/* Contact Information Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32"
          >
            {/* HR Contact */}
            <motion.div variants={cardVariants} className="group relative">
              <div className="relative h-full bg-slate-50/50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500">
                <div className="w-16 h-16 bg-emerald-100 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">HR Department</h3>
                <p className="text-slate-500 font-medium mb-8">Passionate about careers in tech? Reach out to our talent acquisition team.</p>

                <div className="space-y-4">
                  <a href="tel:+919003111592" className="flex items-center gap-3 text-slate-900 font-bold hover:text-emerald-600 transition-colors">
                    <Phone className="w-4 h-4" /> +91 90031 11592
                  </a>
                  <a href="mailto:hr@nigsoft.com" className="flex items-center gap-3 text-slate-900 font-bold hover:text-emerald-600 transition-colors">
                    <Mail className="w-4 h-4" /> hr@nigsoft.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Language Support */}
            <motion.div variants={cardVariants} className="group relative">
              <div className="relative h-full bg-slate-50/50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500">
                <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 font-sans">Regional Support</h3>
                <p className="text-slate-500 font-medium mb-8 font-sans">Get support in your preferred language from our multilingual team.</p>
                <div className="space-y-3">
                  {languageContacts.map((contact, index) => {
                    const colors = [
                      { bg: 'bg-gradient-to-r from-blue-50 to-indigo-50', border: 'border-blue-100', hover: 'hover:border-blue-200 hover:from-blue-100 hover:to-indigo-100' },
                      { bg: 'bg-gradient-to-r from-emerald-50 to-teal-50', border: 'border-emerald-100', hover: 'hover:border-emerald-200 hover:from-emerald-100 hover:to-teal-100' },
                      { bg: 'bg-gradient-to-r from-orange-50 to-amber-50', border: 'border-orange-100', hover: 'hover:border-orange-200 hover:from-orange-100 hover:to-amber-100' },
                      { bg: 'bg-gradient-to-r from-purple-50 to-pink-50', border: 'border-purple-100', hover: 'hover:border-purple-200 hover:from-purple-100 hover:to-pink-100' }
                    ];
                    const colorScheme = colors[index % colors.length];
                    
                    return (
                      <a
                        key={index}
                        href={`tel:${contact.phone}`}
                        className={`flex items-center justify-between p-4 ${colorScheme.bg} border ${colorScheme.border} rounded-2xl ${colorScheme.hover} hover:shadow-md transition-all duration-300 group/lang`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg leading-none" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>{contact.flag}</span>
                          <span className="font-bold text-slate-900 font-sans">{contact.language}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover/lang:text-slate-600 group-hover/lang:translate-x-1 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* General Inquiries */}
            <motion.div variants={cardVariants} className="group relative">
              <div className="relative h-full bg-slate-50/50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500">
                <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Mail className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">General Inquiries</h3>
                <p className="text-slate-500 font-medium mb-8">For partnerships, media, or general questions about our platforms.</p>
                <div className="space-y-4">
                  <a href="mailto:info@nigsoft.com" className="flex items-center gap-3 text-slate-900 font-bold hover:text-orange-600 transition-colors text-lg">
                    info@nigsoft.com
                  </a>
                  <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest mt-4">
                    <Clock className="w-4 h-4" /> Mon - Sat: 9AM - 6PM
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Office Locations */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black text-slate-900">Our Physical <span className="text-blue-600">Offices</span></h2>
              <div className="hidden md:flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs">
                <MapPin className="w-4 h-4" /> Visit us for a consultation
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Main Office - Salem */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 bg-slate-50/30 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-6">
                    <div>
                      <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">Headquarters</span>
                      <h3 className="text-2xl font-black text-slate-900 mt-2">Salem, Tamil Nadu</h3>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      133/31A Sedhu Krishna Trade Centre, 3rd floor Trichy Main Road Gugai, Salem Town, Tamil Nadu 636006
                    </p>
                    <a
                      href="https://www.google.com/maps/place/NIGSOFT+PRIVATE+LIMITED/@11.6429267,78.1507301,17z/data=!3m2!4b1!5s0x3babefd586d334eb:0xa41a820ecf3ef991!4m6!3m5!1s0x3babeffd89cb1eb3:0xc579d53212831026!8m2!3d11.6429215!4d78.153305!16s%2Fg%2F11lfh37m5t?entry=tts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors group/btn"
                    >
                      Navigate <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                  <div className="w-full md:w-[280px] h-[220px] rounded-[2rem] overflow-hidden shadow-inner border border-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.2!2d78.153305!3d11.6429215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babeffd89cb1eb3%3A0xc579d53212831026!2sNIGSOFT%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Branch - Chennai */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 bg-slate-50/30 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-6">
                    <div>
                      <span className="text-xs font-black text-red-600 uppercase tracking-[0.2em]">Branch Office</span>
                      <h3 className="text-2xl font-black text-slate-900 mt-2">Chennai, Vandalur</h3>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      No.15, First Floor, Walajabad Road, Vandalur, Chennai, Tamil Nadu 600048
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Nigsoft+-+Hospital+Management+Software/@12.8939047,80.0797865,311m/data=!3m1!1e3!4m10!1m2!2m1!1sNo.15,+First+Floor,+Walajabad+Road,+Vandalur,+Chennai+-+600048!3m6!1s0x3a52f5310eec5bab:0xdeb5e43e7850f968!8m2!3d12.8937804!4d80.0811764!15sCj5Oby4xNSwgRmlyc3QgRmxvb3IsIFdhbGFqYWJhZCBSb2FkLCBWYW5kYWx1ciwgQ2hlbm5haSAtIDYwMDA0OJIBH2hvc3BpdGFsX2FuZF9lcXVpcG1lbnRfc3VwcGxpZXPgAQA!16s%2Fg%2F11msdnk37k?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-red-600 transition-colors group/btn"
                    >
                      Navigate <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                  <div className="w-full md:w-[280px] h-[220px] rounded-[2rem] overflow-hidden shadow-inner border border-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d80.0811764!3d12.8937804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5310eec5bab%3A0xdeb5e43e7850f968!2sNigsoft%20-%20Hospital%20Management%20Software!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#1e3a8a_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Ignite</span> Your Business?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/book-demo" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-3">
                Book a Free Demo <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/partners" className="px-10 py-5 bg-white/10 text-white rounded-2xl font-black hover:bg-white/20 transition-all border border-white/10 backdrop-blur-md">
                Partner with Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
