# 🍦 Deva Ice Cream — Event Website Template

A production-ready, fully responsive website for an event-based ice cream and snacks business.  
Built with **React + TypeScript + Vite + Tailwind CSS**.

---

## 📁 Project Structure

```
deva-ice-cream/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky responsive nav with mobile menu
│   │   ├── Hero.tsx            # Full-screen hero with background image
│   │   ├── About.tsx           # About / story section
│   │   ├── Services.tsx        # 4 service cards
│   │   ├── Gallery.tsx         # Filterable image gallery with lightbox
│   │   ├── WhyUs.tsx           # 6 reason cards + CTA banner
│   │   ├── Testimonials.tsx    # Interactive testimonial carousel
│   │   ├── Contact.tsx         # Form + map + contact info
│   │   ├── Footer.tsx          # Full site footer
│   │   ├── FloatingButtons.tsx # WhatsApp + Call FAB
│   │   └── ScrollToTop.tsx     # Scroll-to-top button
│   ├── config/
│   │   └── config.ts           # ⭐ CENTRAL CONFIG — edit brand info here
│   ├── hooks/
│   │   └── useScrollReveal.ts  # Intersection Observer scroll animation hook
│   ├── pages/
│   │   └── Home.tsx            # Composes all sections
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css               # Tailwind + global styles
│   └── vite-env.d.ts
├── index.html                  # HTML shell with SEO meta tags
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vercel.json                 # Vercel deployment config
└── netlify.toml                # Netlify deployment config
```

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
- Node.js **v18+** (download from https://nodejs.org)
- npm **v9+** (comes with Node.js)

### Steps

```bash
# 1. Navigate into the project folder
cd deva-ice-cream

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
# Build optimised static files
npm run build

# Preview the production build locally
npm run preview
```

The compiled output will be in the `dist/` folder.

---

## ☁️ Deployment

### Deploy to Vercel (Recommended — Free)

1. Push the project to a GitHub repository
2. Visit https://vercel.com → **New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — just click **Deploy**
5. Your site is live! 🎉

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify (Free)

1. Push to GitHub
2. Visit https://netlify.com → **Add new site** → **Import from Git**
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**

Or drag-and-drop the `dist/` folder at https://app.netlify.com/drop

---

## ⚙️ Customisation Guide

### 🔑 Change Brand Info (Phone, Address, Email)

Edit **`src/config/config.ts`** — this single file controls everything:

```ts
export const brand = {
  name: "Your Brand Name",
  tagline: "Your Tagline Here",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",   // For tel: links (no spaces)
  whatsapp: "+919876543210",   // For WhatsApp API
  email: "hello@yourbrand.com",
  address: "Your full address here",
  mapEmbedUrl: "paste your Google Maps embed URL here",
  // ...
};
```

### 🎨 Change Colours

Open `tailwind.config.js` and update the `rose` / `cream` color palettes, or change class names in components.

### 📸 Change Gallery Images

In `src/config/config.ts`, update the `galleryImages` array:
```ts
export const galleryImages = [
  {
    id: "g1",
    src: "https://your-image-url.com/photo.jpg",
    alt: "Alt text",
    category: "ice-cream",  // ice-cream | wedding | snacks | setup
    label: "Display Label",
  },
  // ...
];
```

### ✍️ Change Services

Update the `services` array in `src/config/config.ts`.

### 💬 Change Testimonials

Update the `testimonials` array in `src/config/config.ts`.

### 📧 Connect Real Form Submission

In `src/components/Contact.tsx`, replace the `setTimeout` mock in `handleSubmit` with a real service:

**Option A — Formspree (free, no backend needed):**
```bash
npm install @formspree/react
```
```tsx
// Replace handleSubmit body with:
const result = await submitToFormspree(formRef);
```

**Option B — EmailJS (free tier available):**
```bash
npm install emailjs-com
```
```tsx
import emailjs from 'emailjs-com';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'USER_ID');
```

---

## 🌐 Google Maps Embed

1. Go to https://maps.google.com
2. Search your business address
3. Click **Share** → **Embed a map** → Copy the `src` URL from the iframe
4. Paste it into `brand.mapEmbedUrl` in `src/config/config.ts`

---

## 📦 Reusing as a Template

This project is designed as a reusable template for multiple clients:

1. Clone / copy the folder
2. Rename the folder to the client's brand name
3. Open `src/config/config.ts`
4. Update all brand fields (name, phone, email, address, services, gallery)
5. Replace Google Fonts in `index.html` if desired
6. Run `npm install && npm run dev` to preview
7. Deploy to Vercel/Netlify

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| TypeScript | 5 | Type safety |
| Vite | 5 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| Lucide React | 0.383 | Icons |

---

## 📄 License

MIT — free to use and modify for client projects.

---

Made with ❤️ for sweet celebrations 🍦
