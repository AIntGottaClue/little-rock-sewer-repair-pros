import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://littlerocksewerrepair.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
