'use client';

import Image from "next/image";

export function AIToDosSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f8fcfc] to-[#eff3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#163031] mb-4 sm:mb-6">
              Never Wonder What's Next
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Animo generates daily tasks tailored to your pet's age, type, and needs. Swipe to accept or dismiss, just like your favorite apps. From puppy vaccines to senior checkups, Animo takes the guesswork out of pet care.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Personalized tasks based on your pet's breed, age, and health status</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Swipe interface makes it easy to accept or skip tasks</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Adapts to your pet's changing needs over time</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-md lg:max-w-xl mx-auto overflow-hidden">
              <Image
                src="/images/website content/to-dos.png"
                alt="Swipeable to-do cards and reminder editing - Animo"
                width={600}
                height={338}
                sizes="(max-width: 640px) 100vw, 600px"
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
