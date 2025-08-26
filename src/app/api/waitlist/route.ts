export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { sendWaitlistWelcomeEmail, type WaitlistSignup } from '@/lib/email-automation';

// 👇 THIS IS THE NEW FUNCTION WE ARE ADDING
export async function GET() {
  return NextResponse.json({ message: 'This route is dynamic.' });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      petName,
      petType,
      petAge,
      interests,
      signupSource
    } = body;

    // --- Validation Section ---
    if (!name || !email || !petName || !petType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // --- Vercel KV Database Section ---
    const dbSignupData = {
      name,
      email,
      petName,
      petType,
      petAge: petAge || '',
      interests: interests || [],
      signupSource: signupSource || 'website',
      timestamp: new Date().toISOString()
    };
    
    try {
      const key = `waitlist:${email}`;
      await kv.hset(key, dbSignupData);
      console.log('📝 Waitlist signup stored in Vercel KV:', email);
    } catch (dbError) {
      console.warn('⚠️ Failed to store waitlist entry in Vercel KV:', dbError);
    }

    // --- Email Section ---
    try {
      const emailResult = await sendWaitlistWelcomeEmail({
        name,
        email,
        petName,
        petType,
      });

      if (emailResult.success) {
        console.log(`✅ Welcome email sent successfully to ${email}. Message ID: ${emailResult.messageId}`);
      } else {
        console.error(`❌ Failed to send welcome email for ${email}:`, emailResult.error);
      }
    } catch (emailError) {
      console.error('❌ An unexpected error occurred during the email process:', emailError);
    }

    // --- Success Response ---
    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist!',
    });

  } catch (error) {
    console.error('❌ An unexpected error occurred in the POST handler:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}