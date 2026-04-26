import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // 1. Internal Backup to Firestore
    try {
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        subject: subject || 'General Inquiry',
        message,
        timestamp: serverTimestamp(),
        read: false
      });
    } catch (fsError) {
      console.error('Firestore backup failed:', fsError);
      // Continue with email even if firestore fails
    }

    // 2. Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[KMM Contact] ${subject || 'New Message'} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject || 'General Inquiry'}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ededed; padding: 40px; border-radius: 12px; border: 1px solid #333;">
          <h2 style="color: #818a5e; text-transform: uppercase; letter-spacing: 3px; font-size: 20px; margin-bottom: 24px;">New Contact Inquiry</h2>
          <div style="border-top: 1px solid #262626; margin-bottom: 24px;"></div>
          
          <div style="margin-bottom: 16px;">
            <p style="margin: 0; color: #a3a3a3; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 1px;">From</p>
            <p style="margin: 4px 0 0; font-size: 16px; color: #ffffff; font-weight: 600;">${name}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="margin: 0; color: #a3a3a3; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 1px;">Email Address</p>
            <p style="margin: 4px 0 0; font-size: 16px; color: #818a5e;">${email}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0; color: #a3a3a3; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 1px;">Subject</p>
            <p style="margin: 4px 0 0; font-size: 16px; color: #ffffff; font-weight: 600;">${subject || 'General Inquiry'}</p>
          </div>

          <div style="background: #171717; padding: 24px; border-radius: 8px; border: 1px solid #2a2a2a;">
            <p style="margin: 0 0 12px; color: #a3a3a3; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 1px;">Message</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #ededed; font-size: 15px;">${message}</p>
          </div>

          <div style="margin-top: 40px; text-align: center; border-top: 1px solid #262626; pt: 24px;">
            <p style="font-size: 11px; color: #555; text-transform: uppercase; letter-spacing: 1px;">
              Kurtz Mill Munitions LLC &bull; Secure Contact System
            </p>
          </div>
        </div>
      `,
    };

    // 3. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
