import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://littlerocksewerline.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
