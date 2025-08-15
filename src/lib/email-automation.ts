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
 * The single email template for welcoming a new user to the waitlist.
 */
export const waitlistWelcomeTemplate = {
  subject: "🐾 You're on the Waitlist - Welcome to PAWPAL!",
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to PAWPAL</title>
      </head>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #819fa1 0%, #163031 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;"> Welcome to PAWPAL! 🐾 </h1>
          <p style="color: #f0f9ff; margin: 10px 0 0 0; font-size: 16px;">Your Pet's Personal AI Assistant</p>
        </div>

        <div style="background: white; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 0 0 10px 10px;">
          <h2 style="color: #345045; margin-top: 0;">Hi {{name}}! 👋</h2>
          <p>
            Thank you for joining the <strong>PAWPAL waitlist</strong>! We're so excited to welcome you and {{petName}} to our growing community of <strong>forward-thinking pet parents</strong>. You've officially secured your spot to be <strong>among the first in the world</strong> to experience a new era of pet care.
          </p>
          <p> 
            PawPal is your <strong>AI-powered pet care companion</strong> — here to make caring for your animal easier, smarter, and more fun. From personalized care tips and breed recognition to local groomer recommendations and pet health alerts, we're building an app that's <em>all about you and your pet</em>.
          </p>
          <p>
            You're now one step closer to <strong>exclusive early access</strong> when we launch. We'll keep you updated with sneak peeks, feature reveals, and tips to get the most out of PawPal when it's ready.
          </p>
          <p>
            In the meantime, give {{petName}} a little extra love from all of us — we can't wait to meet them inside PawPal!
          </p>
          <p style="margin-top: 30px; color: #2D6063;">
            - The PawPal Team 🐾
          </p>
          <div style="background: #f0f9ff; border-left: 4px solid #66a4a8; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #2D6063; margin-top: 0;">🎁 Your Early Access Benefits:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>First access to PAWPAL's AI features</li>
              <li>Free premium features for 3 months</li>
              <li>Exclusive beta feature access</li>
              <li>Direct line to our development team</li>
            </ul>
          </div>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://getpawpalapp.com" style="background: #2D6063; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Visit PAWPAL Website</a>
          </div>
          <p style="font-size: 14px; color: #666; margin-top: 30px; text-align: center;">
            Follow us: 
            <a href="https://x.com/getpawpal" style="color: #66a4a8;">Twitter</a> | 
            <a href="https://www.instagram.com/get.pawpal/" style="color: #66a4a8;">Instagram</a> | 
            <a href="https://www.tiktok.com/@getpawpal" style="color: #66a4a8;">TikTok</a>
          </p>
        </div>
      </body>
    </html>
  `,
  text: `Hi {{name}}!

Thank you for joining the PAWPAL waitlist! We're thrilled to have you and {{petName}} as part of our growing community.

Your Early Access Benefits:
• First access to PAWPAL's AI features
• Free premium features for 3 months
• Exclusive beta feature access
• Direct line to our development team

What happens next?
You'll receive app updates, feature previews, and your exclusive early access invitation when we launch.

Questions? Just reply to this email!

Best regards,
The PAWPAL Team`
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
  } catch (error) {
    console.error('❌ An unexpected error occurred in sendWaitlistWelcomeEmail:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}