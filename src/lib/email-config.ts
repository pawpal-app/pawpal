// Email service configuration for PAWPAL

export interface EmailServiceConfig {
  provider: 'sendgrid' | 'mailchimp' | 'convertkit' | 'brevo' | 'resend';
  apiKey: string;
  fromEmail: string;
  fromName: string;
  listId?: string; // For email marketing services
  webhookUrl?: string;
}

// Production email service configurations
export const emailServiceConfigs = {
  sendgrid: {
    provider: 'sendgrid' as const,
    apiKey: process.env.SENDGRID_API_KEY || '',
    fromEmail: 'pawpal@getpawpalapp.com',
    fromName: 'PAWPAL Team',
    webhookUrl: process.env.SENDGRID_WEBHOOK_URL
  },

  mailchimp: {
    provider: 'mailchimp' as const,
    apiKey: process.env.MAILCHIMP_API_KEY || '',
    fromEmail: 'pawpal@getpawpalapp.com',
    fromName: 'PAWPAL Team',
    listId: process.env.MAILCHIMP_LIST_ID,
    webhookUrl: process.env.MAILCHIMP_WEBHOOK_URL
  },

  convertkit: {
    provider: 'convertkit' as const,
    apiKey: process.env.CONVERTKIT_API_KEY || '',
    fromEmail: 'pawpal@getpawpalapp.com',
    fromName: 'PAWPAL Team',
    listId: process.env.CONVERTKIT_FORM_ID,
    webhookUrl: process.env.CONVERTKIT_WEBHOOK_URL
  },

  brevo: {
    provider: 'brevo' as const,
    apiKey: process.env.BREVO_API_KEY || '',
    fromEmail: 'pawpal@getpawpalapp.com',
    fromName: 'PAWPAL Team',
    listId: process.env.BREVO_LIST_ID,
    webhookUrl: process.env.BREVO_WEBHOOK_URL
  },

  resend: {
    provider: 'resend' as const,
    apiKey: process.env.RESEND_API_KEY || '',
    fromEmail: 'pawpal@getpawpalapp.com',
    fromName: 'PAWPAL Team',
    webhookUrl: process.env.RESEND_WEBHOOK_URL
  }
};

// Get the active email service configuration
export function getEmailConfig(): EmailServiceConfig {
  const provider = process.env.EMAIL_PROVIDER as keyof typeof emailServiceConfigs || 'sendgrid';
  return emailServiceConfigs[provider];
}

// Email service integration examples for different providers
export const integrationExamples = {
  sendgrid: `
// SendGrid integration example
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendWithSendGrid(to: string, subject: string, html: string) {
  const msg = {
    to,
    from: 'pawpal@getpawpalapp.com',
    subject,
    html,
  };

  return await sgMail.send(msg);
}
`,

  mailchimp: `
// Mailchimp integration example
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function addToMailchimpList(email: string, userData: any) {
  return await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    email_address: email,
    status: 'subscribed',
    merge_fields: userData
  });
}
`,

  convertkit: `
// ConvertKit integration example
export async function addToConvertKit(email: string, userData: any) {
  const response = await fetch(\`https://api.convertkit.com/v3/forms/\${process.env.CONVERTKIT_FORM_ID}/subscribe\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: process.env.CONVERTKIT_API_KEY,
      email,
      fields: userData
    })
  });

  return response.json();
}
`,

  brevo: `
// Brevo (Sendinblue) integration example
import SibApiV3Sdk from 'sib-api-v3-sdk';

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

export async function sendWithBrevo(to: string, subject: string, html: string) {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  return await apiInstance.sendTransacEmail({
    to: [{ email: to }],
    sender: { email: 'pawpal@getpawpalapp.com', name: 'PAWPAL Team' },
    subject,
    htmlContent: html
  });
}
`,

  resend: `
// Resend integration example
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWithResend(to: string, subject: string, html: string) {
  return await resend.emails.send({
    from: 'pawpal@getpawpalapp.com',
    to,
    subject,
    html,
  });
}
`
};

// Webhook configurations for different services
export const webhookConfigs = {
  netlify: {
    endpoint: '/.netlify/functions/email-webhook',
    events: ['form-submission'],
    description: 'Netlify Forms webhook for triggering email automation'
  },

  zapier: {
    endpoint: process.env.ZAPIER_WEBHOOK_URL || '',
    events: ['waitlist-signup', 'contact-form'],
    description: 'Zapier webhook for connecting to email services'
  },

  make: {
    endpoint: process.env.MAKE_WEBHOOK_URL || '',
    events: ['waitlist-signup', 'contact-form'],
    description: 'Make.com webhook for email automation'
  }
};

// Email automation setup instructions
export const setupInstructions = {
  production: `
To set up email automation in production:

1. Choose an email service provider (SendGrid, Mailchimp, ConvertKit, etc.)
2. Create an account and get your API key
3. Set up environment variables:
   - EMAIL_PROVIDER=sendgrid
   - SENDGRID_API_KEY=your_api_key
   - SENDGRID_WEBHOOK_URL=your_webhook_url

4. Configure Netlify Functions or webhooks to trigger emails
5. Test with the /email-preview page
6. Monitor email delivery and engagement

For development:
- Use the console.log simulation in email-automation.ts
- Test templates with the preview page
- Verify form integration works correctly
`,

  services: {
    sendgrid: 'Best for: Reliable delivery, detailed analytics, developer-friendly API',
    mailchimp: 'Best for: Marketing automation, audience segmentation, templates',
    convertkit: 'Best for: Creator economy, course sales, subscriber engagement',
    brevo: 'Best for: Budget-friendly, SMS integration, European compliance',
    resend: 'Best for: Developer experience, modern API, React email templates'
  }
};

export default emailServiceConfigs;
