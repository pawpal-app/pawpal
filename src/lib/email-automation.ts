// Email automation for PAWPAL waitlist signups.

import { emailService } from './email-service';

/**
 * Defines the data structure for a new waitlist signup.
 */
export interface WaitlistSignup {
  name: string;
  email: string;
  petName: string;
  petType: string;
}

/**
 * The modern, multi-section email template for welcoming a new user to the waitlist.
 * This version uses an enhanced header instead of a hero image.
 */
export const waitlistWelcomeTemplate = {
  subject: "🐾You're on the Waitlist - Welcome to PAWPAL!",
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Welcome to PAWPAL</title>
      <style>
        body { margin: 0; padding: 0; }
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        table { border-collapse: collapse !important; }
        body, table, td, p, a { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
      </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #f4f4f4;">
        <tr>
          <td align="center">

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: linear-gradient(135deg, #819fa1 0%, #163031 100%);">
              <tr>
                <td align="center" style="padding: 60px 20px;">
                  <img src="https://getpawpalapp.com/pawpal-word-logo.png" alt="PawPal Logo" width="150" style="display: block; margin: 0 auto 20px auto;">
                  
                  <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold;">You're Officially on the List!</h1>
                  <p style="color: #f0f9ff; margin: 10px 0 0 0; font-size: 18px;">Welcome to the future of pet care, {{name}}.</p>
                </td>
              </tr>
            </table>
            
            <table width="600" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #ffffff; max-width: 600px;">
              <tr>
                <td style="padding: 40px 30px 30px 30px; color: #333; line-height: 1.6;">
                  <h2 style="color: #345045; margin-top: 0; margin-bottom: 20px; font-size: 24px;">Hi {{name}}! 👋</h2>
                  <p style="margin: 0 0 15px 0;">
                    We're so excited to welcome you and {{petName}} to the PawPal community! You've officially secured your spot to be <strong>among the first in the world</strong> to experience a new era of pet care.
                  </p>
                  <p style="margin: 0 0 15px 0;">
                    PawPal is your <strong>AI-powered pet care companion</strong> — here to make caring for your animal easier, smarter, and more fun. From personalized care tips to local groomer recommendations, we're building an app that's <em>all about you and your pet</em>.
                  </p>
                  <p style="margin: 0;">
                    In the meantime, give {{petName}} a little extra love from all of us — we can't wait to meet them inside PawPal!
                  </p>
                  
                  <p style="margin-top: 30px; color: #2D6063;">
                    - The PawPal Team 🐾
                  </p>

                </td>
              </tr>
            </table>

            <table width="600" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #f0f9ff; max-width: 600px;">
              <tr>
                <td style="padding: 30px 30px;">
                  <h3 style="color: #2D6063; margin-top: 0; margin-bottom: 20px; font-size: 20px;">🎁 Your Early Access Benefits:</h3>
                  
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom: 15px;">
                    <tr>
                      <td width="40" valign="top" style="padding-top: 5px;">⚡️</td>
                      <td style="color: #333;"><strong>First Access:</strong> Be the first to use PAWPAL's AI features.</td>
                    </tr>
                  </table>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom: 15px;">
                    <tr>
                      <td width="40" valign="top" style="padding-top: 5px;">⭐</td>
                      <td style="color: #333;"><strong>Free Premium:</strong> Enjoy all premium features free for 3 months.</td>
                    </tr>
                  </table>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom: 15px;">
                    <tr>
                      <td width="40" valign="top" style="padding-top: 5px;">🔬</td>
                      <td style="color: #333;"><strong>Exclusive Betas:</strong> Help us shape the future of PawPal.</td>
                    </tr>
                  </table>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="40" valign="top" style="padding-top: 5px;">💬</td>
                      <td style="color: #333;"><strong>Direct Dev Line:</strong> Share your feedback directly with our team.</td>
                    </tr>
                  </table>

                </td>
              </tr>
            </table>
            
            <table width="600" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #ffffff; max-width: 600px;">
              <tr>
                <td align="center" style="padding: 30px;">
                  <h3 style="color: #345045; margin-top: 0; font-size: 20px;">What Happens Now?</h3>
                  <p style="color: #333; margin-top: 0; margin-bottom: 30px;">
                    Keep an eye on your inbox! We'll be sending sneak peeks, feature reveals, and of course, your official invitation to join PawPal as soon as we launch.
                  </p>
                  
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td align="center" style="border-radius: 8px;" bgcolor="#2D6063">
                        <a href="https://getpawpalapp.com" target="_blank" class="button-outlook" style="background: #2D6063; border: 1px solid #2D6063; border-radius: 8px; color: #ffffff; display: inline-block; font-size: 16px; font-weight: bold; line-height: 100%; padding: 15px 30px; text-decoration: none;">
                          Explore What's Coming
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table width="600" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #2D6063; max-width: 600px;">
               <tr>
                <td align="center" style="padding: 30px;">
                  <p style="color: #f0f9ff; margin: 0 0 15px 0;">Follow us for cute pet pics & updates!</p>
                  <p style="margin: 0;">
                    <a href="https://x.com/getpawpal" style="color: #ffffff; text-decoration: underline;">Twitter</a> &nbsp;|&nbsp; 
                    <a href="https://www.instagram.com/get.pawpal/" style="color: #ffffff; text-decoration: underline;">Instagram</a> &nbsp;|&nbsp; 
                    <a href="https://www.tiktok.com/@getpawpal" style="color: #ffffff; text-decoration: underline;">TikTok</a>
                  </p>
                  <p style="color: #a7c1c2; font-size: 12px; margin: 20px 0 0 0;">
                    PawPal LLC | <a href="#" style="color: #a7c1c2;">Unsubscribe</a>
                  </p>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
  text: `Hi {{name}}! You're in! Welcome to the PawPal Pack 🐾

We're so excited to have you and {{petName}} join our community of forward-thinking pet parents. You've officially secured your spot to be among the first in the world to experience a new era of pet care.

In the meantime, give {{petName}} a little extra love from all of us — we can't wait to meet them inside PawPal!

- The PawPal Team 🐾


Here are your exclusive early access benefits:
⚡️ First Access: Be the first to use PAWPAL's AI features.
⭐ Free Premium: Enjoy all premium features free for 3 months.
🔬 Exclusive Betas: Help us shape the future of PawPal.
💬 Direct Dev Line: Share your feedback directly with our team.

What happens now?
Keep an eye on your inbox! We'll send sneak peeks, feature reveals, and your official invitation as soon as we launch.

Explore what's coming: https://getpawpalapp.com

Follow us for updates!
Twitter: https://x.com/getpawpal
Instagram: https://www.instagram.com/get.pawpal/
TikTok: https://www.tiktok.com/@getpawpal

PawPal LLC
`
};

/**
 * Personalizes and sends the welcome email to a new waitlist subscriber.
 * This is the primary function to be called from your API or serverless function.
 * @param userData - The details of the user who signed up.
 */
export async function sendWaitlistWelcomeEmail(userData: WaitlistSignup) {
  try {
    // Personalize the HTML and text content
    const html = waitlistWelcomeTemplate.html
      .replace(/\{\{name\}\}/g, userData.name)
      .replace(/\{\{petName\}\}/g, userData.petName);
      
    const text = waitlistWelcomeTemplate.text
      .replace(/\{\{name\}\}/g, userData.name)
      .replace(/\{\{petName\}\}/g, userData.petName)
      .replace(/\{\{petType\}\}/g, userData.petType);

    // Use the pre-configured email service to send the email
    const result = await emailService.sendEmail({
      to: userData.email,
      subject: waitlistWelcomeTemplate.subject,
      html,
      text,
    });

    if (result.success) {
      console.log(`📧 Welcome email sent successfully to ${userData.email}. Message ID: ${result.messageId}`);
      return { success: true, messageId: result.messageId };
    } else {
      console.error(`❌ Failed to send welcome email to ${userData.email}:`, result.error);
      return { success: false, error: result.error };
    }
  } catch (error)
 {
    console.error('❌ An unexpected error occurred in sendWaitlistWelcomeEmail:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}