'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Loader2, CheckCircle2, XCircle, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type ResetState = 'loading' | 'form' | 'success' | 'error';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<ResetState>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [oobCode, setOobCode] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  // Derived password validation
  const passwordRules = {
    length: newPassword.length >= 8 && newPassword.length <= 32,
    lowercase: /[a-z]/.test(newPassword),
    uppercase: /[A-Z]/.test(newPassword),
    number: /[0-9]/.test(newPassword),
    special: /[^A-Za-z0-9]/.test(newPassword),
  };
  const allRulesPass =
    passwordRules.length &&
    passwordRules.lowercase &&
    passwordRules.uppercase &&
    passwordRules.number &&
    passwordRules.special;

  useEffect(() => {
    const verifyCode = async () => {
      try {
        // Extract the oobCode from URL query parameters
        const code = searchParams.get('oobCode');

        if (!code) {
          setState('error');
          setErrorMessage('Invalid reset link. Missing reset code.');
          return;
        }

        // Verify the password reset code
        await verifyPasswordResetCode(auth, code);
        
        // If successful, set the code and show the form
        setOobCode(code);
        setState('form');
      } catch (error: any) {
        // Handle different error cases
        console.error('Password reset verification error:', error);
        
        setState('error');
        
        if (error.code === 'auth/expired-action-code') {
          setErrorMessage('Link Expired. This password reset link is invalid or has expired. Please request a new one.');
        } else if (error.code === 'auth/invalid-action-code') {
          setErrorMessage('Link Expired. This password reset link is invalid or has expired. Please request a new one.');
        } else {
          setErrorMessage('Link Expired. This password reset link is invalid or has expired. Please request a new one.');
        }
      }
    };

    verifyCode();
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    // Check that passwords match
    if (newPassword !== confirmPassword) {
      setFormError('Passwords do not match. Please try again.');
      return;
    }

    // Enforce password policy
    if (!allRulesPass) {
      setFormError('Password must meet all requirements below.');
      return;
    }

    if (!oobCode) {
      setFormError('Reset code is missing. Please request a new password reset link.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Confirm the password reset
      await confirmPasswordReset(auth, oobCode, newPassword);
      
      // If successful, show success message
      setState('success');
    } catch (error: any) {
      console.error('Password reset confirmation error:', error);
      setIsSubmitting(false);
      
      if (error.code === 'auth/weak-password') {
        setFormError('Password is too weak. Please choose a stronger password.');
      } else if (error.code === 'auth/expired-action-code') {
        setState('error');
        setErrorMessage('⚠️ Link Expired. This password reset link has expired. Please request a new one.');
      } else {
        setFormError('Failed to reset password. Please try again or request a new reset link.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#66a4a8] via-[#91a6a6] to-[#eff3f3] px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        {/* Loading State */}
        {state === 'loading' && (
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <Loader2 className="w-12 h-12 text-[#66a4a8] animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-[#163031]">
              Loading...
            </h1>
            <p className="text-gray-600">
              Verifying your password reset link...
            </p>
          </div>
        )}

        {/* Form State */}
        {state === 'form' && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Lock className="w-12 h-12 text-[#66a4a8]" />
              </div>
              <h1 className="text-2xl font-bold text-[#163031]">
                Reset Your Password for Animo
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">
                  New Password
                </label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                  required
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  required
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              {/* Password requirements checklist */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Your password must include:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    {passwordRules.length ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={passwordRules.length ? 'text-green-700' : 'text-gray-700'}>
                      8-32 characters
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    {passwordRules.lowercase ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={passwordRules.lowercase ? 'text-green-700' : 'text-gray-700'}>
                      At least 1 lowercase letter
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    {passwordRules.uppercase ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={passwordRules.uppercase ? 'text-green-700' : 'text-gray-700'}>
                      At least 1 uppercase letter
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    {passwordRules.number ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={passwordRules.number ? 'text-green-700' : 'text-gray-700'}>
                      At least 1 number
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    {passwordRules.special ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={passwordRules.special ? 'text-green-700' : 'text-gray-700'}>
                      At least 1 special character
                    </span>
                  </li>
                </ul>
              </div>

              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{formError}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-[#66a4a8] text-white hover:bg-[#5a9498]"
                disabled={isSubmitting || !allRulesPass || newPassword !== confirmPassword}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Resetting Password...
                  </>
                ) : (
                  'Reset Password'
                )}
              </Button>
            </form>
          </div>
        )}

        {/* Success State */}
        {state === 'success' && (
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-[#163031]">
              ✅ Password Reset!
            </h1>
            <p className="text-gray-700 text-lg">
              Your password has been successfully changed. You can now log in with your new password.
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
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <XCircle className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-[#163031]">
              ⚠️ Link Expired
            </h1>
            <p className="text-gray-700 text-lg">
              {errorMessage || 'This password reset link is invalid or has expired. Please request a new one.'}
            </p>
            <div className="mt-6 space-y-3">
              <p className="text-sm text-gray-600">
                Need help? Contact support or request a new password reset from the Animo app.
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
export default function ResetPasswordPage() {
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
      <ResetPasswordContent />
    </Suspense>
  );
}
