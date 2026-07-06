"use server";

import { Resend } from "resend";

import type { ContactFormInput } from "@/types/contactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactFormAction = async (fromData: ContactFormInput) => {
  const { name, phone, email, message } = fromData;

  try {
    const { data, error } = await resend.emails.send({
      from: "Milan's Portfolio <onboarding@resend.dev>",
      to: ["milankoradiya.work@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #111; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Inquiry</h2>
          <p style="margin-top: 20px;"><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
            <p style="font-weight: bold; margin-bottom: 5px;">Message Details:</p>
            <p style="color: #444; line-height: 1.6;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 30px; text-align: center;">
            This email was sent from Kunal's portfolio contact form.
          </p>
        </div>
      `,
    });
    if (error) {
      console.log(error);
      return { status: false, error: error };
    }
    return { status: true, output: data };
  } catch (error) {
    console.log(error);
    return { status: false, error: error };
  }
};
