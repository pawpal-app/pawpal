"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FloatingChatWidget } from "@/components/FloatingChatWidget";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Header Navigation */}
      <header className="relative z-10 px-4 py-4 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://ugc.same-assets.com/lDb0fXjL-jpPYAZZTJOdg7au2HDrnHxv.png"
              alt="PAWPAL Logo"
              className="h-8 w-8 object-cover"
            />
            <span className="text-xl font-bold text-[#2D6063] lg:text-[30px]">PAWPAL</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#345045] transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-[#345045] transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#345045] transition-colors">How it Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#345045] transition-colors">Testimonials</a>
            <a href="#waitlist" className="text-gray-700 hover:text-[#345045] transition-colors">Waitlist</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#66a4a8] via-[#91a6a6] to-[#eff3f3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl leading-tight mb-6 text-[#ffffff]">
                <span className="font-bold">Meet PawPal.</span><br />
                <span className="text-2xl lg:text-4xl font-normal">Your Pet's Personal AI Assistant</span>
              </h1>
              <div className="w-20 h-1 bg-[#345045] mx-auto lg:mx-0 mb-8"></div>
              <p className="text-2xl mb-8 max-w-md mx-auto lg:mx-0 text-[#ffffff]">
                Your complete pet care companion, from personalized plans to instant answers
              </p>
              <WaitlistForm variant="hero">
                <Button
                  className="bg-white text-[#345045] hover:bg-gray-50 border border-gray-300 px-8 py-6 text-lg rounded-none"
                  size="lg"
                >
                  Join the Waitlist!
                </Button>
              </WaitlistForm>
            </div>

            {/* Right Content - Phone Mockups */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://ext.same-assets.com/482647744/2552424779.png"
                alt="PAWPAL App Screenshots"
                className="max-w-full h-auto w-[500px] lg:w-[600px]"
              />
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-[#345045] flex justify-center rounded-[9999px]">
            <div className="w-1 h-3 bg-[#345045] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Interactive Features Showcase */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#163031] mb-8">
              YOUR PARTNER IN PET PARENTHOOD
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              One smart app for daily routines, health tracking, and personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Feature Descriptions */}
            <div className="space-y-8">
              {[
                {
                  icon: "📔",
                  title: "Pet Diary & Mood Log",
                  description: "Capture precious memories and monitor your pet's well-being. Upload daily photos, log their mood and energy levels, and look back on your journey together with a built-in calendar."
                },
                {
                  icon: "✅",
                  title: "AI-Powered Daily Plan",
                  description: "Say goodbye to guesswork. Our AI generates a comprehensive, personalized to-do list for your pet each day, covering everything from feeding and exercise to training and health reminders."
                },
                {
                  icon: "🤖",
                  title: "Instant AI Chat Assistant",
                  description: "Have a question? Get instant, reliable advice from our AI assistant, 'Pal'. It's like having a pet care expert in your pocket, available 24/7 to help with any concern."
                },
                {
                  icon: "🐾",
                  title: "Multi-Pet Profiles",
                  description: "Manage your entire furry, feathered, or scaled family in one place. Create unique profiles for each pet and easily switch between them to view their individual plans and diaries."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-[#66a4a8]/10 to-[#345045]/10 border border-[#66a4a8]/20 shadow-lg"
                      : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 transition-colors ${
                        activeIndex === index ? "text-[#345045]" : "text-gray-600"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        activeIndex === index ? "text-gray-700" : "text-gray-500"
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Image Carousel */}
            <div className="relative">
              <Carousel
                className="w-full max-w-md mx-auto"
                setApi={(api) => {
                  if (api) {
                    api.on("select", () => {
                      setActiveIndex(api.selectedScrollSnap());
                    });
                  }
                }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="/screenshot-diary.png"
                          alt="Pet Diary & Mood Log"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="/screenshot-todo.png"
                          alt="AI-Powered Daily Plan"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="/screenshot-chat.png"
                          alt="Instant AI Chat Assistant"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="/screenshot-profiles.png"
                          alt="Multi-Pet Profiles"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-[#345045] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs. After Comparison Section */}
      <section id="how-it-works" className="py-20 bg-[#f8fcfc]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#163031] mb-8">
              From Pet Stress to Pet Bliss
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              See the dramatic difference PawPal makes in your pet parenting journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Before PawPal */}
            <div className="bg-[#ffffff] rounded-lg p-8 shadow-lg border-l-4 border-red-400">
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                <span className="mr-3">❌</span>
                The Old Way: Scattered & Stressful
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl mt-1">❌</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Scattered notes and missed appointments</h4>
                    <p className="text-gray-600 text-sm">Sticky notes, calendar alerts, and constant worry about what you might have forgotten.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl mt-1">❌</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Endless, unreliable Google searches</h4>
                    <p className="text-gray-600 text-sm">Hours spent searching for advice, never sure if the information is accurate or trustworthy.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl mt-1">❌</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Juggling multiple apps</h4>
                    <p className="text-gray-600 text-sm">Using separate apps for health symptoms, feeding schedules, walk tracking, and medications.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl mt-1">❌</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Generic, one-size-fits-all guidance</h4>
                    <p className="text-gray-600 text-sm">Following advice that doesn't consider your pet's specific breed, age, or health needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl mt-1">❌</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Constant worry and uncertainty</h4>
                    <p className="text-gray-600 text-sm">The nagging feeling that you're not doing enough or that you might be missing something important.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - After PawPal */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-400">
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <span className="mr-3">✅</span>
                The PawPal Way: Smart & Simple
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">✅</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">One organized hub for everything</h4>
                    <p className="text-gray-600 text-sm">All your pet's information, appointments, and care plans organized in one beautiful, easy-to-use app.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">✅</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Instant, trustworthy AI advice</h4>
                    <p className="text-gray-600 text-sm">Get reliable, personalized answers to any question, instantly from your AI assistant, 'Pal'</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">✅</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Unified health & wellness tracking</h4>
                    <p className="text-gray-600 text-sm">Monitor health, food, mood, and activity together to see the complete picture of their well-being.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">✅</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Truly personalized care plans</h4>
                    <p className="text-gray-600 text-sm">Receive AI-generated daily plans that adapt to your pet's unique needs and your family's lifestyle.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl mt-1">✅</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Confidence and peace of mind</h4>
                    <p className="text-gray-600 text-sm">Know you’re doing the best for your pet with smart reminders and comprehensive support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#eff3f3]" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#163031] mb-8">
              Loved by Pet Parents Everywhere
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how PAWPAL has transformed the way thousands of pet owners care for their beloved companions
            </p>
          </div>

          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Testimonial 1 - Sarah M. */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold mr-3">
                  SM
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Sarah M.</h4>
                </div>
              </div>
              <blockquote className="text-gray-800 text-lg leading-relaxed font-medium">
                "This app literally saved my dog's quality of life!"
              </blockquote>
            </div>

            {/* Testimonial 2 - Mike R. */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white font-bold mr-3">
                  MR
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Mike R.</h4>
                </div>
              </div>
              <blockquote className="text-gray-800 text-lg leading-relaxed font-medium">
                "Managing three cats used to be chaos. PAWPAL keeps track of everyone's schedules."
              </blockquote>
            </div>

            {/* Testimonial 3 - Emma L. */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold mr-3">
                  EL
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Emma L.</h4>
                </div>
              </div>
              <blockquote className="text-gray-800 text-lg leading-relaxed font-medium">
                "Finally, an app that understands bird care! My cockatiel has never been happier."
              </blockquote>
            </div>
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {/* Testimonial 4 - Jessica T. */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold mr-3">
                    JT
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Jessica T.</h4>
                  </div>
                </div>
                <blockquote className="text-gray-800 text-lg leading-relaxed font-medium">
                  "With 2 dogs, 1 cat, and a bearded dragon, PAWPAL keeps me sane!"
                </blockquote>
              </div>

              {/* Testimonial 5 - Alex M. */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold mr-3">
                    AM
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Alex M.</h4>
                  </div>
                </div>
                <blockquote className="text-gray-800 text-lg leading-relaxed font-medium">
                  "PAWPAL is the first app that truly understands reptile care. The reminders are spot on!"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 mt-16 border-t border-gray-300">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#163031] mb-2">5K+</div>
              <div className="text-gray-600">Happy Pet Parents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#163031] mb-2">100K+</div>
              <div className="text-gray-600">Pets Cared For</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#163031] mb-2">4.9★</div>
              <div className="text-gray-600">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#163031] mb-2">98%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-center text-gray-500 text-sm mb-6">Trusted by veterinarians and pet care professionals</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-gray-600 font-semibold">🏥 VCA Animal Hospitals</div>
              <div className="text-gray-600 font-semibold">🐾 ASPCA Partner</div>
              <div className="text-gray-600 font-semibold">📱 Apple Design Award</div>
              <div className="text-gray-600 font-semibold">🏆 Google Play Editor's Choice</div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-20 text-white bg-[#2D6063]" id="waitlist">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            You spoil them already. Why not make it official?
          </h2>
          <WaitlistForm variant="cta">
            <Button
              className="bg-white text-[#345045] hover:bg-gray-50 px-12 py-6 text-xl font-semibold rounded-none"
              size="lg"
            >
              Get Early Access
            </Button>
          </WaitlistForm>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.tiktok.com/@getpawpal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Follow us on TikTok"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/get.pawpal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/getpawpal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Follow us on X (Twitter)"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Copyright and Links */}
          <div className="text-center text-gray-500 space-y-4">
            <p>Copyright © 2025 PAWPAL LLC</p>
            <div className="flex justify-center space-x-4 text-sm">
              <Link href="/terms" className="hover:text-gray-700 transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-gray-700 transition-colors">Contact Support</Link>
            </div>
            
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      <FloatingChatWidget />
    </div>
  );
}


