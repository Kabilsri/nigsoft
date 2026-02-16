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
  Sparkles,
  ChevronDown
} from "lucide-react";

export default function BookDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    product: [] as string[],
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

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
          formType: 'book-demo',
          ...formData,
          product: formData.product.join(', '),
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
          service: "",
          product: [],
          date: "",
          time: "",
          message: "",
        });
      } else {
        alert(result.message || 'Failed to send request. Please try again.');
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
      ? "border-blue-600 bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
      : "border-transparent hover:bg-slate-100"}
    text-slate-900 font-medium placeholder:text-slate-400
  `;

  return (
    <div className="max-w-3xl mx-auto relative group font-sans">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-3xl opacity-5 group-hover:opacity-10 transition-opacity" />

      <div className="relative bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12 overflow-hidden">

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
                <h3 className="text-3xl font-black text-slate-900 mb-2">Book a Premium <span className="text-blue-600">Demo</span></h3>
                <p className="text-slate-500 font-medium">Experience the future of healthcare management.</p>
              </div>

              {/* Grid 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-widest ml-1">
                    <User className="w-4 h-4 text-blue-500" /> Full Name
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
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-widest ml-1">
                    <Mail className="w-4 h-4 text-blue-500" /> Business Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={inputClasses("email")}
                  />
                </div>
              </div>

              {/* Grid 2: Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-widest ml-1">
                    <Phone className="w-4 h-4 text-blue-500" /> Phone Number
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
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-widest ml-1">
                    <Building className="w-4 h-4 text-blue-500" /> Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    placeholder="Enter your organization name"
                    className={inputClasses("company")}
                  />
                </div>
              </div>

              {/* Grid 3: Product Choice */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-widest ml-1">
                  <Sparkles className="w-4 h-4 text-blue-500" /> Select Products
                </label>
                <div className="relative">
                  <div
                    onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                    className={`${inputClasses("product")} cursor-pointer flex items-center justify-between`}
                  >
                    <span className={formData.product.length === 0 ? 'text-slate-400' : 'text-slate-900'}>
                      {formData.product.length === 0 
                        ? 'Choose specialized solutions' 
                        : `${formData.product.length} product${formData.product.length > 1 ? 's' : ''} selected`
                      }
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isProductDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-48 overflow-y-auto">
                      {[
                        { value: 'Lab Management', label: 'Lab Management Software' },
                        { value: 'Hospital Management', label: 'Hospital Management System' },
                        { value: 'Dental Management', label: 'Dental Clinic Software' },
                        { value: 'Pharmacy Management', label: 'Pharmacy Management' },
                        { value: 'Bloodbank Management', label: 'Blood Bank Software' },
                        { value: 'HR Management', label: 'HR & Payroll Management' },
                        { value: 'Billing Management', label: 'Billing & Accounting' },
                        { value: 'Fully Custom Solution', label: 'Fully Custom Solution' }

                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 p-3 hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            value={option.value}
                            checked={formData.product.includes(option.value)}
                            onChange={(e) => {
                              const value = e.target.value;
                              const updatedProducts = e.target.checked
                                ? [...formData.product, value]
                                : formData.product.filter(p => p !== value);
                              setFormData(prev => ({ ...prev, product: updatedProducts }));
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
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
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-widest ml-1">
                    <Calendar className="w-4 h-4 text-blue-500" /> Preferred Date
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
                  <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-widest ml-1">
                    <Clock className="w-4 h-4 text-blue-500" /> Preferred Time
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
                    <option value="">Select slot</option>
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
                <label className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-widest ml-1">
                  <MessageSquare className="w-4 h-4 text-blue-500" /> Special Requirements (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  placeholder="Tell us about your organization scale and specific challenges..."
                  className={`${inputClasses("message")} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full group/btn relative py-5 bg-slate-900 text-white font-black rounded-2xl overflow-hidden active:scale-95 transition-all shadow-xl shadow-slate-900/10 hover:shadow-blue-600/20 disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center gap-3 text-lg">
                  {isSubmitting ? "Processing Request..." : "Schedule Your Free Demo"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />}
                </span>
              </motion.button>

              <div className="text-center px-4">
                <p className="text-sm text-slate-400 font-medium">
                  By booking a demo, you agree to our <a href="/privacypolicy" className="text-blue-600 underline hover:text-blue-700 transition-colors">Privacy Policy</a> and <a href="/termsofservice" className="text-blue-600 underline hover:text-blue-700 transition-colors">Terms</a>.
                </p>
              </div>
            </motion.form>
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
              <h3 className="text-4xl font-black text-slate-900 mb-4">Request <span className="text-green-600">Confirmed!</span></h3>
              <p className="text-xl text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-slate-900 font-bold">{formData.name || 'Partner'}</span>. Our healthcare solutions expert will contact you at <span className="text-blue-600 font-bold">{formData.email}</span> shortly.
              </p>
              <motion.button
                onClick={() => setSubmitted(false)}
                className="mt-12 text-blue-600 font-bold hover:underline"
              >
                Send another request
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}