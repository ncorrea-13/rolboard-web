<div align="center">

<img src="assets/logo-icon.png" height="60" alt="" />
<img src="assets/logo-wordmark.png" height="72" alt="Rolboard" />

**Landing page for Rolboard**

[![HTML](https://img.shields.io/badge/HTML-static-E34F26?logo=html5&logoColor=white)](index.html)
[![CSS](https://img.shields.io/badge/CSS-plain-1572B6?logo=css&logoColor=white)](styles.css)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

[Español](README.es.md)

</div>

---

Static site that presents [Rolboard](https://github.com/ncorrea-13/rolboard) and links to its downloads. One page, no framework, no build step.

## Stack

| Layer   | Tech                                    |
| ------- | --------------------------------------- |
| Page    | Plain HTML + CSS, a few lines of JS     |
| Fonts   | Google Fonts (Fraunces, Inter, IBM Plex Mono) |
| Hosting | Cloudflare Workers (static assets)      |

Colors and fonts mirror the app's tokens (`client/src/styles/tokens.css`).

## Development

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy

Deployed to Cloudflare Workers (static assets) by `.github/workflows/deploy.yml` on every push to `main`. It copies the site into `dist/` and runs `wrangler deploy` with `wrangler.jsonc`; the Worker is created on the first deploy. Needs the `CLOUDFLARE_API_TOKEN` (permission *Account → Workers Scripts → Edit*) and `CLOUDFLARE_ACCOUNT_ID` secrets. The custom domain is set on the Worker, under *Settings → Domains & Routes*.

## Downloads

The download buttons read the asset URLs of the latest Rolboard release from the GitHub API, matching `windows-amd64*.exe` and `linux-x86_64*.AppImage` (release assets are named like `rolboard-windows-amd64-v0.1.1.exe`). If the API can't be reached, they link to the latest release page. The same request shows the current version.

The page detects the visitor's OS and highlights the matching download.

## Language

Spanish and English. The page picks the browser language (`es*` → Spanish, anything else → English) unless the visitor chose one with the toggle, which is remembered in `localStorage`. The Spanish text lives in the HTML; the English one in the `en` dictionary in `index.html`.

## Screenshots

`assets/screens/` comes from a fictional demo campaign, captured at 1440×900, 2x scale.

## License

MIT - see the [Rolboard license](https://github.com/ncorrea-13/rolboard/blob/main/LICENSE).

Logos and icons (`assets/logo-*.png`, `assets/favicon.png`) are © Mateo Guareschi, used with permission. They are **not** covered by the MIT license.

---

_Mendoza, Argentina · Nicolás Correa ([ncorrea-13](https://github.com/ncorrea-13))_
