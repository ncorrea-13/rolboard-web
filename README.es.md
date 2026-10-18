<div align="center">

<img src="public/assets/logo-icon.png" height="60" alt="" />
<img src="public/assets/logo-wordmark.png" height="72" alt="Rolboard" />

**Sitio web de Rolboard**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#licencia)

[English](README.md)

</div>

---

Sitio que presenta [Rolboard](https://github.com/ncorrea-13/rolboard) y enlaza sus descargas. Hecho con React y TypeScript sobre Vite, prerenderizado a HTML estático en el build y hidratado en el navegador, así que en Cloudflare funciona como un sitio estático.

| Página      | Ruta        | Qué tiene                                                                                                                  |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| Inicio      | `/`         | Hero con un tracker de iniciativa y un d20 jugables, las funciones en pestañas, Android, el adelanto de Obsidian y las reglas de la casa |
| Obsidian    | `/obsidian` | Cómo un vault se convierte en fichas: pasos, una guía interactiva de carpetas con las claves reales del frontmatter y una nota de ejemplo |
| Preguntas   | `/faq`      | Preguntas generales, una guía de sincronización que sirve con cualquier herramienta (o ninguna) y los links para reportar errores |
| Descargas   | `/download` | Instaladores con la plataforma del visitante primero, la versión actual y las preguntas sobre instalar                      |

Además: una paleta `Ctrl` + `K` para saltar entre secciones y páginas, y un botón de menú flotante en celulares y tablets.

## Stack

| Capa         | Tecnología                                                               |
| ------------ | ------------------------------------------------------------------------ |
| Página       | React 19 + TypeScript + Vite, prerenderizado con `scripts/prerender.mjs` |
| Estilos      | CSS plano sobre los tokens de la app, adornos en SVG, sin framework de UI |
| Fuentes      | Fraunces, Inter e IBM Plex Mono, autoalojadas con Fontsource             |
| Herramientas | pnpm, oxlint, prettier, vitest                                           |
| Hosting      | Cloudflare Workers (static assets)                                       |

Colores y fuentes replican los tokens de la app (`client/src/styles/tokens.css`).

## Desarrollo

```bash
pnpm install
pnpm dev          # servidor de Vite (sirve /faq, /download... como producción)
pnpm build        # typecheck + build del cliente + prerender en dist/
pnpm preview      # sirve dist/
pnpm test         # vitest (lógica de las demos, registro de páginas, diccionarios)
pnpm lint         # oxlint
pnpm typecheck    # tsc --noEmit
pnpm format       # prettier
```

Estructura: `src/site.ts` (el registro de páginas: la barra, el menú, la paleta, el footer y el sitemap lo leen), `src/pages`, `src/sections`, `src/components`, `src/demos` (el tracker de iniciativa y el d20 jugables), `src/i18n` (diccionarios) y `src/styles` (primero los tokens, después base, ornamentos, `aura.css`, layout, páginas y `motion.css`). Las imágenes viven en `public/assets`.

### Agregar una página

1. Sumar una entrada a `PAGES` en `src/site.ts` y sus claves de metadatos a los dos diccionarios.
2. Crear el componente en `src/pages` y registrarlo en `src/App.tsx`.

El prerender escribe su archivo y su entrada en el sitemap; la barra, el menú móvil, la paleta y el footer la toman solos.

### Rutas y links

Una sola plantilla HTML (`index.html`) sirve todas las páginas; el prerender completa título, descripción y `og:url` de cada una. Los links usan URLs limpias (`/faq`, no `/faq.html`): Cloudflare sirve `faq.html` en `/faq`. El chequeo de links del CI las resuelve con `lychee --fallback-extensions html`.

### Movimiento y visuales

Las animaciones ocurren una sola vez o responden a una acción (scroll, cursor, click), nada se repite en bucle y `prefers-reduced-motion` las apaga. El cielo violeta con constelaciones y los círculos mágicos son una utilidad reutilizable: las clases `aura` de `aura.css` más el componente `Sigil` (tres diseños).

## Chequeos

El CI corre `oxlint`, `tsc`, los tests y el build, valida las páginas compiladas con `html-validate` y revisa todos los links con `lychee`.

## Deploy

Se deploya con Cloudflare Workers Builds, conectado a este repo. Comando de build: `pnpm install --frozen-lockfile && pnpm build`; comando de deploy: `npx wrangler deploy`, que sirve `dist/` como static assets (`wrangler.jsonc`). La versión de Node sale de `.node-version`. El dominio se configura en el Worker, en *Settings → Domains & Routes*.

## Descargas

Los botones de descarga leen las URLs de los assets del último release de Rolboard desde la API de GitHub, buscando `windows-amd64*.exe`, `linux-amd64*.AppImage` (o `linux-x86_64*.AppImage`, el nombre usado hasta v0.2.1) y `android-arm64*.apk` (los assets se llaman, por ejemplo, `rolboard-windows-amd64-v0.1.1.exe`). Si la API no responde, enlazan a la página del último release. La misma consulta muestra la versión actual en el inicio y en la página de descargas.

La página detecta el sistema operativo del visitante y resalta la descarga que corresponde.

## Idioma

Español e inglés. La página toma el idioma del browser (`es*` → español, cualquier otro → inglés), salvo que el visitante elija uno con el selector, que se recuerda en `localStorage`. Los dos idiomas viven en `src/i18n`: `es.ts` es la fuente y `en.ts` debe definir las mismas claves, algo que verifica `tsc`. El HTML estático sale en español; el idioma guardado o del navegador se aplica después de hidratar.

## Capturas

`public/assets/screens/` sale de una campaña de demo ficticia, capturada a 1440×900 con escala 2x.

## Licencia

MIT - ver la [licencia de Rolboard](https://github.com/ncorrea-13/rolboard/blob/main/LICENSE).

Los logos e íconos (`public/assets/logo-*.png`, `public/assets/favicon.png`) son © Mateo Guareschi y se usan con su permiso. **No** están cubiertos por la licencia MIT.

---

_Mendoza, Argentina · Nicolás Correa ([ncorrea-13](https://github.com/ncorrea-13))_
