# Surya Hidayat Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
npm run preview
```

## Project structure

```text
src/
├── app/                         # Application composition
├── features/
│   └── portfolio/
│       ├── components/          # Portfolio-specific sections
│       ├── data/                # Typed portfolio content
│       └── hooks/               # Portfolio behavior
├── shared/
│   └── components/              # Reusable presentation components
├── index.css                    # Global styles and Tailwind entry point
└── main.tsx                     # Browser entry point

functions/
└── api/                         # Serverless API handlers
```

Feature-specific code stays inside its feature directory. Components that are
generic enough to be reused by multiple features belong in `shared`.

## Quote API

`functions/api/quote.ts` expects a `NINJAS_API_KEY` environment variable when
deployed to a platform supporting Cloudflare Pages Functions.
