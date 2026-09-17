# Placeholders to replace with your own work

This site ships with placeholder copy and stock images so you can see the
layout immediately. Before going live, replace the following.

## 1. Your details (name, email, location)

All site copy lives in one file: `src/lib/content.ts`.

- `site.name` — your name, shown in the nav, hero and footer.
- `site.role` — e.g. "Photographer".
- `site.email` — the address used by every "Email me" / contact link.
  Changing it here updates the navbar button, the contact section, and the
  footer at once.
- `site.location` — shown in the contact section and footer.
- `intro.*` — the hero heading and paragraphs. `intro.disciplines` is the list
  under the hero.
- `work.heading`, `pricing.*`, `contact.*` — section copy.

## 2. The photos

Every image is a URL in `src/lib/content.ts` under `work.items`. Each entry has:

- `src` — a placeholder from Unsplash. Swap this for your own photo. You can use
  a local file in `public/` (e.g. `src: "/photos/coast.jpg"`) or any hosted URL.
- `title` and `meta` — the caption shown on hover.
- `span` — `"tall"` or `"short"`; controls the tile height in the gallery grid.

Add or remove entries from the `work.items` array to change how many photos
appear. If you use local images, also add their folder to `next.config.ts`
under `images.remotePatterns` only if they are remote; local `public/` images
need no config.

To use a different placeholder service, the config already allows
`images.unsplash.com` and `picsum.photos`. For `picsum.photos` the URL form is
`https://picsum.photos/seed/<any-word>/1200/800`.

## 3. Fonts

Fonts are loaded from Google Fonts in `src/app/layout.tsx` (Fraunces for
headings, Inter for body). To self-host or change them, edit the `<link>` there
and the `--font-serif` / `--font-sans` variables in `src/app/globals.css`.

## 4. Colours

The palette is defined as CSS variables in `src/app/globals.css` (`:root` for
light, `.dark` for dark). Adjust `--background`, `--foreground`, `--primary`,
etc. to retune the look.
