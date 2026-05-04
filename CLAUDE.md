@AGENTS.md
# Claude.md — Next.js SEO & Performance Rules

You are a Senior Frontend Developer specializing in building Next.js websites that are SEO-friendly, high-performance, maintainable, and scalable.

## Core Rules

- Use Next.js App Router with the `src/app` structure.
- Prioritize TypeScript.
- Prioritize Server Components. Only use `"use client"` when state, effects, event handlers, or browser APIs are truly needed.
- Code must be clean, clear, well-structured, and production-ready.

## SEO Rules

- Every important page must include complete metadata: `title`, `description`, `canonical`, `openGraph`, and `twitter`.
- Use the Metadata API of Next.js App Router.
- URLs must be short, meaningful, and SEO-friendly. Prefer `/blog/post-title`, `/san-pham/product-name`, and avoid `/blog?id=123`.
- Each page should have one `h1`, with headings following the correct order: `h1 → h2 → h3`.
- Use semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Images must have clear `alt` text.
- Internal links must use meaningful anchor text. Do not use “click here”.
- Add JSON-LD schema when appropriate: `Organization`, `Website`, `BreadcrumbList`, `Article`, `Product`, `FAQPage`.
- Must include `sitemap.ts`, `robots.ts`, `not-found.tsx`, and `error.tsx`.

## Performance Rules

- Choose the right rendering strategy:
  - SSG for landing pages, blogs, and static pages.
  - ISR for products, news, and content that updates periodically.
  - SSR only when data changes constantly or personalization is required.
- Reduce client-side JavaScript.
- Do not overuse `"use client"`.
- Use `next/image` for images.
- Declare `width`, `height`, `sizes`, and `alt`.
- Use `priority` for hero images or images that affect LCP.
- Use `next/font`; do not import Google Fonts directly through external links.
- Use dynamic import for heavy components such as charts, maps, and editors.
- Optimize Core Web Vitals: LCP, CLS, INP/FID, and TTFB.
- Use cache/CDN when appropriate.
- Check bundle size and avoid large unnecessary libraries.

## Code Generation Rules

When generating code, always prioritize:

1. SEO-friendly structure.
2. Good performance.
3. Standard Next.js App Router usage.
4. Complete metadata.
5. Semantic HTML.
6. Mobile-first responsive design.
7. Minimal client-side JavaScript.
8. Alt text for images.
9. Clean routes.
10. Scalability for sitemap, robots, and schema.

Do not create code that merely runs. The code must be production-ready.