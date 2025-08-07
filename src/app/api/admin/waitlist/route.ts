import { NextRequest, NextResponse } from 'next/server';
import { getDatabaseService } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    // Simple API key protection
    const apiKey = request.headers.get('x-api-key');
    const expectedApiKey = process.env.ADMIN_API_KEY;

    if (!expectedApiKey || apiKey !== expectedApiKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const db = getDatabaseService();
    const entries = await db.getAllWaitlistEntries();

    return NextResponse.json({
      success: true,
      count: entries.length,
      entries: entries
    });

  } catch (error) {
    console.error('❌ Admin API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
