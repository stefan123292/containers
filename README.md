# BoXpert - Custom Container Configurator Platform

A modern, high-conversion website for selling customizable modular containers with real-time 3D visualization and configuration.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.163-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC)

## 🌟 Features

### Core Features

- **🎨 3D Container Configurator**
  - Real-time 3D rendering using Three.js and React-Three-Fiber
  - Interactive controls: size selection, color customization, door/window placement
  - Live price calculation based on selected options
  - Export configuration as quote request

- **🏗️ Product Catalog**
  - Six categories: Living, Office, Sanitary, Refrigerated, Storage, Custom
  - Detailed product pages with specifications
  - Category filtering and navigation

- **📄 Business Pages**
  - Homepage with hero section and feature highlights
  - About Us page with company story and team
  - Portfolio/Projects gallery
  - Contact page with form and map integration
  - Testimonials and trust indicators

- **💼 Admin-Ready**
  - CMS integration structure for Strapi/Sanity
  - Configurable pricing rules
  - Product management ready

## 🚀 Tech Stack

- **Framework**: Next.js 14.2 (App Router)
- **UI Library**: React 18.3
- **Styling**: TailwindCSS 3.4
- **3D Graphics**: Three.js + React-Three-Fiber + Drei
- **State Management**: Zustand
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📁 Project Structure

```
container/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── configurator/             # 3D configurator page
│   ├── contact/                  # Contact page
│   ├── portfolio/                # Portfolio/projects page
│   ├── products/                 # Product catalog
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── configurator/             # 3D configurator components
│   │   ├── Container3D.tsx       # 3D container model
│   │   ├── Scene3D.tsx           # Three.js scene setup
│   │   └── ConfiguratorPanel.tsx # Configuration UI panel
│   ├── home/                     # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   └── layout/                   # Layout components
│       ├── Header.tsx            # Navigation header
│       ├── Footer.tsx            # Site footer
│       └── WhatsAppButton.tsx    # Floating WhatsApp button
├── lib/
│   ├── store/
│   │   └── configuratorStore.ts  # Zustand state management
│   └── utils.ts                  # Utility functions
├── types/
│   ├── configurator.ts           # Configurator types & pricing
│   └── products.ts               # Product & portfolio types
├── public/                       # Static assets
├── docs/                         # Documentation
│   ├── CMS_INTEGRATION.md        # CMS integration guide
│   ├── ROADMAP.md                # Development roadmap
│   └── API_STRUCTURE.md          # API design document
└── README.md                     # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

```bash
cd container
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

- **Primary Orange**: `#FF6B35` - CTA buttons, accents, highlights
- **Industrial Gray**: `#2D3039` - Main dark color, anthracite
- **Deep Black**: `#1A1D23` - Headers, text, backgrounds
- **White/Light**: `#F3F4F6` - Backgrounds, cards

### Typography

- **Display Font**: Space Grotesk (headings, hero text)
- **Body Font**: Inter (body text, UI elements)

### Components

All components follow a consistent design pattern:
- Rounded corners (8-16px)
- Consistent spacing (4px grid system)
- Hover states with smooth transitions
- Mobile-first responsive design

## 📐 3D Configurator

### Container Sizes

- **20ft**: 6m × 2.6m × 2.4m (Standard)
- **40ft**: 12m × 2.6m × 2.4m (Double length)
- **40ft HC**: 12m × 2.9m × 2.4m (High Cube)

### Customization Options

1. **Exterior**
   - 6 color options
   - Custom colors can be added
   
2. **Doors**
   - Types: Standard, Double, Roller, Glass
   - Configurable positioning
   - Multiple doors supported

3. **Windows**
   - Sizes: Small, Medium, Large
   - Types: Standard, Sliding, Fixed
   - Wall placement selection

4. **Features**
   - Insulation ($1,200)
   - Interior finish: None, Basic ($800), Premium ($2,500)
   - Flooring: Plywood ($400), Vinyl ($650), Laminate ($950)
   - Electrical system ($1,500)
   - HVAC system ($2,800)

### Price Calculation

Base prices start at $3,500 with multipliers based on size and additions. See `types/configurator.ts` for full pricing structure.

## 🔗 API Integration (Planned)

### Endpoints Needed

```
GET  /api/products              # List all products
GET  /api/products/:id          # Single product details
GET  /api/projects              # Portfolio projects
GET  /api/testimonials          # Customer testimonials
POST /api/quote                 # Submit quote request
POST /api/contact               # Submit contact form
GET  /api/pricing-rules         # Get current pricing
```

## 📱 Responsive Design

- **Mobile**: < 768px (Single column, stacked configurator)
- **Tablet**: 768px - 1024px (Two columns where appropriate)
- **Desktop**: > 1024px (Full layout, side-by-side configurator)

## 🚢 Deployment

### Recommended Platforms

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted with Docker**

### Environment Variables

Create a `.env.local` file:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-PVWMVSZ9R7

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here

# CMS (when integrated)
NEXT_PUBLIC_CMS_URL=https://your-cms.com
CMS_API_TOKEN=your_token_here

# Email service (for forms)
SMTP_HOST=smtp.example.com
SMTP_USER=your_email
SMTP_PASS=your_password
```

## 📝 Next Steps

See [ROADMAP.md](./docs/ROADMAP.md) for the complete development roadmap.

### Immediate Priorities

1. ✅ Project setup and basic structure
2. ✅ 3D configurator implementation
3. ✅ Core pages (Home, Products, Contact)
4. 🔄 CMS integration (Strapi/Sanity)
5. 🔄 Email quote system
6. 🔄 Blog functionality
7. 🔄 Advanced 3D features (textures, lighting)

## 🤝 Contributing

This is a commercial project. For contribution guidelines, please contact the development team.

## 📄 License

Proprietary - All rights reserved

## 📞 Support

For questions or support:
- Email: dev@boxpert.com
- Documentation: See `/docs` folder
- CMS Integration: See `docs/CMS_INTEGRATION.md`

---

Built with ❤️ using Next.js, React, and Three.js

