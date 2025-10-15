"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WaitlistFormProps {
  children: React.ReactNode;
  variant?: "hero" | "cta";
}

interface FormData {
  name: string;
  email: string;
  petName: string;
  petType: string;
  petAge: string;
  interests: string;
}

export function WaitlistForm({ children, variant = "hero" }: WaitlistFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    petName: "",
    petType: "",
    petAge: "",
    interests: "",
  });

  const totalSteps = 3;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          petName: formData.petName,
          petType: formData.petType,
          petAge: formData.petAge,
          interests: formData.interests,
          signupSource: variant
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        console.log('✅ Waitlist signup successful:', result);

        setTimeout(() => {
          setIsSubmitted(false);
          setIsOpen(false);
          setCurrentStep(1);
          setFormData({
            name: "",
            email: "",
            petName: "",
            petType: "",
            petAge: "",
            interests: "",
          });
        }, 15000);
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.petName && formData.petType;
      case 3:
        return true; // Optional fields
      default:
        return false;
    }
  };

  const canProceed = isStepValid(currentStep);
  const isFormValid = formData.name && formData.email && formData.petName && formData.petType;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-[95vh] overflow-y-auto p-0 bg-gradient-to-br from-white via-[#f8fcfc] to-white">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-[#66a4a8] via-[#91a6a6] to-[#66a4a8] p-6 text-white rounded-t-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                <span className="text-3xl">🐾</span>
                Join the Animo Family
              </DialogTitle>
              <p className="text-[#eff3f3] mt-2 text-sm text-center">
                Get early access to AI-powered pet care
              </p>
            </DialogHeader>
            
            {/* Progress indicator */}
            <div className="flex items-center justify-center mt-6 space-x-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i + 1 <= currentStep
                      ? "bg-white w-8"
                      : "bg-white/30 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-4xl">🎉</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#2D6063] mb-3">
                  Welcome to the Animo Family!
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Thank you for signing up! We'll keep you updated on our launch and send you exclusive early access when we're ready.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-sm">
                    <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                      <span className="text-lg">🎯</span>
                      You're now on the list for early access to Animo's AI-powered pet care features!
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl border border-blue-200 shadow-sm">
                    <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <span className="text-lg">📧</span>
                      Check your email!
                    </h4>
                    <p className="text-xs text-blue-700 mb-3">
                      We've sent you a welcome email to confirm your spot on the waitlist.
                    </p>
                    <p className="text-xs text-blue-700">
                      <strong>What's next?</strong> We're working hard to bring you the best pet care experience. You'll be among the first to know when Animo is ready to launch!
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 shadow-sm">
                    <h4 className="text-sm font-semibold text-purple-800 mb-2 flex items-center gap-2">
                      <span className="text-lg">🐾</span>
                      While you wait...
                    </h4>
                    <p className="text-xs text-purple-700 mb-2">
                      Follow us on social media for pet care tips and behind-the-scenes development updates!
                    </p>
                    <div className="flex gap-3 justify-center mt-3">
                      <a 
                        href="https://www.instagram.com/get.pawpal/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full transition-colors duration-200"
                      >
                        Instagram
                      </a>
                      <a 
                        href="https://x.com/getpawpal" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full transition-colors duration-200"
                      >
                        X
                      </a>
                      <a 
                        href="https://www.tiktok.com/@getpawpal" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full transition-colors duration-200"
                      >
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#66a4a8] to-[#2D6063] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl">👤</span>
                      </div>
                      <h3 className="text-xl font-semibold text-[#2D6063] mb-2">Tell us about yourself</h3>
                      <p className="text-gray-600 text-sm">We'll personalize your experience</p>
                    </div>

                    <div className="max-w-md mx-auto space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <span>✨</span>Your Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="h-12 border-2 border-gray-200 focus:border-[#66a4a8] focus:ring-2 focus:ring-[#66a4a8]/20 transition-all duration-200 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <span>📧</span>Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="h-12 border-2 border-gray-200 focus:border-[#66a4a8] focus:ring-2 focus:ring-[#66a4a8]/20 transition-all duration-200 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Pet Information */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#66a4a8] to-[#2D6063] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl">🐕</span>
                      </div>
                      <h3 className="text-xl font-semibold text-[#2D6063] mb-2">Meet your furry friend</h3>
                      <p className="text-gray-600 text-sm">Help us create personalized care plans</p>
                    </div>

                    <div className="max-w-md mx-auto space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="petName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <span>🐾</span>Pet's Name *
                        </Label>
                        <Input
                          id="petName"
                          type="text"
                          placeholder="e.g., Luna, Max, Charlie"
                          value={formData.petName}
                          onChange={(e) => handleInputChange("petName", e.target.value)}
                          required
                          className="h-12 border-2 border-gray-200 focus:border-[#66a4a8] focus:ring-2 focus:ring-[#66a4a8]/20 transition-all duration-200 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="petType" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <span>🏷️</span>Pet Type *
                        </Label>
                        <Select value={formData.petType} onValueChange={(value) => handleInputChange("petType", value)}>
                          <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#66a4a8] focus:ring-2 focus:ring-[#66a4a8]/20 transition-all duration-200 rounded-xl">
                            <SelectValue placeholder="Select pet type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dog">🐕 Dog</SelectItem>
                            <SelectItem value="cat">🐱 Cat</SelectItem>
                            <SelectItem value="bird">🐦 Bird</SelectItem>
                            <SelectItem value="rabbit">🐰 Rabbit</SelectItem>
                            <SelectItem value="reptile">🦎 Reptile</SelectItem>
                            <SelectItem value="fish">🐠 Fish</SelectItem>
                            <SelectItem value="hamster">🐹 Hamster/Small Animal</SelectItem>
                            <SelectItem value="other">🐾 Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="petAge" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <span>🎂</span>Pet's Age (optional)
                        </Label>
                        <Select value={formData.petAge} onValueChange={(value) => handleInputChange("petAge", value)}>
                          <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#66a4a8] focus:ring-2 focus:ring-[#66a4a8]/20 transition-all duration-200 rounded-xl">
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="puppy">Baby (0-1 year)</SelectItem>
                            <SelectItem value="young">Young (1-3 years)</SelectItem>
                            <SelectItem value="adult">Adult (3-7 years)</SelectItem>
                            <SelectItem value="senior">Senior (7+ years)</SelectItem>
                            <SelectItem value="unknown">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Interests */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#66a4a8] to-[#2D6063] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl">💭</span>
                      </div>
                      <h3 className="text-xl font-semibold text-[#2D6063] mb-2">What interests you most?</h3>
                      <p className="text-gray-600 text-sm">Help us prioritize features for you</p>
                    </div>

                    <div className="max-w-md mx-auto space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="interests" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <span>🌟</span>What interests you most about Animo? (optional)
                        </Label>
                        <Textarea
                          id="interests"
                          placeholder="e.g., AI-powered care plans, reminders, finding pet services..."
                          value={formData.interests}
                          onChange={(e) => handleInputChange("interests", e.target.value)}
                          rows={3}
                          className="border-2 border-gray-200 focus:border-[#66a4a8] focus:ring-2 focus:ring-[#66a4a8]/20 transition-all duration-200 rounded-xl resize-none"
                        />
                      </div>
                    </div>

                    {/* Benefits card */}
                    <div className="bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe] p-5 rounded-xl border border-[#66a4a8]/20 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">🎁</div>
                        <div>
                          <h4 className="text-base font-semibold text-[#345045] mb-2">Early Access Benefits</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#66a4a8] rounded-full"></span>
                              Free trial access to premium features
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#66a4a8] rounded-full"></span>
                              Exclusive access to beta features
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#66a4a8] rounded-full"></span>
                              Direct feedback line to our development team
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault();
                      prevStep();
                    }}
                    disabled={currentStep === 1}
                    className="px-6 py-2 border-2 border-gray-300 text-gray-600 hover:border-[#66a4a8] hover:text-[#2D6063] transition-all duration-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Back
                  </Button>

                  <div className="text-xs text-gray-500">
                    Step {currentStep} of {totalSteps}
                  </div>

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        nextStep();
                      }}
                      disabled={!canProceed}
                      className="px-6 py-2 bg-gradient-to-r from-[#66a4a8] to-[#2D6063] text-white hover:from-[#5a9195] hover:to-[#1b393b] transition-all duration-200 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next →
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="px-8 py-2 bg-gradient-to-r from-[#66a4a8] to-[#2D6063] text-white hover:from-[#5a9195] hover:to-[#1b393b] transition-all duration-200 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Joining...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>🚀</span>
                          <span>Join the Waitlist</span>
                        </div>
                      )}
                    </Button>
                  )}
                </div>

                <p className="text-xs text-gray-500 text-center pt-2">
                  By joining, you agree to receive updates about Animo. We respect your privacy and won't spam you.
                </p>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}