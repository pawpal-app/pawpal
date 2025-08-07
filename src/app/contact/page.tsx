"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Navigation */}
      <header className="w-full bg-white border-b px-4 py-4 lg:px-8">
        <nav className="flex items-center justify-between max-w-2xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://ugc.same-assets.com/lDb0fXjL-jpPYAZZTJOdg7au2HDrnHxv.png"
              alt="PAWPAL Logo"
              className="h-8 w-8 object-cover"
            />
            <span className="text-xl font-bold text-[#2D6063] lg:text-[30px]">PAWPAL</span>
          </Link>
          {/* Back to Home */}
          <Link href="/">
            <Button variant="outline" className="text-[#345045] border-[#345045] hover:bg-[#345045] hover:text-white">
              ← Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
          {/* Title and Subtitle */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-[#2D6063] mb-2">Contact Support</h1>
            <p className="text-lg text-gray-600">
              Have a question or need help? Our team is here for you!
            </p>
          </div>

          {/* Send us a Message Form */}
          <form className="space-y-6 mb-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="How can we help you?"
              />
            </div>
            <Button type="submit" className="w-full bg-[#345045] hover:bg-[#2D6063] text-white">
              Send Message
            </Button>
          </form>

          {/* Direct Email */}
          <div className="text-center text-gray-600 mb-8">
            You can also reach us at:{" "}
            <a
              href="mailto:support@getpawpal.com"
              className="text-[#345045] underline hover:text-[#2D6063] transition-colors"
            >
              support@getpawpal.com
            </a>
          </div>

          {/* Emergency Notice */}
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded text-center">
            <span className="font-semibold text-red-700">Emergency Pet Care:</span>{" "}
            If your pet is experiencing a medical emergency, please contact your veterinarian or local animal hospital immediately. PawPal support is not equipped to handle urgent medical situations.
          </div>
        </div>
      </main>
    </div>
  );
}
