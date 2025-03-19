import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function sendVerificationEmail(email: string, token: string) {
  try {
    await transporter.sendMail({
      from: `"Wealth Accelerator" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Verification Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; padding: 20px;">
            <h1 style="color: #2563eb; margin: 0; font-size: 24px;">Verification Code</h1>
          </div>
          
          <div style="background: #ffffff; padding: 20px;">
            <p style="color: #333; font-size: 16px;">Here is your verification code:</p>
            
            <div style="background: #f3f4f6; padding: 15px; text-align: center; margin: 20px 0; font-size: 28px; color: #2563eb;">
              ${token}
            </div>
            
            <p style="color: #333; font-size: 16px;">Enter this code to verify your account.</p>
            <p style="color: #666; font-size: 14px;">This code will expire in 30 minutes.</p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Wealth Accelerator</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Email sending error:', error);
  }
}