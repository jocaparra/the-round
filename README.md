# The Round

Brand presence for The Round, a Brazilian publication covering high-growth,
non-consolidated startups and venture capital.

Static HTML, no build step, no framework. Serve it as-is from any static
host (Vercel, GitHub Pages, etc).

- `index.html` — home.
- `premio.html` — The Round Awards, the annual prize.
- `indicar.html` — nomination form for the prize.
- `premio.css` — shared styles for `premio.html` and `indicar.html`.

## Nomination form setup

`indicar.html` posts to Formspree (form `mwlpbayl`) so the site stays
fully static (no backend). Free tier caps at 50 submissions/month — if
nominations pick up, upgrade the plan at https://formspree.io.
