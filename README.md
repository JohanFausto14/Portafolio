# Johan Fausto — Software Developer Portfolio

Modern, high-performance professional portfolio and engineering showcase built by **Ari Johan Alvarado Fausto**.

🌐 **Live Website:** [portafolio-johan-fausto.vercel.app](https://portafolio-johan-fausto.vercel.app/)  
📄 **Curriculum Vitae:** [Spanish PDF](https://portafolio-johan-fausto.vercel.app/CV_es.pdf) · [English PDF](https://portafolio-johan-fausto.vercel.app/CV_en.pdf)

---

## ⚡ Key Highlights & Architecture

- **True Bilingual Experience (ES / EN):** Instant language switching with smooth crossfade transitions, persistent selection via `localStorage`, and reactive dynamic `document.documentElement.lang`.
- **Zero-FOUT Local Typography:** Preloaded local `.woff2` font weights (*Bebas Neue*, *Space Grotesk*, and *Inter*) eliminating layout shifts (zero CLS) and avoiding external Google Fonts HTTP requests.
- **Accessible & Motion-Conscious:**
  - Full support for `prefers-reduced-motion` via Framer Motion's `<MotionConfig reducedMotion="user" />`.
  - Accessible interactive modals with `role="dialog"`, `aria-modal="true"`, body scroll locking, and full keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`).
  - Screen-reader friendly navigation labels and semantic landmark sections.
- **Case Study Driven Projects:** In-depth breakdown following the structured *Problem → Responsibility → Solution → Result* methodology with verifiable production metrics.
- **Headless PDF Compilation Pipeline:** Clean HTML CV templates compiled to exact 2-page print PDFs with Puppeteer.

---

## 🛠️ Tech Stack

- **Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/JohanFausto14/Portafolio.git

# Enter project directory
cd Portafolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Typecheck and build production bundle
npm run build

# Preview production build locally
npm run preview
```

### Deployment

Deployed to **Vercel** as a static Vite site (build command `npm run build`, output directory `dist`).

The production domain is declared in three places; update all three if the domain ever changes:

- `index.html` → `canonical`, `og:url`, `og:image`, `twitter:image`
- `public/robots.txt` → `Sitemap:`
- `public/sitemap.xml` → `<loc>`

---

## 📬 Contact & Connect

- **LinkedIn:** [Ari Johan Alvarado](https://www.linkedin.com/in/ari-johan-alvarado-fausto-a843b9427)
- **GitHub:** [@JohanFausto14](https://github.com/JohanFausto14)
- **Email:** [johanalvarado296@gmail.com](mailto:johanalvarado296@gmail.com)
- **Location:** Guadalajara, Jalisco, México

---

© Johan Fausto. All rights reserved.
