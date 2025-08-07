"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AIFAQAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Pal, your friendly AI assistant for PawPal. How can I help you learn more about our amazing pet care app? 🐾",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const systemPrompt = `You are 'Pal', the friendly and knowledgeable AI assistant for the PawPal app. Your primary goal is to answer user questions and enthusiastically explain how PawPal makes pet ownership easier and more joyful. Always be positive, helpful, and focus on the benefits.

Use the following information about PawPal's features to answer questions:
- Core Function: All-in-one pet management app.
- AI Personalization: Creates personalized care plans and to-do lists based on a pet's breed, age, and lifestyle. It adapts to the user's habits.
- Smart Reminders: Sends intelligent alerts for vaccinations, grooming, feeding, and vet check-ups.
- Universal: Supports all kinds of pets, including dogs, cats, reptiles, birds, and more.
- Goal: To help pet owners stay organized, proactive, and stress-free, turning pet care from a chore into a joy.
- Key benefit: Gives owners peace of mind and confidence in their pet care.

When answering, be persuasive and sell the app. If a question is unrelated to pet care or the PawPal app, politely steer the conversation back by saying something like, "That's an interesting question! My expertise is in helping you with the PawPal app. Do you have any questions about how we can make your pet's life better?"`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          systemPrompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment! 🐾",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#66a4a8] to-[#345045] p-6 text-white">
          <h3 className="text-2xl font-bold text-center">
            Have a Question? Ask Our AI! 🤖
          </h3>
          <p className="text-center mt-2 opacity-90">
            Meet Pal, your friendly PawPal assistant
          </p>
        </div>

        {/* Chat Window */}
        <div className="h-96 overflow-y-auto p-6 bg-gray-50">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-[#345045] text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                    <span className="text-sm text-gray-600">Pal is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-6 bg-white border-t border-gray-200">
          <div className="flex space-x-3">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Pal about PawPal features, pet care tips, or anything else!"
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="bg-[#345045] hover:bg-[#2D6063] text-white px-6"
            >
              Ask Pal
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Powered by Google Gemini AI • Your questions help us improve PawPal!
          </p>
        </form>
      </div>
    </div>
  );
} 