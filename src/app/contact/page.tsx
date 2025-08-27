"use client";

// Import the necessary hooks from React and React DOM
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";

// Import your UI components and other utilities
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

// Import the server action we created
import { sendEmail } from "../actions";

// Define the initial state for our form's response
const initialState = {
  error: '',
  success: '',
};

export default function ContactPage() {
  // Set up the useFormState hook to manage form state
  const [state, formAction] = useFormState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Use an effect to reset the form if the submission was successful
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-8 lg:py-12 px-4">
        <div className="w-full max-w-lg lg:max-w-2xl bg-white rounded-lg shadow-lg p-4 lg:p-6">
          {/* Title and Subtitle */}
          <div className="mb-6 lg:mb-8 text-center">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#2D6063] mb-2">Contact Support</h1>
            <p className="text-sm lg:text-base text-gray-600">
              Have a question or need help? Our team is here for you!
            </p>
          </div>

          {/* Contact Form */}
          <form ref={formRef} action={formAction} className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
            <div>
              <label htmlFor="name" className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your Name"
                className="text-sm lg:text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@email.com"
                className="text-sm lg:text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="How can we help you?"
                className="text-sm lg:text-base"
              />
            </div>

            {/* Display Success or Error Messages */}
            {state.success && <p className="text-xs lg:text-sm text-green-600">{state.success}</p>}
            {state.error && <p className="text-xs lg:text-sm text-red-600">{state.error}</p>}

            <Button type="submit" className="w-full bg-[#345045] hover:bg-[#2D6063] text-white text-sm lg:text-base py-2 lg:py-3">
              Send Message
            </Button>
          </form>

          {/* Direct Email Link */}
          <div className="text-center text-xs lg:text-sm text-gray-600 mb-6 lg:mb-8">
            You can also reach us at:{" "}
            <a
              href="mailto:getpawpal.app@gmail.com"
              className="text-[#345045] underline hover:text-[#2D6063] transition-colors"
            >
              getpawpal.app@gmail.com
            </a>
          </div>

          {/* Emergency Notice */}
          <div className="mt-6 lg:mt-8 p-3 lg:p-4 bg-red-50 border border-red-200 rounded text-center">
            <span className="font-semibold text-red-700 text-xs lg:text-sm">Emergency Pet Care:</span>{" "}
            <span className="text-xs lg:text-sm text-red-700">If your pet is experiencing a medical emergency, please contact your veterinarian or local animal hospital immediately. PawPal support is not equipped to handle urgent medical situations.</span>
          </div>
        </div>
      </main>
    </div>
  );
}