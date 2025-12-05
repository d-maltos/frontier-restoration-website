# Frontier Restoration LLC Website
Website for Frontier Restoration LLC - a local Alaskan restoration company

## Tech Stack
- **Framework**: Next.js 14 (App Router) with React & TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Content**: Markdown blog posts + static config files

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

### Next Steps
1. Create feature branch: `git checkout -b feature/phase1-home-hero`
2. Build hero section with CTAs
3. Create PR to `develop`

See `client_requirements.txt` for full requirements.