# Institute of Digital Risk — IDR

Production-ready single-page website. Vanilla HTML5, CSS3, JavaScript ES6+.

## Project Structure

```
idr-production/
├── index.html          ← HTML markup only
├── css/
│   └── style.css       ← All styles (~900 lines, fully commented)
├── js/
│   └── main.js         ← All JavaScript (~250 lines, fully commented)
├── images/
│   ├── favicon.ico     ← Multi-size (16–256px)
│   ├── favicon-32.png  ← PNG for modern browsers
│   └── favicon-256.png ← Apple touch icon
├── vercel.json         ← Cache + security headers
└── README.md
```

## Deploy to Vercel

### Option A — Drag & Drop (30 seconds)
1. Go to https://idr-website-eight.vercel.app/ → log in
2. Click **Add New Project** → **Browse**
3. Select the `idr-production` folder
4. Click **Deploy**

### Option B — Vercel CLI
```bash
npm i -g vercel
cd idr-production
vercel --prod
```

### Option C — GitHub (auto-deploy on push)
1. Push this folder to a GitHub repo
2. Import the repo on Vercel dashboard
3. Every `git push` auto-deploys

## Tech Stack
- Vanilla HTML5 (semantic, accessible)
- Vanilla CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript ES6+ (no dependencies)
- Google Fonts: Bebas Neue, Manrope, JetBrains Mono
- Canvas API — animated network background
- IntersectionObserver — scroll reveal + active nav
- requestAnimationFrame — cursor lag + canvas loop
