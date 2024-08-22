import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://motown-technologies.github.io/motown-lp/',
  base: '/motown-lp',
  integrations: [tailwind()]
});