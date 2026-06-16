# Shabnam Fatma — Portfolio (Bento)

A fast, animated bento-grid portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **shadcn/ui** and **Framer Motion**. Static-exported — runs anywhere, no server.

## Run locally
Requires Node.js 18.18+ (20 recommended).
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build
```bash
npm run build    # outputs static site to ./out
```

## Deploy
**GitHub Pages:** push to your repo's `main`, then Settings → Pages → Source: **GitHub Actions** (workflow included). For a project repo, set `basePath`/`assetPrefix` in `next.config.mjs`.
**Vercel:** import the repo — autodetected, no config.

## Edit your content
Everything is in **`data/site.ts`** — profile, skills, projects, experience, education.

### ✅ Before publishing
1. **Email** — `data/site.ts` → `profile.email` is a placeholder. Add your real email.
2. **Project links** — entries marked `todo: true` (Dictionary App, Memory Game, E-commerce) point at your GitHub profile. Swap in the exact repo URLs + live demos.
3. **Resume** — `public/Shabnam_Fatma_Resume.pdf` is included; replace when you update it.
4. **Location** — adjust in `data/site.ts` if needed.
