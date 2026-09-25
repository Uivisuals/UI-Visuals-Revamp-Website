# UI Visuals Revamp — Website

The marketing/product website for the UI Visuals revamp. A single-page, App Router–based
[Next.js](https://nextjs.org) project styled with Tailwind CSS.

> **Current state:** the repo is a fresh scaffold. `app/page.tsx` is still the default
> `create-next-app` placeholder — treat it as the canvas for the revamp, and replace it as
> soon as the first real section lands.

---

## Tech stack

| Piece | Version | Notes |
| --- | --- | --- |
| Next.js | `16.3.6` | App Router, Turbopack dev server, React Server Components |
| React | `19.2.8` | |
| TypeScript | `^5` | `strict: true`, path alias `@/*` → repo root |
| Tailwind CSS | `^4` | CSS-first config via `@theme` in `globals.css` — **no** `tailwind.config.js` |
| ESLint | `^9` | Flat config, `eslint-config-next` (core-web-vitals + typescript) |

## Prerequisites

- **Node.js 20+** (developed on `v24.20.0`) — check with `node -v`
- **npm 11+** (or another package manager; `package-lock.json` is committed, so npm is the path of least resistance)
- Git

No environment variables, database, or external services are required to run the site.

---

## Getting started

```bash
# 1. Clone
git clone https://github.com/Uivisuals/UI-Visuals-Revamp-Website.git
cd UI-Visuals-Revamp-Website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit — no
manual refresh needed.

### Branches

The repo has two long-lived branches:

- `main` — the default branch (what GitHub and Vercel deploy from)
- `playground` — the active working branch for the revamp

Branch off `playground` for feature work, and open PRs back into it.

---

## Project structure

```
.
├── app/
│   ├── layout.tsx        # Root layout: fonts, <html>/<body>, global metadata
│   ├── page.tsx          # The home page — edit this first
│   ├── globals.css       # Tailwind import + design tokens (CSS variables)
│   └── favicon.ico
├── public/               # Static assets served from / (SVGs, images, fonts)
├── next.config.ts        # Next config (currently empty)
├── postcss.config.mjs    # Wires up @tailwindcss/postcss
├── eslint.config.mjs     # ESLint flat config
├── tsconfig.json         # TS config, incl. the "@/*" alias
├── AGENTS.md             # Auto-generated agent instructions (see below)
└── package.json          # Scripts and dependencies
```

**There is no `src/`, no `pages/`, and no component library yet.** Everything lives directly
under `app/`. As the site grows, the natural next steps are `app/components/` for shared
sections and `app/<route>/` folders for additional pages.

## Where to make changes

| Goal | File |
| --- | --- |
| Change homepage content/layout | `app/page.tsx` |
| Change site title / description | `metadata` export in `app/layout.tsx` |
| Add fonts or global CSS variables | `app/globals.css` and the font setup in `app/layout.tsx` |
| Add a new page | Create `app/about/page.tsx` — the App Router picks it up automatically |
| Add images/icons | Drop them in `public/` and reference as `/your-file.svg` |

### Styling notes (Tailwind v4)

Tailwind v4 is configured in CSS, not JS. Tokens live in the `@theme inline` block in
`app/globals.css`:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

To add a design token (e.g. a brand color), declare a `--color-*` custom property there and
use it as a utility (`bg-brand`, `text-brand`) — no config file reload required. Dark mode is
handled with Tailwind's `dark:` variant driven by `prefers-color-scheme`.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on `localhost:3000` (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

There is no test suite or typecheck script wired up yet. To typecheck manually:

```bash
npx tsc --noEmit
```

Run `npm run lint` and `npx tsc --noEmit` before opening a PR.

---

## Deployment

Pushes to `main` are picked up by Vercel automatically (the repo is linked to the Vercel
project). To deploy manually, import the repo at [vercel.com/new](https://vercel.com/new) —
the defaults are correct, since the framework preset is detected from `next.config.ts`.

---

## Working with AI agents (AGENTS.md)

`AGENTS.md` is generated and maintained by `next dev`; it instructs coding agents to read
the bundled Next.js docs at `node_modules/next/dist/docs/` before writing code.

**This matters:** Next.js 16 has breaking changes compared to older tutorials and to what
many AI tools assume. The local docs in `node_modules/next/dist/docs/01-app/` are the source
of truth — consult them instead of relying on memory or stale Stack Overflow answers.

Because that file is regenerated on every `next dev` run, commit the `AGENTS.md` change
alongside your work rather than stripping it out of the diff.

---

## Troubleshooting

- **Port 3000 already in use** — Next will offer the next free port automatically, or run `npm run dev -- --port 3001`.
- **Styles look unstyled** — confirm `app/globals.css` still contains `@import "tailwindcss";` and that `postcss.config.mjs` is present.
- **`.next` looks stale or the build misbehaves** — remove the directory and restart: `rm -rf .next`.
- **Fonts fail to load** — the project pulls Geist from Google Fonts via `next/font/google`, so the first run needs network access.
