"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Star, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const ConsultationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    category: [] as string[],
    message: '',
    countryCode: '+91'
  });

  const reviews = [
    {
      quote:
        "Software experience is very good and technical support issues are solved quickly. Compared to our old software, this is much better and cost-effective. Happy to refer others.",
      logo: null,
      name: "Lab Owner",
      company: "Saraswathi Clinical Lab",
    },
    {
      quote:
        "Very good software and excellent support. Test format changes were handled smoothly. Much better than our previous software and worth the cost.",
      logo: null,
      name: "Lab Head",
      company: "Ravi Pathology",
    },
    {
      quote:
        "Good software experience with reliable technical support. Clear improvement over our old software and cost-effective. We confidently refer this to others.",
      logo: null,
      name: "Lab Manager",
      company: "Arogya Pathology",
    },
    {
      quote:
        "Super and very good service. Compared to my previous software, this is far better. Cost is effective and I will surely refer more members.",
      logo: null,
      name: "Owner",
      company: "Amma Lab",
    },
    {
      quote:
        "Software is good and service is also good. Required modifications were handled well. Cost-effective and we have already referred multiple labs.",
      logo: null,
      name: "Diagnostics Head",
      company: "Suguna Diagnostics",
    },
    {
      quote:
        "Very good software compared to our previous one. Cost-wise good and service support is excellent. Already referred two labs.",
      logo: null,
      name: "Pathologist",
      company: "Sero Pathology",
    },
    {
      quote:
        "Super software experience with good customer support. Easy to use and convenient. I have already referred another lab.",
      logo: null,
      name: "Lab Admin",
      company: "Innova Lab",
    },
    {
      quote:
        "Good software experience with the best customer support. Cost-effective and reliable for daily lab operations.",
      logo: null,
      name: "Lab Owner",
      company: "Iyappa Lab",
    },
    {
      quote:
        "User-friendly, updated software with speedy technical help and great response. Highly satisfied with the support team.",
      logo: null,
      name: "Shiva Rajan",
      company: "Getwell Lab",
    },
    {
      quote:
        "Very user-friendly software with customization options. Helpdesk is available anytime and service quality is excellent.",
      logo: null,
      name: "Annie Rose",
      company: "Clinical Diagnostics",
    },
    {
      quote:
        "Service wise good and I already referred 4 members to use our software. Very satisfied with cost. It is my 1st software.",
      logo: null,
      name: "Lab Manager",
      company: "Universal Lab",
    },
    {
      quote:
        "It is better compared to previous software. Good services, cost effective and already referred 1 person.",
      logo: null,
      name: "Owner",
      company: "Sri Nethra Diagnostics",
    },
    {
      quote:
        "Very good. Compare to my previous software it is best. Service is good and will refer more members to use.",
      logo: null,
      name: "Lab Head",
      company: "SV Diagnostics",
    },
    {
      quote:
        "Good and compare to my previous software it is too good. Good service and will refer more clients to use.",
      logo: null,
      name: "Owner",
      company: "Sudha Diagnostics",
    },
    {
      quote:
        "NIG software is very good and features are also nice. One of the best medical billing software services.",
      logo: null,
      name: "Vijaykumar Jadav",
      company: "Google Reviews",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    // Only trigger on the main page
    if (pathname !== '/') return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  // Auto-slide reviews
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isOpen, reviews.length]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.category.length === 0) {
      alert('Please select at least one product.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'consultation',
          name: formData.fullName,
          email: formData.email,
          phone: formData.mobile,
          category: formData.category.join(', '),
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          category: [],
          message: '',
          countryCode: '+91'
        });
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        alert(result.message || 'Failed to send consultation request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] lg:max-h-[95vh] overflow-y-auto lg:overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300 mx-4 lg:mx-0">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 lg:top-6 lg:right-6 z-50 w-8 h-8 lg:w-10 lg:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Form Section */}
          <div className="w-full lg:w-1/2 p-6 lg:p-10 text-white relative overflow-hidden" style={{ backgroundImage: 'url(/others/modal.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">Get Free Consultation</h2>
                <p className="text-grey-200 text-sm">One platform. Smarter operations. Better growth.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold mb-2 text-black">
                    Full name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-blue-400 transition-all text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 text-black">
                    Mobile Number *
                  </label>
                  <div className="flex rounded-lg overflow-hidden bg-white/95">
                    <div className="flex items-center bg-gray-50 px-3 py-2.5 border-r border-gray-200">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="bg-gray-50 text-gray-700 text-xs font-medium border-0 focus:ring-0 focus:outline-none pr-2"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+966">🇸🇦 +966</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+60">🇲🇾 +60</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Enter 10-digit number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="flex-1 px-3 py-2.5 bg-transparent text-gray-900 placeholder-gray-500 border-0 focus:ring-0 focus:outline-none text-sm"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 text-black">
                    Work email <span className="text-grey-300">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-blue-400 transition-all text-sm"
                  />
                </div>
                {/* category */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-xs font-semibold mb-2 text-black">
                    Select Products * <span className="text-gray-500">(Select one or more)</span>
                  </label>
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-3 py-2.5 rounded-lg bg-white/95 text-gray-900 border-0 focus:ring-2 focus:ring-blue-400 transition-all text-sm cursor-pointer flex items-center justify-between"
                  >
                    <span className={formData.category.length === 0 ? 'text-gray-500' : 'text-gray-900'}>
                      {formData.category.length === 0 
                        ? 'Choose your products' 
                        : `${formData.category.length} product${formData.category.length > 1 ? 's' : ''} selected`
                      }
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-48 overflow-y-auto">
                      {[
                        { value: 'lab-management', label: 'Lab Management System' },
                        { value: 'pharmacy-management', label: 'Pharmacy Management System' },
                        { value: 'hospital-management', label: 'Hospital Management System' },
                        { value: 'clinic-management', label: 'Clinic Management System' },
                        { value: 'billing-software', label: 'Medical Billing Software' },
                        { value: 'other', label: 'Other Healthcare Solutions' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 p-3 hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            value={option.value}
                            checked={formData.category.includes(option.value)}
                            onChange={(e) => {
                              const value = e.target.value;
                              const updatedCategories = e.target.checked
                                ? [...formData.category, value]
                                : formData.category.filter(cat => cat !== value);
                              setFormData(prev => ({ ...prev, category: updatedCategories }));
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 text-black">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-blue-400 transition-all resize-none text-sm"
                    required
                  />
                </div>

                <div className="space-y-3 pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : submitted ? 'Request Sent!' : 'Get Free Consultation'}
                  </button>


                </div>
              </form>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-50 to-white p-6 lg:p-10 flex flex-col pt-12 lg:pt-10">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                From Concept to Launch,
              </h2>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Building Products That Scale
              </h3>

              <div className="flex justify-center items-center mt-6 mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <Image
                      src="/review/1.png"
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <Image
                      src="/review/2.png"
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <Image
                      src="/review/3.png"
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <Image
                      src="/review/4.png"
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-md">
                  <span className="text-gray-600 font-medium text-sm">Google Reviews</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm">4.6</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Slider */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                {/* Navigation Buttons */}
                <button
                  onClick={prevReview}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all z-10"
                >
                  <ChevronLeft className="w-3 h-3 text-gray-600" />
                </button>
                <button
                  onClick={nextReview}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all z-10"
                >
                  <ChevronRight className="w-3 h-3 text-gray-600" />
                </button>

                {/* Review Content */}
                <div className="px-6">
                  <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                    "{reviews[currentReview].quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-white font-bold text-sm`}>
                      {reviews[currentReview].name.split(' ')[0][0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900">{reviews[currentReview].name}</div>
                      <div className="text-gray-600 text-xs">{reviews[currentReview].company}</div>
                    </div>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-1.5 mt-4">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentReview ? 'bg-blue-500 w-4' : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 font-semibold text-sm">
                We help you grow your business from <span className="text-blue-600 font-bold">ZERO</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;