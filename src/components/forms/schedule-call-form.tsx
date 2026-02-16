"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ChevronDown
} from "lucide-react";

export default function ScheduleCallForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: [] as string[],
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

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
          formType: 'schedule-call',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: [],
          date: "",
          time: "",
          message: "",
        });
      } else {
        alert(result.message || 'Failed to schedule call. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClasses = (fieldName: string) => `
    w-full px-5 py-4 bg-slate-50 border-2 transition-all duration-300 outline-none rounded-2xl
    ${focusedField === fieldName
      ? " bg-white shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
      : "border-transparent hover:bg-slate-100"}
    text-slate-900 font-medium placeholder:text-slate-400
  `;

  return (
    <div className="max-w-3xl mx-auto relative group font-sans">
      <div className="absolute inset-0  rounded-[2.5rem] blur-3xl opacity-5 group-hover:opacity-10 transition-opacity" />

      <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden">

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-slate-900 mb-2">Connect with an <span className="text-red-500 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Expert</span></h3>
                <p className="text-slate-500 font-medium italic">Your personalized digital transformation starts with a conversation.</p>
              </div>

              {/* Grid 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-[0.15em] ml-1">
                    <User className="w-4 h-4 text-red-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClasses("name")}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-[0.15em] ml-1">
                    <Mail className="w-4 h-4 text-red-500" /> Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    placeholder="Enter your work email"
                    className={inputClasses("email")}
                  />
                </div>
              </div>

              {/* Grid 2: Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-[0.15em] ml-1">
                    <Phone className="w-4 h-4 text-red-500" /> Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={inputClasses("phone")}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-[0.15em] ml-1">
                    <Building className="w-4 h-4 text-red-500" /> Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className={inputClasses("company")}
                  />
                </div>
              </div>

              {/* Grid 3: Service Selection */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-[0.15em] ml-1">
                  <PhoneCall className="w-4 h-4 text-red-500" /> Discussion Topics
                </label>
                <div className="relative">
                  <div
                    onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                    className={`${inputClasses("service")} cursor-pointer flex items-center justify-between`}
                  >
                    <span className={formData.service.length === 0 ? 'text-slate-400' : 'text-slate-900'}>
                      {formData.service.length === 0 
                        ? 'Select areas of interest' 
                        : `${formData.service.length} topic${formData.service.length > 1 ? 's' : ''} selected`
                      }
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isServiceDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-48 overflow-y-auto">
                      {[
                        { value: 'bpo-services', label: 'BPO Services' },
                        { value: 'web-development', label: 'Web Development' },
                        { value: 'mobile-development', label: 'Mobile Development' },
                        { value: 'saas-development', label: 'SaaS Development' },
                        { value: 'ecommerce-development', label: 'E-commerce Development' },
                        { value: 'project-development', label: 'Project Development' },
                        { value: 'corporate-website', label: 'Corporate Website' },
                        { value: 'cms-development', label: 'CMS Development' },
                        { value: 'website-maintenance', label: 'Website Maintenance' },
                        { value: 'ui-ux-development', label: 'UI/UX Development' },
                        { value: 'ai-integration', label: 'AI Integration' },
                        { value: 'designing', label: 'Designing' },
                        { value: 'seo-smm', label: 'SEO & SMM' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 p-3 hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            value={option.value}
                            checked={formData.service.includes(option.value)}
                            onChange={(e) => {
                              const value = e.target.value;
                              const updatedServices = e.target.checked
                                ? [...formData.service, value]
                                : formData.service.filter(s => s !== value);
                              setFormData(prev => ({ ...prev, service: updatedServices }));
                            }}
                            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded "
                          />
                          <span className="text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Grid 4: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-[0.15em] ml-1">
                    <Calendar className="w-4 h-4 text-red-500" /> Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onFocus={() => setFocusedField("date")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    className={inputClasses("date")}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-[0.15em] ml-1">
                    <Clock className="w-4 h-4 text-red-500" /> Preferred Slot
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onFocus={() => setFocusedField("time")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    className={inputClasses("time")}
                  >
                    <option value="">Available slots</option>
                    <option value="10:00">10:00 AM IST</option>
                    <option value="11:00">11:00 AM IST</option>
                    <option value="12:00">12:00 PM IST</option>
                    <option value="14:00">2:00 PM IST</option>
                    <option value="15:00">3:00 PM IST</option>
                    <option value="16:00">4:00 PM IST</option>
                    <option value="17:00">5:00 PM IST</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-[0.15em] ml-1">
                  <MessageSquare className="w-4 h-4 text-red-500" /> Additional Details (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  placeholder="Share a brief overview of your query..."
                  className={`${inputClasses("message")} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full group/btn relative py-5 bg-slate-900 text-white font-black rounded-2xl overflow-hidden active:scale-95 transition-all shadow-xl shadow-slate-900/10 hover:shadow-red-600/20 disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center gap-3 text-lg">
                  {isSubmitting ? "Confirming Slot..." : "Secure Your Consultation"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />}
                </span>
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-6"
            >
              <div className="w-24 h-24 bg-red-100 flex items-center justify-center rounded-3xl mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-4">Request <span className="text-red-600">Locked In!</span></h3>
              <p className="text-xl text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. Our strategy team has been notified. Expect a confirmation at <span className="text-red-500 font-bold">{formData.email}</span> within the hour.
              </p>
              <motion.button
                onClick={() => setSubmitted(false)}
                className="mt-12 text-slate-400 font-bold hover:text-red-600 transition-colors"
              >
                Schedule another session
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
