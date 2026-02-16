"use client";

import { useState } from "react";
import { User, Mail, Phone, GraduationCap, Briefcase, Calendar, FileText } from "lucide-react";

export default function HIMSApplyForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    currentRole: "",
    preferredBatch: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "hims-application",
          name: formData.fullName,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          qualification: "",
          experience: "",
          currentRole: "",
          preferredBatch: "",
          message: "",
        });
      } else {
        alert(result.message || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl border border-gray-200 shadow-xl text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
        <p className="text-gray-600 text-lg mb-8">
          Thank you for applying to the HIMS Certification program. Our team will review your application and contact you within 24-48 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
            <User className="w-4 h-4 text-blue-600" />
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your name"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
              <Mail className="w-4 h-4 text-blue-600" />
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
              <Phone className="w-4 h-4 text-blue-600" />
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>

        {/* Qualification & Experience */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Qualification *
            </label>
            <select
              required
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Select Qualification</option>
              <option value="MBBS">MBBS</option>
              <option value="MD">MD</option>
              <option value="MS">MS</option>
              <option value="BDS">BDS</option>
              <option value="BAMS">BAMS</option>
              <option value="BHMS">BHMS</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Experience *
            </label>
            <select
              required
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Select Experience</option>
              <option value="Intern">Intern</option>
              <option value="0-2 years">0-2 years</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
        </div>

        {/* Current Role */}
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            Current Role *
          </label>
          <input
            type="text"
            required
            value={formData.currentRole}
            onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g., Junior Resident, Consultant, etc."
          />
        </div>

        {/* Preferred Batch */}
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            Preferred Batch *
          </label>
          <select
            required
            value={formData.preferredBatch}
            onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select Batch</option>
            <option value="Next Monday">Next Monday</option>
            <option value="Next Month">Next Month</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
            <FileText className="w-4 h-4 text-blue-600" />
            Why do you want to join? (Optional)
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your goals and expectations..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>

        <p className="text-center text-sm text-gray-500">
          By submitting, you agree to our terms and conditions.
        </p>
      </div>
    </form>
  );
}
