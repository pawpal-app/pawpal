'use client';

import Image from "next/image";

export function AIChatSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content - AI Chat Screenshot */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="/images/website content/ai-chat.png"
              alt="AI Chat Assistant Screenshot"
              width={600}
              height={900}
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#163031] mb-4 sm:mb-6">
              Instant Answers, Anytime
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Got a quick question? Just ask Animo. Our AI assistant is here 24/7 with trustworthy pet-care insights — from diet concerns to training tips. Chat history makes it easy to look back later.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">24/7 AI assistance for any pet care question</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Full chat history for easy reference</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Trustworthy responses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
