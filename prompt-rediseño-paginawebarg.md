Rediseña completamente el diseño visual del sitio web de Página Web Arg.

## OBJETIVO

Que deje de parecer una plantilla creada con IA o una landing genérica de SaaS. Debe transmitir diseño premium, creatividad, confianza y profesionalismo. El resultado final debe verse como una agencia de diseño web premium de 2026.

## MANTENER SIN CAMBIOS

- Todo el contenido actual (textos, títulos, descripciones).
- La estructura SEO (meta titles, meta descriptions, heading hierarchy, alt attributes).
- Todas las URLs existentes.
- La estructura de archivos y carpetas del proyecto.
- Los CTAs de WhatsApp.
- El sitemap dinámico.

## APLICAR CAMBIOS EN TODAS LAS PÁGINAS Y COMPONENTES

No rediseñes solo la home. Todos los cambios deben aplicarse de forma consistente en todas las URLs y componentes del proyecto. Recorré cada archivo de página y cada componente compartido.

---

## PALETA DE COLORES

Reemplazar completamente el esquema azul oscuro actual.

- Principal: #101828 (grafito oscuro)
- Secundario: #E8732A (naranja elegante)
- Apoyo: #F5F5F3 (blanco cálido)
- Detalles: #D4AF37 (dorado suave)

Definir estas variables en globals.css y usarlas en todo el proyecto de forma consistente. Eliminar cualquier rastro del esquema de color anterior.

---

## TIPOGRAFÍA

- Títulos: Space Grotesk — con personalidad visual, peso bold, tamaños generosos.
- Cuerpo: DM Sans — limpia, moderna, no genérica.

Importar ambas desde Google Fonts. Eliminar cualquier tipografía anterior. Los títulos deben ser el elemento visual más fuerte de cada sección.

---

## NAVEGACIÓN (NAVBAR)

- Transparente al inicio de la página.
- Efecto glassmorphism suave (backdrop-blur + fondo semitransparente).
- Al hacer scroll: transición suave a navbar sólida con fondo #101828.
- Menú más espacioso y premium.
- Links con underline animado en hover (slide-in de izquierda a derecha).
- Mobile: hamburger menu con animación suave de apertura.

---

## HERO SECTION

Eliminar el típico hero centrado de IA.

Crear un hero editorial:
- Título grande alineado a la izquierda, tipografía impactante.
- Mucho espacio en blanco intencional.
- Layout asimétrico (texto a la izquierda, elemento visual a la derecha).
- Fondo claro #F5F5F3, nada de degradados azules.
- El botón CTA principal en naranja #E8732A.
- Detalle decorativo sutil con dorado #D4AF37.

---

## BOTONES

Rediseñar completamente todos los botones del sitio.

- Botón principal: fondo #E8732A, texto blanco, border-radius: 4px (no rounded-full), hover con oscurecimiento y scale sutil.
- Botón secundario: fondo transparente, borde 1px #101828, hover con fill del grafito oscuro y texto blanco.
- Transiciones suaves en todos los estados (hover, active, focus).
- Consistentes en todo el sitio.

---

## CARDS / TARJETAS

Eliminar las cards genéricas con box-shadow suave.

Nuevo estilo editorial tipo revista premium:
- Borde fino 1px en #E8E8E8.
- Sombra sutil solo en hover (elevación progresiva).
- Microanimación de translate-y en hover (-4px).
- Variedad visual: no todas las cards iguales. Alternar layouts (imagen arriba, imagen lateral, solo texto con acento).
- Padding generoso, tipografía con jerarquía clara.

---

## SECCIONES

Cada sección debe sentirse visualmente diferente. No repetir el mismo fondo + mismas cards en todas.

Alternar entre:
- Fondo claro #F5F5F3 con texto oscuro.
- Fondo oscuro #101828 con texto claro y acentos en naranja/dorado.
- Secciones con layout de grilla asimétrica.
- Separadores visuales sutiles entre secciones (línea fina, cambio de fondo, espacio generoso).

---

## ESTADÍSTICAS / NÚMEROS

Eliminar el diseño actual de estadísticas.

Convertirlas en bloques visuales elegantes:
- Números en tipografía Space Grotesk, tamaño muy grande (4xl o 5xl).
- Color de acento en naranja o dorado para los números.
- Labels en DM Sans, tamaño small, color gris medio.
- Layout horizontal en desktop, vertical en mobile.

---

## FOOTER

Rediseño completo del footer:
- Fondo #101828.
- Texto en blanco/gris claro.
- Links organizados en columnas.
- Acento dorado #D4AF37 en separadores o detalles.
- Estilo limpio, profesional y espacioso.
- Logo o nombre del sitio destacado.

---

## ANIMACIONES

Implementar con CSS puro (no agregar Framer Motion ni librerías de animación):
- Fade In suave en elementos al cargar.
- Reveal on Scroll con Intersection Observer (CSS classes + JS mínimo).
- Hover effects elegantes en cards, botones y links.
- Transiciones suaves (300ms ease) en todos los cambios de estado.
- No exagerar: elegancia sobre espectáculo.

---

## RESPONSIVE

Todos los cambios deben ser 100% responsive. Prioridad: mobile first.
- Navbar: hamburger menu en mobile.
- Hero: stack vertical en mobile.
- Cards: una columna en mobile.
- Tipografía: escalar proporcionalmente.
- Testear que no se rompa nada en pantallas de 375px a 1920px.

---

## NO DEBE PARECER

- Plantilla de IA (Vercel templates, v0.dev output genérico).
- Plantilla de Tailwind con gradient-to-r blue-purple.
- SaaS landing genérica.
- Dashboard o admin panel.
- Cualquier sitio con Inter + gradiente azul + cards redondeadas.

## DEBE SENTIRSE

Exclusivo, moderno, elegante, creativo, profesional y diferente a todas las webs generadas con IA.

---

## PROCESO DE TRABAJO

1. Antes de tocar código, mostrá un resumen de todos los archivos que vas a modificar y los cambios principales en cada uno.
2. Esperá mi aprobación.
3. Implementá sección por sección, empezando por globals.css y layout, luego navbar, hero, y el resto de componentes.
4. Después de cada grupo de cambios, mostrá un resumen de lo que cambiaste.
5. Aplicá los cambios en TODAS las páginas del sitio, no solo la home.
