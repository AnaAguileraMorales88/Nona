# NONA - Sitio Web del Cortometraje

## Descripción

Sitio web oficial del cortometraje **NONA**, una película sobre el desarraigo, la identidad y la búsqueda de pertenencia. Dos generaciones, dos historias cruzadas por la nostalgia donde el hogar, quizá, no sea un lugar al que se puede volver.

**Dirección:** Itzel Moreno Villaseñor 
**Año:** 2025
**Duración:** 9 min 27 s
**País:** México / España

---

## Características

-  **100% Accesible** - Cumple con los estándares WCAG
-  **Código Semántico** - Para la accesibilidad
-  **Responsive Design** - Optimizado para móvil, tablet y desktop
-  **Navegación Suave** - Scroll suave y transiciones fluidas
-  **Carrusel de Imágenes** - Galería interactiva con autoplay
-  **Componentes Reutilizables** - Arquitectura modular y escalable

---

## Tecnologías

- **React 18** - Biblioteca de JavaScript para construir interfaces
- **React Router DOM** - Navegación entre páginas
- **Tailwind CSS v4** - Framework de CSS utility-first
- **Vite** - Build tool rápido y moderno
- **JavaScript ES6+** - Sintaxis moderna

---

## Estructura del Proyecto

```
Nona/
├── public/
├── src/
│   ├── assets/
│   │   ├── carousel/          # Imágenes del carrusel
│   │   ├── collaborators/     # Logos de colaboradores
│   │   ├── iconos/            # Iconos de redes sociales
│   │   ├── images/            # Imágenes generales
│   │   └── makingoff/         # Fotos del making-off
│   ├── components/
│   │   ├── about/             # Componentes de "Sobre Nosotros"
│   │   │   └── Team.jsx
│   │   ├── footer/            # Footer y subcomponentes
│   │   │   ├── Collaborators.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── SocialMedia.jsx
│   │   ├── home/              # Componentes de la página Home
│   │   │   ├── Director.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Story.jsx
│   │   │   ├── StoryImages.jsx
│   │   │   └── TechnicalSheet.jsx
│   │   ├── layout/            # Layout principal
│   │   │   ├── Header.jsx
│   │   │   └── navbar/
│   │   │       ├── HamburgerButton.jsx
│   │   │       ├── MobileMenu.jsx
│   │   │       ├── Navbar.jsx
│   │   │       └── NavMenu.jsx
│   │   ├── makingoff/         # Componentes de Making-Off
│   │   │   ├── Acknowledgments.jsx
│   │   │   └── MakingOffGallery.jsx
│   │   ├── shared/            # Componentes compartidos
│   │   │   ├── AuthorNote.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Carousel.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── VideoPlayer.jsx
│   │   └── sinopsis/          # Componentes de Sinopsis
│   │       ├── Characters.jsx
│   │       └── SynopsisContent.jsx
│   ├── hooks/
│   │   └── useNavigation.js   # Custom hook para navegación
│   ├── pages/                 # Páginas principales
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── MakingOff.jsx
│   │   ├── Sinopsis.jsx
│   │   └── Teaser.jsx
│   ├── router/
│   │   └── AppRouter.jsx      # Configuración de rutas
│   ├── App.jsx
│   ├── index.css              # Estilos globales
│   └── main.jsx               # Punto de entrada
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```
##  Instalación

- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. **Clona el repositorio:**
```bash
git clone https://github.com/AnaAguileraMorales88/Nona.git
cd Nona
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

4. **Abre en el navegador:**
```
http://localhost:5173
```

---

## Scripts Disponibles
```bash
npm run dev          # Inicia el servidor de desarrollo
```
---

## Paleta de Colores
```css
#FCFAEE  /* Fondo principal - Crema claro */
#ECDFCC  /* Fondo secundario - Beige */
#DED1B6  /* Fondo terciario - Beige oscuro */
#4A4238  /* Texto principal - Marrón oscuro */
#8B6F47  /* Hover - Marrón claro */
```

---

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Móvil:** 320px - 767px
- 📱 **Tablet:** 768px - 1023px
- 💻 **Desktop:** 1024px+

---

## ♿ Accesibilidad

- Uso de HTML semántico
- Atributos ARIA apropiados
- Navegación por teclado
- Alt text en todas las imágenes
- Contraste de colores WCAG AA

---

## Contribución

Este es un proyecto personal del cortometraje NONA. Para consultas o colaboraciones, contacta con el equipo.

---

## Licencia

© 2025 NONA - Todos los derechos reservados

---
## Autora

Ana Aguilera Morales [ https://www.linkedin.com/es/ana-aguilera-morales/ ]

---
