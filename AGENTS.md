# AGENTS.md

## Project

Personal portfolio for Willian Núñez (Full Stack Web Developer). Spanish UI. Built with Vite + React 19 + CSS (no framework) + Framer Motion + React Router 7. Multi-page SPA with routes: `/` (Inicio), `/projects`, `/about`, `/skills`, `/contact`.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |

No lint, typecheck, or test tooling configured.

**Deploy:** `npm run build`, deploy `dist/` to any static host. Render config in `instrucciones.txt`. Push to main → auto redeploy.

## Structure

| Path | Purpose |
|---|---|
| `src/` | React source |
| `src/main.jsx` → `src/App.jsx` | Entry → routing via `BrowserRouter` |
| `src/pages/` | Route-level page wrappers (Home, About, Skills, Projects, Contact) |
| `src/components/sections/` | Section components (Hero, About, Skills, Projects, Contact) |
| `src/components/ui/` | Reusable UI: Loader, CustomCursor, InteractiveBg, Button, ScrollProgress |
| `src/components/layout/` | Layout shell (Navbar + Footer + Outlet) — composes Cursor, Bg, ScrollProgress from `ui/` |
| `src/components/animations/` | Animation wrappers: Reveal, StaggerContainer, AnimatedText |
| `src/context/` | React context: `LanguageContext` (ES/EN i18n via `useLanguage()` hook) |
| `src/translations/` | `es.js` / `en.js` — all UI text keys for both languages |
| `src/data/` | Static data: `projects.js` (project list), `skills.js` (skill categories) |
| `src/hooks/` | Custom hooks: useMousePosition, useScrollProgress, useScrollDirection |
| `public/images/` | Static image assets (.png, .jpg) |
| `legacy/` | Old static HTML/CSS/JS site — do not modify |

## CSS

Pure CSS (Tailwind removed). Entry: `src/index.css` → imports `variables.css`, `base.css`, `components.css`. Colors defined in `variables.css` as `:root` custom properties. Do not add new colors.

## Conventions

- All UI text is in Spanish. ES/EN toggle via `LanguageContext` (`useLanguage()` hook provides `t()`, `lang`, `toggleLang`).
- Contact form is client-side only — simulated submit (no backend).
- Images use `loading="lazy"` (except first 3 project images which load eagerly).
- Custom cursor only on desktop. Mobile uses default.
- Animation wrappers (`Reveal`, `StaggerContainer`, `AnimatedText`) used for consistent scroll animations.
- Canvas background (`InteractiveBg.jsx`) uses GPU-friendly sine waves with mouse interaction.
- Routing uses React Router `<NavLink>` with `aria-current="page"` for active link highlighting (via CSS). No hash scrolling.
- Framer Motion handles all animations (scroll reveals, stagger, hover effects, page transitions).
- No `.env` or API keys needed.

## Data shapes

| File | Shape |
|---|---|
| `src/data/projects.js` | Array of `{ id, title, description, image, tags[], url, status }` — status: `completed`, `development`, `restricted`, `internal` |
| `src/data/skills.js` | Array of `{ id, title, icon (emoji), skills[] }` |
