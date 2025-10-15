"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { waitlistWelcomeTemplate } from "@/lib/email-automation";
import Link from "next/link";

export default function EmailPreview() {
  // --- STATE ---
  // Simplified state to only hold data for the welcome email.
  const [previewData, setPreviewData] = useState({
    name: "Sarah Johnson",
    email: "sarah@example.com",
    petName: "Luna",
    petType: "dog",
  });

  // --- HANDLERS ---
  const handleDataChange = (field: string, value: string) => {
    setPreviewData(prev => ({ ...prev, [field]: value }));
  };

  // --- RENDER LOGIC ---
  // Personalize the HTML with the current state data before rendering.
  const personalizedHtml = waitlistWelcomeTemplate.html
    .replace(/\{\{name\}\}/g, previewData.name)
    .replace(/\{\{petName\}\}/g, previewData.petName)
    .replace(/\{\{petType\}\}/g, previewData.petType);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://ext.same-assets.com/482647744/2678245851.png"
                alt="Animo by PawPal Logo"
                className="h-8 w-8"
              />
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-bold text-[#345045]">Animo</span>
                <span className="text-sm text-[#345045]/70">by PawPal</span>
              </div>
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
              <h2 className="text-xl font-bold text-gray-800 mb-6">Waitlist Welcome Email</h2>
              
              {/* Sample Data Controls - Simplified for one template */}
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
                      {/* Display the static subject of the single template */}
                      Subject: {waitlistWelcomeTemplate.subject}
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
                  dangerouslySetInnerHTML={{ __html: personalizedHtml }}
                  style={{ maxWidth: '100%', overflow: 'hidden' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}