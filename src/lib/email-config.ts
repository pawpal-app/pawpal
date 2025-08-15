// Email service configuration for PAWPAL, using Resend.

/**
 * Defines the configuration structure for the email service.
 */
export interface EmailConfig {
  provider: 'resend';
  apiKey: string;
  fromEmail: string;
  fromName: string;
  webhookUrl?: string;
}

/**
 * The single, active email service configuration for the application.
 * It reads environment variables to configure the Resend service.
 */
export const emailConfig: EmailConfig = {
  provider: 'resend' as const,
  // Uses the generic EMAIL_API_KEY for consistency with email-service.ts
  apiKey: process.env.EMAIL_API_KEY || '',
  fromEmail: process.env.FROM_EMAIL || 'pawpal@getpawpalapp.com',
  fromName: 'PAWPAL Team',
  // Optional webhook URL for tracking email events with Resend
  webhookUrl: process.env.RESEND_WEBHOOK_URL
};

// --- General Webhook Configurations ---

/**
 * Webhook configurations for connecting to automation platforms.
 * These are independent of the email provider.
 */
export const webhookConfigs = {
  netlify: {
    endpoint: '/.netlify/functions/email-webhook',
    events: ['form-submission'],
    description: 'Netlify Forms webhook for triggering email automation'
  },
  zapier: {
    endpoint: process.env.ZAPIER_WEBHOOK_URL || '',
    events: ['waitlist-signup', 'contact-form'],
    description: 'Zapier webhook for connecting to various services'
  },
  make: {
    endpoint: process.env.MAKE_WEBHOOK_URL || '',
    events: ['waitlist-signup', 'contact-form'],
    description: 'Make.com webhook for custom automation scenarios'
  }
};

// --- Setup Instructions ---

/**
 * Instructions for setting up the Resend email service.
 */
export const setupInstructions = `
To set up the email service in your environment:

1.  Sign up for Resend and verify your sending domain.
2.  Generate an API key from your Resend dashboard.
3.  Set the following environment variables in your deployment platform (e.g., Vercel, Netlify):
    * \`EMAIL_API_KEY\`: Your Resend API key.
    * \`FROM_EMAIL\`: The email address you verified with Resend (optional, defaults to 'pawpal@getpawpalapp.com').

4.  The application is now ready to send emails.
5.  (Optional) If you need to track email events like opens or clicks, create a webhook in Resend and add its URL as the \`RESEND_WEBHOOK_URL\` environment variable.
`;