# IRL Interactive Events Website - Export Package

## Overview
This is a complete export of the IRL Interactive Events website - a futuristic neon-themed event planning platform built with React and Tailwind CSS.

## Features
- **Futuristic Neon Aesthetic**: Dark background with cyan/blue grid patterns and glowing text elements
- **Responsive Design**: Works across desktop and mobile devices
- **Interactive Navigation**: Full routing system with page transitions
- **Multiple Pages**:
  - Homepage with 8 program showcases
  - Services page (Corporate Healthcare, Restaurant Venue, Private Event)
  - Programs page with detailed program information
  - Contact page with inquiry form
  - Gallery page with embedded social media feeds
  - Individual detail pages for services and programs
- **Social Media Integration**: Embedded TikTok and Instagram feeds using @irleventsfun
- **Consistent Branding**: IRL logo and styling maintained across all pages

## Programs Featured
1. GSNL Game Show Night Live
2. BADA Brunch
3. Hybrid Events
4. B2B Speed Dating
5. Event Funnels Workshop
6. IRL Direct Marketing
7. Wedding Outside the Box
8. Water Cooler Sports

## Technical Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4.0 with custom design tokens
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Backend**: Supabase (optional for contact forms and data storage)
- **Deployment Ready**: Can be deployed to Vercel, Netlify, or any static hosting

## File Structure
```
├── App.tsx                     # Main application router
├── components/
│   ├── Homepage.tsx           # Landing page with program showcase
│   ├── ServicesPage.tsx       # Services overview
│   ├── ProgramsPage.tsx       # Programs overview
│   ├── ContactPage.tsx        # Contact form and information
│   ├── GalleryPage.tsx        # Social media gallery
│   ├── ServiceDetailPage.tsx  # Individual service details
│   ├── ProgramDetailPage.tsx  # Individual program details
│   ├── Layout.tsx             # Shared layout component
│   └── ui/                    # Shadcn UI components
├── styles/
│   └── globals.css            # Global styles and design tokens
└── utils/
    └── supabase/              # Backend integration utilities
```

## Deployment Instructions

### Option 1: Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Option 3: Static Hosting
1. Build the project: `npm run build`
2. Upload contents to your web server
3. Configure server to serve index.html for all routes

## Development Setup
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:5173

## Customization Guide

### Changing Colors
Edit the CSS custom properties in `styles/globals.css`:
- Neon colors: Modify cyan/purple gradient values
- Background: Update grid background image
- Text colors: Adjust foreground color values

### Adding New Pages
1. Create new component in `/components/`
2. Add page type to `App.tsx` PageType union
3. Add navigation route in Layout component
4. Update router in App component

### Modifying Programs/Services
Update the data arrays in respective page components:
- Services: Edit serviceCards array in ServicesPage.tsx
- Programs: Edit programs array in ProgramsPage.tsx

## Assets Required
- Futuristic grid background image
- IRL Interactive Events logo
- Program thumbnail images (8 total)
- Any additional branding assets

## Social Media Integration
The gallery page includes embedded feeds from:
- TikTok: @irleventsfun
- Instagram: @irleventsfun

## Contact & Support
Built for IRL Interactive Events
Social: @irleventsfun across all platforms

## License
Proprietary - All rights reserved to IRL Interactive Events

---

This export package contains all source code, components, and styling needed to deploy and maintain the IRL Interactive Events website. The codebase is production-ready and follows modern React best practices.