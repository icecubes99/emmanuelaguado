"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const submission = {
    firstName,
    lastName,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  };

  try {
    // 1. Store in Blob (Backup)
    const { url } = await put(
      `contact-submissions/${lastName}-${subject}-.json`,
      JSON.stringify(submission),
      { access: "public" }
    );
    console.log("Submission stored at", url);

    // 2. Send Email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email, // Allow replying directly to the user
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f5; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <div style="background: #18181b; color: #ffffff; padding: 24px; text-align: center;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 600;">New Portfolio Inquiry</h1>
    </div>
    <div style="padding: 32px;">
      <div style="margin-bottom: 16px;">
        <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: 600; margin-bottom: 4px; display: block;">From</span>
        <div style="font-size: 16px; color: #18181b; font-weight: 500;">${firstName} ${lastName}</div>
      </div>
      <div style="margin-bottom: 16px;">
        <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: 600; margin-bottom: 4px; display: block;">Email</span>
        <div style="font-size: 16px; color: #18181b; font-weight: 500;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
      </div>
      <div style="margin-bottom: 16px;">
        <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: 600; margin-bottom: 4px; display: block;">Subject</span>
        <div style="font-size: 16px; color: #18181b; font-weight: 500;">${subject}</div>
      </div>
      <div style="margin-top: 24px;">
        <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: 600; margin-bottom: 4px; display: block;">Message</span>
        <div style="background: #f4f4f5; padding: 20px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap; border-left: 4px solid #18181b; color: #333;">${message}</div>
      </div>
    </div>
    <div style="background: #f4f4f5; padding: 16px; text-align: center; font-size: 12px; color: #71717a; border-top: 1px solid #e4e4e7;">
      Received via your portfolio contact form
    </div>
  </div>
</body>
</html>
            `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    revalidatePath("/contact");
    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error processing submission:", error);
    return {
      success: false,
      message: "There was an error sending your message. Please try again.",
    };
  }
}
