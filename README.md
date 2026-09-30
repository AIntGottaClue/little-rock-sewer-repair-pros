# Little Rock Sewer Line Pros

Astro site for sewer line repair and replacement lead generation in Little Rock, AR.

- Edit `src/data/siteConfig.ts` for the phone number, lp_phone, GA4 measurement ID and airchatty tracker ID. One file applies them to every page and call CTA.
- Page markup lives in `src/data/pages.json`; landing-page variants in `src/data/lpVariants.ts`.
- Landing pages under `/lp/` are noindex. Their CTA buttons call `lpPhoneDisplay`/`lpPhoneHref` when set; when blank, the buttons jump straight to the on-page form.
- Build: `npm run build` (static output in `dist/`, deployed as a Cloudflare Worker with static assets).

Brand/domain replacement: `src/data/pages.json` preserves the legacy page source. `src/layouts/LegacyPage.astro` and `src/pages/lp/[...slug].astro` swap the legacy brand and origin at load time using `brand` and `origin` from `src/data/siteConfig.ts`. Edit that config for the current brand and origin; keep `astro.config.mjs`, `public/robots.txt`, and `public/sitemap.xml` in sync.
