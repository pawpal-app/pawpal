// Email automation utilities for PAWPAL

export interface WaitlistSignup {
  name: string;
  email: string;
  petName: string;
  petType: string;
  petAge?: string;
  interests?: string;
  signupSource: string;
  timestamp: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  category?: string;
  message: string;
  timestamp: string;
}

// Email templates for automation sequences
export const emailTemplates = {
  welcome: {
    subject: "🐾 Welcome to PAWPAL - Your Pet Care Journey Begins!",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to PAWPAL</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #66a4a8 0%, #345045 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🐾 Welcome to PAWPAL!</h1>
            <p style="color: #f0f9ff; margin: 10px 0 0 0; font-size: 16px;">Your AI-powered pet care journey starts here</p>
          </div>

          <div style="background: white; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 0 0 10px 10px;">
            <h2 style="color: #345045; margin-top: 0;">Hi {{name}}! 👋</h2>

            <p>Thank you for joining the PAWPAL waitlist! We're thrilled to have you and {{petName}} as part of our growing community of pet lovers.</p>

            <div style="background: #f0f9ff; border-left: 4px solid #66a4a8; padding: 20px; margin: 20px 0; border-radius: 5px;">
              <h3 style="color: #345045; margin-top: 0;">🎁 Your Early Access Benefits:</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>First access to PAWPAL's AI features</li>
                <li>Free premium features for 3 months</li>
                <li>Exclusive beta feature access</li>
                <li>Direct line to our development team</li>
              </ul>
            </div>

            <h3 style="color: #345045;">What happens next?</h3>
            <p>Over the next few days, you'll receive:</p>
            <ul>
              <li>📱 App development updates and launch timeline</li>
              <li>🐾 Personalized pet care tips for {{petType}}s</li>
              <li>🤖 Sneak peeks of our AI features</li>
              <li>📧 Exclusive early access invitation when we launch</li>
            </ul>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://same-fe7vhv1fdj9-latest.netlify.app" style="background: #345045; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Visit PAWPAL Website</a>
            </div>

            <p style="font-size: 14px; color: #666; margin-top: 30px; text-align: center;">
              Questions? Just reply to this email - we'd love to hear from you!<br>
              Follow us: <a href="#" style="color: #66a4a8;">Twitter</a> | <a href="#" style="color: #66a4a8;">Instagram</a> | <a href="#" style="color: #66a4a8;">TikTok</a>
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
Over the next few days, you'll receive app updates, personalized pet care tips for {{petType}}s, AI feature previews, and your exclusive early access invitation.

Questions? Just reply to this email!

Best regards,
The PAWPAL Team`
  },

  petCareTips: {
    subject: "🎯 Personalized {{petType}} Care Tips from PAWPAL",
    html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #345045; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">🎯 Personalized Tips for {{petName}}</h1>
          </div>

          <div style="background: white; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 0 0 10px 10px;">
            <p>Hi {{name}}!</p>
            <p>Here are some AI-powered care tips specifically for {{petType}}s like {{petName}}:</p>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #345045; margin-top: 0;">{{tipTitle}}</h3>
              <p>{{tipContent}}</p>
            </div>

            <p>This is just a preview of the personalized recommendations PAWPAL will provide. Our AI considers your pet's breed, age, lifestyle, and your specific needs to create the perfect care plan.</p>

            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              Stay tuned for more updates!<br>
              The PAWPAL Team
            </p>
          </div>
        </body>
      </html>
    `
  },

  launchNotification: {
    subject: "🚀 PAWPAL is LIVE! Your Early Access is Ready",
    html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #66a4a8 0%, #345045 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 32px;">🚀 PAWPAL IS LIVE!</h1>
            <p style="color: #f0f9ff; margin: 10px 0 0 0; font-size: 18px;">Your early access is ready, {{name}}!</p>
          </div>

          <div style="background: white; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 0 0 10px 10px;">
            <p>The moment you've been waiting for is here! PAWPAL is officially live and ready to revolutionize how you care for {{petName}}.</p>

            <div style="background: #f0f9ff; border: 2px solid #66a4a8; padding: 25px; margin: 25px 0; border-radius: 10px; text-align: center;">
              <h3 style="color: #345045; margin-top: 0;">🎁 Your Early Access Code</h3>
              <div style="background: #345045; color: white; padding: 15px; border-radius: 5px; font-size: 24px; font-weight: bold; letter-spacing: 2px; margin: 15px 0;">
                EARLY2025
              </div>
              <p style="margin-bottom: 0; font-size: 14px; color: #666;">Use this code for 3 months of premium features, FREE!</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="#" style="background: #345045; color: white; padding: 20px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; display: inline-block;">Download PAWPAL Now</a>
            </div>

            <h3 style="color: #345045;">What you get with early access:</h3>
            <ul>
              <li>✨ AI-powered personalized care plans for {{petName}}</li>
              <li>📅 Smart reminders and scheduling</li>
              <li>🏥 Vet appointment tracking</li>
              <li>🍽️ Nutrition and feeding guidelines</li>
              <li>📈 Health and activity monitoring</li>
              <li>💬 24/7 AI pet care assistant</li>
            </ul>

            <p style="font-size: 14px; color: #666; margin-top: 30px; text-align: center;">
              Questions about the app? Reply to this email or contact support@pawpal.com
            </p>
          </div>
        </body>
      </html>
    `
  },

  contactConfirmation: {
    subject: "✅ We received your message - PAWPAL Support",
    html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #345045; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">✅ Message Received</h1>
          </div>

          <div style="background: white; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 0 0 10px 10px;">
            <p>Hi {{name}},</p>
            <p>Thank you for contacting PAWPAL support. We've received your message about "{{subject}}" and our team will respond within 24 hours.</p>

            <div style="background: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <strong>Your Message:</strong><br>
              {{message}}
            </div>

            <p>In the meantime, you might find these helpful:</p>
            <ul>
              <li><a href="https://same-fe7vhv1fdj9-latest.netlify.app/terms" style="color: #66a4a8;">Terms of Service</a></li>
              <li><a href="https://same-fe7vhv1fdj9-latest.netlify.app/privacy" style="color: #66a4a8;">Privacy Policy</a></li>
              <li><a href="https://same-fe7vhv1fdj9-latest.netlify.app" style="color: #66a4a8;">PAWPAL Homepage</a></li>
            </ul>

            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              Best regards,<br>
              PAWPAL Support Team<br>
              support@pawpal.com
            </p>
          </div>
        </body>
      </html>
    `
  }
};

