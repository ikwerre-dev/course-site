import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

export async function POST(req: Request) {
  try {
    // Get auth token from cookies
    const cookieStore = cookies();
    const token = (await cookieStore).get('auth_token');

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify token and get user data
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const formData = await req.formData();
    const proof = formData.get('proof') as File;
    const amount = formData.get('amount');
    const currency = formData.get('currency');
    const walletAddress = formData.get('walletAddress');
 
    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'brianrose249@yahoo.com',
      subject: 'New Payment Initiated',
      html: `
        <h2>New Payment Notification</h2>
        <p><strong>From:</strong> ${user.name} (${user.email})</p>
        <p><strong>Amount:</strong> $${amount}</p>
        <p><strong>Currency:</strong> ${currency}</p>
        <p><strong>Wallet Address:</strong> ${walletAddress}</p>
        <p>Payment proof has been uploaded. Please check the attachment.</p>
      `,
      attachments: [
        {
          filename: proof.name,
          content: Buffer.from(await proof.arrayBuffer())
        }
      ]
    });

    return NextResponse.json({ 
      success: true,
    });
  } catch (error) {
    console.error('Payment notification failed:', error);
    return NextResponse.json(
      { error: 'Failed to process payment notification' },
      { status: 500 }
    );
  }
}