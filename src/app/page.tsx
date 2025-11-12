"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AppIcon } from "@/components/AppIcon";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {

  return (
    <div className="min-h-screen scroll-smooth">

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#66a4a8] via-[#91a6a6] to-[#eff3f3] overflow-hidden">
        {/* Animated Background Elements */}
        <BackgroundPaths />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full py-12 sm:py-16 lg:py-24">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Badge/Tag */}
              <div className="flex justify-center lg:justify-start mb-4">
              </div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-white font-extrabold tracking-tight">
                    Animo
                  </h1>
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-semibold tracking-wide">
                  Care, Capture, Connect
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 text-white/90 font-medium leading-relaxed">
                Built for the modern pet parent. Confidently care for your pets with personalized to-dos, smart reminders, and instant answers — all in one app!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
                <a
                  href="https://apps.apple.com/us/app/animo-care-capture-connect/id6754126492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group"
                >
                  <Button
                    className="bg-white text-[#345045] hover:bg-gray-50 hover:scale-105 active:scale-95 border-0 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 w-full sm:w-auto"
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      Download on App Store
                    </span>
                  </Button>
                </a>
                <Button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:scale-105 active:scale-95 border-2 border-white/30 hover:border-white/50 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                  size="lg"
                >
                  Discover Animo
                </Button>
              </div>

              {/* App Store Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/90 font-semibold text-sm sm:text-base">5.0</span>
                <span className="text-white/70 text-xs sm:text-sm">App Store</span>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base font-medium">AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base font-medium">Free to Use</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base font-medium">All Pets Welcome</span>
                </div>
              </div>
            </div>

            {/* Right Content - App Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-white/20 rounded-[3rem] blur-3xl -z-10 scale-110"></div>
                
                {/* Phone mockup with shadow */}
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/website content/home.png"
                    alt="App mockup - PawPal home screens"
                    width={720}
                    height={1440}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 720px"
                    priority
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Scroll to features"
          >
            <div className="text-3xl animate-bounce">🐾</div>
          </button>
        </div>
      </section>

      {/* Features at a Glance */}
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

      {/* AI To-Dos Section */}
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

      {/* Smart Notifications Section */}
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

      {/* Pet Diary Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f8fcfc] to-[#eff3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#163031] mb-4 sm:mb-6">
                Capture Every Moment
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Track your pet's mood, log health updates, and upload daily photos. Keep it private or share with friends in your Animo feed — building a history you'll cherish for years.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Daily mood and health tracking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Photo uploads and memory keeping</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Share with friends or keep private</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full max-w-md lg:max-w-xl mx-auto overflow-hidden">
                <Image
                  src="/images/website content/diary.png"
                  alt="Daily diary entry and friends' feed - Animo"
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

      {/* AI Chat Section */}
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

      {/* Social Feature Section */}
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

      {/* Multi-Pet Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-md lg:max-w-xl lg:pr-8 mx-auto overflow-hidden">
                <Image
                  src="/images/website content/pet-profiles.png"
                  alt="Multi-pet profiles and onboarding setup - Animo"
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
                One App, All Your Pets
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Dogs, cats, rabbits, etc. — Animo makes it simple to add multiple pets and switch between them. Each profile gets personalized to-dos and reminders tailored to their unique needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Multiple pet profiles in one app</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Easy switching between pets</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#66a4a8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Individualized care for each pet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="border-t-2 border-gray-300 opacity-40"></div>
        </div>
      </div>

      {/* How It Works Section */}
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


      {/* Testimonials Section */}
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

      {/* Section Divider */}
      <div className="bg-[#ffffff] pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="border-t-2 border-gray-300 opacity-40"></div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 text-white bg-gradient-to-br from-[#6ba5a8] via-[#66a4a8] to-[#2D6063] overflow-hidden" id="waitlist">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-5 sm:mb-6 leading-tight">
            Pet Care Made Simple.<br />
            More Time for What Truly Matters.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join the community of modern pet parents making pet care effortless with Animo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
            <a
              href="https://apps.apple.com/us/app/animo-care-capture-connect/id6754126492"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <Button
                className="bg-white text-[#345045] hover:bg-gray-50 hover:scale-105 active:scale-95 border-0 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 w-full sm:w-auto"
                size="lg"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </span>
              </Button>
            </a>
            <Link href="/blog">
              <Button
                className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:scale-105 active:scale-95 border-2 border-white/30 hover:border-white/50 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                size="lg"
              >
                Join the Community
              </Button>
            </Link>
          </div>

          {/* App Store Rating */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/90 font-semibold text-sm sm:text-base">5.0</span>
            <span className="text-white/70 text-xs sm:text-sm">App Store</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <a 
              href="https://www.tiktok.com/@getanimoapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#66a4a8] transition-colors"
              aria-label="Follow us on TikTok"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/getanimoapp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#66a4a8] transition-colors"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/getanimo_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#66a4a8] transition-colors"
              aria-label="Follow us on X (Twitter)"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/getanimoapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#66a4a8] transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.5A1.5 1.5 0 1 1 8 7a1.5 1.5 0 0 1-1.5 1.5zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>
          </div>

          {/* Copyright and Links */}
          <div className="text-center text-gray-500 space-y-4">
            <p className="text-xs">Copyright © 2025 Animo by PAWPAL LLC. All rights reserved.</p>
            <div className="flex justify-center space-x-4 sm:space-x-6 text-xs">
              <Link href="/terms" className="hover:text-[#66a4a8] transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-[#66a4a8] transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-[#66a4a8] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


