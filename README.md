# Institute of Digital Risk — IDR Website

> A production-grade marketing website for the **Institute of Digital Risk (IDR)** — an industry-led training and deployment institute focused on digital, cyber and AI risk.

**Live site:** [idr-website-eight.vercel.app](https://idr-website-eight.vercel.app)

---

## About the Project

IDR is a UK-based institute that bridges the gap between academic insight and real-world industry practice in digital risk. This website is their primary public-facing presence — designed to communicate who they are, what they offer, and why they matter to three core audiences: students seeking a career in digital risk, organisations looking to hire deployment-ready talent, and industry partners exploring collaboration.

The site needed to do more than look good. It needed to **build trust immediately** — because IDR operates in regulated, high-consequence environments where credibility is everything. Every design and technical decision was made with that objective in mind.

---

## What It Does

The site is a single-page scrolling experience with seven sections:

- **Hero** — mission statement, animated network background, live risk dashboard card and animated trust statistics
- **About** — IDR's origin, UK university partnership and industry-first approach
- **The Pipeline** — IDR's four-stage model: Train → Hire → Innovate → Deploy
- **Services** — three core pillars: Academy, Innovation & Incubation, and Advisory Services
- **Community** — the people IDR serves, from students to CISOs, across financial services, critical infrastructure and government
- **Testimonials** — social proof from practitioners, with alignment to NIST, ISO 27001, NIS2, DORA, the EU AI Act and NCSC guidance
- **Contact** — a register-of-interest form

---

## Tech Stack

Built under a strict constraint: **no CSS frameworks, no JavaScript libraries, no dependencies of any kind.** Everything is vanilla.

| Layer | Technology |
|---|---|
| Markup | HTML5 — semantic, accessible, ARIA-labelled |
| Styles | CSS3 — custom properties, Grid, Flexbox |
| Behaviour | JavaScript ES6+ — zero dependencies |
| Fonts | Google Fonts — Bebas Neue, Manrope, JetBrains Mono |
| Hosting | Vercel — with custom cache and security headers |

---

## Technical Highlights

**Performance**
- CSS and JS served as separate cached files — 1 year cache via `vercel.json`
- All scroll animations use `IntersectionObserver` — zero scroll event listeners
- Canvas animation uses a single `requestAnimationFrame` loop
- `passive: true` on all scroll and resize listeners

**Animations**
- Animated node network on HTML5 `<canvas>` — no library
- Text scramble effect on hero headline — pure vanilla JS
- Counter animations using `requestAnimationFrame` and ease-out cubic easing
- Custom cursor with a lagging ring follower on its own `rAF` loop

**Accessibility**
- `:focus-visible` keyboard navigation — focus ring on Tab only, never on mouse
- Skip-to-content link — hidden off-screen, revealed on first Tab press
- All decorative elements marked `aria-hidden="true"`
- Semantic landmarks throughout — nav, main, section, article, footer
- `prefers-reduced-motion` respected

**Security**
- HTTP security headers in `vercel.json`: `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`
- HTTPS enforced by Vercel

**SEO & Social**
- Full Open Graph tags — branded preview on LinkedIn, WhatsApp, Twitter
- Custom 1200×630 OG image
- Canonical URL, meta description, keyword tags

---

## Project Structure

```
idr-production/
├── index.html              ← HTML markup only — no inline CSS or JS
├── css/
│   └── style.css           ← All styles, 17 sections, fully commented
├── js/
│   └── main.js             ← All JavaScript, 10 modules, fully commented
├── images/
│   ├── favicon.ico         ← Multi-size ICO (16px to 256px)
│   ├── favicon-32.png      ← PNG favicon for modern browsers
│   ├── favicon-256.png     ← Apple touch icon
│   └── og-image.png        ← 1200×630 Open Graph social preview
├── vercel.json             ← Cache rules + security headers
└── README.md
```

---

## Running Locally

No build step. Open `index.html` in any modern browser.

```bash
# Or with a local server for font loading
npx serve .
```
