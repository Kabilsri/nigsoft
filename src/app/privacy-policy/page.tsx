import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Nigsoft Privacy Policy and Cookie Usage",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Usage</h2>
              <p>
                Nigsoft uses cookies and similar tracking technologies to improve your browsing experience, 
                analyze site traffic, and understand where our visitors are coming from.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for authentication and site functionality (admin-session)</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics to understand how visitors use our site</li>
                <li><strong>Performance Cookies:</strong> Microsoft Clarity to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> Tracks page views, user behavior, and site performance</li>
                <li><strong>Microsoft Clarity:</strong> Records user sessions to improve website usability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Choices</h2>
              <p>
                You can accept or reject non-essential cookies through our cookie consent banner. 
                Essential cookies required for site functionality cannot be disabled.
              </p>
              <p className="mt-4">
                To change your cookie preferences, clear your browser&apos;s localStorage and refresh the page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                For questions about our privacy practices, please contact us at:{" "}
                <a href="mailto:admin@nigsoft.com" className="text-blue-600 hover:underline">
                  admin@nigsoft.com
                </a>
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
