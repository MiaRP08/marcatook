# Registro de cambios

Una entrada por tarea terminada, la más reciente arriba. La escribe el agente al final de cada tarea; tú la revisas.

## Inicio · Plantilla v3 sin estilo

- Archivos: todos
- Qué cambió: punto de partida. Diseño en grises a la espera del brief.
## 2026-11-11 · Prompt 01 · Identidad · Paleta, tipografías, forma y animación
- Archivos: `src/styles/global.css`, `src/components/ui/Contenedor.astro`, `src/datos/sitio.ts`
- Qué cambió: Configuración de la paleta de 7 colores (#E9DED3, #F1F1DB, #212220, #5F5A54, #A19E97, #405A46, #FFFFFF), fuentes tipográficas oficiales (Oswald, Lora, Plus Jakarta Sans), esquinas de 8px, bordes de 1px, sombra suave y transiciones sutiles.

## 2026-11-11 · Prompt 02 · Marco · Datos del sitio, navegación y páginas base
- Archivos: `src/datos/sitio.ts`, `src/layouts/Layout.astro`, `src/components/Encabezado.astro`, `src/components/PiePagina.astro`, `src/pages/index.astro`, `src/pages/nosotros.astro`, `src/pages/proyectos.astro`, `src/pages/contacto.astro`
- Qué cambió: Se eliminaron las secciones de prueba de la plantilla inicial. Se crearon las páginas limpias del mapa del sitio (`/`, `/nosotros`, `/proyectos`, `/contacto`), encabezado fijo con logotipo y menú de navegación, pie de página global y vinculación de fuentes tipográficas oficiales Oswald, Lora y Plus Jakarta Sans.

## 2026-11-11 · Prompt 03 · Inicio · Portada
- Archivos: `src/components/inicio/Portada.astro`, `src/pages/index.astro`
- Qué cambió: Portada principal con titular `<h1>` "Atrévete a verte diferente.", texto de presentación, eslogan, botones de acción hacia `/proyectos` y `/nosotros`, y carrusel fotográfico automático de 4 imágenes (`FT01.jpeg` a `FT04.jpeg`) con rotación cada 5 segundos y transiciones suaves.

## 2026-11-11 · Prompt 04 · Inicio · Presentación
- Archivos: `src/components/inicio/Presentacion.astro`, `src/pages/index.astro`
- Qué cambió: Sección editorial con el título "Más que fotografías, creamos recuerdos.", descripción de la propuesta del estudio, botón "CONOCE NUESTRA HISTORIA" y carrusel fotográfico manual de 3 fotos (`FTM.jpeg`, `FTM1.jpeg`, `FTM2.jpeg`) con controles de flechas y puntos.

## 2026-11-11 · Prompt 05 · Inicio · Trabajos destacados
- Archivos: `src/components/inicio/TrabajosDestacados.astro`, `src/pages/index.astro`
- Qué cambió: Cuadrícula de tres tarjetas para trabajos destacados (`FT1E.jpeg`, `FT1G.jpeg`, `FT1R.jpeg`) con títulos, descripciones, bordes de 1px, esquinas redondeadas de 8px y botón "EXPLORAR PROYECTOS" hacia `/proyectos`.

## 2026-11-11 · Prompt 06 · Inicio · Llamada a la acción
- Archivos: `src/components/inicio/LlamadaAccion.astro`, `src/pages/index.astro`
- Qué cambió: Bloque contenedor centrado con titular "Tu idea merece convertirse en arte.", texto de invitación y botón principal "EMPECEMOS" que enlaza a `/contacto`.

## 2026-11-11 · Prompt 07 · Nosotros · Portada
- Archivos: `src/components/nosotros/Portada.astro`, `src/pages/nosotros.astro`
- Qué cambió: Creación de la página `/nosotros` con cabecera de presentación, titular `<h1>` "Nuestra esencia, nuestra creatividad.", texto introductorio y composición en dos columnas con fotografía editorial de gran formato ocupando el 100% de su cuadro sin bordes vacíos.

## 2026-11-11 · Prompt 08 · Nosotros · Quiénes somos
- Archivos: `src/components/nosotros/QuienesSomos.astro`, `src/pages/nosotros.astro`
- Qué cambió: Sección de presentación de las fundadoras Mía y Francisca ("Detrás de cada fotografía existe una idea.") acompañada de la fotografía `nosotras.jpeg` ajustada en proporción original sin recortes.

## 2026-11-11 · Prompt 09 · Nosotros · Qué hacemos
- Archivos: `src/components/nosotros/QueHacemos.astro`, `src/pages/nosotros.astro`
- Qué cambió: Bloque explicativo editorial con el título "Transformamos ideas en fotografías únicas." y tres párrafos que detallan el enfoque en fotografía personalizada, creativa y experimental.

## 2026-11-11 · Prompt 10 · Nosotros · Filosofía
- Archivos: `src/components/nosotros/Filosofia.astro`, `src/pages/nosotros.astro`
- Qué cambió: Construcción de la sección "Lo diferente nos hace únicos." con tres tarjetas independientes para los pilares Creatividad, Personalización y Estilo en superficie `#F1F1DB` con borde de 1px y radio de 8px.

## 2026-11-11 · Prompt 11 · Nosotros · Misión y Visión
- Archivos: `src/components/nosotros/MisionVision.astro`, `src/pages/nosotros.astro`
- Qué cambió: Bloque simétrico de dos columnas con los textos de Misión y Visión, diseñado en tarjetas destacadas en tono café `#5F5A54`, tipografías Oswald y Lora, y textos claros de alto contraste accesible.

## 2026-11-11 · Prompt 12 · Nosotros · Cierre
- Archivos: `src/components/nosotros/Cierre.astro`, `src/pages/nosotros.astro`
- Qué cambió: Bloque de cierre con la frase destacada “Cada persona tiene una historia. Nosotras la convertimos en imagen.” enmarcada en tarjeta de superficie con botón de llamada a la acción "DESCUBRE NUESTRO TRABAJO" enlazado a `/proyectos`.

## 2026-11-11 · Prompt 13 · Proyectos · Portada
- Archivos: `src/components/proyectos/Portada.astro`, `src/pages/proyectos.astro`
- Qué cambió: Creación de la página `/proyectos` con cabecera de gran formato, `<h1>` "Nuestro trabajo habla por nosotros.", texto introductorio y composición limpia de estilo editorial minimalista.

## 2026-11-11 · Prompt 14 · Proyectos · Presentación de proyectos y Categorías
- Archivos: `src/components/proyectos/PresentacionProyectos.astro`, `src/pages/proyectos.astro`
- Qué cambió: Introducción con titular "Cada imagen tiene algo que contar.", párrafo explicativo y barra horizontal interactiva de botones de categorías con navegación por anclajes directos hacia la galería.

## 2026-11-11 · Prompt 15 · Proyectos · Galería de proyectos
- Archivos: `src/components/proyectos/Galeria.astro`, `src/pages/proyectos.astro`
- Qué cambió: Portafolio de 12 fotografías organizadas en cuatro categorías temáticas (Retratos, Fotografía Creativa, Retrato en Estudio y Fotografía Personalizada). Efecto de blanco y negro a color en hover para computadora, desplazamiento táctil en móvil y visor modal ampliado (lightbox) al hacer clic en cualquier imagen.

## 2026-11-11 · Prompt 16 · Proyectos · Texto complementario
- Archivos: `src/components/proyectos/TextoComplementario.astro`, `src/pages/proyectos.astro`
- Qué cambió: Sección editorial centrada con el titular "Tu imaginación es el comienzo de algo increíble." y dos párrafos que destacan el valor emocional, el estilo y la personalidad de cada sesión fotográfica.

## 2026-11-11 · Prompt 17 · Proyectos · Llamada a la acción
- Archivos: `src/components/proyectos/LlamadaAccion.astro`, `src/pages/proyectos.astro`
- Qué cambió: Bloque de cierre en la página Proyectos con titular "¿Y si la próxima fotografía es la tuya?", texto reflexivo de invitación y botón principal "QUIERO MI SESIÓN" enlazado directamente a `/contacto`.

## 2026-11-11 · Prompt 18 · Contacto · Portada
- Archivos: `src/components/contacto/Portada.astro`, `src/pages/contacto.astro`
- Qué cambió: Cabecera principal de la página Contacto con `<h1>` "Hagamos algo increíble juntos.", texto introductorio de presentación y marco editorial para exhibición del logotipo oficial `logo.jpeg`.

## 2026-11-11 · Prompt 19 · Contacto · Formulario
- Archivos: `src/components/contacto/Formulario.astro`, `src/pages/contacto.astro`
- Qué cambió: Creación del formulario interactivo "Cuéntanos tu idea." con 4 campos obligatorios (Nombre completo, Correo electrónico, Tipo de fotografía y Descripción del proyecto), validación de formato de correo y mensaje de confirmación de éxito tras el envío.

## 2026-11-11 · Prompt 20 · Contacto · Información de contacto y redes
- Archivos: `src/components/contacto/InfoRedes.astro`, `src/pages/contacto.astro`
- Qué cambió: Construcción del bloque de canales directos con enlaces oficiales al Instagram de la marca, chat directo de WhatsApp y correo electrónico (`mailto:miaraphaellarp@gmail.com`) con la etiqueta interactiva "Contáctame", cada uno con su respectivo icono vectorial accesible.

## 2026-11-11 · Prompt 21 · Todas · Revisión final
- Archivos: `src/pages/index.astro`, `src/pages/nosotros.astro`, `src/pages/proyectos.astro`, `src/pages/contacto.astro`, `src/components/Encabezado.astro`, `src/components/PiePagina.astro`
- Qué cambió: Auditoría completa de navegación, enlaces cruzados y contraste accesible. Se integró la paleta oficial en el encabezado café `#5F5A54` y pie de página en verde oscuro `#405A46`. Se limpiaron las etiquetas técnicas en Proyectos, se garantizó la adaptación completa de imágenes sin deformación ni scroll horizontal a 360, 768 y 1280 px, y se verificó que `npm run verificar` finalice con 0 errores.