// Pet-specific care tips database
export const petCareTipsDatabase = {
  dog: [
    {
      title: "Daily Exercise Essentials",
      content: "Dogs need at least 30 minutes to 2 hours of exercise daily, depending on their breed and age. Mix walks, playtime, and mental stimulation for optimal health."
    },
    {
      title: "Nutrition Timing",
      content: "Feed adult dogs twice daily - morning and evening. This helps maintain stable energy levels and reduces the risk of bloat in larger breeds."
    },
    {
      title: "Dental Care Routine",
      content: "Brush your dog's teeth 2-3 times per week with dog-specific toothpaste. Dental chews and toys can help maintain oral health between brushings."
    }
  ],
  cat: [
    {
      title: "Litter Box Maintenance",
      content: "Scoop litter daily and completely change it weekly. Cats prefer clean environments and may avoid dirty litter boxes, leading to behavioral issues."
    },
    {
      title: "Indoor Enrichment",
      content: "Provide vertical spaces, scratching posts, and interactive toys. Cats need mental stimulation and territory to feel secure in indoor environments."
    },
    {
      title: "Hydration Habits",
      content: "Cats often don't drink enough water. Consider a water fountain or wet food to increase fluid intake and support kidney health."
    }
  ],
  bird: [
    {
      title: "Social Interaction",
      content: "Birds are highly social creatures. Spend at least 2-3 hours daily interacting with your bird through talking, training, or supervised out-of-cage time."
    },
    {
      title: "Cage Environment",
      content: "Provide perches of varying diameters and textures to promote foot health. Place the cage at eye level in a social area of your home."
    },
    {
      title: "Diet Variety",
      content: "Offer fresh fruits and vegetables daily alongside high-quality pellets. Seeds should be treats, not the main diet, to prevent nutritional deficiencies."
    }
  ],
  rabbit: [
    {
      title: "Hay is Essential",
      content: "Timothy hay should make up 75% of your rabbit's diet. It provides necessary fiber for digestive health and helps wear down constantly growing teeth."
    },
    {
      title: "Exercise Space",
      content: "Rabbits need at least 4 hours of exercise outside their enclosure daily. Create a rabbit-proofed space where they can hop, run, and explore safely."
    },
    {
      title: "Grooming Needs",
      content: "Brush long-haired rabbits daily and short-haired rabbits 2-3 times weekly. Regular grooming prevents matting and reduces hairball risk."
    }
  ],
  reptile: [
    {
      title: "Temperature Gradients",
      content: "Create a basking spot (85-95°F) and a cool area (70-80°F) in your reptile's habitat. This allows them to thermoregulate naturally."
    },
    {
      title: "UV Lighting",
      content: "Most reptiles need UVB lighting for 10-12 hours daily to synthesize vitamin D3 and maintain bone health. Replace bulbs every 6-12 months."
    },
    {
      title: "Humidity Control",
      content: "Monitor humidity levels specific to your reptile species. Use a digital hygrometer and adjust with water bowls, misters, or substrate changes."
    }
  ],
  fish: [
    {
      title: "Water Quality Testing",
      content: "Test water parameters weekly: pH, ammonia, nitrite, and nitrate levels. Maintaining stable water chemistry is crucial for fish health."
    },
    {
      title: "Tank Cycling",
      content: "Establish beneficial bacteria before adding fish. This nitrogen cycle process takes 4-6 weeks and prevents toxic ammonia buildup."
    },
    {
      title: "Feeding Schedule",
      content: "Feed fish small amounts 1-2 times daily. Only provide what they can consume in 2-3 minutes to prevent overfeeding and water pollution."
    }
  ],
  hamster: [
    {
      title: "Wheel Selection",
      content: "Provide a solid-surface wheel at least 8 inches diameter for Syrian hamsters, 6.5 inches for dwarfs. Wire wheels can cause injury."
    },
    {
      title: "Bedding Depth",
      content: "Provide 6-8 inches of safe bedding for burrowing. Avoid cedar or pine shavings; use paper-based or aspen bedding instead."
    },
    {
      title: "Fresh Food Portions",
      content: "Offer small pieces of fresh vegetables 2-3 times weekly. Remove uneaten fresh food within 24 hours to prevent spoilage."
    }
  ]
};

