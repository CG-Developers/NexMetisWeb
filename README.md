# NexMetis — Web

Sitio estático. No requiere build: se sirve tal cual.

## Estructura

- `index.html` — la web entera (marcado + lógica)
- `support.js` — runtime necesario, debe estar junto a index.html
- `image-slot.js` — utilidad de imágenes
- `assets/` — imágenes de casos, fondo de servicios, cristales
- `media/` — vídeo del hero, foto del hero, audio de rotura de cristal

## Despliegue

Cualquier hosting estático (GitHub Pages, Netlify, Vercel, Cloudflare Pages):
sube el contenido de esta carpeta a la raíz del repositorio o apunta el
directorio de publicación aquí. En GitHub Pages: Settings → Pages → Deploy from
a branch → `main` / `root`.

Importante: mantén las rutas relativas tal cual — `assets/` y `media/` deben
quedar al mismo nivel que `index.html`.

## Fuentes

Se cargan desde Google Fonts y fonts.cdnfonts.com (Bodoni Moda, Archivo, Space
Grotesk, Codystar, Chalkduster, Caveat, Sreda). Requiere conexión a internet.
