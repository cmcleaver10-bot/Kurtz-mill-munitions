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
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: white; padding: 40px; border-radius: 20px;">
          <h2 style="color: #c5a059; text-transform: uppercase; letter-spacing: 2px;">New Contact Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          <div style="background: #111; padding: 20px; border-radius: 10px; margin-top: 20px; border: 1px solid #222;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #ccc;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #555; margin-top: 40px; text-align: center;">
            Sent from Kurtz Mill Munitions Contact Form
          </p>
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
