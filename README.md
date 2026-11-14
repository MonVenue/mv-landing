# MonVenue — Landing page

Vue 3 + Vite marketing page for the MonVenue app: what it is, why, and where to download it. Static, no backend.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, S3).

## Structure

```
src/
  main.js                  entry; loads tokens + base styles
  App.vue                  page composition (one component per section)
  assets/
    styles/tokens.css      brand colours, fonts, radii, shadows as CSS variables
    styles/base.css        reset, shared buttons / cards / container helpers
    img/                   logo lockup (navy + white) and standalone mark
  data/content.js          all copy, lists and the store links
  components/
    MvIcon.vue             inline stroke icon set
    SiteNav.vue            sticky nav with mobile menu + "Get the app"
    HeroSection.vue        headline, StoreButtons, PhoneMockup
    StoreButtons.vue       App Store / Google Play buttons
    PhoneMockup.vue        CSS phone frame with a mock app screen
    VenueScene.vue         drawn SVG venue scenes, one per occasion
    CategoriesSection.vue  six occasions, each in an arched frame
    HowItWorks.vue         three steps
    TrustSection.vue       four "why MonVenue" tiles
    OwnersBand.vue         navy band for venue owners
    DownloadCta.vue        final download section
    SiteFooter.vue
```

## Before launch

- Set the real store URLs in `storeLinks` (`src/data/content.js`).
- Swap `StoreButtons` for the official badges from Apple's and Google's badge kits if you want the branded artwork (the current buttons are brand-neutral on purpose).
- If the commission-free offer has a fixed count, add it to the first `ownerStats` label (`commission on your first 20 bookings`).
- Replace the `PhoneMockup` with a real screenshot once the app UI is final, or keep it as-is.
- `VenueScene` can be swapped for real venue photos later; keep the arched crop in `CategoriesSection`.
- Point footer links (About, Contact, Terms, Privacy) at real pages.
