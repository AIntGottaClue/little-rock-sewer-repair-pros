# Little Rock Sewer Repair Pros

Astro site for sewer line repair and replacement lead generation in Little Rock, AR.

- Edit `src/data/siteConfig.ts` for the phone number, lp_phone, GA4 measurement ID and airchatty tracker ID. One file applies them to every page and call CTA.
- Page markup lives in `src/data/pages.json`; landing-page variants in `src/data/lpVariants.ts`.
- Landing pages under `/lp/` are noindex. Their CTA buttons call `lpPhoneDisplay`/`lpPhoneHref` when set; when blank, the buttons jump straight to the on-page form.
- Build: `npm run build` (static output in `dist/`, deployed as a Cloudflare Worker with static assets).
