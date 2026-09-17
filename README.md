# Surya Hidayat Portfolio

A responsive portfolio built with Svelte 5, SvelteKit, strict TypeScript, and Tailwind CSS 4. The public homepage is prerendered, while private routes and API endpoints run on Cloudflare.

## Development

```bash
npm install
cp .dev.vars.example .dev.vars
npm run dev
```

Set `NINJAS_API_KEY`, `PRIVATE_ACCESS_PASSWORD`, and a random `AUTH_SECRET` of at least 32 characters in `.dev.vars`. Add the same values as encrypted secrets in the Cloudflare Pages project for preview and production.

Useful checks:

```bash
npm run check
npm run lint
npm run build
npm run preview
```

## Project structure

```text
src/
├── lib/
│   ├── features/portfolio/    # Portfolio components and typed content
│   ├── server/                # Server-only authentication helpers
│   └── shared/                # Reusable Svelte components
├── routes/
│   ├── +page.svelte           # Prerendered public portfolio
│   ├── (private)/             # Authenticated routes (group omitted from URLs)
│   ├── api/quote/+server.ts   # Dynamic Cloudflare API endpoint
│   └── login/                 # Password-based login
└── hooks.server.ts            # Session resolution
```

Authentication is checked in the private server layout, and protected endpoints or form actions must also enforce their own authorization when added.

## Cloudflare Pages

The Cloudflare adapter writes the deployment to `.svelte-kit/cloudflare`:

- Build command: `npm run build`
- Build output directory: `.svelte-kit/cloudflare`
- Node version: use a current supported LTS release

Deploy from the CLI with `npm run deploy`. The checked-in `wrangler.jsonc` supplies local Pages settings; keep secrets out of that file.

The quote endpoint caches only successful responses. Errors use `Cache-Control: no-store`.
