import { defineConfig } from 'astro/config';

// Deploying to https://eldritch-elbow.github.io/emergent-systems-website/ for now.
// When a custom domain is ready: drop `base`, add a `public/CNAME` file with the domain.
export default defineConfig({
  site: 'https://emergentsystems.io'
});
