# Codematic Labs — React Frontend

This version is a standard React + Vite frontend migration of the original TanStack Start implementation.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- Lucide React

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/`
- `/services`
- `/why-us`
- `/case-studies`
- `/case-studies/:slug`
- `/tech-stack`
- `/contact`

The existing visual styles, assets, components, animations, responsive behavior, content, and frontend interactions are retained. TanStack Start/Router-specific runtime code was replaced with React Router and a Vite entry point.


## Static pages and audit checks

`npm run build` builds the client and prerenders every public route into a distinct HTML file, including metadata, a sitemap and a 404 page. Vercel serves these files with clean URLs rather than a catch-all SPA rewrite. Client navigation remains interactive through React Router.

Run `npm run check:build` after a production build to validate generated pages, internal links, metadata and local assets. See `docs/audit-implementation.md` for the uploaded audit checklist and remaining business inputs.
