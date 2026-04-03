import { NextResponse } from 'next/server';
import { sendViaResend } from '@/lib/email/resend';
import { buildQuoteConfirmationToUser, buildQuoteEmailToBusiness } from '@/lib/email/templates';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { contact, configuration, estimatedPriceLabel, locale } = body as {
      contact?: { name?: string; email?: string; phone?: string };
      configuration?: Record<string, unknown>;
      estimatedPriceLabel?: string;
      locale?: string;
    };

    if (!contact?.name?.trim() || !contact?.email?.trim()) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }
    if (!emailRegex.test(contact.email.trim())) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    if (!configuration || typeof configuration !== 'object') {
      return NextResponse.json({ error: 'Invalid configuration' }, { status: 400 });
    }

    const priceLabel = typeof estimatedPriceLabel === 'string' ? estimatedPriceLabel : '—';
    const loc = locale === 'en' ? 'en' : 'ro';

    const to = process.env.EMAIL_TO || 'contact@boxpert.ro';

    const payload = {
      contact: {
        name: contact.name.trim(),
        email: contact.email.trim(),
        phone: contact.phone?.trim() || undefined,
      },
      configuration,
      estimatedPriceLabel: priceLabel,
      locale: loc,
    };

    const htmlBusiness = buildQuoteEmailToBusiness(payload);

    await sendViaResend({
      to: [to],
      subject: `[BoXpert] Cerere ofertă — ${payload.contact.name}`,
      html: htmlBusiness,
      replyTo: payload.contact.email,
    });

    const sendUserCopy = process.env.EMAIL_SEND_USER_CONFIRMATION !== 'false';
    if (sendUserCopy) {
      const htmlUser = buildQuoteConfirmationToUser(payload);
      const subj =
        loc === 'ro'
          ? 'BoXpert — Am primit cererea ta de ofertă'
          : 'BoXpert — We received your quote request';
      await sendViaResend({
        to: [payload.contact.email],
        subject: subj,
        html: htmlUser,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Server error';
    const status = message.includes('RESEND_API_KEY') ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
