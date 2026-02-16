import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export const metadata: Metadata = {
  title: SEO_CONFIG.disclaimer.title,
  description: SEO_CONFIG.disclaimer.description,
  keywords: SEO_CONFIG.disclaimer.keywords,
  alternates: {
    canonical: SEO_CONFIG.disclaimer.canonical,
  },
};

import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="pt-[120px] pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Disclaimer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Please read this disclaimer carefully before using our services. This information is important for your understanding of our services.
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
                  <h2 className="text-2xl font-bold text-gray-900">General Information</h2>
                </div>
                <div className="bg-gray-50 border-gray-400 p-6 rounded-r-2xl">
                  <p className="text-gray-800 font-semibold mb-2">"As Is" Basis:</p>
                  <p className="text-gray-700 leading-relaxed">
                    The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Nigsoft excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Healthcare Software Disclaimer</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our healthcare management software is designed to assist healthcare professionals in their daily operations. However:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3">Professional Responsibility</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Software doesn't replace medical judgment</li>
                      <li>• Users must verify all data and decisions</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3">User Obligations</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Ensure compliance with local regulations</li>
                      <li>• Maintain regular data backups</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Accuracy of Information</h2>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-800 font-semibold mb-3">No Guarantees:</p>
                  <p className="text-gray-700 leading-relaxed">
                    While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or graphics contained on the website.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Third-Party Links</h2>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-800 font-semibold mb-3">External Content:</p>
                  <p className="text-gray-700 leading-relaxed">
                    Our website may contain links to third-party websites. These links are provided for convenience only, and we do not endorse or take responsibility for the content of these external sites.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Professional Advice</h2>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-800 font-semibold mb-3">Consult Professionals:</p>
                  <p className="text-gray-700 leading-relaxed">
                    The information provided on this website is for general informational purposes only and should not be considered as professional medical, legal, or business advice. Always consult with qualified professionals for specific guidance.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Changes to Disclaimer</h2>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-800 font-semibold mb-3">Updates:</p>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on this website. Please review this disclaimer periodically for updates.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-white rounded-3xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Questions About This Disclaimer?</h2>
                  <p className="text-xl mb-6 opacity-90">Contact us for any clarifications regarding this disclaimer.</p>
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