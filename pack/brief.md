Archivo: brief.md
# Brief de la marca

> **Estudiante:** este archivo lo genera la IA (fase 2) a partir de tu plan aprobado. Revísalo antes de usar Cline: todo lo que dice aquí es lo que se va a construir.
> Si algo dice `POR DEFINIR`, decídelo tú y pídele a la IA que lo actualice.
>
> **Agente:** este brief es la única fuente de decisiones de diseño y contenido.
> Si un campo que necesitas dice `POR DEFINIR` o está vacío, **detente y pregunta**: no inventes, no busques en otros archivos, no supongas.
> Copia los textos tal cual están escritos (no los reescribas ni "mejores").

## 1. Marca

| Campo | Decisión |
| --- | --- |
| Nombre de la marca | TAKE, TOOK & TAKEN |
| Tipo | Marca ficticia / estudio creativo de fotografía personalizada. |
| Qué hace, en una frase | Creamos fotografías personalizadas que transforman ideas, estilos y momentos en recuerdos visuales únicos. |
| Para quién es (público) | Jóvenes y adultos de 16 a 35 años, parejas, amigos, creadores de contenido y personas que buscan fotografías diferentes. |
| Personalidad (3 adjetivos) | Creativa, moderna y auténtica. |
| Eslogan | No tomamos fotos, creamos recuerdos increíbles |
| Descripción para Google (máx. 155 caracteres) | Estudio creativo de fotografía personalizada. Convertimos tus ideas, estilo y emociones en recuerdos visuales únicos, modernos y auténticos. |

## 2. Referencias

Qué tomar de cada sitio de referencia (las capturas están en el plan, `pack/plan.pdf`).

