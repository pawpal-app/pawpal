'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { applyActionCode } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

type VerificationState = 'loading' | 'success' | 'error';

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<VerificationState>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Extract the oobCode from URL query parameters
        const oobCode = searchParams.get('oobCode');

        if (!oobCode) {
          setState('error');
          setErrorMessage('Invalid verification link. Missing verification code.');
          return;
        }

        // Apply the action code to verify the email
        await applyActionCode(auth, oobCode);
        
        // If successful, set state to success
        setState('success');
      } catch (error: any) {
        // Handle different error cases
        console.error('Email verification error:', error);
        
        setState('error');
        
        if (error.code === 'auth/expired-action-code') {
          setErrorMessage('⚠️ This verification link has expired. Please request a new verification email from the Animo app.');
        } else if (error.code === 'auth/invalid-action-code') {
          setErrorMessage('⚠️ This verification link is invalid or has already been used. Please request a new verification email from the Animo app.');
        } else if (error.code === 'auth/user-disabled') {
          setErrorMessage('⚠️ This account has been disabled. Please contact support.');
        } else {
          setErrorMessage('⚠️ Verification Failed. This link is invalid or has expired. Please try requesting a new verification email from the app.');
        }
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#66a4a8] via-[#91a6a6] to-[#eff3f3] px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Loading State */}
        {state === 'loading' && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Loader2 className="w-12 h-12 text-[#66a4a8] animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-[#163031]">
              Verifying your email for Animo...
            </h1>
            <p className="text-gray-600">
              Please wait while we verify your email address.
            </p>
          </div>
        )}

        {/* Success State */}
        {state === 'success' && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-[#163031]">
              ✅ Email Verified!
            </h1>
            <p className="text-gray-700 text-lg">
              Your account is now active. You can close this page and log in to the Animo app.
            </p>
            <div className="mt-6">
              <a
                href="https://apps.apple.com/us/app/animo-care-capture-connect/id6754126492"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#66a4a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a9498] transition-colors"
              >
                Open Animo App
              </a>
            </div>
          </div>
        )}

        {/* Error State */}
        {state === 'error' && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <XCircle className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-[#163031]">
              ⚠️ Verification Failed
            </h1>
            <p className="text-gray-700 text-lg">
              {errorMessage}
            </p>
            <div className="mt-6 space-y-3">
              <p className="text-sm text-gray-600">
                Need help? Contact support or try requesting a new verification email from the Animo app.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://apps.apple.com/us/app/animo-care-capture-connect/id6754126492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#66a4a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a9498] transition-colors text-center"
                >
                  Open Animo App
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Main component with Suspense boundary for useSearchParams
export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#66a4a8] via-[#91a6a6] to-[#eff3f3] px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Loader2 className="w-12 h-12 text-[#66a4a8] animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-[#163031]">
              Loading...
            </h1>
          </div>
        </div>
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  );
}

