# Quick Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)
- A code editor (VS Code recommended)

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd container
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TailwindCSS
- Three.js & React-Three-Fiber
- Zustand
- TypeScript
- And all other dependencies

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Create the file
touch .env.local
```

Add the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_CONTACT_EMAIL=info@containers.com
NEXT_PUBLIC_CONTACT_PHONE=+1234567890

# CMS (Add when ready to integrate)
# NEXT_PUBLIC_CMS_URL=https://your-cms.com
# CMS_API_TOKEN=your_token_here

# Email Service (Add when implementing quote system)
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your_email@gmail.com
# SMTP_PASS=your_app_password
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

### 5. Build for Production (Optional)

```bash
npm run build
npm start
```

## Project Structure Overview

```
container/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Homepage
│   ├── configurator/      # 3D configurator
│   ├── products/          # Product catalog
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── portfolio/         # Portfolio page
├── components/            # React components
│   ├── configurator/     # 3D components
│   ├── home/             # Homepage sections
│   └── layout/           # Header, Footer, etc.
├── lib/                  # Utilities and stores
│   ├── store/           # Zustand state management
│   └── utils.ts         # Helper functions
├── types/               # TypeScript types
├── docs/                # Documentation
├── public/              # Static assets
└── package.json         # Dependencies
```

## Available Scripts

```bash
# Development
npm run dev          # Start dev server on localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
```

## Key Features to Test

### 1. Homepage
Visit: http://localhost:3000
- Hero section with animations
- Features overview
- Product categories
- Testimonials
- Call-to-action sections

### 2. 3D Configurator
Visit: http://localhost:3000/configurator
- Change container size (20ft, 40ft, 40ft-HC)
- Select exterior colors
- Add/remove doors and windows
- Toggle features (insulation, electrical, HVAC)
- Live price updates

### 3. Product Catalog
Visit: http://localhost:3000/products
- Browse all product categories
- View features and specifications
- Navigate to configurator

### 4. Contact Form
Visit: http://localhost:3000/contact
- Fill out contact form
- View contact information
- Map placeholder

## Common Issues & Solutions

### Issue: Port 3000 already in use

```bash
# Use a different port
PORT=3001 npm run dev
```

### Issue: Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Three.js/WebGL errors

- Ensure your browser supports WebGL
- Update your graphics drivers
- Try a different browser (Chrome/Firefox recommended)

### Issue: Build errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Browser Compatibility

Recommended browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Note**: 3D configurator requires WebGL support

## Development Tips

### Hot Reload
Next.js automatically reloads when you save changes to files.

### TypeScript Errors
The IDE will show TypeScript errors in real-time. Fix them before building for production.

### Styling
- Modify `tailwind.config.ts` for design system changes
- Global styles are in `app/globals.css`
- Component styles use Tailwind utility classes

### 3D Configurator
- Main scene: `components/configurator/Scene3D.tsx`
- Container model: `components/configurator/Container3D.tsx`
- Controls: `components/configurator/ConfiguratorPanel.tsx`
- State: `lib/store/configuratorStore.ts`

## Next Steps

1. **Customize Content**
   - Update company information in components
   - Replace placeholder phone numbers and emails
   - Add real images to `/public` folder

2. **Integrate CMS** (Optional)
   - Follow `docs/CMS_INTEGRATION.md`
   - Set up Strapi or Sanity
   - Connect to API

3. **Set Up Email**
   - Configure SMTP credentials
   - Test contact form submissions
   - Set up quote request emails

4. **Deploy**
   - Vercel (recommended): `vercel deploy`
   - Netlify: Connect Git repository
   - Self-host: Build and deploy to your server

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Three.js Documentation](https://threejs.org/docs)

## Support

For issues or questions:
- Check `docs/` folder for detailed guides
- Review `README.md` for project overview
- See `docs/ROADMAP.md` for planned features

## Quick Customization Checklist

- [ ] Update company name and logo
- [ ] Replace contact information (phone, email, address)
- [ ] Update WhatsApp number in `.env.local`
- [ ] Customize color scheme in `tailwind.config.ts`
- [ ] Add real product images
- [ ] Update testimonials with real data
- [ ] Modify footer links
- [ ] Set up Google Maps API for contact page
- [ ] Configure social media links

---

**You're all set!** Start the dev server and begin customizing your container configurator platform.

```bash
npm run dev
```

Visit http://localhost:3000 and start building! 🚀

