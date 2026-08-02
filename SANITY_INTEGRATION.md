Sanity CMS Integration — Standalone Studio
==========================================

This project uses Sanity as a headless CMS with the Studio running as a **standalone sibling app**, not embedded inside the Next.js frontend.

## Architecture

```
Default Project/
├── zoe-design-forge-o8/          # Next.js frontend (reads menu)
│   ├── app/blog/                 # Blog index + dynamic [slug] post pages
│   ├── app/blog/[slug]/page.tsx  # Post page using next-sanity PortableText
│   ├── sanity/
│   │   ├── lib/client.ts         # next-sanity client (apiVersion 2026-08-01)
│   │   ├── lib/queries.ts        # GROQ queries (typed with defineQuery)
│   │   ├── lib/image.ts          # Image URL builder
│   │   └── types.ts              # Handwritten app data types
│   ├── sanity.types.ts           # Auto-generated types (TypeGen output)
│   └── env.local                 # Project ID / dataset env vars
└── studio-zoe-design-forge-blog/ # Standalone Sanity Studio (source of truth)
    ├── schemaTypes/documents/
    │   ├── post.ts, author.ts, category.ts
    ├── sanity.config.ts          # projectId mu56ptnh, dataset production
    ├── sanity.cli.ts             # API config + TypeGen settings
    └── schema.json               # Schema extract (typegen input)
```

## Project / Dataset

- Project ID: `mu56ptnh`
- Dataset: `production`
- Studio: standalone at `http://localhost:3333`
- App: `http://localhost:3000` (`/blog`), authenticated via Vercel/Sanity CLI.

## Commands

### Studio (in `studio-zoe-design-forge-blog/`)
```bash
pnpm install
pnpm run dev                      # Studio at http://localhost:3333
pnpm exec sanity schema deploy    # Push schema to Content Lake
pnpm run build                    # Production static build
pnpm run typegen                  # Extract schema + generate types
```

### Frontend (in `zoe-design-forge-o8/`)
```bash
pnpm install
pnpm dev                          # App at http://localhost:3000
pnpm run build                    # Production build (SSG/ISR)
```

## TypeGen

`sanity.cli.ts` configures:
- `schema: 'schema.json'` (extract)
- `generates: '../zoe-design-forge-o8/sanity.types.ts'`
- `overloadClientMethods: false`

Run `pnpm exec sanity schemas extract --force && pnpm exec sanity typegen generate` (or `pnpm run typegen`) in the Studio whenever schemas or GROQ queries change; it writes the generated types into the frontend repo.

## Content model

- `post` — title, slug, excerpt, coverImage (with `alt`), publishedAt, author (reference), categories (reference[]), body PortableText (blocks + images with `alt`/`caption`).
- `author` — name, bio, avatar (with `alt`).
- `category` — title, description.

Frontend fallback: when `NEXT_PUBLIC_SANITY_PROJECT_ID`/`DATASET` are unset or placeholders, the blog renders an empty state without hitting Content Lake (`sanity/lib/env.ts`).

## Notes

- Do not reimbed the Studio into the Next.js app (e.g. via `app/studio/[[...tool]]/page.tsx`). The two repositories are intentionally separate.
- Blog posts use ISR (`revalidate = 60`); after publishing edits they refresh within ~60s.
- `@portabletext/react` was removed from the app deps; Portable Text rendering uses `next-sanity`.