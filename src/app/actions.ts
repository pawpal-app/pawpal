"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Define a type for our state
type State = {
  error?: string;
  success?: string;
};

// The function now accepts two arguments: prevState and formData
export async function sendEmail(prevState: State, formData: FormData): Promise<State> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Please fill out all fields.' };
  }
  
  try {
    await resend.emails.send({
      from: 'PawPal Contact Form <onboarding@resend.dev>',
      to: 'support@getpawpalapp.com',
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { success: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: 'Sorry, something went wrong. Please try again.' };
  }
}