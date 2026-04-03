const brand = '#FF6B35';
const dark = '#1A1D23';
const muted = '#6B7280';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #E5E7EB;color:${muted};font-size:14px;width:40%;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #E5E7EB;color:${dark};font-size:14px;font-weight:500;">${escapeHtml(value)}</td>
    </tr>`;
}

function rowMultiline(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #E5E7EB;color:${muted};font-size:14px;width:40%;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #E5E7EB;color:${dark};font-size:14px;white-space:pre-wrap;word-break:break-word;">${escapeHtml(value)}</td>
    </tr>`;
}

function wrap(title: string, innerRows: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:24px;background:#F3F4F6;font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <tr>
      <td style="background:${dark};padding:24px 28px;">
        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">${escapeHtml(title)}</h1>
        <p style="margin:8px 0 0;color:#D1D5DB;font-size:14px;">BoXpert — containere modulare</p>
      </td>
    </tr>
    <tr>
      <td style="padding:0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tbody>
          ${innerRows}
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 24px;background:#F9FAFB;border-top:1px solid #E5E7EB;">
        <p style="margin:0;font-size:12px;color:${muted};">Acest mesaj a fost generat automat de pe site-ul BoXpert.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export type QuotePayload = {
  contact: { name: string; email: string; phone?: string };
  configuration: Record<string, unknown>;
  estimatedPriceLabel: string;
  locale: string;
};

export function buildQuoteEmailToBusiness(payload: QuotePayload): string {
  const { contact, configuration, estimatedPriceLabel, locale } = payload;
  const cfg = configuration as {
    size?: string;
    exteriorColor?: string;
    doors?: unknown[];
    windows?: unknown[];
    interiorFinish?: string;
    flooring?: string;
    electrical?: boolean;
    plumbing?: boolean;
    extraMessage?: string;
    hasInsulation?: boolean;
  };

  const doors = Array.isArray(cfg.doors) ? cfg.doors.length : 0;
  const windows = Array.isArray(cfg.windows) ? cfg.windows.length : 0;
  const isRo = locale !== 'en';

  const sizeMap: Record<string, string> = {
    '2x2': '2 x 2 m',
    '4x2': '4 x 2 m',
    '6x2_5': '6 x 2,5 m',
    '6x3': '6 x 3 m',
    '9x3': '9 x 3 m',
  };
  const colorMap: Record<string, string> = {
    '#2D3039': isRo ? 'Gri Antracit' : 'Anthracite Gray',
    '#F3F4F6': isRo ? 'Alb industrial' : 'Industrial White',
  };
  const interiorMap: Record<string, string> = {
    none: isRo ? 'Fără' : 'None',
    partition_pvc_door: isRo ? 'Perete despărțitor cu ușă PVC' : 'Partition wall with PVC door',
    sink: isRo ? 'Chiuvetă' : 'Sink',
    wc: 'WC',
    shower_cabin: isRo ? 'Cabină duș' : 'Shower cabin',
    stairs_railing: isRo ? 'Scară cu balustradă' : 'Stairs with railing',
    terrace_railing: isRo ? 'Terasă cu balustrade' : 'Terrace with railings',
  };
  const flooringMap: Record<string, string> = {
    none: isRo ? 'Fără' : 'None',
    linoleum: isRo ? 'Linoleum' : 'Linoleum',
    parquet: isRo ? 'Parchet' : 'Parquet',
  };

  const sizeLabel = cfg.size ? sizeMap[String(cfg.size)] || String(cfg.size) : '—';
  const colorLabel = cfg.exteriorColor ? colorMap[String(cfg.exteriorColor)] || String(cfg.exteriorColor) : '—';
  const interiorLabel = cfg.interiorFinish ? interiorMap[String(cfg.interiorFinish)] || String(cfg.interiorFinish) : '—';
  const flooringLabel = cfg.flooring ? flooringMap[String(cfg.flooring)] || String(cfg.flooring) : '—';

  const rows =
    row('Nume', contact.name) +
    row('Email', contact.email) +
    (contact.phone ? row('Telefon', contact.phone) : '') +
    row('Limba / Locale', locale) +
    row('Preț estimat', estimatedPriceLabel) +
    row('Mărime', sizeLabel) +
    row('Culoare exterioară', colorLabel) +
    row('Uși (total)', String(doors)) +
    row('Geamuri (total)', String(windows)) +
    row('Finisaj interior', interiorLabel) +
    row('Pardoseală', flooringLabel) +
    row('Instalație electrică', cfg.electrical ? 'Da' : 'Nu') +
    row('Instalație sanitară', cfg.plumbing ? 'Da' : 'Nu') +
    row('Izolație', cfg.hasInsulation ? 'Da' : 'Nu') +
    (cfg.extraMessage
      ? rowMultiline('Mesaj / opțiuni extra', cfg.extraMessage)
      : '');

  return wrap('Cerere ofertă — configurator', rows);
}

export function buildQuoteConfirmationToUser(payload: QuotePayload): string {
  const { contact, estimatedPriceLabel, locale } = payload;
  const isRo = locale === 'ro';
  const title = isRo ? 'Am primit cererea ta' : 'We received your request';
  const p1 = isRo
    ? `Bună ${escapeHtml(contact.name)}, îți mulțumim pentru interesul față de BoXpert.`
    : `Hello ${escapeHtml(contact.name)}, thank you for your interest in BoXpert.`;
  const p2 = isRo
    ? `Preț estimat indicativ: ${escapeHtml(estimatedPriceLabel)}. Echipa noastră va reveni pe email sau telefon în cel mai scurt timp.`
    : `Estimated indicative price: ${escapeHtml(estimatedPriceLabel)}. Our team will get back to you shortly.`;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;background:#F3F4F6;font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <tr><td style="background:${dark};padding:24px;">
      <h1 style="margin:0;color:#fff;font-size:20px;">${title}</h1>
    </td></tr>
    <tr><td style="padding:24px;color:${dark};font-size:15px;line-height:1.6;">
      <p style="margin:0 0 16px;">${p1}</p>
      <p style="margin:0 0 16px;">${p2}</p>
      <p style="margin:0;padding:12px;background:#FFF7ED;border-left:4px solid ${brand};border-radius:4px;font-size:14px;">
        <strong>contact@boxpert.ro</strong> · +40774957340
      </p>
    </td></tr>
  </table>
</body>
</html>`;
}

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  locale: string;
};

export function buildContactEmailToBusiness(payload: ContactPayload): string {
  const rows =
    row('Nume', payload.name) +
    row('Email', payload.email) +
    (payload.phone ? row('Telefon', payload.phone) : '') +
    row('Subiect', payload.subject) +
    row('Limba', payload.locale) +
    rowMultiline('Mesaj', payload.message);

  return wrap('Mesaj nou — pagina Contact', rows);
}
