# Mir Faisal — Portfolio

A colorful, glassmorphism-style single-page portfolio for **Mir Faisal** — designer, content creator, video editor and social media manager from Faridpur, Bangladesh.

## Features

- **Light & dark themes** — toggle in the navbar, persisted in `localStorage`, no flash of wrong theme on reload
- **Glassmorphism UI** — frosted-glass cards with backdrop blur, light-refraction highlights and soft depth shadows
- **Ambient backdrop** — fixed gradient mesh (violet/pink glows) + subtle film-grain noise
- **Scroll-reveal animations** — sections fade/rise into view with staggered timing (respects `prefers-reduced-motion`)
- **Real brand icons** — Facebook, Instagram, WhatsApp & Email logos via [react-icons](https://react-icons.github.io/react-icons/)
- **Fully responsive** — glass navbar pill with mobile menu, fluid grids down to phones

## Tech Stack

- [React 19](https://react.dev) + [Vite 8](https://vite.dev)
- Plain CSS with dual-theme design tokens (no Tailwind/UI framework)
- [oxlint](https://oxc.rs) for linting
- [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins)

## Quick Start

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # check code quality
```

## Project Structure

```
index.html                     # HTML shell, fonts, theme pre-load script
src/
├── main.jsx                   # React entry
├── index.css                  # design tokens, dual themes, glass & reveal utilities
├── data.js                    # ✏️ ALL editable content (bio, skills, projects, links)
├── assets/faisal.jpeg         # portrait photo
├── App.jsx                    # page assembly
└── components/
    ├── Reveal.jsx             # scroll-reveal wrapper (IntersectionObserver)
    ├── Icon.jsx               # brand/icon map (react-icons)
    ├── Navbar.jsx / .css      # glass nav, theme toggle, mobile menu
    ├── Hero.jsx / .css        # headline, portrait, gradient blobs
    ├── About.jsx / .css       # bio, stats, services, CV timeline
├── Skills.jsx / .css      # skill chips by group
├── Works.jsx / .css       # featured works — playable video edits
├── Contact.jsx / .css     # contact cards + CTA banner
└── Footer.jsx / .css      # footer with social icons
```

## Videos / Featured Works

Video files and their auto-generated posters live in **`public/videos/`** and are declared in `src/data.js` (`works`). Videos are streamed on demand (`preload="none"`) with a poster frame, so the page stays fast — nothing loads until the visitor hits play.

To add a work: drop the `.mp4` into `public/videos/`, generate a poster frame with ffmpeg (`ffmpeg -ss 1 -i video.mp4 -frames:v 1 poster.jpg`), then add an entry in `works` inside `src/data.js`.

## Customizing Content

Everything on the page (name, bio, stats, services, skills, projects, social links, contact info) lives in **`src/data.js`** — edit that single file to make the site yours. Theme accent colors are CSS variables at the top of `src/index.css` (both `[data-theme="dark"]` and `[data-theme="light"]` blocks are kept in sync).

## Theme System

The theme toggle writes two things: `data-theme` on `<html>` (instant apply) and a `theme` key in `localStorage` (remember choice). The inline `<script>` in `index.html` reapplies the saved theme before React boots, so there is no flash of the wrong theme.

## Deployment

```bash
npm run build
```

Deploy the generated `dist/` folder to any static host — Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.
