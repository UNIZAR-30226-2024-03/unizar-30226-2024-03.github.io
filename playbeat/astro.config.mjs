import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://unizar-30226-2024-03.github.io',
  base: '/',
  integrations: [tailwind(), react(), svelte(), vue()]
});