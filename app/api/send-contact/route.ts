import { NextResponse } from 'next/server';
import { sendViaResend } from '@/lib/email/resend';
import { buildContactEmailToBusiness } from '@/lib/email/templates';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, locale } = body as {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
      locale?: string;
    };

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const to = process.env.EMAIL_TO || 'contact@boxpert.ro';
    const loc = locale === 'en' ? 'en' : 'ro';

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || undefined,
      subject: subject.trim(),
      message: message.trim(),
      locale: loc,
    };

    const html = buildContactEmailToBusiness(payload);

    await sendViaResend({
      to: [to],
      subject: `[BoXpert Contact] ${payload.subject} — ${payload.name}`,
      html,
      replyTo: payload.email,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Server error';
    const status = message.includes('RESEND_API_KEY') ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
