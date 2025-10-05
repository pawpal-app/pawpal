// Email service for PAWPAL, configured exclusively for Resend.

/**
 * Defines the structure for the data required to send an email.
 */
export interface EmailData {
  to: string;
  subject:string;
  html: string;
  text?: string;
  from?: string;
}

/**
 * Handles sending emails via the Resend API.
 */
class EmailService {
  private apiKey: string;
  private fromEmail: string;

  /**
   * Initializes the email service.
   * @param apiKey Your Resend API key (from environment variables).
   * @param fromEmail The default "from" email address.
   */
  constructor(apiKey: string, fromEmail: string = 'pawpal@getpawpalapp.com') {
    if (!apiKey) {
      throw new Error('Resend API key is required for EmailService.');
    }
    this.apiKey = apiKey;
    this.fromEmail = fromEmail;
  }

  /**
   * Sends an email using the Resend service.
   * @param data The email content and recipient.
   * @returns A promise that resolves with the status of the email sending operation.
   */
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
        const errorText = await response.text();
        console.error("Resend API Error:", errorText);
        return {
          success: false,
          error: `Resend API error: ${errorText}`,
        };
      }
    } catch (error) {
      console.error("Failed to send email request via Resend:", error);
      return {
        success: false,
        error: `Resend request failed: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }
}

// --- Singleton Instance Configuration ---

let emailServiceInstance: EmailService | null = null;

/**
 * Gets or creates the singleton EmailService instance.
 * This lazy initialization prevents errors during build when EMAIL_API_KEY is not available.
 */
function getEmailService(): EmailService {
  if (!emailServiceInstance) {
    const apiKey = process.env.EMAIL_API_KEY;
    
    if (!apiKey) {
      throw new Error('EMAIL_API_KEY environment variable is not set. This is required for sending emails.');
    }
    
    emailServiceInstance = new EmailService(apiKey, process.env.FROM_EMAIL);
  }
  
  return emailServiceInstance;
}

/**
 * A pre-configured, singleton instance of the EmailService for Resend.
 * Import this instance directly into other parts of your application.
 *
 * @example
 * import { emailService } from './email-service';
 *
 * await emailService.sendEmail({
 * to: 'user@example.com',
 * subject: 'Welcome to PawPal!',
 * html: '<h1>Your account is ready!</h1>'
 * });
 */
export const emailService = {
  sendEmail: (data: EmailData) => getEmailService().sendEmail(data)
};