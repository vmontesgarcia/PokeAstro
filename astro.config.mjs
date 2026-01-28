import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import solid from '@astrojs/solid-js';

export default defineConfig({
  site: 'https://vmontesgarcia.github.io',
  base: '/PokeAstro/',
  output: 'static',
  integrations: [
    tailwind(),
    icon(),
    solid(),
  ],
});
