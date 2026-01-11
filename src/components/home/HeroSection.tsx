'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";

export function HeroSection() {
  return (
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
  );
}
