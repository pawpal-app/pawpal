import { NextRequest, NextResponse } from 'next/server';
import { triggerEmailSequence, type WaitlistSignup } from '@/lib/email-automation';
import { getDatabaseService } from '@/lib/database';

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

    // Validate required fields
    if (!name || !email || !petName || !petType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create waitlist signup data
    const signupData: WaitlistSignup = {
      name,
      email,
      petName,
      petType,
      petAge: petAge || '',
      interests: interests || '',
      signupSource: signupSource || 'website',
      timestamp: new Date().toISOString()
    };

    // Store in database
    const db = getDatabaseService();
    const stored = await db.storeWaitlistEntry({
      name: signupData.name,
      email: signupData.email,
      petName: signupData.petName,
      petType: signupData.petType,
      petAge: signupData.petAge,
      interests: signupData.interests,
      signupSource: signupData.signupSource,
      timestamp: signupData.timestamp
    });

    if (!stored) {
      console.warn('⚠️ Failed to store waitlist entry in database');
    } else {
      console.log('📝 Waitlist signup stored in database:', signupData.email);
    }

    // Trigger email automation sequence
    try {
      await triggerEmailSequence('waitlistWelcome', signupData);
      console.log('✅ Email automation triggered for:', email);
    } catch (emailError) {
      console.error('❌ Email automation error:', emailError);
      // Don't fail the form submission if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist!',
      email: email
    });

  } catch (error) {
    console.error('❌ Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