| Ref | Sitio | Detalle que tomamos | Dónde se aplica |
| --- | --- | --- | --- |
| 1a | 818 Tequila — Kendall Jenner (https://drink818.com/) | Identidad visual minimalista con uso de identidad limpia, logotipo tipográfico y pocos elementos decorativos para construir una marca reconocible y elegante. | Encabezado, el logotipo y el pie de página |
| 1b | 818 Tequila — Kendall Jenner (https://drink818.com/) | Presentación visual con protagonismo de las fotografías y composiciones ordenadas. | Galería y a las fotografías destacadas de Inicio |
| 2a | Oilosophy (https://oilosophy.com.ec/) | Organización del contenido dividiendo información en secciones con títulos claros, fotografías y descripciones breves. | Nosotros para presentar la historia y los servicios |
| 2b | Oilosophy (https://oilosophy.com.ec/) | Presentación por categorías organizando visualmente por bloques para separar grupos temáticos. | Galería para separar retratos, fotografía creativa, parejas y fotografía personalizada |

## 3. Paleta de color

Exactamente estos 7 colores, en hex (`#1a1a1a`). No se agregan otros.
`npm run verificar` exige contraste 4.5:1 o más en: `texto` sobre `fondo` y `superficie`, `texto-suave` sobre `fondo`, `marca-contraste` sobre `marca`.

| Token | Hex | Para qué se usa |
| --- | --- | --- |
| `fondo` | #E9DED3 | Fondo de toda la página |
| `superficie` | #F1F1DB | Tarjetas, bloques destacados |
| `texto` | #212220 | Texto principal |
| `texto-suave` | #5F5A54 | Texto secundario, etiquetas |
| `borde` | #A19E97 | Líneas y bordes |
| `marca` | #405A46 | Color principal: botones, resaltados |
| `marca-contraste` | #FFFFFF | Texto que va encima de `marca` |

## 4. Tipografías

Archivos (`.woff2`, `.woff`, `.ttf` u `.otf`) en `pack/fuentes/`. Solo fuentes con licencia libre.

| Uso | Nombre de la fuente | Archivo(s) en `pack/fuentes/` | Grosores |
| --- | --- | --- | --- |
| Títulos | Oswald | `pack/fuentes/Oswald-Medium.woff2`, `pack/fuentes/Oswald-SemiBold.woff2`, `pack/fuentes/Oswald-Bold.woff2` | 500, 600, 700 |
| Texto | Lora | `pack/fuentes/Lora-Regular.woff2`, `pack/fuentes/Lora-Medium.woff2`, `pack/fuentes/Lora-Bold.woff2` | 400, 500, 700 |
| Interfaz / botones | Plus Jakarta Sans | `pack/fuentes/PlusJakartaSans-Medium.woff2`, `pack/fuentes/PlusJakartaSans-SemiBold.woff2`, `pack/fuentes/PlusJakartaSans-Bold.woff2` | 500, 600, 700 |

## 5. Forma

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Esquinas (`radio`) | `0px` recto · `4px` · `8px` · `16px` · `9999px` píldora | `8px` |
| Grosor de borde | `0px` sin borde · `1px` · `2px` · `3px` | `1px` |
| Sombra | `none` · suave `0 4px 12px rgb(0 0 0 / 0.12)` · dura `4px 4px 0 0 <hex de borde>` | suave `0 4px 12px rgb(0 0 0 / 0.12)` |
| Ancho máximo del contenido | `max-w-3xl` estrecho · `max-w-5xl` medio · `max-w-7xl` ancho | `max-w-7xl` ancho |

## 6. Animación

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Intensidad | `ninguna` · `sutil` · `marcada` | `sutil` |

## 7. Logo y menú

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Logo (archivo en `pack/logos/` + texto alternativo) | o "sin logo, solo nombre" | `pack/logos/logo.jpeg`, alt: "Logotipo TAKE, TOOK & TAKEN" |
| Tipo de menú | `barra` (enlaces siempre visibles) · `desplegable` (botón "Menú" en celular y tablet, barra en computadora) · `desplegable-siempre` (botón en todas las pantallas) | `desplegable` |
| Encabezado fijo arriba al bajar | `sí` · `no` | `sí` |

## 8. Mapa del sitio

Una fila por página. La primera es Inicio.

| Página | Ruta | Archivo | Texto en el menú | Título de la pestaña |
| --- | --- | --- | --- | --- |
| Inicio | `/` | `src/pages/index.astro` | Inicio | TAKE, TOOK & TAKEN – Fotografía personalizada |
| Nosotros | `/nosotros` | `src/pages/nosotros.astro` | Nosotros | Nuestra esencia – TAKE, TOOK & TAKEN |
| Proyectos | `/proyectos` | `src/pages/proyectos.astro` | Proyectos | Nuestro trabajo – TAKE, TOOK & TAKEN |
| Contacto | `/contacto` | `src/pages/contacto.astro` | Contacto | Contáctanos – TAKE, TOOK & TAKEN |

## 9. Contenido por página

Una sub-sección por página del mapa, y dentro sus secciones en orden de arriba hacia abajo.
La **disposición** describe el boceto en palabras (el agente no ve imágenes).
La primera sección de Inicio lleva el título principal (`<h1>`); en las demás páginas, la primera sección también lleva el `<h1>` de esa página.

### Página: Inicio (`/`)

#### Sección: Portada principal

- **id:** `portada`
- **Título:** Atrévete a verte diferente.
- **Texto:** Cada fotografía tiene una historia y cada persona tiene una esencia única. En TAKE, TOOK & TAKEN transformamos tus ideas en fotografías llenas de creatividad, estilo y personalidad. Nos apasiona capturar momentos especiales y convertirlos en imágenes auténticas que reflejen quién eres.
- **Elementos:**
  - Eslogan: No tomamos fotos, creamos recuerdos increíbles.
- **Imágenes:**
  - `pack/imagenes/FT01.JPEG`, alt: "Retrato fotográfico editorial con estilo y personalidad"
  - `pack/imagenes/FT02.JPEG`, alt: "Sesión fotográfica creativa con iluminación artística"
  - `pack/imagenes/FT03.JPEG`, alt: "Composición fotográfica personalizada y auténtica"
  - `pack/imagenes/FT04.JPEG`, alt: "Fotografía de retrato moderna y expresiva"
  *(Carrusel fotográfico automático con transición de desvanecimiento suave cada 5 segundos)*
- **Botones:**
  - VER NUESTRO TRABAJO → `/proyectos`
  - CONÓCENOS → `/nosotros`
- **Disposición:**
  - celular: elementos organizados verticalmente; título principal, texto de presentación, eslogan, botones apilados y debajo el carrusel adaptado al ancho de pantalla.
  - computadora: portada en dos columnas; columna izquierda con título principal, texto de presentación, eslogan y dos botones de navegación horizontales; columna derecha con carrusel fotográfico de gran formato.
- **Referencia aplicada:** ninguna

#### Sección: Presentación de la marca

- **id:** `presentacion`
- **Título:** Más que fotografías, creamos recuerdos.
- **Texto:** Somos TAKE, TOOK & TAKEN, un estudio creativo de fotografía personalizada donde cada idea es una oportunidad para crear algo extraordinario. Nos encanta experimentar con estilos, colores, emociones y composiciones para conseguir fotografías que se alejen de lo convencional. Creemos que cada persona tiene una esencia diferente y que cada fotografía debe reflejarla de una manera única.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:**
  - CONOCE NUESTRA HISTORIA → `/nosotros`
- **Disposición:**
  - celular: bloque apilado con título, cuerpo de texto y botón debajo.
  - computadora: según boceto 1, bloque dividido con texto y botón a la izquierda y recuadro gráfico/imagen a la derecha.
- **Referencia aplicada:** ninguna

#### Sección: Trabajos destacados

- **id:** `trabajos-destacados`
- **Título:** Trabajos destacados
- **Texto:** Una muestra de nuestras sesiones fotográficas más especiales, donde la personalidad y la creatividad marcan la diferencia.
- **Elementos:**
  - Bloque 1: "Fotografía Creativa" — Conceptos visuales únicos, iluminación artística y composiciones originales que se alejan de lo común.
  - Bloque 2: "Retratos Personalizados" — Imágenes íntimas y auténticas que capturan la verdadera esencia de cada persona.
  - Bloque 3: "Parejas y Conexión" — Momentos espontáneos y sinceros transformados en recuerdos inolvidables.
- **Imágenes:**
  - `pack/imagenes/FT1E.JPEG`, alt: "Trabajo destacado - Sesión fotográfica creativa"
  - `pack/imagenes/FT1G.JPEG`, alt: "Trabajo destacado - Retrato personalizado"
  - `pack/imagenes/FT1R.JPEG`, alt: "Trabajo destacado - Fotografía de conexión y estilo"
- **Botones:**
  - EXPLORAR PROYECTOS → `/proyectos`
- **Disposición:**
  - celular: tres bloques de trabajos destacados apilados verticalmente con imagen, título y texto.
  - computadora: fila de tres tarjetas destacadas ("FEATURED SECTION") distribuidas horizontalmente en tres columnas equilibradas.
- **Referencia aplicada:** 1b

#### Sección: Llamada a la acción

- **id:** `llamada-accion`
- **Título:** Tu idea merece convertirse en arte.
- **Texto:** ¿Tienes una idea especial para una fotografía? Nos encantará escucharla. Tú imaginas, nosotras creamos y juntas convertimos tu idea en una imagen inolvidable.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:**
  - EMPECEMOS → `/contacto`
- **Disposición:**
  - celular: contenedor centrado con título, texto y botón apilados.
  - computadora: bloque destacado tipo llamada a la acción ("CALL TO ACTION") centrado con botón ancho destacado.
- **Referencia aplicada:** ninguna

---

### Página: Nosotros (`/nosotros`)

#### Sección: Portada principal

- **id:** `portada`
- **Título:** Nuestra esencia, nuestra creatividad.
- **Texto:** Detrás de cada fotografía hay una idea, una historia y muchas ganas de crear algo diferente. Nos apasiona experimentar, imaginar y transformar momentos en imágenes que transmitan emociones y personalidad.
- **Elementos:** ninguno
- **Imágenes:**
  - `pack/imagenes/nosotras.jpeg`, alt: "Nosotras - Mía y Francisca fotógrafas y creadoras de TAKE, TOOK & TAKEN"
- **Botones:** ninguno
- **Disposición:**
  - celular: título y texto introductorio apilados verticalmente sobre la imagen.
  - computadora: composición en dos columnas con texto a la izquierda y bloque de imagen de portada a la derecha según boceto 2.
- **Referencia aplicada:** 2a

#### Sección: ¿Quiénes somos?

- **id:** `quienes-somos`
- **Título:** Detrás de cada fotografía existe una idea.
- **Texto:** Somos Mía y Francisca, dos jóvenes apasionadas por la creatividad y la fotografía. Creamos imágenes increíbles, únicas y personalizadas, donde cada idea se transforma en arte. ¡Queremos capturar tu esencia y hacer que cada foto tenga su propio estilo!
- **Elementos:** ninguno
- **Imágenes:**
  - `pack/imagenes/nosotras.jpeg`, alt: "Nosotras"
- **Botones:** ninguno
- **Disposición:**
  - celular: fotografía y texto organizados verticalmente.
  - computadora: composición editorial equilibrada con texto a un lado y la fotografía de Mía y Francisca al otro.
- **Referencia aplicada:** 2a

#### Sección: ¿Qué hacemos?

- **id:** `que-hacemos`
- **Título:** Transformamos ideas en fotografías únicas.
- **Texto:** En TAKE, TOOK & TAKEN creamos fotografías personalizadas que reflejan la personalidad, el estilo y las ideas de cada persona. Exploramos diferentes conceptos, colores, escenarios y composiciones para desarrollar imágenes originales, creativas y llenas de significado. Nuestro propósito es que cada fotografía sea mucho más que una imagen: queremos que represente una experiencia especial y un recuerdo que permanezca en el tiempo.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:**
  - celular: título y párrafos apilados verticalmente.
  - computadora: bloque de texto continuo con composición editorial limpia.
- **Referencia aplicada:** 2a

#### Sección: Nuestra filosofía

- **id:** `filosofia`
- **Título:** Lo diferente nos hace únicos.
- **Texto:** Nuestra filosofía se basa en tres pilares:
- **Elementos:**
  - Creatividad: Exploramos nuevas ideas, estilos y composiciones para crear fotografías fuera de lo común.
  - Personalización: Cada trabajo se adapta a los gustos, ideas y personalidad de nuestros clientes, buscando que cada imagen refleje su esencia.
  - Estilo: Cuidamos los colores, la iluminación, la composición y cada detalle para conseguir resultados visuales únicos y especiales.
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:**
  - celular: tres tarjetas visuales independientes apiladas en vertical.
  - computadora: tres tarjetas visuales independientes distribuidas horizontalmente en tres columnas con contenedor diferenciado según boceto 2.
- **Referencia aplicada:** 2a

#### Sección: Misión y Visión

- **id:** `mision-vision`
- **Título:** Nuestro compromiso y futuro
- **Texto:** Definimos el camino que nos inspira a seguir creando cada día.
- **Elementos:**
  - Misión: Crear fotografías personalizadas, originales y creativas que transformen las ideas de nuestros clientes en imágenes únicas, capaces de transmitir emociones, reflejar su personalidad y conservar momentos especiales.
  - Visión: Ser un estudio creativo de fotografía reconocido por su originalidad, estilo y capacidad de transformar ideas en experiencias visuales únicas, inspirando a las personas a expresarse libremente a través de la fotografía.
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:**
  - celular: bloques de misión y visión apilados verticalmente.
  - computadora: dos bloques o tarjetas equilibradas en dos columnas.
- **Referencia aplicada:** 2a

#### Sección: Cierre

- **id:** `cierre`
- **Título:** Cada persona tiene una historia. Nosotras la convertimos en imagen.
- **Texto:** Descubre lo que podemos crear juntas.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:**
  - DESCUBRE NUESTRO TRABAJO → `/proyectos`
- **Disposición:**
  - celular: frase destacada y botón apilados y centrados.
  - computadora: franja destacada con frase destacada y botón centrado según boceto 2.
- **Referencia aplicada:** ninguna

---

### Página: Proyectos (`/proyectos`)

#### Sección: Portada principal

- **id:** `portada`
- **Título:** Nuestro trabajo habla por nosotros.
- **Texto:** Una colección de ideas, momentos y fotografías creadas para demostrar que la creatividad no tiene límites.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:**
  - celular: título y texto introductorio apilados y centrados.
  - computadora: encabezado limpio de gran tamaño y texto centrado.
- **Referencia aplicada:** 1a

#### Sección: Presentación de proyectos y Categorías

- **id:** `presentacion-proyectos`
- **Título:** Cada imagen tiene algo que contar.
- **Texto:** Descubre una selección de nuestros proyectos fotográficos, donde exploramos diferentes estilos, conceptos y formas de expresión. Cada fotografía representa una idea convertida en arte, con detalles que hacen de cada imagen una creación especial.
- **Elementos:**
  - Menú selector de cuatro categorías: Retratos (Grupo E), Fotografía Creativa (Grupo G), Parejas (Grupo J) y Fotografía Personalizada (Grupo R).
- **Imágenes:** ninguna
- **Botones:**
  - Botones de categorías para filtrado visual: "Todos", "Retratos", "Creativa", "Parejas", "Personalizada".
- **Disposición:**
  - celular: texto seguido de fila de botones de categoría con scroll horizontal o apilados.
  - computadora: texto introductorio centrado con barra horizontal de botones de navegación por categoría según boceto 3.
- **Referencia aplicada:** 2b

#### Sección: Galería de proyectos

- **id:** `galeria`
- **Título:** Galería de proyectos
- **Texto:** Explora nuestro portafolio completo por grupos fotográficos.
- **Elementos:**
  - Cuatro grupos de proyectos identificados por las letras E, G, J y R.
- **Imágenes:**
  - `pack/imagenes/FT1E.JPEG`, alt: "Proyecto Grupo E - Retrato fotográfico con estilo editorial"
  - `pack/imagenes/FT2E.JPEG`, alt: "Proyecto Grupo E - Composición de retrato artístico"
  - `pack/imagenes/FT1G.JPEG`, alt: "Proyecto Grupo G - Fotografía creativa con iluminación de acento"
  - `pack/imagenes/FT2G.JPEG`, alt: "Proyecto Grupo G - Expresión visual y color en estudio"
  - `pack/imagenes/FT3G.JPEG`, alt: "Proyecto Grupo G - Detalle fotográfico conceptual"
  - `pack/imagenes/FT4G.JPEG`, alt: "Proyecto Grupo G - Composición artística contemporánea"
  - `pack/imagenes/FT1J.JPEG`, alt: "Proyecto Grupo J - Sesión de pareja natural y espontánea"
  - `pack/imagenes/FT2J.JPEG`, alt: "Proyecto Grupo J - Momento íntimo en fotografía de pareja"
  - `pack/imagenes/FT1R.JPEG`, alt: "Proyecto Grupo R - Fotografía personalizada de autor"
  - `pack/imagenes/FT2R.JPEG`, alt: "Proyecto Grupo R - Retrato de estilo personalizado"
  - `pack/imagenes/FT3R.JPEG`, alt: "Proyecto Grupo R - Captura de detalles y texturas"
  - `pack/imagenes/FT4R.JPEG`, alt: "Proyecto Grupo R - Imagen fotográfica de cierre conceptual"
- **Botones:**
  - Flechas laterales de carrusel / avance y retroceso.
- **Disposición:**
  - celular: desplazamiento deslizando el dedo horizontalmente por cada grupo independiente; adaptación a pantalla; toque para ampliar; visualización a color.
  - computadora: cuadrícula de imágenes (grid) de distintos tamaños según boceto 3 o carrusel horizontal con flechas laterales; imágenes inicialmente en escala de grises que recuperan su color en hover; clic para ampliar.
- **Referencia aplicada:** 1b, 2b

#### Sección: Texto complementario

- **id:** `texto-complementario`
- **Título:** Tu imaginación es el comienzo de algo increíble.
- **Texto:** Cada proyecto comienza con una idea y se transforma en una experiencia visual diferente. Nos encanta crear fotografías que sorprendan, transmitan emociones y reflejen la esencia de quienes confían en nuestro trabajo. Porque no se trata solo de tomar fotografías, sino de crear imágenes que tengan personalidad, estilo y significado.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:**
  - celular: texto apilado centrado.
  - computadora: bloque de texto editorial centrado con márgenes amplios.
- **Referencia aplicada:** ninguna

#### Sección: Llamada a la acción

- **id:** `llamada-accion`
- **Título:** ¿Y si la próxima fotografía es la tuya?
- **Texto:** Nos encantaría conocer tu idea y convertirla en una experiencia visual única. Cuéntanos qué imaginas y juntas crearemos algo especial.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:**
  - QUIERO MI SESIÓN → `/contacto`
- **Disposición:**
  - celular: título, texto y botón apilados verticalmente y centrados.
  - computadora: bloque contenedor centrado con llamada a la acción y botón destacado.
- **Referencia aplicada:** ninguna

---

### Página: Contacto (`/contacto`)

#### Sección: Portada principal

- **id:** `portada`
- **Título:** Hagamos algo increíble juntos.
- **Texto:** ¿Tienes una idea en mente? Nos encantaría escucharla. Escríbenos y comencemos a crear fotografías que cuenten tu historia.
- **Elementos:** ninguno
- **Imágenes:**
  - `pack/imagenes/contacto.jpeg`, alt: "Contacto y reservas para sesiones en TAKE, TOOK & TAKEN"
- **Botones:** ninguno
- **Disposición:**
  - celular: imagen principal superior, seguida de título y texto apilados.
  - computadora: composición de cabecera con imagen `contacto.jpeg` y bloque de título con texto introductorio.
- **Referencia aplicada:** 1a

#### Sección: Formulario de contacto

- **id:** `formulario`
- **Título:** Cuéntanos tu idea.
- **Texto:** Queremos conocer lo que imaginas. Completa el siguiente formulario y cuéntanos cómo te gustaría que fuera tu sesión fotográfica.
- **Elementos:**
  - Campo 1: Nombre completo (input obligatorio)
  - Campo 2: Correo electrónico (input obligatorio con validación)
  - Campo 3: Tipo de fotografía que deseas (input obligatorio)
  - Campo 4: Descripción de tu idea o proyecto (textarea obligatorio)
  - Mensaje de confirmación: “¡Gracias por escribirnos! Hemos recibido tu mensaje y pronto nos pondremos en contacto contigo.”
  - Mensaje de error al fallar envío.
- **Imágenes:** ninguna
- **Botones:**
  - ENVIAR MENSAJE → envío funcional a correo configurado
- **Disposición:**
  - celular: campos de formulario apilados verticalmente ocupando el ancho completo, seguidos del botón.
  - computadora: formulario centrado en columna estructurada con 4 campos apilados y botón destacado al pie según boceto 4.
- **Referencia aplicada:** ninguna

#### Sección: Información de contacto y redes sociales

- **id:** `info-redes`
- **Título:** ¡Conectemos!
- **Texto:** Síguenos en nuestras redes sociales o escríbenos directamente. Nos encantará conocer tus ideas y ayudarte a crear fotografías increíbles.
- **Elementos:**
  - Instagram: @mia_1rp (enlace: https://www.instagram.com/mia_1rp?vrfl=NnltOWVpOGowMW15)
  - WhatsApp: botón de contacto directo por WhatsApp (enlace directo: https://wa.me/qr/7X2ZOL5RI447B1?s=r)
  - Correo electrónico: hola@taketooktaken.com
- **Imágenes:**
  - Íconos acompañantes para Instagram, WhatsApp y correo electrónico
- **Botones:**
  - CONTACTAR POR WHATSAPP → `https://wa.me/qr/7X2ZOL5RI447B1?s=r`
- **Disposición:**
  - celular: enlaces, correo e iconos apilados verticalmente o centrados.
  - computadora: fila centrada con iconos y enlaces directos en la parte inferior de la página según boceto 4.
- **Referencia aplicada:** 1a

## 10. Contacto y pie de página

| Campo | Decisión |
| --- | --- |
| Correo | hola@taketooktaken.com |
| Redes (nombre → enlace) | Instagram → https://www.instagram.com/mia_1rp?vrfl=NnltOWVpOGowMW15, WhatsApp → https://wa.me/qr/7X2ZOL5RI447B1?s=r |
| Texto del pie | TAKE, TOOK & TAKEN<br>No tomamos fotos, creamos recuerdos increíbles.<br>Fotografía personalizada · Creatividad · Estilo<br>Enlaces: Inicio \| Nosotros \| Proyectos \| Contacto<br>Instagram \| WhatsApp \| Correo electrónico<br>© 2026 TAKE, TOOK & TAKEN. Todos los derechos reservados. |