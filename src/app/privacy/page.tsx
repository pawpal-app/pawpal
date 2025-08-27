import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Privacy Policy Content */}
      <main className="max-w-3xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
        <div className="prose prose-sm lg:prose-base max-w-none">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#345045] mb-4 lg:mb-6">Privacy Policy</h1>
          <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">Last updated: January 31, 2025</p>

          <div className="space-y-4 lg:space-y-6">
            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">1. Introduction</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                At PAWPAL LLC ("we," "our," or "us"), we are committed to protecting your privacy and the
                privacy of your beloved pets. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our PAWPAL application and services.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">2. Information We Collect</h2>

              <h3 className="text-base lg:text-lg font-medium text-[#345045] mb-2 lg:mb-3">Personal Information</h3>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>We may collect the following personal information:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li>Name and email address</li>
                  <li>Phone number (optional)</li>
                  <li>Account credentials and preferences</li>
                  <li>Location data (with your permission)</li>
                  <li>Payment information (processed securely by third-party providers)</li>
                </ul>
              </div>

              <h3 className="text-base lg:text-lg font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">Pet Information</h3>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>To provide personalized care recommendations, we collect:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li>Pet name, breed, age, and species</li>
                  <li>Health records and medical history</li>
                  <li>Vaccination records and schedules</li>
                  <li>Dietary preferences and restrictions</li>
                  <li>Behavioral notes and observations</li>
                  <li>Photos and videos of your pet (optional)</li>
                </ul>
              </div>

              <h3 className="text-base lg:text-lg font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">Usage Data</h3>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>We automatically collect certain information about your use of our service:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li>App usage patterns and features accessed</li>
                  <li>Device information and operating system</li>
                  <li>IP address and general location</li>
                  <li>Crash reports and performance data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">3. How We Use Your Information</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li>Provide personalized pet care recommendations and reminders</li>
                  <li>Generate AI-powered care plans tailored to your pet</li>
                  <li>Send you notifications about your pet's care schedule</li>
                  <li>Improve our AI algorithms and service quality</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Send you service updates and important information</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">4. Information Sharing</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 lg:p-4 mb-3">
                <p className="text-sm lg:text-base text-green-800 font-medium">
                  🔒 We do not sell, trade, or rent your personal information to third parties.
                </p>
              </div>

              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li><strong>Veterinary Partners:</strong> With your explicit consent, we may share relevant pet information with licensed veterinarians</li>
                  <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our platform (under strict confidentiality agreements)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger or acquisition (with notice to users)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">5. Data Security</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4 text-sm lg:text-base text-gray-700 mt-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Secure cloud infrastructure with access controls</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">6. Your Rights and Choices</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li>Access and review your personal information</li>
                  <li>Update or correct your information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Request a copy of your data</li>
                  <li>Withdraw consent for data processing (where applicable)</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, contact us at privacy@pawpal.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">7. Children's Privacy</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                PAWPAL is not intended for children under 13 years of age. We do not knowingly collect
                personal information from children under 13. If we become aware that we have collected
                personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">8. International Users</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                If you are accessing PAWPAL from outside the United States, please be aware that your
                information may be transferred to, stored, and processed in the United States. By using
                our service, you consent to such transfer and processing.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">9. Changes to This Policy</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material
                changes by posting the new Privacy Policy on this page and sending you an email notification.
                Changes become effective immediately upon posting.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">10. Contact Us</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-3 lg:p-4 mt-3">
                <p className="text-sm lg:text-base text-gray-700">
                  <strong>PAWPAL LLC - Privacy Team</strong><br />
                  Email: privacy@pawpal.com<br />
                  Address: [Company Address]<br />
                  Phone: [Company Phone]
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 lg:mt-10 pt-6 border-t border-gray-200">
            <p className="text-center text-xs lg:text-sm text-gray-500">
              © 2025 PAWPAL LLC. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
