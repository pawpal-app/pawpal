'use client';

import Image from "next/image";

export function NotificationsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-md lg:max-w-xl lg:pr-8 mx-auto overflow-hidden">
              <Image
                src="/images/website content/notifications-screenshot.png"
                alt="Lock screen notifications and upcoming reminders list - Animo"
                width={600}
                height={338}
                sizes="(max-width: 640px) 100vw, 600px"
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#163031] mb-4 sm:mb-6">
              Reminders That Actually Work
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Animo keeps you on track with gentle nudges — lock screen notifications, calendar reminders, and follow-ups if you forget. Never miss an appointment, medication, or daily care task.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Lock screen notifications that you can't ignore</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Follow-up reminders if you miss a task</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-sm text-gray-700">Smart timing based on your pet's schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
