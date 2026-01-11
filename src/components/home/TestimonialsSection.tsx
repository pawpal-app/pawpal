'use client';

export function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#fafbfb] to-white overflow-hidden" id="testimonials">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#66a4a8]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#91a6a6]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#163031] mb-4 sm:mb-6 leading-tight">
            What Pet Parents Are Saying
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Animo is helping pet owners feel more confident and connected to their pets
          </p>
        </div>

        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Testimonial 1 - Sarah M. */}
          <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#66a4a8]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                </svg>
              </div>
              
              <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium mb-6">
                "I finally feel confident as a first-time puppy owner. Animo's AI to-dos take away all the guesswork!"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold mr-3 sm:mr-4 shadow-lg">
                  SM
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-800">Sarah M.</h4>
                  <p className="text-xs sm:text-sm text-gray-500">First-time dog owner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 - Mike R. */}
          <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#66a4a8]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                </svg>
              </div>
              
              <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium mb-6">
                "It's like having a vet in my pocket! The AI chat answers all my questions instantly."
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white font-bold mr-3 sm:mr-4 shadow-lg">
                  MR
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-800">Mike R.</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Multi-pet household</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 - Emma L. */}
          <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#66a4a8]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                </svg>
              </div>
              
              <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium mb-6">
                "I love that Animo reminds me about things before I forget. The notifications actually work!"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold mr-3 sm:mr-4 shadow-lg">
                  EL
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-800">Emma L.</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Experienced pet owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - 2 Cards Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
            {/* Testimonial 4 - Jessica T. */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
              <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[#66a4a8]/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                  </svg>
                </div>
                
                <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium mb-6">
                  "The pet diary feature is amazing! I love tracking my rescue dog's progress and sharing updates with friends."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold mr-3 sm:mr-4 shadow-lg">
                    JT
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-800">Jessica T.</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Pet rescue volunteer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 - Alex M. */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
              <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[#66a4a8]/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                  </svg>
                </div>
                
                <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium mb-6">
                  "Finally, an app that understands all pets! My rabbit and bearded dragon both get personalized care plans."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold mr-3 sm:mr-4 shadow-lg">
                    AM
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-800">Alex M.</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Exotic pet owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
