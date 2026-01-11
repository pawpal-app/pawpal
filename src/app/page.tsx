"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AIToDosSection } from "@/components/home/AIToDosSection";
import { NotificationsSection } from "@/components/home/NotificationsSection";
import { PetDiarySection } from "@/components/home/PetDiarySection";
import { AIChatSection } from "@/components/home/AIChatSection";
import { SocialSection } from "@/components/home/SocialSection";
import { MultiPetSection } from "@/components/home/MultiPetSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { DownloadCTASection } from "@/components/home/DownloadCTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      <HeroSection />
      <FeaturesSection />
      <AIToDosSection />
      <NotificationsSection />
      <PetDiarySection />
      <AIChatSection />
      <SocialSection />
      <MultiPetSection />
      
      {/* Section Divider */}
      <div className="bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="border-t-2 border-gray-300 opacity-40"></div>
        </div>
      </div>

      <HowItWorksSection />
      <TestimonialsSection />

      {/* Section Divider */}
      <div className="bg-[#ffffff] pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="border-t-2 border-gray-300 opacity-40"></div>
        </div>
      </div>

      <DownloadCTASection />
      <Footer />
    </div>
  );
}
