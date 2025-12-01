import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getContactEmailHTML } from '@/lib/email-templates/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // TODO: Change the domain when prod
      to: 'dennisliu010906@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: getContactEmailHTML(name, email, message),
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}