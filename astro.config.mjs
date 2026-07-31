import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Astro's HTML minifier eats the significant space around inline <span>/<a>
  // when the markup puts them on their own line ("a <span>x</span> app.").
  compressHTML: false,
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
