import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
// FIX: Import the new function
import { sendWaitlistWelcomeEmail, type WaitlistSignup } from '@/lib/email-automation';

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
    // This object contains all the data we want to save in the database
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
    
    // We attempt to store the data in the database first.
    try {
      const key = `waitlist:${email}`;
      await kv.hset(key, dbSignupData);
      console.log('📝 Waitlist signup stored in Vercel KV:', email);
    } catch (dbError) {
      // If the database fails, we log it but don't stop the process.
      console.warn('⚠️ Failed to store waitlist entry in Vercel KV:', dbError);
    }

    // --- Email Section ---
    try {
      // FIX: Call the new, simplified email function.
      // It only needs the fields defined in the WaitlistSignup type.
      const emailResult = await sendWaitlistWelcomeEmail({
        name,
        email,
        petName,
        petType,
      });

      // FIX: Check the result for more accurate logging.
      if (emailResult.success) {
        console.log(`✅ Welcome email sent successfully to ${email}. Message ID: ${emailResult.messageId}`);
      } else {
        console.error(`❌ Failed to send welcome email for ${email}:`, emailResult.error);
      }
    } catch (emailError) {
      // This catches any unexpected errors from the email module itself.
      console.error('❌ An unexpected error occurred during the email process:', emailError);
    }

    // --- Success Response ---
    // Return a success response to the user, as their signup was processed.
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