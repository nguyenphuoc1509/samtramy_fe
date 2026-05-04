# AGENTS.md

## Project Overview
This project is a Next.js website built with a strong focus on:
- SEO
- performance
- clean App Router architecture
- maintainable frontend structure
- scalable content and route organization

The primary goal is to build pages that are:
- fast
- crawlable
- indexable
- semantically structured
- easy to share
- easy to maintain

Unless the repository clearly indicates otherwise, assume:
- Next.js App Router
- `src/app` structure
- TypeScript
- Tailwind CSS or CSS Modules
- public assets in `public/`
- SEO-first page development

---

## Core Principles
Always prioritize:
1. correctness
2. crawlability
3. indexability
4. semantic clarity
5. performance
6. maintainability
7. visual polish

Do not sacrifice SEO fundamentals for cosmetic convenience.

---

## Project Structure
Use this structure unless the repository already defines a better one:

```txt
src/
├─ app/
│  ├─ (site)/
│  ├─ (admin)/
│  ├─ api/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ loading.tsx
│  ├─ error.tsx
│  ├─ not-found.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ ui/
│  ├─ shared/
│  └─ sections/
├─ lib/
│  ├─ seo.ts
│  ├─ metadata.ts
│  ├─ schema.ts
│  └─ utils.ts
├─ services/
├─ hooks/
├─ types/
├─ constants/
└─ data/
public/