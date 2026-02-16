"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Phone, Mail, Globe, Clock, Send, User, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";

const ContactHero = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        alert(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  const contactOptions = [
    { icon: Clock, label: "Quick response within 24 hours", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: Phone, label: "Free consultation call", color: "text-indigo-500", bg: "bg-indigo-50" },
    { icon: Globe, label: "Multi-language support", color: "text-sky-500", bg: "bg-sky-50" }
  ];

  const inputClasses = (fieldName: string) => `
    w-full pl-12 pr-4 py-4 bg-slate-50/50 border-2 transition-all duration-300 outline-none rounded-2xl
    ${focusedField === fieldName
      ? "border-blue-600 bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
      : "border-transparent hover:bg-slate-100/80"}
    text-slate-900 font-medium placeholder:text-slate-400
  `;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-24 overflow-hidden bg-white font-sans">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-50 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-50 rounded-full blur-[140px] opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-black text-slate-700 uppercase tracking-widest">Connect with Us</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Let's Build the <br />
                <span className="text-blue-600 italic">Future</span> Together
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium"
            >
              Ready to transform your vision into reality? Our team of innovators and engineers is standing by to help you scale with enterprise-grade solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactOptions.map((option, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 ${option.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className={`w-6 h-6 ${option.color}`} />
                  </div>
                  <span className="text-lg font-bold text-slate-700">{option.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Signal */}
            <motion.div variants={itemVariants} className="pt-3 border-t border-slate-100">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {["/partner/gymkom.png", "/partner/oman.png", "/partner/bus.png", "/partner/thn.png"].map((img, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden bg-white">
                      <img src={img} alt={`Partner ${i+1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-slate-900 font-black">Trusted by 50+ Businesses</p>
                  <p className="text-slate-500 text-sm font-medium">Global healthcare providers & enterprises</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form - 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative perspective-1000"
          >
            <motion.div
              ref={formRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-12 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">Send a Message</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          <User className="w-3 h-3 text-blue-500" /> Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Enter your full name"
                            className={inputClasses("name")}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          <Mail className="w-3 h-3 text-blue-500" /> Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter your email"
                            className={inputClasses("email")}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          <Phone className="w-3 h-3 text-blue-500" /> Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^0-9+\-\s()]/g, '');
                              setFormData({ ...formData, phone: value });
                            }}
                            placeholder="Enter your phone number"
                            className={inputClasses("phone")}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          <MessageSquare className="w-3 h-3 text-blue-500" /> How can we help?
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-slate-400 z-10" />
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Briefly describe your requirements..."
                            className={`${inputClasses("message")} pl-12 resize-none`}
                          />
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full relative py-5 bg-slate-900 text-white font-black rounded-2xl overflow-hidden active:scale-95 transition-all shadow-xl hover:shadow-blue-600/20 disabled:opacity-50 group/btn"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                        <span className="relative flex items-center justify-center gap-3 text-lg">
                          {isSubmitting ? "Dispatching..." : "Send Message"}
                          {!isSubmitting && <Send className="w-5 h-5" />}
                        </span>
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-6"
                  >
                    <div className="w-24 h-24 bg-green-100 flex items-center justify-center rounded-3xl mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Message <span className="text-green-600">Sent!</span></h3>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                      Thanks for reaching out! Our strategy team will review your message and get back to you within 24 hours.
                    </p>
                    <motion.button
                      onClick={() => setSubmitted(false)}
                      className="mt-12 text-blue-600 font-bold hover:underline"
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -translate-y-16 translate-x-16 rotate-45 pointer-events-none" />
            </motion.div>

            {/* Floating Element behind form */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
