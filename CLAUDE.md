# Personal Website

## Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + @tailwindcss/typography
- **Deployment:** Vercel
- **Images:** Next.js Image component with quality=90

## Project Structure
```
src/
  app/           — Pages (Home, About, Gallery)
  components/    — Reusable components (Navbar, Footer)
  content/       — Markdown or data files for text content
public/
  photos/        — High-res photo files for the gallery
```

## Blog Thumbnail Sizes (on blog landing page)
- **Reads** (book covers): `thumbnailClass: "w-16"`
- **Travel**: set per post based on image composition
- Use the `thumbnailClass` field on each post entry in `src/app/blog/page.tsx`

## Conventions
- Always use the Next.js `<Image>` component for photos (never raw `<img>`)
- Set `quality={90}` and proper `sizes` attribute on all gallery images
- Use Tailwind utility classes for styling; no separate CSS files beyond globals.css
- The About page uses `prose` classes from @tailwindcss/typography
- Keep components in `src/components/` with PascalCase filenames
- Photos go in `public/photos/` — add them to the `photos` array in `gallery/page.tsx`

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint
