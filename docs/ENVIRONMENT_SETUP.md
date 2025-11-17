# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

## Basic Configuration

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_CONTACT_EMAIL=info@containers.com
NEXT_PUBLIC_CONTACT_PHONE=+1234567890
```

## Google Maps Integration

Get your API key from [Google Cloud Console](https://console.cloud.google.com)

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

## CMS Configuration (Optional - Strapi/Sanity)

```env
NEXT_PUBLIC_CMS_URL=https://your-cms.com
CMS_API_TOKEN=your_cms_api_token_here
```

## Email Service Configuration

### Option 1: Gmail SMTP

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Option 2: SendGrid

```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Option 3: Resend

```env
RESEND_API_KEY=your_resend_api_key
```

## Webhooks & Revalidation

```env
REVALIDATE_TOKEN=your_random_secret_token_here
```

## Analytics (Optional)

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Error Tracking (Optional)

```env
SENTRY_DSN=your_sentry_dsn
SENTRY_AUTH_TOKEN=your_sentry_auth_token
```

## Environment

```env
NODE_ENV=development
```

---

## Notes

- Never commit `.env.local` to version control
- Use `.env.example` or this documentation as reference
- All `NEXT_PUBLIC_*` variables are exposed to the browser
- Other variables are server-side only

