"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { emailTemplates, personalizeEmail, type WaitlistSignup, type ContactSubmission } from "@/lib/email-automation";
import Link from "next/link";

export default function EmailPreview() {
  const [selectedTemplate, setSelectedTemplate] = useState<keyof typeof emailTemplates>('welcome');
  const [previewData, setPreviewData] = useState({
    name: "Sarah Johnson",
    email: "sarah@example.com",
    petName: "Luna",
    petType: "dog",
    petAge: "adult",
    interests: "AI-powered care plans and health tracking",
    subject: "Question about premium features",
    message: "I'm interested in learning more about the premium features and pricing plans for PAWPAL."
  });

  const handleDataChange = (field: string, value: string) => {
    setPreviewData(prev => ({ ...prev, [field]: value }));
  };

  const generatePreview = () => {
    const template = emailTemplates[selectedTemplate];
    let mockData: WaitlistSignup | ContactSubmission;

    if (selectedTemplate === 'contactConfirmation') {
      mockData = {
        name: previewData.name,
        email: previewData.email,
        subject: previewData.subject,
        category: "general",
        message: previewData.message,
        timestamp: new Date().toISOString()
      };
    } else {
      mockData = {
        name: previewData.name,
        email: previewData.email,
        petName: previewData.petName,
        petType: previewData.petType,
        petAge: previewData.petAge,
        interests: previewData.interests,
        signupSource: "hero",
        timestamp: new Date().toISOString()
      };
    }

    return personalizeEmail(template.html, mockData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://ext.same-assets.com/482647744/2678245851.png"
                alt="PAWPAL Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-[#345045]">PAWPAL</span>
            </Link>
            <span className="text-gray-400">|</span>
            <h1 className="text-2xl font-bold text-gray-800">Email Preview System</h1>
          </div>
          <Link href="/">
            <Button variant="outline" className="text-[#345045] border-[#345045] hover:bg-[#345045] hover:text-white">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Email Template Preview</h2>

              {/* Template Selection */}
              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="template">Email Template</Label>
                  <Select value={selectedTemplate} onValueChange={(value) => setSelectedTemplate(value as keyof typeof emailTemplates)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="welcome">🐾 Welcome Email</SelectItem>
                      <SelectItem value="petCareTips">🎯 Pet Care Tips</SelectItem>
                      <SelectItem value="launchNotification">🚀 Launch Notification</SelectItem>
                      <SelectItem value="contactConfirmation">✅ Contact Confirmation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Sample Data Controls */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Preview Data</h3>

                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={previewData.name}
                    onChange={(e) => handleDataChange("name", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={previewData.email}
                    onChange={(e) => handleDataChange("email", e.target.value)}
                  />
                </div>

                {selectedTemplate !== 'contactConfirmation' && (
                  <>
                    <div>
                      <Label htmlFor="petName">Pet Name</Label>
                      <Input
                        id="petName"
                        value={previewData.petName}
                        onChange={(e) => handleDataChange("petName", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="petType">Pet Type</Label>
                      <Select value={previewData.petType} onValueChange={(value) => handleDataChange("petType", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dog">🐕 Dog</SelectItem>
                          <SelectItem value="cat">🐱 Cat</SelectItem>
                          <SelectItem value="bird">🐦 Bird</SelectItem>
                          <SelectItem value="rabbit">🐰 Rabbit</SelectItem>
                          <SelectItem value="reptile">🦎 Reptile</SelectItem>
                          <SelectItem value="fish">🐠 Fish</SelectItem>
                          <SelectItem value="hamster">🐹 Hamster</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {selectedTemplate === 'contactConfirmation' && (
                  <>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={previewData.subject}
                        onChange={(e) => handleDataChange("subject", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Input
                        id="message"
                        value={previewData.message}
                        onChange={(e) => handleDataChange("message", e.target.value)}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Email Sequence Info */}
              <div className="mt-8 p-4 bg-[#f0f9ff] border border-[#66a4a8]/20 rounded-lg">
                <h4 className="font-semibold text-[#345045] mb-2">🤖 Automation Sequence</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  {selectedTemplate === 'contactConfirmation' ? (
                    <p>• Sent immediately after contact form submission</p>
                  ) : (
                    <>
                      <p>• Welcome: Sent immediately</p>
                      <p>• Pet Tips: Sent after 2 days</p>
                      <p>• More Tips: Sent after 7 days</p>
                      <p>• Launch: Sent after 14 days</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Email Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Email Header */}
              <div className="p-6 border-b bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Preview</h3>
                    <p className="text-sm text-gray-600">
                      Subject: {personalizeEmail(emailTemplates[selectedTemplate].subject,
                        selectedTemplate === 'contactConfirmation'
                          ? { ...previewData, timestamp: new Date().toISOString() } as ContactSubmission
                          : { ...previewData, signupSource: 'hero', timestamp: new Date().toISOString() } as WaitlistSignup
                      )}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    To: {previewData.email}
                  </div>
                </div>
              </div>

              {/* Email Content */}
              <div className="p-0">
                <div
                  className="email-preview"
                  dangerouslySetInnerHTML={{ __html: generatePreview() }}
                  style={{ maxWidth: '100%', overflow: 'hidden' }}
                />
              </div>
            </div>

            {/* Feature Information */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="font-bold text-[#345045] mb-4">📧 Email Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✅ Personalized content with user data</li>
                  <li>✅ Pet-specific care tips</li>
                  <li>✅ Responsive email design</li>
                  <li>✅ Professional branding</li>
                  <li>✅ Call-to-action buttons</li>
                  <li>✅ Social media links</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h3 className="font-bold text-[#345045] mb-4">🤖 Automation Benefits</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✅ Immediate welcome experience</li>
                  <li>✅ Educational pet care content</li>
                  <li>✅ Builds anticipation for launch</li>
                  <li>✅ Reduces support ticket volume</li>
                  <li>✅ Increases user engagement</li>
                  <li>✅ Professional brand image</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
