import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="relative z-10 px-4 py-4 lg:px-8 border-b">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://ext.same-assets.com/482647744/2678245851.png"
              alt="PAWPAL Logo"
              className="h-8 w-8 object-cover"
            />
            <span className="text-xl font-bold lg:text-[30px] text-[#2D6063]">PAWPAL</span>
          </Link>

          {/* Back to Home */}
          <Link href="/">
            <Button variant="outline" className="text-[#345045] border-[#345045] hover:bg-[#345045] hover:text-white">
              ← Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Terms Content */}
      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#345045] mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 31, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#345045] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using PAWPAL ("the Service"), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#345045] mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed">
                PAWPAL is an AI-powered pet care application that provides personalized care plans, reminders,
                and assistance for pet owners. The service is designed to help you manage your pet's health,
                wellness, and daily care needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#345045] mb-4">3. User Responsibilities</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>As a user of PAWPAL, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and truthful information about yourself and your pet(s)</li>
                  <li>Use the service in accordance with applicable laws and regulations</li>
                  <li>Not use the service for any harmful, illegal, or unauthorized purposes</li>
                  <li>Keep your account credentials secure and confidential</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#345045] mb-4">4. Medical Disclaimer</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed font-medium">
                  <strong>Important:</strong> PAWPAL is not a substitute for professional veterinary care.
                  The information and suggestions provided by our AI are for general guidance only and should
                  not be considered medical advice. Always consult with a qualified veterinarian for your pet's
                  health concerns and before making any medical decisions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#345045] mb-4">5. Privacy and Data</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect,
                use, and protect your personal information and your pet's data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#345045] mb-4">6. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide continuous service, PAWPAL may experience downtime for maintenance,
                updates, or unforeseen technical issues. We do not guarantee uninterrupted service availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#345045] mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                PAWPAL LLC shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, or goodwill, arising from your use
                of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#345045] mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material
                changes via email or through the application. Continued use of the service after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#345045] mb-4">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700">
                  <strong>PAWPAL LLC</strong><br />
                  Email: legal@pawpal.com<br />
                  Address: [Company Address]<br />
                  Phone: [Company Phone]
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500">
              © 2025 PAWPAL LLC. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
