import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Privacy Policy Content */}
      <main className="max-w-3xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
        <div className="prose prose-sm lg:prose-base max-w-none">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#345045] mb-4 lg:mb-6">Privacy Policy</h1>
          <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">Last updated: 11-January-2026</p>

          <div className="space-y-4 lg:space-y-6">
            <section>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4 lg:mb-6">
                At Animo by PawPal, your privacy is our priority. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our mobile application ("App"), website ("Site"), and related services ("Services"). By accessing or using our Services, you agree to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">1. Information We Collect</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-3 lg:mb-4">
                We collect both personal and non-personal information to provide a seamless, personalized, and secure experience.
              </p>

              <h3 className="text-base lg:text-lg font-medium text-[#345045] mb-2 lg:mb-3">1.1 Personal Information</h3>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>When you create an account, interact with our Services, or make purchases, we may collect:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li><strong>Account Information:</strong> Your name, email address, phone number, password, and related account details.</li>
                  <li><strong>Pet Information:</strong> Pet name, breed (optional), date of birth, medical history, vaccinations, behaviors, or special needs (optional).</li>
                  <li><strong>Payment Information:</strong> If you make purchases, we collect billing details such as credit/debit card information, payment method, billing address, and transaction history.</li>
                  <li><strong>User-Generated Content:</strong> If you create a pet profile, upload photos, or join groups, this information may be visible to other users, depending on your privacy settings.</li>
                </ul>
              </div>

              <h3 className="text-base lg:text-lg font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">1.2 Non-Personal Information</h3>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>We also collect data that does not directly identify you, such as:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li><strong>Device & Usage Information:</strong> Device type, operating system, browser type, IP address, and device identifiers.</li>
                  <li><strong>Usage Data:</strong> How you interact with the App and Site, including features accessed, preferences set, and actions performed.</li>
                  <li><strong>Location Data:</strong> If you enable location services, we may collect GPS data to provide features like finding local groomers or pet services. You can manage this in your device settings.</li>
                </ul>
              </div>

              <h3 className="text-base lg:text-lg font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">1.3 Cookies & Tracking Technologies</h3>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed">
                <p>We use cookies, web beacons, and similar technologies to improve your experience and understand how our Services are used. You may manage or disable cookies through your browser, but some features may not function properly.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">2. How We Use Your Information</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>We use collected information for the following purposes:</p>
                
                <h4 className="text-sm lg:text-base font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">2.1 Service Delivery</h4>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li><strong>Account Management:</strong> To create and manage your account.</li>
                  <li><strong>Pet Care Services:</strong> To provide reminders, personalized care plans, and suggestions tailored to your pet's needs.</li>
                  <li><strong>Transactions:</strong> To process payments for subscriptions or in-app purchases.</li>
                  <li><strong>Notifications & Reminders:</strong> To send health, vaccination, and care alerts via push notifications, lock screen alerts, and email.</li>
                  <li><strong>Animo AI Assistance:</strong> To process your questions and provide AI-powered support. Inputs are processed securely and are not sold or repurposed for unrelated marketing.</li>
                </ul>

                <h4 className="text-sm lg:text-base font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">2.2 Service Improvement</h4>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li><strong>Personalization:</strong> To adapt features and suggestions to your behavior and preferences.</li>
                  <li><strong>Feature Development:</strong> To analyze usage patterns and improve the App and Services.</li>
                  <li><strong>Testing & Troubleshooting:</strong> To optimize updates and resolve issues.</li>
                </ul>

                <h4 className="text-sm lg:text-base font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">2.3 Communication</h4>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li><strong>Account & Security Notices:</strong> Password changes, login attempts, and essential updates.</li>
                  <li><strong>Promotions & Updates:</strong> With your consent, we may send emails or in-app messages about new features or offers (opt-out anytime).</li>
                  <li><strong>Feedback & Surveys:</strong> To collect user insights to improve Animo.</li>
                </ul>

                <h4 className="text-sm lg:text-base font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">2.4 Legal & Security</h4>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li><strong>Legal Compliance:</strong> To meet regulatory obligations or respond to lawful requests.</li>
                  <li><strong>Fraud & Abuse Prevention:</strong> To detect and address fraud, misuse, or security breaches.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">3. Sharing & Disclosure</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>We may share your data in the following limited cases:</p>
                
                <h4 className="text-sm lg:text-base font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">3.1 Service Providers</h4>
                <p>We work with trusted third parties (e.g., payment processors, analytics providers, cloud hosting, customer support). They are contractually required to protect your data and use it only for providing services to Animo by PawPal.</p>

                <h4 className="text-sm lg:text-base font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">3.2 User Sharing</h4>
                <p>If you choose to participate in social features (pet profiles, group activities, posting photos), the information you share may be visible to other users according to your settings. You can modify or delete this content at any time.</p>

                <h4 className="text-sm lg:text-base font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">3.3 Legal Requirements</h4>
                <p>We may disclose data when required by law, court order, or government request, or when necessary to protect Animo by PawPal, our users, or others.</p>

                <h4 className="text-sm lg:text-base font-medium text-[#345045] mb-2 lg:mb-3 mt-4 lg:mt-6">3.4 Business Transfers</h4>
                <p>If Animo by PawPal is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. You will be notified if this occurs.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">4. Data Retention & Deletion</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>We retain personal data only as long as necessary for the purposes described.</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li><strong>Account Information:</strong> Stored until you delete your account.</li>
                  <li><strong>Transaction Records:</strong> Retained as required by law (typically up to 7 years).</li>
                  <li><strong>Pet Health Data:</strong> Deleted or anonymized if you close your account, unless retention is legally required.</li>
                  <li><strong>Marketing Data:</strong> Stored while you are subscribed to communications.</li>
                </ul>
                <p className="mt-3">
                  You may request deletion of your account or data at any time through the app or by contacting us at support@getanimoapp.com.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">5. Your Rights & Choices</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li><strong>Access & Update:</strong> Update your account details in the App or by contacting support.</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails; account and legal notices will still be sent.</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                  <li><strong>Restriction & Objection:</strong> In certain cases, you may request limited processing of your data.</li>
                  <li><strong>Regional Rights (GDPR/CCPA):</strong> If you are located in the EU or California, you may have additional rights, including the right to request deletion or opt out of "data sales" (Animo by PawPal does not sell personal data).</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">6. Data Security</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                We use industry-standard physical, technical, and administrative measures to protect your information. However, no method of transmission or storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">7. International Data Transfers</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Your information may be stored and processed in the United States or other countries. By using our Services, you consent to these transfers, which may have different data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">8. Third-Party Links</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Our Services may link to third-party sites or services. We are not responsible for their privacy practices. Please review their policies before providing personal data.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">9. Children's Privacy</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Animo by PawPal is designed for adults and pet owners. We do not knowingly collect data from children under 13. If we learn that we have collected such data, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">10. Changes to This Policy</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Significant changes will be communicated through the App, Site, or by email. Please review periodically to stay informed.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">11. Contact Us</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                If you have questions, concerns, or requests, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-3 lg:p-4 mt-3">
                <p className="text-sm lg:text-base text-gray-700">
                  <strong>Animo by PawPal Support</strong><br />
                  📧 Email: <Link href="mailto:support@getanimoapp.com" className="text-blue-600 hover:text-blue-800 underline">support@getanimoapp.com</Link>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 lg:mt-10 pt-6 border-t border-gray-200">
            <p className="text-center text-xs lg:text-sm text-gray-500">
              © 2025 Animo by PawPal LLC. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
