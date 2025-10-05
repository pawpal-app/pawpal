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
  subject: "🐾 You're on the Waitlist - Welcome to PawPal!",
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Welcome to PawPal</title>
      <style>
        body { 
          margin: 0; 
          padding: 0; 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
        }
        img { 
          border: 0; 
          height: auto; 
          line-height: 100%; 
          outline: none; 
          text-decoration: none; 
          max-width: 100%;
        }
        table { 
          border-collapse: collapse !important; 
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
        }
        .card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin: 20px 0;
          overflow: hidden;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #66a4a8 0%, #91a6a6 50%, #2D6063 100%);
        }
        .benefit-card {
          background: linear-gradient(135deg, #f8fcfc 0%, #eff3f3 100%);
          border-radius: 12px;
          padding: 20px;
          margin: 12px 0;
          border-left: 4px solid #66a4a8;
        }
        .benefit-row {
          display: table;
          width: 100%;
          table-layout: fixed;
        }
        .benefit-icon {
          display: table-cell;
          width: 60px;
          vertical-align: middle;
          text-align: center;
        }
        .benefit-content {
          display: table-cell;
          vertical-align: middle;
          padding-left: 15px;
        }
        .icon-container {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #66a4a8 0%, #2D6063 100%);
          border-radius: 12px;
          display: inline-block;
          text-align: center;
          line-height: 50px;
          box-shadow: 0 4px 15px rgba(102, 164, 168, 0.3);
        }
        .btn-primary {
          display: inline-block;
          background: linear-gradient(135deg, #66a4a8 0%, #2D6063 100%);
          color: #ffffff;
          text-decoration: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0 4px 15px rgba(102, 164, 168, 0.3);
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 164, 168, 0.4);
        }
        .social-icon {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          margin: 0 8px;
          text-decoration: none;
          color: #ffffff;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; padding: 0 10px !important; }
          .card { margin: 10px 0 !important; border-radius: 12px !important; }
          .benefit-card { margin: 8px 0 !important; padding: 15px !important; }
          .benefit-icon { display: block !important; width: 100% !important; text-align: center !important; margin-bottom: 10px !important; }
          .benefit-content { display: block !important; padding-left: 0 !important; text-align: center !important; }
          .icon-container { width: 45px !important; height: 45px !important; line-height: 45px !important; }
          table[style*="margin-bottom: 25px"] td:first-child { display: block !important; width: 100% !important; text-align: center !important; margin-bottom: 10px !important; }
          table[style*="margin-bottom: 25px"] td:last-child { display: block !important; width: 100% !important; text-align: center !important; }
          h1 { font-size: 28px !important; }
          h2 { font-size: 24px !important; }
          h3 { font-size: 20px !important; }
          h4 { font-size: 16px !important; }
          p { font-size: 16px !important; }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8fcfc 0%, #eff3f3 100%);">
      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: linear-gradient(135deg, #f8fcfc 0%, #eff3f3 100%); min-height: 100vh;">
        <tr>
          <td align="center" style="padding: 20px 0;">
            
            <!-- Hero Section -->
            <div class="container">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="card" style="background: linear-gradient(135deg, #66a4a8 0%, #91a6a6 50%, #2D6063 100%); border-radius: 20px;">
                <tr>
                  <td align="center" style="padding: 50px 30px; text-align: center;">
                    <img src="https://getpawpalapp.com/pawpal-circle-logo.png" alt="PawPal Logo" width="120" style="display: block; margin: 0 auto 25px auto; border-radius: 50%; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);">
                    
                    <h1 style="color: #ffffff; margin: 0; font-size: 36px; font-weight: 700; line-height: 1.2; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      You're Officially on the List! 🎉
                    </h1>
                    <p style="color: #f0f9ff; margin: 15px 0 0 0; font-size: 20px; font-weight: 400; opacity: 0.95;">
                      Welcome to the future of pet care, {{name}}
                    </p>
                    
                    <!-- Floating paw prints -->
                    <div style="margin-top: 30px; opacity: 0.7;">
                      <span style="font-size: 24px; margin: 0 10px; animation: float 3s ease-in-out infinite;">🐾</span>
                      <span style="font-size: 24px; margin: 0 10px; animation: float 3s ease-in-out infinite 0.5s;">🐾</span>
                      <span style="font-size: 24px; margin: 0 10px; animation: float 3s ease-in-out infinite 1s;">🐾</span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            
            <!-- Welcome Message -->
            <div class="container animate-fadeInUp">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="card">
                <tr>
                  <td style="padding: 40px 35px;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom: 25px;">
                      <tr>
                        <td width="70" align="center" valign="middle">
                          <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #66a4a8 0%, #2D6063 100%); border-radius: 50%; text-align: center; line-height: 50px; box-shadow: 0 4px 15px rgba(102, 164, 168, 0.3);">
                            <span style="color: white; font-size: 24px;">👋</span>
                          </div>
                        </td>
                        <td valign="middle">
                          <h2 style="color: #163031; margin: 0; font-size: 28px; font-weight: 700;">Hi {{name}}!</h2>
                        </td>
                      </tr>
                    </table>
                    
                    <p style="margin: 0 0 20px 0; color: #4a5568; font-size: 18px; line-height: 1.7;">
                      We're <strong style="color: #2D6063;">so excited</strong> to welcome you and <strong style="color: #66a4a8;">{{petName}}</strong> to the PawPal community! You've officially secured your spot to be <strong>among the first in the world</strong> to experience a new era of pet care. 🌟
                    </p>
                    
                    <p style="margin: 0 0 20px 0; color: #4a5568; font-size: 18px; line-height: 1.7;">
                      PawPal is your <strong style="color: #2D6063;">AI-powered pet care companion</strong> — here to make caring for your animal easier, smarter, and more fun. From personalized care tips to local groomer recommendations, we're building an app that's <em style="color: #66a4a8;">all about you and your pet</em>.
                    </p>
                    
                    <p style="margin: 0; color: #4a5568; font-size: 18px; line-height: 1.7;">
                      In the meantime, give {{petName}} a little extra love from all of us — we can't wait to meet them inside PawPal! 💕
                    </p>
                    
                    <div style="margin-top: 35px; padding: 20px; background: linear-gradient(135deg, #f8fcfc 0%, #eff3f3 100%); border-radius: 12px; border-left: 4px solid #66a4a8;">
                      <p style="margin: 0; color: #2D6063; font-size: 16px; font-weight: 600;">
                        - The PawPal Team 🐾
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Benefits Section -->
            <div class="container animate-fadeInUp">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="card">
                <tr>
                  <td style="padding: 40px 35px;">
                    <h3 style="color: #163031; margin-top: 0; margin-bottom: 30px; font-size: 24px; font-weight: 700; text-align: center;">
                      🎁 Your Exclusive Early Access Benefits
                    </h3>
                    
                    <div class="benefit-card">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td width="60" align="center" valign="middle" class="benefit-icon">
                            <div class="icon-container">
                              <span style="color: white; font-size: 20px;">⚡️</span>
                            </div>
                          </td>
                          <td valign="middle" class="benefit-content">
                            <h4 style="margin: 0 0 5px 0; color: #163031; font-size: 18px; font-weight: 600;">First Access</h4>
                            <p style="margin: 0; color: #4a5568; font-size: 16px;">Be the first to use PawPal's AI features</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                    
                    <div class="benefit-card">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td width="60" align="center" valign="middle" class="benefit-icon">
                            <div class="icon-container">
                              <span style="color: white; font-size: 20px;">⭐</span>
                            </div>
                          </td>
                          <td valign="middle" class="benefit-content">
                            <h4 style="margin: 0 0 5px 0; color: #163031; font-size: 18px; font-weight: 600;">Free Premium</h4>
                            <p style="margin: 0; color: #4a5568; font-size: 16px;">Enjoy all premium features free for 3 months</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                    
                    <div class="benefit-card">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td width="60" align="center" valign="middle" class="benefit-icon">
                            <div class="icon-container">
                              <span style="color: white; font-size: 20px;">🔬</span>
                            </div>
                          </td>
                          <td valign="middle" class="benefit-content">
                            <h4 style="margin: 0 0 5px 0; color: #163031; font-size: 18px; font-weight: 600;">Exclusive Betas</h4>
                            <p style="margin: 0; color: #4a5568; font-size: 16px;">Help us shape the future of PawPal</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                    
                    <div class="benefit-card">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td width="60" align="center" valign="middle" class="benefit-icon">
                            <div class="icon-container">
                              <span style="color: white; font-size: 20px;">💬</span>
                            </div>
                          </td>
                          <td valign="middle" class="benefit-content">
                            <h4 style="margin: 0 0 5px 0; color: #163031; font-size: 18px; font-weight: 600;">Direct Dev Line</h4>
                            <p style="margin: 0; color: #4a5568; font-size: 16px;">Share your feedback directly with our team</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            
            <!-- What's Next Section -->
            <div class="container animate-fadeInUp">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="card">
                <tr>
                  <td align="center" style="padding: 40px 35px; text-align: center;">
                    <h3 style="color: #163031; margin-top: 0; margin-bottom: 20px; font-size: 24px; font-weight: 700;">What Happens Now? 🚀</h3>
                    <p style="color: #4a5568; margin: 0 0 35px 0; font-size: 18px; line-height: 1.7;">
                      Keep an eye on your inbox! We'll be sending sneak peeks, feature reveals, and of course, your official invitation to join PawPal as soon as we launch.
                    </p>
                    
                    <a href="https://getpawpalapp.com" target="_blank" class="btn-primary" style="text-decoration: none;">
                      Explore What's Coming →
                    </a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Footer -->
            <div class="container">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: linear-gradient(135deg, #2D6063 0%, #163031 100%); border-radius: 20px; margin-top: 20px;">
                <tr>
                  <td align="center" style="padding: 40px 35px; text-align: center;">
                    <h4 style="color: #ffffff; margin: 0 0 25px 0; font-size: 20px; font-weight: 600;">
                      Follow us for cute pet pics & updates! 📸
                    </h4>
                    
                    <div style="margin-bottom: 30px;">
                      <a href="https://x.com/getpawpal" class="social-icon" style="text-decoration: none; color: #ffffff;">𝕏</a>
                      <a href="https://www.instagram.com/get.pawpal/" class="social-icon" style="text-decoration: none; color: #ffffff;">IG</a>
                      <a href="https://www.tiktok.com/@getpawpal" class="social-icon" style="text-decoration: none; color: #ffffff;">TT</a>
                    </div>
                    
                    <div style="border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 20px;">
                      <p style="color: #a7c1c2; font-size: 14px; margin: 0 0 10px 0;">
                        Copyright © 2025 PawPal LLC. All rights reserved.
                      </p>
                      <p style="margin: 0;">
                        <a href="#" style="color: #a7c1c2; text-decoration: underline; font-size: 14px;">Unsubscribe</a> 
                        <span style="color: #a7c1c2; margin: 0 10px;">|</span>
                        <a href="https://getpawpalapp.com/privacy" style="color: #a7c1c2; text-decoration: underline; font-size: 14px;">Privacy Policy</a>
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

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