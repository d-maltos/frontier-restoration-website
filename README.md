# Frontier Restoration LLC Website

Website for Frontier Restoration LLC - a local Alaskan restoration company serving Fairbanks, North Pole, Eielson, Fort Wainwright & surrounding areas.

🌐 **Live Site**: [https://frontier-restoration-website-vercel-lake.vercel.app/](https://frontier-restoration-website-vercel-lake.vercel.app/)

## Tech Stack
- **Framework**: Next.js 14 (App Router) with React & TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **SEO**: Structured data (JSON-LD), meta tags, Open Graph

## Getting Started

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Branching Strategy
See [BRANCHING_STRATEGY.md](./BRANCHING_STRATEGY.md) for detailed branching workflow and conventions.

**Quick Start:**
1. ✅ `develop` branch created
2. ✅ Initial Next.js setup complete
3. Start Phase 1 MVP features from `develop`
4. Use feature branches: `feature/phase1-[description]`

### Project Structure
```
frontier-restoration-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
├── lib/                   # Utility functions
├── public/                # Static assets
└── ...config files
```

## Features Implemented

### ✅ Completed Features
- **Home Page**
  - Hero section with CTAs (Call Now & Request Inspection)
  - Why Choose Us section (Satisfaction Guarantee, 24/7 Availability, Certified Specialists)
  - Services overview with images (Water Damage, Fire Damage, Mold Remediation)
  - LocalBusiness schema for SEO

- **Navigation & Footer**
  - Responsive navigation with mobile menu
  - Company icon in navigation bar
  - Horizontal logo in footer
  - Social media links (Facebook, Instagram)
  - Newsletter signup section

- **Pages**
  - **About Us**: Company mission, values, and team information
  - **Services**: Detailed service pages with images and descriptions
  - **Emergency**: Emergency response guide and checklist
  - **Contact**: Contact form, Google Maps embed, contact information

- **Design**
  - Dark theme with yellow accents
  - Mobile-first responsive design
  - Sticky mobile call button
  - Custom favicon

- **SEO**
  - Meta tags and Open Graph tags
  - Structured data (JSON-LD)
  - Optimized page titles and descriptions
  - Keywords optimization

### 🚧 Pending Features
- Form submission API integration
- Email service integration (Resend/SendGrid)
- Blog structure and posts
- Insurance navigation page
- Trust builders (testimonials, certifications, before/after gallery)

## Project Status

The website is currently deployed and live on Vercel. Core features including navigation, hero section, services pages, contact form, and SEO optimization have been implemented. The site follows a dark theme with yellow accents to match the original Frontier Restoration branding.

See `client_requirements.txt` for full requirements and future enhancements.