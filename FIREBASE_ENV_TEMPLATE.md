# Environment Variables Template

Create a `.env.local` file in your project root with the following variables:

```env
# Firebase Configuration (Required for Email Verification)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here

# Email Configuration
EMAIL_API_KEY=your_email_api_key
FROM_EMAIL=noreply@getanimoapp.com

# Database (Optional)
# DATABASE_TYPE=kv

# For Vercel KV
# KV_URL=your_vercel_kv_url
# KV_REST_API_URL=your_vercel_kv_rest_url
# KV_REST_API_TOKEN=your_vercel_kv_token

# For Vercel Postgres
# POSTGRES_URL=your_vercel_postgres_url
# POSTGRES_HOST=your_vercel_postgres_host
# POSTGRES_DATABASE=your_vercel_postgres_database
# POSTGRES_USERNAME=your_vercel_postgres_username
# POSTGRES_PASSWORD=your_vercel_postgres_password
```

## How to Get Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Click the gear icon → Project Settings
4. Scroll to "Your apps" section
5. Click the web icon (`</>`) to add a web app
6. Copy the config values from the `firebaseConfig` object

## Important Notes

- Never commit `.env.local` to version control (it's already in .gitignore)
- The `NEXT_PUBLIC_` prefix makes these variables available in the browser
- These values are specific to your Firebase project
- You'll need to set these in your Vercel/hosting platform's environment settings for production

