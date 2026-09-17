# Photographer portfolio

A personal website for a photographer, built with **Next.js (App Router)**,
**Tailwind CSS v4**, and **shadcn/ui**. The design is intentionally restrained:
generous whitespace, a serif display face (Fraunces) over a clean sans (Inter),
and a warm-neutral monochrome palette.

## Sections

- **Introduction** (`src/components/site/hero.tsx`) — who you are and what you shoot.
- **My work** (`src/components/site/work.tsx`) — a masonry gallery of photos.
- **Pricing** (`src/components/site/pricing.tsx`) — three tiers presented as cards.
- **Contact** (`src/components/site/contact.tsx`) — a prominent, always-findable email link.
  The same address is repeated in the navbar and footer.

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Making it yours

All copy and image URLs live in `src/lib/content.ts`. See
[REPLACEMENTS.md](./REPLACEMENTS.md) for exactly what to swap — your name and
email, the placeholder photos (currently from Unsplash), the fonts, and the
colour palette.

## Notes on the build

The original brief suggested scaffolding from the `shadcn` template/preset. In
this environment the `shadcn` CLI could not reach GitHub, so the app was
scaffolded with `create-next-app` and shadcn was set up manually (the same
components, tokens, and structure the preset would have produced). The result is
equivalent and self-contained.
