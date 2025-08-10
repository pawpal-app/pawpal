"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// This import is no longer needed on the frontend, as the backend handles the email now.
// import { triggerEmailSequence, type WaitlistSignup } from "@/lib/email-automation"; 
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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    petName: "",
    petType: "",
    petAge: "",
    interests: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to the correct Vercel API endpoint
      const response = await fetch("/api/waitlist", { // <--- THIS IS THE FIX
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

        // Reset form after 15 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setIsOpen(false);
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

  const isFormValid = formData.name && formData.email && formData.petName && formData.petType;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-[#2D6063] mb-2">
                Welcome to the PAWPAL Family!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for signing up! We'll keep you updated on our launch and send you exclusive early access when we're ready.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-700 font-medium">
                    🎯 You're now on the list for early access to PAWPAL's AI-powered pet care features!
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">📧 Check your email!</h4>
                  <p className="text-xs text-blue-700">
                    We've sent you a welcome email with your early access benefits. Over the next few days, you'll receive:
                  </p>
                  <ul className="text-xs text-blue-700 mt-2 space-y-1">
                    <li>• Personalized pet care tips for {formData.petName}</li>
                    <li>• App development updates</li>
                    <li>• Exclusive early access invitation</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="petName">Pet's Name *</Label>
                  <Input
                    id="petName"
                    type="text"
                    placeholder="e.g., Luna, Max, Charlie"
                    value={formData.petName}
                    onChange={(e) => handleInputChange("petName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="petType">Pet Type *</Label>
                  <Select value={formData.petType} onValueChange={(value) => handleInputChange("petType", value)}>
                    <SelectTrigger>
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="petAge">Pet's Age (optional)</Label>
                <Select value={formData.petAge} onValueChange={(value) => handleInputChange("petAge", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="puppy">Puppy/Kitten (0-1 year)</SelectItem>
                    <SelectItem value="young">Young (1-3 years)</SelectItem>
                    <SelectItem value="adult">Adult (3-7 years)</SelectItem>
                    <SelectItem value="senior">Senior (7+ years)</SelectItem>
                    <SelectItem value="unknown">Not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">What interests you most about PAWPAL? (optional)</Label>
                <Textarea
                  id="interests"
                  placeholder="e.g., AI-powered care plans, reminders, finding pet services..."
                  value={formData.interests}
                  onChange={(e) => handleInputChange("interests", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#66a4a8]/20">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎁</div>
                  <div>
                    <h4 className="font-semibold text-[#345045] mb-1">Early Access Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Be first to try PAWPAL's AI features</li>
                      <li>• Free premium features for 3 months</li>
                      <li>• Exclusive access to beta features</li>
                      <li>• Direct feedback line to our development team</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1b393b] hover:bg-[#2D6063]/90 text-white py-6 text-lg font-semibold"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Joining Waitlist...</span>
                  </div>
                ) : (
                  "🚀 Join the Waitlist"
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By joining, you agree to receive updates about PAWPAL. We respect your privacy and won't spam you.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}