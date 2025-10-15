import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Terms Content */}
      <main className="max-w-3xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
        <div className="prose prose-sm lg:prose-base max-w-none">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#345045] mb-4 lg:mb-6">Terms of Service</h1>
          <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">Last Revised: 05-Oct-2025</p>

          <div className="space-y-4 lg:space-y-6">
            <section>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4 lg:mb-6">
                Welcome to Animo by PawPal! By accessing or using our services, including the Animo application (the "App"), website (the "Site"), and any associated services (the "Services"), you agree to comply with and be bound by these Terms of Service ("Terms" or "Agreement"). If you do not agree, you may not use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">1. Acceptance of Terms</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                These Terms govern your use of Animo by PawPal's Services. By using the Services, you agree to be bound by these Terms and any updates. Animo by PawPal may update these Terms from time to time, and your continued use constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">2. Eligibility</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                You must be at least 18 years old (or the age of majority in your jurisdiction). If you are between 13 and 17, you may only use the Services with the consent and supervision of a parent or legal guardian who agrees to these Terms. The Services are not directed to children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">3. Account Registration</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>To access certain features, you may need to create an account. You agree to:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li>Provide accurate and truthful information.</li>
                  <li>Keep your account details up to date.</li>
                  <li>Maintain the confidentiality of your login credentials.</li>
                  <li>Notify Animo by PawPal immediately of unauthorized use.</li>
                </ul>
                <p className="mt-3">You are responsible for all activity under your account.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">4. User Responsibilities</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li>Violate laws or regulations.</li>
                  <li>Upload malicious code or harmful content.</li>
                  <li>Impersonate others or misrepresent your identity.</li>
                  <li>Use the Services for unlawful, harmful, or abusive purposes.</li>
                  <li>Provide false or misleading information about yourself or your pet(s).</li>
                </ul>
                <p className="mt-3">Animo by PawPal may suspend or terminate accounts that violate these rules.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">5. Medical Disclaimer</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 lg:p-4">
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed font-medium">
                  <strong>Important:</strong> Animo by PawPal is not a substitute for professional veterinary care. The information, reminders, and AI-generated guidance provided by Animo are for general informational purposes only. Always consult a qualified veterinarian regarding your pet's health and medical needs. Reliance on the Services for medical decisions is at your own risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">6. Privacy and Data</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Your use of the Services is also governed by our Privacy Policy. Animo by PawPal may collect and process personal and pet-related information to operate and improve the Services. Third-party tools (e.g., payment processors, analytics) may apply their own privacy terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">7. User Content</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>You retain ownership of the content you share (e.g., pet profiles, images, posts). By submitting content, you grant Animo by PawPal a worldwide, non-exclusive, royalty-free license to use, display, and distribute it for providing and promoting the Services.</p>
                <p>You represent and warrant that you own or have permission to share such content and that it does not infringe third-party rights. Animo by PawPal may remove inappropriate or unlawful content.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">8. Fees and Payments</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Some features may require payment. By submitting payment details, you authorize Animo by PawPal or its payment partners to process charges. Payments are non-refundable unless otherwise stated. If payment fails, access to premium features may be suspended.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">9. Service Availability</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                We strive to provide continuous Services but do not guarantee uninterrupted availability. Downtime may occur due to maintenance, updates, technical issues, or factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">10. License to Use</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Animo by PawPal grants you a limited, non-exclusive, non-transferable license to use the Services for personal, non-commercial purposes. You may not copy, modify, reverse-engineer, or exploit the Services without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">11. Termination</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Animo by PawPal may suspend or terminate your account for violating these Terms or engaging in unlawful activity. You may terminate your account at any time through the App or Site.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">12. Intellectual Property</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                The Services, including software, design, trademarks, and branding, are owned by or licensed to Animo by PawPal. You may not use them without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">13. Limitation of Liability</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>To the fullest extent permitted by law, Animo by PawPal and its affiliates, officers, employees, and partners assume no liability whatsoever for any damages, losses, or claims arising out of or related to your use of the Services, including but not limited to:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li>Errors, omissions, or delays in the Services.</li>
                  <li>Loss of data, missed reminders, or scheduling errors.</li>
                  <li>Reliance on AI-generated suggestions, advice, or guidance.</li>
                  <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
                  <li>Any injury, harm, illness, or adverse outcome affecting pets or their wellbeing resulting from the use of information, recommendations, or features provided by the Animo app.</li>
                </ul>
                <p className="mt-3">You acknowledge that Animo by PawPal is a digital tool meant for informational and organizational purposes only and does not replace professional veterinary advice or care.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">14. Indemnification</h2>
              <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
                <p>You agree to indemnify and hold harmless Animo by PawPal, its affiliates, and team members from claims, damages, or expenses arising out of:</p>
                <ul className="list-disc list-inside space-y-1 ml-3 lg:ml-4">
                  <li>Your use of the Services.</li>
                  <li>Your violation of these Terms.</li>
                  <li>Infringement of third-party rights by your content.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">15. Dispute Resolution</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Any disputes shall be resolved by binding arbitration in North Carolina, USA, under the rules of the American Arbitration Association (AAA). You waive the right to bring claims in court or join class actions, except where prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">16. Governing Law</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                These Terms are governed by the laws of the State of North Carolina, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">17. Severability</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                If any provision is found invalid or unenforceable, the remaining provisions remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">18. Entire Agreement</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Animo by PawPal regarding the Services.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">19. Force Majeure</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Animo by PawPal is not liable for delays or failures due to circumstances beyond our control, including natural disasters, technical failures, or labor disputes.
              </p>
            </section>

            <section>
              <h2 className="text-lg lg:text-xl font-semibold text-[#345045] mb-2 lg:mb-3">20. Contact Us</h2>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                If you have questions about these Terms, contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-3 lg:p-4 mt-3">
                <p className="text-sm lg:text-base text-gray-700">
                  <strong>Animo by PawPal Support</strong><br />
                  📧 <Link href="mailto:support@getanimoapp.com" className="text-blue-600 hover:text-blue-800 underline">support@getanimoapp.com</Link>
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
