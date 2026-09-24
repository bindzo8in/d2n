"use server";

import { env } from '../../lib/env';
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  if (!firstName || !email || !message) {
    return { error: "Missing required fields" };
  }

  const { data, error } = await resend.emails.send({
    // Using verified domain if available, fallback to testing address.
    from: 'D2N Digital Marketing <hello@d2ndigitalmarketing.com>', 
    to: [env.CONTACT_EMAIL],
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return { error: error.message };
  }

  return { success: true, data };
}
