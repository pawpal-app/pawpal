import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { triggerEmailSequence, type WaitlistSignup } from '@/lib/email-automation';

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

    const signupData = {
      name,
      email,
      petName,
      petType,
      petAge: petAge || '',
      interests: interests || [],
      signupSource: signupSource || 'website',
      timestamp: new Date().toISOString()
    };

    // --- Vercel KV Database Section ---
    // This is the ONLY database code that should be here.
    try {
      const key = `waitlist:${email}`;
      await kv.hset(key, signupData);
      console.log('📝 Waitlist signup stored in Vercel KV:', signupData.email);
    } catch (dbError) {
      // This will now properly log if the KV store fails for any reason.
      console.warn('⚠️ Failed to store waitlist entry in Vercel KV:', dbError);
    }

    // --- Email Section ---
    try {
      await triggerEmailSequence('waitlistWelcome', signupData);
      console.log('✅ Email automation triggered for:', email);
    } catch (emailError) {
      console.error('❌ Email automation error:', emailError);
    }

    // --- Success Response ---
    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist!',
    });

  } catch (error) {
    console.error('❌ An unexpected error occurred:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}