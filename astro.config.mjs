import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://motowntech.com',
  base: '/',
  build: {
    assets: 'assets'
  },
  integrations: [tailwind()]
});