// Email service integration for PAWPAL
// Supports multiple email providers: SendGrid, Resend, Mailchimp

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export interface EmailProvider {
  sendEmail(data: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }>;
}

// SendGrid Integration
export class SendGridProvider implements EmailProvider {
  private apiKey: string;
  private fromEmail: string;

  constructor(apiKey: string, fromEmail: string = 'pawpal@getpawpalapp.com') {
    this.apiKey = apiKey;
    this.fromEmail = fromEmail;
  }

  async sendEmail(data: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: data.to }],
              subject: data.subject,
            },
          ],
          from: { email: data.from || this.fromEmail },
          content: [
            {
              type: 'text/html',
              value: data.html,
            },
            ...(data.text ? [{
              type: 'text/plain',
              value: data.text,
            }] : []),
          ],
        }),
      });

      if (response.ok) {
        const result = await response.json();
        return {
          success: true,
          messageId: result.id || `sg_${Date.now()}`,
        };
      } else {
        const error = await response.text();
        return {
          success: false,
          error: `SendGrid error: ${error}`,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: `SendGrid request failed: ${error}`,
      };
    }
  }
}

// Resend Integration (Recommended for Vercel)
export class ResendProvider implements EmailProvider {
  private apiKey: string;
  private fromEmail: string;

  constructor(apiKey: string, fromEmail: string = 'pawpal@getpawpalapp.com') {
    this.apiKey = apiKey;
    this.fromEmail = fromEmail;
  }

  async sendEmail(data: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: data.from || this.fromEmail,
          to: [data.to],
          subject: data.subject,
          html: data.html,
          text: data.text,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        return {
          success: true,
          messageId: result.id,
        };
      } else {
        const error = await response.text();
        return {
          success: false,
          error: `Resend error: ${error}`,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: `Resend request failed: ${error}`,
      };
    }
  }
}

// Mailchimp Integration
export class MailchimpProvider implements EmailProvider {
  private apiKey: string;
  private serverPrefix: string;
  private fromEmail: string;

  constructor(apiKey: string, serverPrefix: string, fromEmail: string = 'pawpal@getpawpalapp.com') {
    this.apiKey = apiKey;
    this.serverPrefix = serverPrefix;
    this.fromEmail = fromEmail;
  }

  async sendEmail(data: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const response = await fetch(`https://${this.serverPrefix}.api.mailchimp.com/3.0/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            from_email: data.from || this.fromEmail,
            to: [{ email: data.to, type: 'to' }],
            subject: data.subject,
            html: data.html,
            text: data.text,
          },
        }),
      });

      if (response.ok) {
        const result = await response.json();
        return {
          success: true,
          messageId: result.id,
        };
      } else {
        const error = await response.text();
        return {
          success: false,
          error: `Mailchimp error: ${error}`,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: `Mailchimp request failed: ${error}`,
      };
    }
  }
}

// Email service factory
export class EmailService {
  private provider: EmailProvider;

  constructor(provider: EmailProvider) {
    this.provider = provider;
  }

  async sendEmail(data: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
    return this.provider.sendEmail(data);
  }

  // Factory methods for different providers
  static createSendGrid(apiKey: string, fromEmail?: string): EmailService {
    return new EmailService(new SendGridProvider(apiKey, fromEmail));
  }

  static createResend(apiKey: string, fromEmail?: string): EmailService {
    return new EmailService(new ResendProvider(apiKey, fromEmail));
  }

  static createMailchimp(apiKey: string, serverPrefix: string, fromEmail?: string): EmailService {
    return new EmailService(new MailchimpProvider(apiKey, serverPrefix, fromEmail));
  }
}

// Default email service (configure based on your environment)
export function getEmailService(): EmailService {
  const provider = process.env.EMAIL_PROVIDER || 'resend';
  const apiKey = process.env.EMAIL_API_KEY;

  if (!apiKey) {
    throw new Error('EMAIL_API_KEY environment variable is required');
  }

  switch (provider) {
    case 'sendgrid':
      return EmailService.createSendGrid(apiKey, process.env.FROM_EMAIL);
    case 'resend':
      return EmailService.createResend(apiKey, process.env.FROM_EMAIL);
    case 'mailchimp':
      const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
      if (!serverPrefix) {
        throw new Error('MAILCHIMP_SERVER_PREFIX environment variable is required for Mailchimp');
      }
      return EmailService.createMailchimp(apiKey, serverPrefix, process.env.FROM_EMAIL);
    default:
      throw new Error(`Unsupported email provider: ${provider}`);
  }
}
