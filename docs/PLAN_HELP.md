# Plan: ayuda en la web

Pendiente para una próxima versión. Cuando se implemente algo, se documenta en el `README` y se borra de acá.

## Contexto

- La ayuda de la app vive en `client/src/screens/helpContent.tsx` (repo `rolboard`): ~1700 líneas de JSX, un arreglo `es` y otro `en`, 7 páginas (`inicio`, `campaña`, `combate`, `herramientas`, `obsidian`, `datos`, `acerca`). `Help.tsx` filtra las secciones por modo (`web`, `desktop`, `android`).
- La web tiene el landing y, en la branch `feat/obsidian-page`, una guía de Obsidian. El selector de idioma y la barra viven en `src/` (React + TypeScript sobre Vite).
- La ayuda de la app ya cumple su función dentro de la app y funciona offline. Lo que falta en la web es lo que busca alguien que todavía no instaló.

## Objetivo

Que quien llega por buscador pueda entender qué es Rolboard y cómo empezar sin instalarlo, sin crear una segunda ayuda que se desactualice.

## Fases

### 1. Página `/empezar` (estática, sin tocar la app)

- Adaptar la sección `inicio` de la ayuda: qué es, cómo empezar, recorrido de la pantalla. 3 secciones, no 7.
- Mismo patrón que `obsidian.html`: una página más en `src/pages`, con sus textos en `src/i18n`.
- Enlazarla desde el nav y el hero del landing.
- Copia manual: asumir que se desactualiza; por eso se limita a lo que casi no cambia.

### 2. Fuente única (solo si la copia manual duele)

Mover la ayuda a archivos Markdown y consumir los mismos desde la app y la web.

- Un `.md` por página e idioma; el modo (`web`, `desktop`, `android`) va en el frontmatter de cada sección.
- La app los renderiza con `MarkdownText` (ya soporta callouts `> [!NOTE]` y tablas).
- La web los toma en su build (copia en el release, o fetch al repo).
- Requiere reescribir los bloques JSX propios (`Callout`, `CalloutTypes`, `Code`, `ForMode`, `Author`) a Markdown o a una convención.

### 3. Astro (solo si la web pasa de ~4-5 páginas, hoy hay un prerender propio)

- Genera HTML estático, soporta Markdown e i18n por rutas, y sigue sirviéndose desde Cloudflare.
- No se justifica antes: hoy son dos páginas y lo repetido es la barra y el footer.

## Decisiones abiertas

- ¿Dónde vive el Markdown fuente: en `rolboard` (junto a la app) o en `rolboard-web`?
- ¿La paridad ES/EN es obligatoria en cada cambio, o se acepta que el inglés se atrase?
- ¿Qué se hace con las secciones por modo en la web: se muestran todas con una etiqueta, o solo las comunes?
- ¿`/en/...` real para SEO en inglés, o se mantiene el idioma resuelto en el cliente?

## Riesgos y cosas sin verificar

- Sin verificar: que `MarkdownText` entienda todo lo que hoy hace el JSX de la ayuda (~870 etiquetas). Hay que auditarlo antes de decidir la fase 2.
- Los anclas de la ayuda (`#id`) deben conservarse: la ayuda se linkea desde la app.
- La guía de Obsidian de la web y la página `obsidian` de la ayuda cubren lo mismo; si cambia el indexer hay que tocar ambas.
- Cloudflare copia los archivos con un comando de build en el dashboard; una página o carpeta nueva exige revisarlo.

## Fuera de alcance

- Traducir la ayuda a otros idiomas.
- Un buscador dentro de la documentación de la web.
