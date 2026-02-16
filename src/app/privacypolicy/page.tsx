import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.privacy.title,
  description: SEO_CONFIG.privacy.description,
  keywords: SEO_CONFIG.privacy.keywords,
  alternates: {
    canonical: SEO_CONFIG.privacy.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="pt-[120px] pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy & Security
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-gray-500">Last updated: Jan 03, {new Date().getFullYear()}</p>
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
                  <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  NIGSOFT.com ("us", "we", or "nigsoft") is committed to respecting the privacy rights of our customers, visitors, and users of the NIGSOFT service. This Privacy Policy explains our commitment to fair practices and protection of your privacy. Your use of our Site is governed by this Privacy Policy and our Terms of Use.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Traffic Data Collection</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We automatically collect the following information when you visit our website:
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      IP address and domain servers
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      Web browser and computer types
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      Referring sources and interaction data
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
                  <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To access certain areas of our site, you may need to provide personal information including:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Contact Data</h3>
                    <p className="text-gray-600 text-sm">Email address, phone number, and account credentials</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Business Data</h3>
                    <p className="text-gray-600 text-sm">Company information and business details</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Usage Data</h3>
                    <p className="text-gray-600 text-sm">Service usage patterns and preferences</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Communication</h3>
                    <p className="text-gray-600 text-sm">Information from emails and support interactions</p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Cookies & Analytics</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies and web analytics to enhance your experience and improve our services. You can control cookie settings in your browser.
                </p>
                <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-2xl">
                  <p className="text-gray-700"><strong>Note:</strong> Disabling cookies may limit access to certain features of our site.</p>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Security & Storage</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your data is stored securely in encrypted cloud servers with enterprise-grade security measures:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Encrypted Storage</h3>
                    <p className="text-gray-600 text-sm">All data encrypted at rest and in transit</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Secure Access</h3>
                    <p className="text-gray-600 text-sm">Multi-factor authentication and access controls</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Backup & Recovery</h3>
                    <p className="text-gray-600 text-sm">Regular backups and disaster recovery</p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information Usage & Sharing</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We use your information to provide and improve our services. We do not sell your personal information to third parties.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">We may share information only when:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Required by law or court order</li>
                    <li>• Necessary to protect rights and safety</li>
                    <li>• With your explicit consent</li>
                    <li>• With trusted service providers under strict agreements</li>
                  </ul>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">7</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Rights & Choices</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Access & Control</h3>
                    <p className="text-gray-600 text-sm mb-3">You can access, modify, or delete your personal information through your account settings.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Data Portability</h3>
                    <p className="text-gray-600 text-sm mb-3">Request a copy of your data in a portable format at any time.</p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-white rounded-3xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
                  <p className="text-xl mb-6 opacity-90">We're here to help with any privacy-related concerns.</p>
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