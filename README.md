# DevRatStudio — Digital Innovation Studio Website

A premium, production-ready Next.js website for DevRatStudio featuring an interactive 3D globe, scroll-based storytelling, and a polished SaaS design aesthetic.

---

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Three.js** + **@react-three/fiber** — 3D Globe
- **Framer Motion** — Scroll animations & transitions
- **Lenis** — Smooth scroll

---

## 📁 Project Structure

```
devratstudio/
├── app/
│   ├── globals.css         # Global styles, CSS variables, utilities
│   ├── layout.tsx          # Root layout with fonts & metadata
│   └── page.tsx            # Main page composition
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Footer with links & contact
│   └── ui/
│       ├── Globe.tsx        # Interactive 3D globe (Three.js)
│       └── SmoothScroll.tsx # Lenis smooth scroll wrapper
├── sections/
│   ├── HeroSection.tsx     # Globe hero with animated headline
│   ├── ServicesSection.tsx # Scroll storytelling (6 services)
│   ├── AboutSection.tsx    # Studio intro, values, team image
│   └── ContactSection.tsx  # Contact form + direct contact links
├── utils/
│   └── useScrollProgress.ts # Scroll progress hooks
├── public/                 # Static assets
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚡ Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:3000
```

---

## 🏗️ Production Build

```bash
npm run build
npm start
```

---

## 🌍 Features

### Interactive Globe
- 3,000-point dot sphere rendered in WebGL via Three.js
- Latitude/longitude grid lines
- Connection arcs between global cities
- Animated pulse rings
- Responds to scroll — rotates, zooms, and shifts on scroll progress

### Scroll Storytelling
- 6 service cards revealed on scroll with alternating layouts
- Each card: title, subtitle, description, tech tags, and image
- Smooth Framer Motion entrance animations

### Services
1. Website Development
2. Web Application Development
3. Mobile Application Development
4. UI/UX Design
5. Product Design
6. Brand Strategy

### Contact
- Contact form (opens mailto)
- Direct email: devratstudio2006@gmail.com
- Phone: +91 79040 85435 / +91 80721 09512
- WhatsApp: +91 79040 85435

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--ivory` | `#F9F6F0` | Main background |
| `--cream` | `#F2EDE4` | Alt section background |
| `--ocean` | `#2D5A6B` | Primary brand colour |
| `--accent` | `#5B8FA8` | Interactive elements |
| `--glow` | `#A8C5D4` | Highlights |
| `--ink` | `#0D1F27` | Primary text |
| `--slate` | `#4A6670` | Body text |
| `--stone` | `#C8BBAA` | Muted text / borders |

**Fonts:**
- Display: *Cormorant Garamond* (serif, editorial)
- Body: *DM Sans* (clean, modern)
- Mono: *DM Mono* (labels, tags)

---

## ⚙️ Performance Notes

- Globe is **lazy loaded** via `next/dynamic` with `ssr: false`
- Images loaded from Unsplash with `loading="lazy"`
- Three.js canvas uses `dpr={[1, 1.5]}` cap for performance
- Lenis smooth scroll initialized client-side only
- Framer Motion uses `whileInView` with `once: true` to avoid re-triggering

---

## 📝 Customisation

### Swap images
Replace Unsplash URLs in `sections/ServicesSection.tsx`, `sections/AboutSection.tsx` with your own hosted images in `/public/images/`.

### Update contact details
Edit `sections/ContactSection.tsx` — search for phone numbers and email.

### Add/remove services
Edit the `services` array in `sections/ServicesSection.tsx`.

---

## 📦 Deployment

Deploy instantly on **Vercel**:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

---

*Built with ♥ by DevRatStudio*
