![Lighthouse Scores](https://idr-website-eight.vercel.app/images/lighthouse-scores.png)

# About This Project — For Recruiters & Hiring Managers

If you've landed here through my GitHub, portfolio or a referral — welcome. This file exists to give you context on what this project is, why I built it, and what it says about my skills.

---

## What This Is

This repository contains the full front-end codebase for the **Institute of Digital Risk (IDR)** website — a production-ready, single-page marketing website built as part of a competitive internship assignment.

The live site: [idr-website-eight.vercel.app](https://idr-website-eight.vercel.app)

IDR may not have launched publicly yet, and this site may or may not end up being their final product — but that doesn't change what it represents. This was a real brief, with real constraints, delivered to a real standard.

---

## The Brief

The assignment asked for:

- A logo in two variants (icon-only and icon + wordmark)
- A fully responsive single-page website covering five mandatory sections
- Semantic HTML5, responsive CSS (Grid/Flexbox), vanilla JavaScript
- **No CSS frameworks. No Bootstrap. No libraries of any kind.**

That last constraint is the important one. It's easy to build a polished site with Tailwind or Bootstrap — the challenge is building one without them, from first principles, and having it still look like it was made by someone who knows what they're doing.

---

## What I Actually Built

Beyond the brief requirements, I made deliberate decisions to go further — not to show off, but because I understood what the project needed:

**Design**

- Dark editorial aesthetic — chosen because IDR operates in regulated, high-consequence environments. The design needed to communicate authority and credibility, not approachability
- Custom isometric cube logo — built in SVG, multi-size favicon from 16px to 256px
- Bebas Neue + Manrope + JetBrains Mono type system — chosen specifically to signal technical precision without feeling cold

**Front-End Engineering**

- Animated HTML5 Canvas network graph in the hero — written from scratch, runs on a single `requestAnimationFrame` loop with proper resize handling and `cancelAnimationFrame` cleanup
- Custom cursor with a lagging ring follower — two separate `rAF` loops, correct lerp implementation, only activates on `pointer:fine` devices
- Text scramble effect on the hero headline — pure JS, no library
- Scroll reveal system with a 3-second fallback — if `IntersectionObserver` never fires (sandboxed environments, old browsers), all content is still visible
- Counter animations using ease-out cubic easing on `rAF` — not `setInterval`, not a library

**Production Standards**

- Proper file separation — `index.html`, `css/style.css`, `js/main.js`, `images/`
- `vercel.json` with HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`) and 1-year cache on static assets
- Open Graph and Twitter Card meta tags — branded 1200×630 social preview image
- Full keyboard accessibility — `:focus-visible` for every interactive element, skip-to-content link
- `prefers-reduced-motion` respected throughout

---

## Why I'm Telling You This

Because a GitHub repo without context is just files. I want you to see the thinking behind the work, not just the output.

I'm at an early stage in my career. I don't have years of professional experience yet. What I do have is the ability to receive a constrained brief, research how it should be done properly, make deliberate decisions, and ship something that holds up against professional scrutiny.

This project was built entirely in vanilla HTML, CSS and JavaScript. No shortcuts. If you open `style.css` you'll find 17 commented sections. If you open `main.js` you'll find 10 clearly labelled modules. The code is written the way I'd want to find it if I were joining a team that owned it.

---

## What I'm Looking For

I'm actively building my skills and my reputation in front-end development. I'm interested in:

- **Internship roles** — where I can contribute to real projects while learning from experienced developers
- **Junior front-end positions** — I'm comfortable with HTML, CSS and vanilla JS, and I'm learning modern frameworks
- **Any environment** where code quality is taken seriously and there's space to grow

If this work is relevant to what your team does, I'd genuinely welcome a conversation.

---

## Contact

Reach me through GitHub or via the contact details on my profile.

---

_This project was completed as part of a competitive internship selection process. The brief, constraints and deliverables were set by the hiring organisation. The implementation, design decisions and production standards are entirely my own work._
