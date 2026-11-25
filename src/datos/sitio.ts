/*
  Datos generales del sitio, en un solo lugar.
  Salen del brief (pack/brief.md): secciones 1, 6, 7, 8 y 10.
  Encabezado, pie de página y <head> leen de aquí: si cambias algo, cambia en todo el sitio.
*/

export const sitio = {
  nombre: "TAKE, TOOK & TAKEN",
  descripcion:
    "Estudio creativo de fotografía personalizada. Convertimos tus ideas, estilo y emociones en recuerdos visuales únicos, modernos y auténticos.",
  correo: "hola@taketooktaken.com",
  pie: "TAKE, TOOK & TAKEN\nNo tomamos fotos, creamos recuerdos increíbles.\nFotografía personalizada · Creatividad · Estilo\nEnlaces: Inicio | Nosotros | Proyectos | Contacto\nInstagram | WhatsApp | Correo electrónico\n© 2026 TAKE, TOOK & TAKEN. Todos los derechos reservados.",
  animacion: "sutil" as "ninguna" | "sutil" | "marcada",
};

/*
  Tipo de menú (sección 7 del brief):
  - "barra": enlaces siempre visibles (en celular bajan a otra línea si no caben).
  - "desplegable": botón "Menú" en celular y tablet; barra desde computadora.
  - "desplegable-siempre": botón "Menú" en todas las pantallas.
  fijo: true = el encabezado queda pegado arriba al bajar.
*/
export const encabezado = {
  menu: "desplegable" as "barra" | "desplegable" | "desplegable-siempre",
  fijo: true,
};

/* Menú principal: un enlace por página del mapa del sitio (sección 8 del brief). */
export const menu: { texto: string; href: string }[] = [
  { texto: "Inicio", href: "/" },
  { texto: "Nosotros", href: "/nosotros" },
  { texto: "Proyectos", href: "/proyectos" },
  { texto: "Contacto", href: "/contacto" },
];

/* Redes sociales (sección 10 del brief). Vacío = no se muestran. */
export const redes: { nombre: string; href: string }[] = [
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/mia_1rp?vrfl=NnltOWVpOGowMW15",
  },
  {
    nombre: "WhatsApp",
    href: "https://wa.me/qr/7X2ZOL5RI447B1?s=r",
  },
];
