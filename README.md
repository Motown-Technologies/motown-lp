# Motown Tech Landing Pages

Astro-based marketing site for Motown Tech, including core marketing pages and service detail pages.

## Tech Stack

- Astro
- React
- Tailwind CSS
- TypeScript

## Scripts

- `npm run dev`: Start the local dev server.
- `npm run build`: Type-check and build for production.
- `npm run preview`: Preview the production build.

## Project Structure

- `src/pages`: Route-based pages.
- `src/components`: Reusable UI components.
- `src/layouts`: Page layout templates.
- `src/data`: Content data.
- `src/img`: Local images used by Astro.

## Notes

- Page metadata is set via `meta_title` and `meta_description` props on `BaseLayout`.
- The theme alternates light and dark sections using the `section-dark` utility class.
