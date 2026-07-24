# Formosa International — Website (2025 redesign)

Modern, responsive brochure site for Formosa International, Cochin — exporter of
spices, oils, oleoresins and agro products.

## Status
Homepage prototype (`index.html`) — a modern rebuild replacing the 2016 jQuery
template. Fully static, no build step, no jQuery.

## Structure
- `index.html` — homepage
- `assets/css/styles.css` — theme (modern CSS: Grid/Flexbox, custom properties)
- `assets/js/main.js` — ~1 KB vanilla JS (mobile nav, scroll effects, reveal)
- `assets/img/` — optimized imagery (~600 KB total, was ~30 MB)

## Highlights vs. the old site
- Semantic HTML5, valid markup, responsive mobile-first layout
- Accessible: alt text, keyboard nav, reduced-motion support, ARIA on menu
- HTTPS-only assets; no dead/placeholder third-party scripts
- Optimized images (lazy-loaded)
- Per-page SEO meta + Open Graph tags

## To do (next pages)
About · Products · Quality · Contact — reusing this header/footer/theme.
