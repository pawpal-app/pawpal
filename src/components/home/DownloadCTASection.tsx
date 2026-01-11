'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DownloadCTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 text-white bg-gradient-to-br from-[#6ba5a8] via-[#66a4a8] to-[#2D6063] overflow-hidden">
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
  );
}
