"use client";

import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen scroll-smooth">

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#66a4a8] via-[#91a6a6] to-[#eff3f3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full py-8 sm:py-12 lg:py-20">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl leading-tight text-[#ffffff] font-bold">
                      Animo
                    </h1>
                    <span className="text-sm sm:text-base lg:text-lg text-[#ffffff]/70 font-normal">
                      by PawPal
                    </span>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-[#ffffff]/90 font-medium">
                    Care, Capture, Connect
                  </p>
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 text-[#ffffff] font-medium">
                Built for the modern pet parent. Confidently care for your pets with personalized to-dos, smart reminders, and instant answers — all in one app!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <WaitlistForm variant="hero">
                  <Button
                    className="bg-white text-[#345045] hover:bg-gray-50 border border-gray-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-lg w-full sm:w-auto"
                    size="lg"
                  >
                    Get Early Access!
                  </Button>
                </WaitlistForm>
                <Button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent text-white hover:bg-white/10 border-2 border-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg w-full sm:w-auto"
                  size="lg"
                >
                  Discover Animo
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto flex items-center justify-center">
                <Image
                  src="/images/website content/home.png"
                  alt="App mockup - PawPal home screens"
                  width={720}
                  height={1440}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 720px"
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="text-2xl animate-bounce">🐾</div>
          </div>
        </div>
      </section>

      {/* Features at a Glance */}
      <section id="features" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#163031] mb-4 sm:mb-6">
              Everything You Need to Care for Your Pet
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With AI-powered guidance, Animo removes the unknowns of pet ownership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                icon: "🗓️",
                title: "Smart Calendar & Reminders",
                description: "Never miss a vet appointment, vaccination, or daily care task with intelligent reminders tailored to your pet's needs."
              },
              {
                icon: "🎯",
                title: "Personalized AI To-Dos",
                description: "Swipe through daily tasks generated specifically for your pet's age, type, and lifestyle. Accept or dismiss with a simple swipe."
              },
              {
                icon: "💬",
                title: "Pet Care Chat Assistant",
                description: "Powered by learning AI that's always improving, Animo gives you trusted answers around the clock."
              },
              {
                icon: "📖",
                title: "Pet Diary & Memories",
                description: "Track your pet's mood, log health updates, and capture precious moments with photos and memories."
              },
              {
                icon: "🐾",
                title: "Multi-Pet Profiles",
                description: "Manage all your pets in one app with easy switching between profiles and personalized care for each."
              },
              {
                icon: "🔔",
                title: "Notifications That Have Your Back",
                description: "Lock screen notifications and follow-ups ensure you never forget important pet care tasks or appointments."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm border border-[#6ba5a8]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/90 group-hover:border-[#6ba5a8]/50 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl sm:text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#163031] mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
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
                  alt="Swipeable to-do cards and reminder editing - PawPal"
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
                  alt="Lock screen notifications and upcoming reminders list - PawPal"
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
                  alt="Daily diary entry and friends' feed - PawPal"
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
      <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f8fcfc] to-[#eff3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#163031] mb-4 sm:mb-6">
              How It Works
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get started in minutes and transform how you care for your pets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm border border-[#6ba5a8]/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/90 group-hover:border-[#6ba5a8]/50 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl sm:text-3xl">📋</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#2D6063] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">1</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163031] mb-3 sm:mb-4">Create Your Pet's Profile in Seconds</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Add your pet's name, age, and breed, and Animo instantly tailors reminders and advice to their unique needs. ✨
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm border border-[#6ba5a8]/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/90 group-hover:border-[#6ba5a8]/50 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl sm:text-3xl">🎯</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#2D6063] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">2</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163031] mb-3 sm:mb-4">Swipe Through Smart Suggestions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Review personalized tasks generated just for your pet. Accept or dismiss with a quick swipe — Animo learns what matters to you. ✅
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm border border-[#6ba5a8]/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/90 group-hover:border-[#6ba5a8]/50 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl sm:text-3xl">📅</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#2D6063] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">3</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163031] mb-3 sm:mb-4">Stay Organized Automatically</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Accepted tasks flow straight into your calendar.<br />
                <span className="text-[#66a4a8]"></span> Notifications keep you on track without any extra setup. 🔔
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm border border-[#6ba5a8]/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/90 group-hover:border-[#6ba5a8]/50 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl sm:text-3xl">📖</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#2D6063] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">4</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163031] mb-3 sm:mb-4">Connect with Friends & Share </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Post a diary entry to capture your pet's day.<br />
                <span className="text-[#66a4a8]"></span> Share it with friends or keep it private — you're in control. 💬
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <WaitlistForm variant="cta">
              <Button
                className="bg-[#2D6063] text-white hover:bg-[#2a3f3a] px-8 py-4 text-base font-semibold rounded-lg shadow-lg"
                size="lg"
              >
                Start My Pet's Plan
              </Button>
            </WaitlistForm>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#163031] mb-4 sm:mb-6">
              What Pet Parents Are Saying
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See how Animo is helping pet owners feel more confident and connected to their pets
            </p>
          </div>

          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Testimonial 1 - Sarah M. */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold mr-3 text-xs sm:text-sm">
                  SM
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">Sarah M.</h4>
                  <p className="text-xs text-gray-500">First-time dog owner</p>
                </div>
              </div>
              <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                "I finally feel confident as a first-time puppy owner. Animo's AI to-dos take away all the guesswork!"
              </blockquote>
            </div>

            {/* Testimonial 2 - Mike R. */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white font-bold mr-3 text-xs sm:text-sm">
                  MR
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">Mike R.</h4>
                  <p className="text-xs text-gray-500">Multi-pet household</p>
                </div>
              </div>
              <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                "It's like having a vet in my pocket! The AI chat answers all my questions instantly."
              </blockquote>
            </div>

            {/* Testimonial 3 - Emma L. */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold mr-3 text-xs sm:text-sm">
                  EL
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">Emma L.</h4>
                  <p className="text-xs text-gray-500">Experienced pet owner</p>
                </div>
              </div>
              <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                "I love that Animo reminds me about things before I forget. The notifications actually work!"
              </blockquote>
            </div>
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl">
              {/* Testimonial 4 - Jessica T. */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold mr-3 text-xs sm:text-sm">
                    JT
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">Jessica T.</h4>
                    <p className="text-xs text-gray-500">Pet rescue volunteer</p>
                  </div>
                </div>
                <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                  "The pet diary feature is amazing! I love tracking my rescue dog's progress and sharing updates with friends."
                </blockquote>
              </div>

              {/* Testimonial 5 - Alex M. */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold mr-3 text-xs sm:text-sm">
                    AM
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">Alex M.</h4>
                    <p className="text-xs text-gray-500">Exotic pet owner</p>
                  </div>
                </div>
                <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                  "Finally, an app that understands all pets! My rabbit and bearded dragon both get personalized care plans."
                </blockquote>
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
      <section className="py-12 sm:py-16 lg:py-24 text-white bg-gradient-to-br from-[#6ba5a8] to-[#2D6063]" id="waitlist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Pet Care Made Simple.<br />
            More Time for What Truly Matters.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Join the community of modern pet parents making pet care effortless with Animo by PawPal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <WaitlistForm variant="cta">
              <Button
                className="bg-white text-[#345045] hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-lg w-full sm:w-auto"
                size="lg"
              >
                Get Early Access
              </Button>
            </WaitlistForm>
            <Link href="/blog">
              <Button
                className="bg-transparent text-white hover:bg-white/10 border-2 border-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg w-full sm:w-auto"
                size="lg"
              >
                Join the Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <a 
              href="https://www.tiktok.com/@getpawpal" 
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
              href="https://www.instagram.com/get.pawpal/" 
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
              href="https://x.com/getpawpal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#66a4a8] transition-colors"
              aria-label="Follow us on X (Twitter)"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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


