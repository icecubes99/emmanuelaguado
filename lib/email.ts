import nodemailer from "nodemailer";

/**
 * Singleton email transporter for reuse across requests.
 * This avoids creating a new SMTP connection on every email send.
 */

let transporter: nodemailer.Transporter | null = null;

export function getEmailTransporter(): nodemailer.Transporter {
  if (!transporter) {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error(
        "Email configuration is missing. Set GMAIL_USER and GMAIL_PASS environment variables."
      );
    }

    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      // Connection pooling for better performance
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
    });
  }

  return transporter;
}

/**
 * Verify email configuration is working.
 * Call this during app startup to catch configuration issues early.
 */
export async function verifyEmailConfig(): Promise<boolean> {
  try {
    const transport = getEmailTransporter();
    await transport.verify();
    return true;
  } catch (error) {
    console.error("Email configuration verification failed:", error);
    return false;
  }
}
