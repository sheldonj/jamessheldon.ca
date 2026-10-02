# jamessheldon.ca

Personal site for James Sheldon. Turborepo monorepo (pnpm) with a Next.js App Router app.

## Layout

- `apps/web` – the site (Next.js, deployed to Vercel at jamessheldon.ca)
- `packages/ui` – shared React components
- `packages/eslint-config`, `packages/typescript-config` – shared config

## Develop

```sh
pnpm install
pnpm dev          # http://localhost:3000
pnpm build
pnpm lint
pnpm check-types
```

## Deploy

Vercel project imported from this repo with **Root Directory** set to `apps/web`
(framework preset: Next.js). Vercel detects pnpm and Turborepo automatically.
