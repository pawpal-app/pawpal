'use client';

import Image from "next/image";

export function SocialSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f8fcfc] to-[#eff3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#163031] mb-4 sm:mb-6">
              Share with Fellow Pet Lovers
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              With Animo's social feed, you can follow friends and share adorable moments — all in one place.
              From first walks to birthday treats, see every update that makes pet parenting special.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Share diary entries, updates, or cute photos of your pets</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Celebrate milestones like "Gotcha Day" or first vet visits</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Discover local pet parents near you and build your own pet community</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-md lg:max-w-xl mx-auto overflow-hidden">
              {/* Social Feed Image */}
              <Image
                src="/images/website content/social-feed.png"
                alt="Animo Social Feed"
                width={600}
                height={400}
                sizes="(max-width: 640px) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
