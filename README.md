# Triara Signage - Company Profile Website

A modern, production-ready company profile website for a signage and advertising business built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
signage-next/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Navbar, Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── ui/                # Reusable UI components
│   └── sections/          # Page sections (future)
├── constants/             # App constants and config
├── data/                  # Static data (services, portfolio, testimonials)
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── public/
    └── images/            # Static images

```

## 🎨 Design System

- **Primary Color:** #0F172A (Navy Blue)
- **Accent Color:** #F97316 (Orange)
- **Typography:** 
  - Headings: Poppins
  - Body: Inter
- **Container Max Width:** 1280px
- **Border Radius:** Cards (16-24px), Buttons (12px)

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint Code

```bash
npm run lint
```

## 📋 Features Completed (Phase 1 & 2)

✅ Next.js project setup with TypeScript  
✅ Tailwind CSS configuration  
✅ Folder structure and architecture  
✅ Type definitions and constants  
✅ Sample static data (services, portfolio, testimonials)  
✅ Reusable UI components:
  - Button (multiple variants)
  - Container
  - SectionHeader
  - ServiceCard
  - PortfolioCard
  - WhatsAppFloatingButton
✅ Layout components:
  - Navbar (responsive with mobile menu)
  - Footer (with links and contact info)
✅ Global styles and design tokens  
✅ Home page with hero, services, and portfolio sections  

## 🔜 Next Steps (Phase 3+)

- Complete Home page sections (testimonials, work process, CTA)
- Services page with detailed service information
- Portfolio page with filtering
- About page
- Contact page with form
- SEO optimization
- Performance optimization

## 📄 Documentation

See project documentation files:
- `PROJECT_CONTEXT.md` - Full project overview and requirements
- `TASKS.md` - Development roadmap
- `UI_GUIDELINES.md` - Design guidelines and rules

## 📞 Contact Information

Update contact information in `constants/index.ts`:
- Phone
- WhatsApp
- Email
- Address

## 🎯 Project Goals

1. Increase business credibility
2. Showcase portfolio work
3. Generate leads through organic traffic
4. Provide professional digital presence

---

Built with ❤️ for Triara Signage
