# Green Nest Farm — React (Vite)

A small editorial site for a family farm: desi eggs, baby chicks, goats, and an Eid qurbani booking service. Rebuilt from the original static build into a Vite + React 18 app with `react-router-dom`.

## Stack
- React 18
- React Router 6
- Vite 5
- Plain CSS (design tokens + a single `global.css`)

## Run locally
```bash
npm install
npm run dev          # dev server
npm run build        # production build into ./dist
npm run preview      # preview the built site
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Project layout
```
src/
  main.jsx          # entry, mounts <App /> inside BrowserRouter
  App.jsx           # routes
  styles/global.css # entire stylesheet (design tokens + components)
  components/       # Header, Footer, Placeholder, Counter, Rows
  pages/            # Home, About, Products, Sacrifice
  data/site.js      # contact info, footer data, stats, products, qurbani steps
```

## Design notes
Designed to avoid ‘AI slop-farm’ patterns: no purple gradients, no 3D shapes, no glassmorphism hero. Palette is paper-warm white, deep green, gold, yellow accent. Type: Fraunces (display serif) + Karla (body).

## Image placeholders
Every photo spot is a labelled dashed box (`<Placeholder />` from `components/Placeholder.jsx`). Drop your real images into `public/` and swap them in — the CSS classes are stable.
