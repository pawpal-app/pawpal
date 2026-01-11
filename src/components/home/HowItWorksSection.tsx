'use client';

import { AppIcon } from "@/components/AppIcon";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#fafbfb] to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#66a4a8]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#91a6a6]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#163031] mb-4 sm:mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started in minutes and transform how you care for your pets
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {/* Step 1 */}
          <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out text-center">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="relative mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#66a4a8]/10 to-[#91a6a6]/10 border-2 border-[#66a4a8]/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:border-[#66a4a8]/40 group-hover:bg-gradient-to-br group-hover:from-[#66a4a8]/20 group-hover:to-[#91a6a6]/20 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#66a4a8] transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#2D6063] to-[#66a4a8] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm sm:text-base">1</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163031] mb-3 sm:mb-4 group-hover:text-[#66a4a8] transition-colors duration-300">
                Create Your Pet's Profile in Seconds
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Add your pet's name, age, and breed, and Animo instantly tailors reminders and advice to their unique needs. ✨
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="relative mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#66a4a8]/10 to-[#91a6a6]/10 border-2 border-[#66a4a8]/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:border-[#66a4a8]/40 group-hover:bg-gradient-to-br group-hover:from-[#66a4a8]/20 group-hover:to-[#91a6a6]/20 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#66a4a8] transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#2D6063] to-[#66a4a8] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm sm:text-base">2</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163031] mb-3 sm:mb-4 group-hover:text-[#66a4a8] transition-colors duration-300">
                Swipe Through Smart Suggestions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Review personalized tasks generated just for your pet. Accept or dismiss with a quick swipe — Animo learns what matters to you. ✅
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="relative mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#66a4a8]/10 to-[#91a6a6]/10 border-2 border-[#66a4a8]/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:border-[#66a4a8]/40 group-hover:bg-gradient-to-br group-hover:from-[#66a4a8]/20 group-hover:to-[#91a6a6]/20 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#66a4a8] transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#2D6063] to-[#66a4a8] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm sm:text-base">3</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163031] mb-3 sm:mb-4 group-hover:text-[#66a4a8] transition-colors duration-300">
                Stay Organized Automatically
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Accepted tasks flow straight into your calendar. Notifications keep you on track without any extra setup. 🔔
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="relative mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#66a4a8]/10 to-[#91a6a6]/10 border-2 border-[#66a4a8]/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:border-[#66a4a8]/40 group-hover:bg-gradient-to-br group-hover:from-[#66a4a8]/20 group-hover:to-[#91a6a6]/20 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#66a4a8] transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#2D6063] to-[#66a4a8] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm sm:text-base">4</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163031] mb-3 sm:mb-4 group-hover:text-[#66a4a8] transition-colors duration-300">
                Connect with Friends & Share
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Post a diary entry to capture your pet's day. Share it with friends or keep it private — you're in control. 💬
              </p>
            </div>
          </div>
        </div>

        {/* App Download */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-block">
            <p className="text-base sm:text-lg text-gray-600 mb-4 font-medium">Get started today</p>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <AppIcon size="md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
