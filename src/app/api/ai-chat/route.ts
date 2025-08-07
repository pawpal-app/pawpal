import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Initialize the Google Generative AI with the API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const { messages, systemPrompt } = await request.json();

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key not configured" },
        { status: 500 }
      );
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-preview-05-20",
    });

    // Prepare the conversation history (only user and assistant messages, no system messages)
    const conversationHistory = messages
      .filter((msg: ChatMessage) => msg.role === "user" || msg.role === "assistant")
      .map((msg: ChatMessage) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      }));

    // Start a chat session
    const chat = model.startChat({
      history: conversationHistory.slice(0, -1), // All messages except the last user message
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send the message with system prompt
    const result = await chat.sendMessage([
      { text: systemPrompt },
      { text: messages[messages.length - 1].content }
    ]);

    const response = await result.response;
    const responseText = response.text();

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Error in AI chat API:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
} 