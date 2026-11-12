# Buildroonix Engineering Studio — End-to-End Project Documentation (Next.js)

Complete technical & functional documentation for **`buildroonix-landing-page`** (`v1.0.0`), powered by **Next.js 15 (App Router)**, React 19, atomic JSON inquiry storage, and an integrated Software Engineering + IoT/Hardware + Digital Manufacturing showcase.

---

## 1. Company Positioning & Preserved Brand Identity
- **Positioning:** *"An Integrated Technology, Software & Engineering Solutions Company."*
- **Scope:** Service showcase and technical lead-generation platform only (no shopping cart, checkout, or e-commerce order flow on this site; consumer 3D decor remains separate at `https://3d.buildroonix.com`).
- **Preserved Brand Records (`lib/brand.js`):**
  - Logo & Motion Reel: `/assets/logo.png`, `/assets/can_you_animate_this_png_logo.mp4`
  - Email: `support@buildroonix.com`
  - Phone / WhatsApp: `+91 9580181697`
  - UPI ID: `9580181697@ibl`
  - Registration: `MSME Registered · India` · GSTIN: `09HQHPD9487C1ZE`
  - Location: `Varanasi, Uttar Pradesh, India · Pan-India & Remote Delivery`
  - Portals: `3d.buildroonix.com`, `software.buildroonix.com`, `projects.buildroonix.com`
  - Socials: Instagram, WhatsApp, LinkedIn, X/Twitter, GitHub, YouTube

---

## 2. Project Structure

```text
Buildroonix/
├── app/
│   ├── layout.js                         # Root layout, Google Fonts (Syne, DM Sans, DM Mono), QuoteProvider, ScrollReveal
│   ├── globals.css                       # Architectural dark-to-light design system & full-width/mobile responsive rules
│   ├── page.js                           # Homepage (static prerendered)
│   ├── services/
│   │   ├── software-development/page.js  # Dedicated Software Division overview (16 sections, A–N groups)
│   │   └── [slug]/page.js                # 19 SSG landing pages (16 Software services + 3 Engineering divisions)
│   ├── portfolio/
│   │   ├── page.js                       # Filterable Portfolio (9 software categories + Client/Demo/Prototype)
│   │   └── [slug]/page.js                # 13-point Project Detail page with architecture & UI preview
│   └── api/
│       ├── health/route.js               # GET /api/health
│       └── inquiries/route.js            # POST /api/inquiries (saves to data/inquiries.json)
├── components/
│   ├── SiteHeader.js                     # Sticky header, 4-group Mega Menu, slide-in mobile accordion drawer
│   ├── SiteFooter.js                     # Final business message CTA banner + preserved contact/registration + mobile dock
│   ├── QuoteContext.js                   # Project Inquiry / Quote Modal + WhatsApp direct builder
│   ├── QuoteTriggerButton.js             # Reusable Quote Modal trigger
│   ├── HeroConsole.js                    # Hero interactive Motion Reel & System Blueprint toggle
│   ├── SoftwareWorkbench.js              # Prominent 8-category interactive Software Expertise workbench
│   ├── UiMockup.js                       # Custom CSS/HTML/SVG UI mockups (no stock photos)
│   ├── PortfolioSection.js               # Interactive 9-category portfolio filter grid
│   ├── PortfolioPreviewSwitcher.js       # Toggle between Interactive UI preview & studio visual
│   ├── LifecycleTimeline.js              # Scroll-animated 9-phase development lifecycle timeline
│   ├── FaqAccordion.js                   # Smooth CSS Grid FAQ accordion
│   └── ScrollReveal.js                   # Lightweight IntersectionObserver + MutationObserver scroll reveal
├── lib/
│   ├── brand.js                          # Brand info, 10 Divisions, Mega Menu, 8 SW Categories, 9 Steps, 8 Tech Stack groups
│   ├── services-catalog.js               # Capability groups A–N & 19 unique service definitions
│   ├── portfolio-data.js               # Portfolio projects covering all 9 categories
│   └── db.js                             # Server-only atomic JSON inquiry storage helper
├── public/assets/                        # Active logos, MP4 reel, and studio/project visuals
├── ecosystem.config.js                   # PM2 config running Next.js on port 8080
├── nginx.conf                            # NGINX reverse proxy for buildroonix.com -> 127.0.0.1:8080
├── deploy.sh                             # Manual VPS update + npm run build + pm2 reload
└── .github/workflows/deploy.yml          # GitHub Actions CI/CD auto-deploy on main push
```

---

## 3. Routes & API Endpoints

### App Routes (31 Pre-rendered Routes)
- `/` — Integrated homepage with Hero Console (`Motion Reel` / `System Blueprint`), 10 Core Business Divisions, 8-Category Interactive Software Workbench, Featured Work, 9-Category Portfolio Preview, Scroll-Animated 9-Phase Lifecycle, Language-Agnostic 8-Category Tech Stack, Enterprise Governance, Connected Ecosystem, Testimonials, FAQ Accordion, Philosophy, and Footer.
- `/services/software-development` — Dedicated Software Development overview page covering all 16 sections and Capability Groups A–N.
- `/services/[slug]` — 19 pre-rendered service pages:
  - 16 Software Engineering services (`custom-software-development`, `web-development`, `web-app-development`, `mobile-app-development`, `desktop-application-development`, `saas-development`, `enterprise-software-development`, `erp-development`, `crm-development`, `ai-development`, `api-backend-development`, `cloud-devops`, `software-integration`, `ui-ux-design`, `software-testing`, `software-maintenance`)
  - 3 Connected Divisions (`iot-embedded`, `hardware-engineering`, `digital-manufacturing`)
- `/portfolio` & `/portfolio/[slug]` — Filterable portfolio and full project detail pages clearly distinguishing `Client Project`, `System Demonstration`, and `Internal Prototype`.

### API Routes
- `GET /api/health` — Uptime & health status
- `POST /api/inquiries` — Saves technical inquiry submissions to `data/inquiries.json`

---

## 4. Running Locally & Production Deployment
```bash
npm install
npm run dev     # Starts Next.js dev server at http://localhost:8080
# Production:
npm run build
npm run start   # Starts Next.js production server at http://localhost:8080
```
