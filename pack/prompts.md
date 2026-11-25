Archivo: prompts.md
# Prompts

## Prompt 01 · Identidad · Paleta, tipografías, forma y animación

**Tarea:** Configurar la paleta de colores, tipografías locales Oswald, Lora y Plus Jakarta Sans desde pack/fuentes/, tokens de forma y animaciones globales.
**Datos:** brief, secciones 3, 4, 5 y 6.
**Pega estos archivos (versión actual, con su ruta):**
- `src/styles/global.css`
- `src/components/ui/Contenedor.astro`
- `src/datos/sitio.ts`
**Devuélveme completos:**
- `src/styles/global.css` (REEMPLAZA)
- `src/components/ui/Contenedor.astro` (REEMPLAZA)
- `src/datos/sitio.ts` (REEMPLAZA)
**Borrar:** nada
**Terminado cuando:**
- Los tokens de color coinciden exactamente con los hex del brief (#E9DED3, #F1F1DB, #212220, #5F5A54, #A19E97, #405A46, #FFFFFF).
- Las fuentes Oswald (títulos), Lora (párrafos) y Plus Jakarta Sans (botones e interfaz) están declaradas con `@font-face` apuntando a los archivos de `pack/fuentes/`.
- El contenedor aplica `max-w-7xl` con esquinas de `8px`, borde de `1px` y sombra suave.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 02 · Marco · Datos del sitio, navegación y páginas base

**Tarea:** Configurar la información global de la marca, el encabezado fijo con logotipo, el menú de navegación desplegable, el pie de página común con enlaces a Instagram y WhatsApp, y crear las páginas vacías del mapa del sitio.
**Datos:** brief, secciones 1, 7, 8 y 10.
**Pega estos archivos (versión actual, con su ruta):**
- `src/datos/sitio.ts`
- `src/pages/index.astro`
- `src/components/Encabezado.astro`
**Devuélveme completos:**
- `src/datos/sitio.ts` (REEMPLAZA)
- `src/pages/index.astro` (REEMPLAZA)
- `src/components/Encabezado.astro` (REEMPLAZA)
- `src/pages/nosotros.astro` (NUEVO)
- `src/pages/proyectos.astro` (NUEVO)
- `src/pages/contacto.astro` (NUEVO)
**Borrar:**
- `src/components/inicio/Portada.astro`
- `src/components/inicio/Comprobacion.astro`
- `src/components/inicio/Pasos.astro`
**Terminado cuando:**
- El encabezado fijo muestra el logotipo `pack/logos/logo.jpeg` con alt "Logotipo TAKE, TOOK & TAKEN" y el menú con Inicio, Nosotros, Proyectos y Contacto.
- Cada página cuenta con su respectivo título de pestaña según el brief.
- El pie de página contiene todos los textos de marca, enlaces a redes (`https://www.instagram.com/mia_1rp?vrfl=NnltOWVpOGowMW15`, `https://wa.me/qr/7X2ZOL5RI447B1?s=r`) y copyright de 2026.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 03 · Inicio · Portada

**Tarea:** Construir la sección de Portada principal de la página Inicio con carrusel fotográfico automático y enlaces de acción.
**Datos:** brief, sección 9, Página: Inicio, Sección: Portada principal.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/Portada.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: elementos organizados verticalmente; título principal, texto de presentación, eslogan, botones apilados y debajo el carrusel adaptado al ancho de pantalla / computadora: portada en dos columnas; columna izquierda con título principal, texto de presentación, eslogan y dos botones de navegación horizontales; columna derecha con carrusel fotográfico de gran formato.
**Referencia:** ninguna
**Terminado cuando:**
- El título principal "Atrévete a verte diferente." se renderiza como `<h1>`.
- El carrusel cambia automáticamente cada 5 segundos entre `FT01.JPEG`, `FT02.JPEG`, `FT03.JPEG` y `FT04.JPEG` con sus textos descriptivos alt.
- Los botones redirigen correctamente a `/proyectos` y `/nosotros`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 04 · Inicio · Presentación

**Tarea:** Construir la sección de Presentación de la marca en la página de Inicio.
**Datos:** brief, sección 9, Página: Inicio, Sección: Presentación de la marca.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/Presentacion.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: bloque apilado con título, cuerpo de texto y botón debajo / computadora: bloque dividido con texto y botón a la izquierda y recuadro gráfico/imagen a la derecha según boceto 1.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título "Más que fotografías, creamos recuerdos." y el texto íntegro del plan.
- El botón "CONOCE NUESTRA HISTORIA" enlaza a `/nosotros`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 05 · Inicio · Trabajos destacados

**Tarea:** Construir la sección de Trabajos destacados en la página de Inicio según el boceto 1.
**Datos:** brief, sección 9, Página: Inicio, Sección: Trabajos destacados.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/TrabajosDestacados.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tres bloques de trabajos destacados apilados verticalmente / computadora: fila de tres tarjetas o bloques destacados distribuidos horizontalmente.
**Referencia:** 1b (fotografías destacadas de Inicio y composiciones ordenadas)
**Terminado cuando:**
- Presenta las tres tarjetas con las imágenes `FT1E.JPEG`, `FT1G.JPEG` y `FT1R.JPEG`, con sus títulos y descripciones.
- El botón "EXPLORAR PROYECTOS" enlaza a `/proyectos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 06 · Inicio · Llamada a la acción

**Tarea:** Construir la sección de Llamada a la acción al final de la página Inicio.
**Datos:** brief, sección 9, Página: Inicio, Sección: Llamada a la acción.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/LlamadaAccion.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: contenedor centrado con título, texto y botón apilados / computadora: bloque destacado centrado con botón ancho destacado.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título "Tu idea merece convertirse en arte." y su texto descriptivo.
- El botón "EMPECEMOS" dirige a `/contacto`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 07 · Nosotros · Portada

**Tarea:** Construir la Portada principal de la página Nosotros con imagen de portada.
**Datos:** brief, sección 9, Página: Nosotros, Sección: Portada principal.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/nosotros.astro`
**Devuélveme completos:**
- `src/components/nosotros/Portada.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título y texto introductorio apilados verticalmente sobre la imagen / computadora: composición en dos columnas con texto a la izquierda y bloque de imagen de portada a la derecha según boceto 2.
**Referencia:** 2a (división en secciones con títulos claros y descripciones breves)
**Terminado cuando:**
- El título "Nuestra esencia, nuestra creatividad." está configurado como `<h1>`.
- Incluye la fotografía `nosotras.jpeg` en la composición de portada con alt descriptivo.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 08 · Nosotros · Quiénes somos

**Tarea:** Construir la sección ¿Quiénes somos? con la presentación de las fundadoras.
**Datos:** brief, sección 9, Página: Nosotros, Sección: ¿Quiénes somos?.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/nosotros.astro`
**Devuélveme completos:**
- `src/components/nosotros/QuienesSomos.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: fotografía y texto organizados verticalmente / computadora: composición editorial equilibrada con texto a un lado y la fotografía de Mía y Francisca al otro.
**Referencia:** 2a (organización del contenido con fotografía y descripción clara)
**Terminado cuando:**
- Muestra la imagen `pack/imagenes/nosotras.jpeg` con alt "Nosotras" junto al texto de Mía y Francisca.
- La imagen conserva sus proporciones originales sin distorsión.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 09 · Nosotros · Qué hacemos

**Tarea:** Construir la sección ¿Qué hacemos? con la descripción del servicio fotográfico.
**Datos:** brief, sección 9, Página: Nosotros, Sección: ¿Qué hacemos?.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/nosotros.astro`
**Devuélveme completos:**
- `src/components/nosotros/QueHacemos.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título y párrafos apilados verticalmente / computadora: bloque de texto continuo con composición editorial limpia.
**Referencia:** 2a (descripción de servicios con títulos claros y legibilidad)
**Terminado cuando:**
- Contiene el título "Transformamos ideas en fotografías únicas." y los tres párrafos explicativos exactos del plan.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 10 · Nosotros · Filosofía

**Tarea:** Construir la sección Nuestra filosofía con las tarjetas de los tres pilares de la marca.
**Datos:** brief, sección 9, Página: Nosotros, Sección: Nuestra filosofía.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/nosotros.astro`
**Devuélveme completos:**
- `src/components/nosotros/Filosofia.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tres tarjetas visuales independientes apiladas en vertical / computadora: tres tarjetas visuales independientes distribuidas horizontalmente en tres columnas con contenedor diferenciado según boceto 2.
**Referencia:** 2a (división de información en bloques y tarjetas temáticas)
**Terminado cuando:**
- Se muestran las tres tarjetas independientes para Creatividad, Personalización y Estilo.
- Las tarjetas utilizan el token de superficie `#F1F1DB` con bordes de 1px y esquinas redondeadas de 8px.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 11 · Nosotros · Misión y Visión

**Tarea:** Construir el bloque de Misión y Visión de TAKE, TOOK & TAKEN.
**Datos:** brief, sección 9, Página: Nosotros, Sección: Misión y Visión.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/nosotros.astro`
**Devuélveme completos:**
- `src/components/nosotros/MisionVision.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: bloques de misión y visión apilados verticalmente / computadora: dos bloques o tarjetas equilibradas en dos columnas.
**Referencia:** 2a
**Terminado cuando:**
- Los textos de Misión y Visión aparecen de forma simétrica y legible en dos bloques.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 12 · Nosotros · Cierre

**Tarea:** Construir la sección de cierre de la página Nosotros con la frase destacada y botón a Proyectos.
**Datos:** brief, sección 9, Página: Nosotros, Sección: Cierre.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/nosotros.astro`
**Devuélveme completos:**
- `src/components/nosotros/Cierre.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: frase destacada y botón apilados y centrados / computadora: franja destacada con frase destacada y botón centrado según boceto 2.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra la frase "Cada persona tiene una historia. Nosotras la convertimos en imagen."
- El botón "DESCUBRE NUESTRO TRABAJO" enlaza correctamente a `/proyectos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 13 · Proyectos · Portada

**Tarea:** Construir la cabecera principal de la página Proyectos.
**Datos:** brief, sección 9, Página: Proyectos, Sección: Portada principal.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/proyectos.astro`
**Devuélveme completos:**
- `src/components/proyectos/Portada.astro` (NUEVO)
- `src/pages/proyectos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título y texto introductorio apilados y centrados / computadora: encabezado limpio de gran tamaño y texto centrado.
**Referencia:** 1a (identidad limpia y encabezado minimalista)
**Terminado cuando:**
- El título "Nuestro trabajo habla por nosotros." se presenta como `<h1>`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 14 · Proyectos · Presentación de proyectos y Categorías

**Tarea:** Construir la sección de introducción a los proyectos con botones de selección por categoría.
**Datos:** brief, sección 9, Página: Proyectos, Sección: Presentación de proyectos y Categorías.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/proyectos.astro`
**Devuélveme completos:**
- `src/components/proyectos/PresentacionProyectos.astro` (NUEVO)
- `src/pages/proyectos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: texto seguido de fila de botones de categoría con scroll horizontal o apilados / computadora: texto introductorio centrado con barra horizontal de botones de navegación por categoría según boceto 3.
**Referencia:** 2b (organización y separación por categorías visuales)
**Terminado cuando:**
- Incluye el título "Cada imagen tiene algo que contar." y su descripción.
- Presenta los botones de categorías interactivos con Plus Jakarta Sans.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 15 · Proyectos · Galería de proyectos

**Tarea:** Construir la galería de 12 fotografías organizadas en cuatro grupos (E, G, J y R), con efecto interactivo y carrusel/rejilla.
**Datos:** brief, sección 9, Página: Proyectos, Sección: Galería de proyectos.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/proyectos.astro`
**Devuélveme completos:**
- `src/components/proyectos/Galeria.astro` (NUEVO)
- `src/pages/proyectos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: desplazamiento deslizando el dedo horizontalmente por cada grupo independiente; adaptación a pantalla; toque para ampliar; a color / computadora: cuadrícula de imágenes de distintos tamaños según boceto 3 o carrusel horizontal con flechas laterales; fotos inicialmente en escala de grises y color al pasar el cursor; clic para ampliar.
**Referencia:** 1b (protagonismo fotográfico ordenado) y 2b (separación por grupos)
**Terminado cuando:**
- Se incluyen las 12 fotos con sus nombres exactos (`FT1E.JPEG` a `FT4R.JPEG`) y textos alternativos descriptivos.
- En escritorio se aplica el efecto de blanco y negro a color en hover.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 16 · Proyectos · Texto complementario

**Tarea:** Construir la sección de texto complementario posterior a la galería de proyectos.
**Datos:** brief, sección 9, Página: Proyectos, Sección: Texto complementario.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/proyectos.astro`
**Devuélveme completos:**
- `src/components/proyectos/TextoComplementario.astro` (NUEVO)
- `src/pages/proyectos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: texto apilado centrado / computadora: bloque de texto editorial centrado con márgenes amplios.
**Referencia:** ninguna
**Terminado cuando:**
- Presenta el título "Tu imaginación es el comienzo de algo increíble." y su cuerpo de texto íntegro.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 17 · Proyectos · Llamada a la acción

**Tarea:** Construir la sección de llamada a la acción en la página Proyectos.
**Datos:** brief, sección 9, Página: Proyectos, Sección: Llamada a la acción.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/proyectos.astro`
**Devuélveme completos:**
- `src/components/proyectos/LlamadaAccion.astro` (NUEVO)
- `src/pages/proyectos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto y botón apilados verticalmente y centrados / computadora: bloque contenedor centrado con llamada a la acción y botón destacado.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título "¿Y si la próxima fotografía es la tuya?" y su descripción.
- El botón "QUIERO MI SESIÓN" redirige a `/contacto`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 18 · Contacto · Portada

**Tarea:** Construir la portada de la página Contacto con la fotografía principal de presentación.
**Datos:** brief, sección 9, Página: Contacto, Sección: Portada principal.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
**Devuélveme completos:**
- `src/components/contacto/Portada.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen principal superior, seguida de título y texto apilados / computadora: composición de cabecera con imagen `contacto.jpeg` y bloque de título con texto introductorio.
**Referencia:** 1a (composición editorial minimalista)
**Terminado cuando:**
- El título "Hagamos algo increíble juntos." es el `<h1>` de la página.
- La imagen `pack/imagenes/contacto.jpeg` se visualiza con alt "Contacto y reservas para sesiones en TAKE, TOOK & TAKEN".
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 19 · Contacto · Formulario

**Tarea:** Construir el formulario interactivo de contacto con sus cuatro campos obligatorios y validaciones de envío.
**Datos:** brief, sección 9, Página: Contacto, Sección: Formulario de contacto.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
**Devuélveme completos:**
- `src/components/contacto/Formulario.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: campos de formulario apilados verticalmente ocupando el ancho completo, seguidos del botón / computadora: formulario centrado en columna estructurada con 4 campos apilados y botón destacado al pie según boceto 4.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene los campos: Nombre completo, Correo electrónico, Tipo de fotografía que deseas, y Descripción de tu idea o proyecto.
- Todos los campos son obligatorios y el correo valida formato.
- El botón "ENVIAR MENSAJE" muestra el mensaje de confirmación exacto tras el envío exitoso.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 20 · Contacto · Información de contacto y redes

**Tarea:** Construir la sección de canales directos de comunicación e iconos de redes sociales con los enlaces oficiales de WhatsApp e Instagram.
**Datos:** brief, sección 9, Página: Contacto, Sección: Información de contacto y redes sociales.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
**Devuélveme completos:**
- `src/components/contacto/InfoRedes.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: enlaces, correo e iconos apilados verticalmente o centrados / computadora: fila centrada con iconos y enlaces directos en la parte inferior de la página según boceto 4.
**Referencia:** 1a
**Terminado cuando:**
- Muestra el enlace directo a Instagram (`https://www.instagram.com/mia_1rp?vrfl=NnltOWVpOGowMW15`), el botón directo de WhatsApp (`https://wa.me/qr/7X2ZOL5RI447B1?s=r`) y el correo `hola@taketooktaken.com`.
- Cada canal incluye su icono correspondiente.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 21 · Todas · Revisión final

**Tarea:** Realizar una auditoría completa del sitio web revisando responsive, accesibilidad en imágenes, navegación y consistencia tipográfica.
**Datos:** brief, secciones 1 a 10.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
- `src/pages/nosotros.astro`
- `src/pages/proyectos.astro`
- `src/pages/contacto.astro`
**Devuélveme completos:**
- Los archivos de página o componentes que requieran correcciones (REEMPLAZA).
**Borrar:** nada
**Terminado cuando:**
- No existe ningún error de compilación ni de contraste en `npm run verificar`.
- Todos los enlaces del menú y pie dirigen a sus rutas correctas (`/`, `/nosotros`, `/proyectos`, `/contacto`).
- Todas las imágenes tienen atributo `alt` definido y no se desbordan en pantalla de 360 px.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.