// Email automation sequence configuration
export const emailSequences = {
  waitlistWelcome: [
    { delay: 0, template: 'welcome' },
    { delay: 2, template: 'petCareTips' },
    { delay: 7, template: 'petCareTips' },
    { delay: 14, template: 'launchNotification' }
  ],
  contactSupport: [
    { delay: 0, template: 'contactConfirmation' }
  ]
};

// Email personalization helper
export function personalizeEmail(template: string, data: WaitlistSignup | ContactSubmission): string {
  let personalizedContent = template;

  // Replace common placeholders
  personalizedContent = personalizedContent.replace(/\{\{name\}\}/g, data.name);
  personalizedContent = personalizedContent.replace(/\{\{email\}\}/g, data.email);

  // Waitlist-specific replacements
  if ('petName' in data) {
    personalizedContent = personalizedContent.replace(/\{\{petName\}\}/g, data.petName);
    personalizedContent = personalizedContent.replace(/\{\{petType\}\}/g, data.petType);

    // Add pet care tips
    const tips = petCareTipsDatabase[data.petType as keyof typeof petCareTipsDatabase] || petCareTipsDatabase.dog;
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    personalizedContent = personalizedContent.replace(/\{\{tipTitle\}\}/g, randomTip.title);
    personalizedContent = personalizedContent.replace(/\{\{tipContent\}\}/g, randomTip.content);
  }

  // Contact form specific replacements
  if ('subject' in data) {
    personalizedContent = personalizedContent.replace(/\{\{subject\}\}/g, data.subject);
    personalizedContent = personalizedContent.replace(/\{\{message\}\}/g, data.message);
  }

  return personalizedContent;
}

// Email service integration with real providers
import { getEmailService } from './email-service';

export async function sendEmail(to: string, subject: string, html: string, text?: string) {
  try {
    const emailService = getEmailService();
    const result = await emailService.sendEmail({
      to,
      subject,
      html,
      text
    });

    if (result.success) {
      console.log('📧 Email sent successfully:', {
        to,
        subject,
        messageId: result.messageId
      });
      return {
        success: true,
        messageId: result.messageId,
        timestamp: new Date().toISOString()
      };
    } else {
      console.error('❌ Email send failed:', result.error);
      return {
        success: false,
        error: result.error,
        timestamp: new Date().toISOString()
      };
    }
  } catch (error) {
    console.error('❌ Email service error:', error);
    return {
      success: false,
      error: `Email service error: ${error}`,
      timestamp: new Date().toISOString()
    };
  }
}

// Trigger email automation sequence
export async function triggerEmailSequence(
  sequenceType: keyof typeof emailSequences,
  userData: WaitlistSignup | ContactSubmission
) {
  const sequence = emailSequences[sequenceType];

  for (const step of sequence) {
    const template = emailTemplates[step.template as keyof typeof emailTemplates];
    if (!template) continue;

    const personalizedHtml = personalizeEmail(template.html, userData);
    const personalizedText = 'text' in template && template.text ? personalizeEmail(template.text, userData) : undefined;
    const personalizedSubject = personalizeEmail(template.subject, userData);

    // Schedule email (in production, this would use a job queue)
    setTimeout(async () => {
      await sendEmail(
        userData.email,
        personalizedSubject,
        personalizedHtml,
        personalizedText
      );
    }, step.delay * 24 * 60 * 60 * 1000); // Convert days to milliseconds
  }

  return {
    success: true,
    sequenceType,
    emailsScheduled: sequence.length,
    recipient: userData.email
  };
}
