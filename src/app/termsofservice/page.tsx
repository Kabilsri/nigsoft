import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.terms.title,
  description: SEO_CONFIG.terms.description,
  keywords: SEO_CONFIG.terms.keywords,
  alternates: {
    canonical: SEO_CONFIG.terms.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="pt-[120px] pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Legal Terms
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Please read these terms carefully before using our services. By using NIGSOFT services, you agree to these terms.
            </p>
            <p className="text-gray-500">Last updated: jan 03, {new Date().getFullYear()}</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="space-y-12">
              
              {/* Section 1 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You must be of legal age to enter into a binding agreement to accept these Terms. By using our services, you agree to be bound by these terms and conditions.
                </p>
                <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-2xl">
                  <p className="text-gray-800 font-semibold mb-2">Medical Disclaimer:</p>
                  <p className="text-gray-700 text-sm">The information provided is for informational purposes only and is not intended as a substitute for professional medical advice. Always consult qualified healthcare professionals for medical emergencies.</p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Registration & Account Security</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  During registration, you'll provide an email address, mobile number, and create a password. These are your credentials for accessing our services.
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Your Responsibilities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      Keep credentials private and secure
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      Notify us immediately if credentials are compromised
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      Contact info@nigsoft.com for security issues
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Prohibited Uses</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You may use our services only for lawful purposes. The following activities are strictly prohibited:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3">Technical Violations</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Hacking or unauthorized access attempts</li>
                      <li>• Using automated tools or bots</li>
                      <li>• Introducing malicious software</li>
                      <li>• Overloading or damaging our systems</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3">Content Violations</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Copying or modifying our content</li>
                      <li>• Removing copyright notices</li>
                      <li>• Creating fraudulent accounts</li>
                      <li>• Impersonating others</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Fees & Payments</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Subscriptions are available on monthly and yearly plans with automatic renewal unless cancelled.
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3">Payment Terms:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Automatic renewal unless cancelled 7 days before renewal</li>
                    <li>• Refunds available for unused subscription periods</li>
                    <li>• Pricing subject to change with notice</li>
                    <li>• Contact info@nigsoft.com for billing inquiries</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Disclaimer of Warranty</h2>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-700 font-semibold mb-3">"AS IS" AND "AS AVAILABLE" BASIS</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our services are provided without warranties of any kind. We make no representations about the completeness, security, reliability, quality, accuracy, or availability of our services. Your use is at your sole risk.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-800 font-semibold mb-3">Limited Liability:</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We shall not be liable for any indirect, punitive, special, incidental, or consequential damages. Our liability is limited to the amount paid for our services.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">7</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Termination & Governing Law</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3">Termination</h3>
                    <p className="text-gray-700 text-sm">We may terminate accounts for terms violations. Users may discontinue service at any time.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3">Governing Law</h3>
                    <p className="text-gray-700 text-sm">These terms are governed by the laws of Tamil Nadu, India.</p>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">8</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Eligibility & Age Requirements</h2>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3">Age Requirements:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Must be 18+ to register independently</li>
                    <li>• Ages 13-18 require parent/guardian supervision</li>
                    <li>• Under 13 cannot use our services</li>
                    <li>• Services intended for Indian users</li>
                  </ul>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-white rounded-3xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Questions About Terms?</h2>
                  <p className="text-xl mb-6 opacity-90">Contact us for any clarifications regarding these terms of service.</p>
                  <div className="flex flex-col gap-6 justify-center items-center">
                    <a 
                      href="mailto:info@nigsoft.com" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@nigsoft.com
                    </a>
                    <div className="grid md:grid-cols-2 gap-6 text-center">
                      <div>
                        <p className="font-semibold mb-2">Salem Office</p>
                        <p className="text-sm opacity-80">No: 133/31, A Sethukrishna Trade Center, 3rd floor</p>
                        <p className="text-sm opacity-80">Trichy Main Road, Salem – 636006</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Chennai Office</p>
                        <p className="text-sm opacity-80">No.15, First Floor, Walajabad Road, Vandalur</p>
                        <p className="text-sm opacity-80">Chennai, Tamil Nadu - 600048</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}