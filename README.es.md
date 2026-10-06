<div align="center">

<img src="assets/logo-icon.png" height="60" alt="" />
<img src="assets/logo-wordmark.png" height="72" alt="Rolboard" />

**Landing page de Rolboard**

[![HTML](https://img.shields.io/badge/HTML-static-E34F26?logo=html5&logoColor=white)](index.html)
[![CSS](https://img.shields.io/badge/CSS-plain-1572B6?logo=css&logoColor=white)](styles.css)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#licencia)

[English](README.md)

</div>

---

Sitio estático que presenta [Rolboard](https://github.com/ncorrea-13/rolboard) y enlaza sus descargas. Una sola página, sin framework ni build.

## Stack

| Capa    | Tecnología                                     |
| ------- | ---------------------------------------------- |
| Página  | HTML + CSS planos, unas líneas de JS           |
| Fuentes | Google Fonts (Fraunces, Inter, IBM Plex Mono)  |
| Hosting | Cloudflare Pages                               |

Colores y fuentes replican los tokens de la app (`client/src/styles/tokens.css`).

## Desarrollo

```bash
python3 -m http.server 8000
```

Abrir `http://localhost:8000`.

## Deploy

Cloudflare Pages conectado a este repo: sin comando de build, directorio de salida `/`.

## Descargas

Los botones de descarga leen las URLs de los assets del último release de Rolboard desde la API de GitHub, buscando `windows-amd64*.exe` y `linux-x86_64*.AppImage` (los assets se llaman, por ejemplo, `rolboard-windows-amd64-v0.1.1.exe`). Si la API no responde, enlazan a la página del último release. La misma consulta muestra la versión actual.

La página detecta el sistema operativo del visitante y resalta la descarga que corresponde.

## Idioma

Español e inglés. La página toma el idioma del browser (`es*` → español, cualquier otro → inglés), salvo que el visitante elija uno con el selector, que se recuerda en `localStorage`. El texto en español está en el HTML; el inglés, en el diccionario `en` de `index.html`.

## Capturas

`assets/screens/` sale de una campaña de demo ficticia, capturada a 1440×900 con escala 2x.

## Licencia

MIT - ver la [licencia de Rolboard](https://github.com/ncorrea-13/rolboard/blob/main/LICENSE).

Los logos e íconos (`assets/logo-*.png`, `assets/favicon.png`) son © Mateo Guareschi y se usan con su permiso. **No** están cubiertos por la licencia MIT.

---

_Mendoza, Argentina · Nicolás Correa ([ncorrea-13](https://github.com/ncorrea-13))_
