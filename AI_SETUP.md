# AI FAQ Assistant Setup Guide

## Overview
The AI FAQ Assistant feature has been successfully added to your PawPal website! This component allows users to ask questions about PawPal and get instant responses powered by Google's Gemini AI.

## Features Added
- ✅ AI FAQ Assistant component with chat interface
- ✅ Integration with Google Gemini 2.5 Flash API
- ✅ Real-time conversation with "Pal" AI assistant
- ✅ Loading indicators and error handling
- ✅ Responsive design matching your site's theme

## Setup Required

### 1. Get Google AI API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Configure Environment Variables
Create a `.env.local` file in your project root and add:

```env
GOOGLE_AI_API_KEY=your_actual_api_key_here
```

### 3. Restart Development Server
After adding the API key, restart your development server:

```bash
npm run dev
```

## How It Works

### Component Location
- **Component**: `src/components/AIFAQAssistant.tsx`
- **API Route**: `src/app/api/ai-chat/route.ts`
- **Homepage Section**: Added to `src/app/page.tsx` with ID `ai-assistant`

### AI Assistant Behavior
The AI assistant "Pal" is configured to:
- Answer questions about PawPal features and benefits
- Provide pet care tips and advice
- Stay focused on pet-related topics
- Be enthusiastic and persuasive about PawPal
- Redirect off-topic questions back to pet care

### System Prompt
The AI uses a custom system prompt that includes:
- PawPal's core features and benefits
- AI personalization capabilities
- Smart reminder functionality
- Universal pet support
- Focus on stress-free pet ownership

## Usage
1. Users can access the AI assistant from the homepage
2. Type questions in the input field
3. Click "Ask Pal" to get instant responses
4. View conversation history in the chat window
5. Loading indicators show when AI is processing

## Customization
You can modify the AI behavior by editing:
- System prompt in `AIFAQAssistant.tsx` (lines 20-30)
- API configuration in `route.ts`
- UI styling in the component

## Troubleshooting
- **API Key Error**: Ensure your `.env.local` file is in the project root
- **Network Issues**: Check your internet connection
- **Rate Limits**: Google AI has usage limits - monitor your API usage

## Security Notes
- Never commit your API key to version control
- The `.env.local` file is already in `.gitignore`
- API calls are made server-side for security

## Next Steps
1. Add your Google AI API key to `.env.local`
2. Test the feature by asking questions about PawPal
3. Consider adding analytics to track popular questions
4. Monitor API usage and costs

The AI FAQ Assistant is now ready to help your users learn more about PawPal! 🐾 