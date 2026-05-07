# AGENTS.md

## Project

Personal portfolio for Willian N&uacute;&ntilde;ez (Full Stack Web Developer). Spanish UI. Built with Vite + React + CSS (no framework) + Framer Motion + React Router. Multi-page SPA with routes: `/` (Inicio), `/projects`, `/about`, `/skills`, `/contact`.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build &rarr; `dist/` (static, deployable anywhere) |
| `npm run preview` | Preview the production build locally |

**No lint, typecheck, or test tooling is configured.**

**Deploy:** `npm run build` then deploy `dist/` to any static host (Render, Vercel, Netlify, GitHub Pages). See `instrucciones.txt` for Render. Push to main &rarr; auto redeploy on Render.

## Structure

| Path | Purpose |
|---|---|
| `src/` | React source code |
| `src/main.jsx` &rarr; `src/App.jsx` | Entrypoint &rarr; routing via `BrowserRouter` |
| `src/pages/` | Route-level page wrappers (Home, About, Skills, Projects, Contact) |
| `src/components/sections/` | Section components (Hero, About, Skills, Projects, Contact) |
| `src/components/ui/` | Reusable UI: Loader, CustomCursor, InteractiveBg, Button, ScrollProgress |
| `src/components/layout/` | Layout shell (Navbar, Footer, Cursor, Bg) |
| `src/components/animations/` | Animation wrappers: Reveal, StaggerContainer, AnimatedText |
| `src/data/` | Static data: `projects.js` (project list), `skills.js` (skill categories) |
| `src/hooks/` | Custom hooks: useMousePosition, useScrollProgress, useScrollDirection |
| `public/images/` | Static image assets (.png, .jpg) |
| `legacy/` | Old static HTML/CSS/JS site &mdash; do not modify |

## CSS

Pure CSS with no framework (Tailwind removed). Architecture:

| File | Purpose |
|---|---|
| `src/index.css` | Imports all CSS files below |
| `src/styles/variables.css` | CSS custom properties for colors, fonts, spacing |
| `src/styles/base.css` | Reset, body, selection, scrollbar |
| `src/styles/components.css` | All component styles + responsive media queries |

**Colors** defined via `:root` variables in `variables.css` &mdash; same palette as legacy site. Do NOT add new colors.

## Conventions

- **All UI text is in Spanish.**
- **Contact form** is client-side only &mdash; simulated submit (no backend).
- **Images** use `loading="lazy"` (except first 3 project images which load eagerly).
- **Custom cursor** only on desktop (`md:` breakpoint). Mobile uses default cursor.
- **Animation wrappers** (`Reveal`, `StaggerContainer`, `AnimatedText`) reused for consistent scroll animations.
- **Canvas background** (`InteractiveBg.jsx`) uses GPU-friendly sine waves with mouse interaction.
- **Routing** uses React Router. Navbar uses `NavLink` with `aria-current="page"` for active link highlighting (via CSS). No hash scrolling.
- **No `.env`** &mdash; no environment variables or API keys needed.
- **Framer Motion** handles all animations (scroll reveals, stagger, hover effects, page transitions).

## Data

| File | Shape |
|---|---|
| `src/data/projects.js` | Array of `{ id, title, description, image, tags[], url, status }` &mdash; status values: `completed`, `development`, `restricted`, `internal` |
| `src/data/skills.js` | Array of `{ id, title, icon (emoji), skills[] }` |

## Legacy

Old static site lives in `legacy/` untouched. Do not modify.
