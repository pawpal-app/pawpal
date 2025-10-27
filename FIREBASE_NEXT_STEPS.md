# Firebase Email Verification - Next Steps

## ✅ What's Already Done

1. ✅ Firebase package installed
2. ✅ Firebase configuration created (`src/lib/firebase.ts`)
3. ✅ Email verification page created (`src/app/verify-email/page.tsx`)
4. ✅ Environment variables set up in `.env.local`
5. ✅ Page implemented with three states: Loading, Success, Error

## 🔧 Step 3: Configure Firebase Console

### 3.1 Enable Email/Password Authentication

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `pawpal-5f5f8`
3. Click **Authentication** in the left sidebar
4. Click **Get Started** if you haven't enabled it yet
5. Go to the **Sign-in method** tab
6. Find **Email/Password** and click it
7. Toggle **Enable** switch and click **Save**

### 3.2 Configure Authorized Domains

1. Still in the **Authentication** section, go to **Settings** tab
2. Scroll down to **Authorized domains**
3. Click **Add domain**
4. Add these domains:
   - `getanimoapp.com` (your production domain)
   - Any other domains you use (e.g., staging)
   - Note: `localhost` is already added for development

### 3.3 Customize Email Templates (Recommended)

1. In **Authentication** → **Templates** tab
2. Click on **Email address verification** template
3. Customize the email with your branding:
   - Subject: "Verify your email for Animo"
   - HTML: Customize with your colors/branding
4. **Important**: Make sure the action URL points to:
   ```
   https://getanimoapp.com/verify-email
   ```

## 🧪 Step 4: Testing Locally

### 4.1 Start the Development Server

```bash
npm run dev
```

The server should now run without Firebase errors!

### 4.2 Test the Email Verification Flow

1. In Firebase Console, go to **Authentication** → **Users**
2. Click **Add user** to create a test user
3. Enter an email and password
4. The user will be created but **not verified**
5. To test verification:
   - You'll need to trigger a verification email from your mobile app
   - Or manually create a verification link in Firebase

### 4.3 Test the Verification Page

Visit: `http://localhost:3000/verify-email?oobCode=TEST_CODE`

You should see:
- **Loading state**: Spinner with "Verifying your email..."
- **Success state**: Green checkmark with success message
- **Error state**: Red X with error message

## 🚀 Step 5: Configure for Production

### 5.1 Set Environment Variables in Vercel (or your hosting platform)

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add all these variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAvtMm_nuow-1dx1YLRuGJT-Q7OKB2l2Ec
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=pawpal-5f5f8.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=pawpal-5f5f8
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=pawpal-5f5f8.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1042230344355
NEXT_PUBLIC_FIREBASE_APP_ID=1:1042230344355:web:a5d21df4f49f2d73fe1d16
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-4H94PXWGDK
```

### 5.2 Deploy

```bash
vercel --prod
```

Or push to your main branch if auto-deploy is enabled.

## 📱 Step 6: Update Your Mobile App

### In Your Animo App (iOS/Android)

When sending verification emails, make sure the link format is:

```
https://getanimoapp.com/verify-email?oobCode={{CODE}}
```

Firebase automatically includes the `oobCode` in verification emails, so your email template should look like:

```html
<a href="https://getanimoapp.com/verify-email?oobCode={{code}}">
  Verify Your Email
</a>
```

## 🔍 How It Works

1. **User registers** in Animo app
2. **Firebase sends** verification email with link
3. **User clicks** link → redirects to `getanimoapp.com/verify-email?oobCode=...`
4. **Page loads** → shows loading spinner
5. **Extracts oobCode** from URL
6. **Calls `applyActionCode(auth, oobCode)`** to verify email
7. **Shows result**:
   - ✅ Success → "Email Verified! You can now log in"
   - ⚠️ Error → "Link expired or invalid"

## 🐛 Troubleshooting

### Error: "Firebase: Error (auth/invalid-api-key)"

**Solution**: Make sure `.env.local` is in your project root and restart the dev server.

### Error: "auth/invalid-action-code"

**Cause**: Link already used or invalid

**Solution**: Request a new verification email from the app

### Error: "auth/expired-action-code"

**Cause**: Link expired (default is 3 days in Firebase)

**Solution**: Request a new verification email from the app

### Page doesn't load

**Check**:
1. Is the dev server running? (`npm run dev`)
2. Are environment variables set? (check `.env.local`)
3. Is Firebase project configured? (check Firebase Console)

## 📚 Files Created

- `src/lib/firebase.ts` - Firebase configuration
- `src/app/verify-email/page.tsx` - Verification page
- `.env.local` - Environment variables (git-ignored)
- `FIREBASE_SETUP.md` - Detailed setup guide
- `FIREBASE_ENV_TEMPLATE.md` - Environment template
- `FIREBASE_NEXT_STEPS.md` - This file

## ✅ You're Ready!

Your email verification page is now set up and ready to test. The next step is to enable authentication in Firebase Console and test the flow.

When you're ready for production, just deploy to Vercel and add the environment variables in the Vercel dashboard.

