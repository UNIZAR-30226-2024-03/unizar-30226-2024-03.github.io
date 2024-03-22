import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://astronaut.github.io',
  base: '/playbeat',
  integrations: [tailwind(), react(), svelte(), vue()]
});