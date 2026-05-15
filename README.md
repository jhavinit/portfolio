# Vinit Jha — Portfolio

Premium personal portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Static export (GitHub Pages)

```bash
STATIC_EXPORT=true npm run build
```

Output is written to `out/`.

## Content

Edit copy and data in `lib/data/portfolio.ts`.

## Deploy

- **Render / Docker**: `npm run build && npm start`
- **GitHub Pages**: push to `main`/`master` — CI builds with `STATIC_EXPORT=true` and deploys `out/` to `gh-pages`
