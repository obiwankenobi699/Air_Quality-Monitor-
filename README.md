# OceanSutra

## Overview

OceanSutra is a Vite + React + TypeScript web app that showcases real‑time analytics and tools for the blue carbon ecosystem. It includes:

- Responsive UI with Tailwind CSS and shadcn‑ui components
- Animated/visual sections (hero, technology trail, testimonials)
- A login modal (popup) powered by shadcn `Dialog`
- Wallet connect dropdown (demo) using MetaMask detection
- Media handling via Vite’s asset pipeline (images/video)

<img width="1607" height="855" alt="image" src="https://github.com/user-attachments/assets/c5af334a-4f44-4f1d-827a-36a68efa0977" />


## Getting Started

Prerequisites:

- Node.js 18+ and npm

Install and run the dev server on port 8080:

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Scripts

- `dev` – start Vite dev server (default port 8080)
- `build` – production build
- `preview` – preview the production build locally

## Project Structure

- `src/components/` – React components (Header, Footer, Hero, Features, Pricing, Testimonials, etc.)
- `src/components/ui/` – shadcn‑ui primitives
- `src/index.css` – Tailwind setup and globals
- `index.html` – HTML template, document title/meta

## Media & Assets

- Import images/video from `src/...` to have Vite bundle them, e.g. `import bg1 from './bg1.mp4'` then `<video src={bg1} .../>`.
- For large media (e.g., `.mp4/.webm/.mov`), consider Git LFS to keep the repo lean.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deploy

You can deploy to any static host (Vercel/Netlify/GitHub Pages):

### Vercel

1. Push your repo to GitHub.
2. Import the project in Vercel.
3. Framework preset: Vite. Build Command: `npm run build`. Output: `dist`.

### Netlify

1. New site from Git.
2. Build command: `npm run build`. Publish directory: `dist`.

## Custom Domain

- Vercel: Project → Settings → Domains → Add domain.
- Netlify: Site settings → Domain management → Add custom domain.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is provided as‑is. Add a LICENSE file if you need a specific license.
