'use client';

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-[#fafbfb] to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#66a4a8]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#91a6a6]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#163031] mb-5 sm:mb-6 leading-tight">
            Everything You Need to Care for Your Pet
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With AI-powered guidance, Animo removes the unknowns of pet ownership
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              icon: "calendar",
              title: "Smart Calendar & Reminders",
              description: "Never miss a vet appointment, vaccination, or daily care task with intelligent reminders tailored to your pet's needs."
            },
            {
              icon: "target",
              title: "Personalized AI To-Dos",
              description: "Swipe through daily tasks generated specifically for your pet's age, type, and lifestyle. Accept or dismiss with a simple swipe."
            },
            {
              icon: "chat",
              title: "Pet Care Chat Assistant",
              description: "Powered by learning AI that's always improving, Animo gives you trusted answers around the clock."
            },
            {
              icon: "diary",
              title: "Pet Diary & Memories",
              description: "Track your pet's mood, log health updates, and capture precious moments with photos and memories."
            },
            {
              icon: "pets",
              title: "Multi-Pet Profiles",
              description: "Manage all your pets in one app with easy switching between profiles and personalized care for each."
            },
            {
              icon: "bell",
              title: "Notifications That Have Your Back",
              description: "Lock screen notifications and follow-ups ensure you never forget important pet care tasks or appointments."
            }
          ].map((feature, index) => {
            // Icon component renderer
            const renderIcon = () => {
              const iconClass = "w-10 h-10 sm:w-12 sm:h-12 text-[#66a4a8] transform group-hover:scale-110 transition-transform duration-500";
              switch (feature.icon) {
                case "calendar":
                  return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  );
                case "target":
                  return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  );
                case "chat":
                  return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  );
                case "diary":
                  return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  );
                case "pets":
                  return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  );
                case "bell":
                  return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  );
                default:
                  return null;
              }
            };

            return (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#66a4a8]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#66a4a8]/10 to-[#91a6a6]/10 border-2 border-[#66a4a8]/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:border-[#66a4a8]/40 group-hover:bg-gradient-to-br group-hover:from-[#66a4a8]/20 group-hover:to-[#91a6a6]/20 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    {renderIcon()}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#163031] mb-4 group-hover:text-[#66a4a8] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
