const RESEND_API = 'https://api.resend.com/emails';

export type SendEmailParams = {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendViaResend(params: SendEmailParams): Promise<{ id?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const from = process.env.EMAIL_FROM || 'BoXpert <onboarding@resend.dev>';

  const res = await fetch(RESEND_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: params.to,
      subject: params.subject,
      html: params.html,
      ...(params.replyTo ? { reply_to: params.replyTo } : {}),
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const msg = typeof data === 'object' && data !== null && 'message' in data
      ? String((data as { message?: string }).message)
      : res.statusText;
    throw new Error(msg || 'Failed to send email');
  }

  return data as { id?: string };
}
