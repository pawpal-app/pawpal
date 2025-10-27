# Firebase Email Verification Setup Guide

This guide will help you set up Firebase Authentication for email verification on your Animo website.

## Overview

The `/verify-email` page handles email verification callbacks after users click the verification link in their email. The page extracts the `oobCode` (out-of-band code) from the URL and calls Firebase's `applyActionCode` function to verify the user's email.

## Prerequisites

- A Firebase project with Authentication enabled
- Email/Password authentication method enabled in Firebase Console

## Setup Steps

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or select an existing one)
3. Enable Authentication in the Firebase Console
4. Enable the "Email/Password" authentication method

### 2. Get Firebase Configuration

1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Register your app with a nickname (e.g., "Animo Web")
5. Copy the Firebase configuration object

### 3. Configure Environment Variables

Create a `.env.local` file in the root of your project and add your Firebase credentials:

```env
# Firebase Configuration (Required for Email Verification)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

### 4. Configure Authorized Domains

1. In Firebase Console, go to Authentication → Settings → Authorized domains
2. Add your domain (e.g., `getanimoapp.com`)
3. For development, `localhost` is already authorized

### 5. Set Up Email Templates (Optional but Recommended)

1. In Firebase Console, go to Authentication → Templates
2. Customize the email verification template with your branding
3. The action URL should point to: `https://getanimoapp.com/verify-email`

## How It Works

### User Flow

1. User registers in the Animo app and receives a verification email
2. User clicks the verification link in their email
3. Link redirects to `https://getanimoapp.com/verify-email?oobCode=<verification_code>`
4. The verify-email page extracts the `oobCode` from URL parameters
5. Calls `applyActionCode(auth, oobCode)` to verify the email
6. Shows success or error message based on the result

### Page States

The `/verify-email` page has three states:

1. **Loading State**: Shows while verifying the email
   - Displays a spinner and "Verifying your email for Animo..." message

2. **Success State**: Shows when verification succeeds
   - Displays a checkmark and success message
   - Provides a link to open the Animo app

3. **Error State**: Shows when verification fails
   - Displays an error icon and appropriate error message
   - Common errors:
     - Expired link
     - Invalid/already used link
     - User account disabled
   - Provides links to open the app or contact support

### Error Handling

The page handles various Firebase error codes:

- `auth/expired-action-code`: Link has expired
- `auth/invalid-action-code`: Link is invalid or already used
- `auth/user-disabled`: Account has been disabled
- General error fallback for other issues

## Testing

### Local Development

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the verification flow:
   - Use Firebase Console to send a verification email to a test user
   - Copy the verification link from your email
   - Update the domain to `localhost:3000` (or your dev port)
   - Visit the link in your browser

### Production Deployment

1. Deploy to Vercel (or your hosting platform)
2. Set the Firebase environment variables in your platform's dashboard
3. Ensure your domain is authorized in Firebase Console
4. Test with a real user account

## Troubleshooting

### Error: "Invalid verification link"

**Possible causes:**
- Environment variables not set correctly
- Firebase configuration mismatch
- `oobCode` missing from URL

**Solutions:**
- Check all `NEXT_PUBLIC_FIREBASE_*` variables are set
- Verify Firebase credentials in Firebase Console
- Ensure the link includes the `oobCode` parameter

### Error: "This verification link has expired"

**Cause:** User waited too long to click the link

**Solution:** Request a new verification email from the app

### Module Not Found Errors

**Cause:** Firebase package not installed

**Solution:** 
```bash
npm install firebase
```

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **Authorized Domains**: Only authorize domains you control
3. **Firebase Security Rules**: Ensure proper security rules for your Firebase project
4. **HTTPS**: Always use HTTPS in production for secure email links

## Files Created

- `src/lib/firebase.ts` - Firebase initialization and configuration
- `src/app/verify-email/page.tsx` - Email verification page component
- `.env.example` - Template for environment variables
- `FIREBASE_SETUP.md` - This documentation file

## Next Steps

1. Install dependencies: `npm install`
2. Configure Firebase environment variables
3. Test the verification flow
4. Deploy to production
5. Update your Firebase email template action URL to point to your production domain

