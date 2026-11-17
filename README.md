# goyenaga.dev — Arquitectura de Software y Portafolio Profesional

Repositorio del sitio en producción de **[goyenaga.dev](https://goyenaga.dev)**, diseñado para exponer proyectos de sistemas web comerciales, arquitecturas de backend (.NET / C#), diseño relacional de bases de datos (SQL Server) y soluciones en la nube con Microsoft Azure.

En lugar de utilizar plantillas prefabricadas, la plataforma fue construida desde cero como una demostración técnica de arquitectura frontend modular, optimización de rendimiento y estándares de código limpio.

---

## Decisiones de Arquitectura y Criterios Técnicos

### 1. Desacoplamiento de la Capa de Datos (`Single Source of Truth`)
- **Problema:** Incrustar los casos de estudio y metadatos dentro de los componentes visuales genera alto acoplamiento, mantenimiento engorroso y un historial de Git desordenado.
- **Solución:** Se aislaron todas las definiciones de proyectos en módulos de configuración independientes (`src/data/projects/*.js`), centralizados mediante un índice exportador (`src/data/projects/index.js`). Las vistas de la interfaz consumen datos normalizados de forma independiente a la lógica de renderizado.

### 2. Internacionalización Escalable por Espacios de Nombres (`i18n`)
- **Problema:** Las soluciones multiidioma suelen colapsar en diccionarios gigantescos, textos de respaldo forzados o código mezclado entre inglés y español.
- **Solución:** Integración de `i18next` configurado con *namespaces* JSON segmentados por ruta y contexto (`common`, `home`, `projects`, `resume`, `contact`).
  * La preferencia de idioma del usuario se detecta y persiste en las sesiones del navegador.
  * El cambio de idioma sincroniza el DOM al instante en tarjetas, modales y currículum sin provocar recargas de página ni saltos de diseño (*layout shift*).

### 3. Controlador de SEO Dinámico del Lado del Cliente
- Actualización reactiva de `<title>` y meta descripciones conforme el usuario navega entre las rutas de la aplicación (`/`, `/proyectos`, `/curriculum`, `/contacto`).
- Sincronización en tiempo real del atributo `<html lang="es">` y `<html lang="en">` para indexación en motores de búsqueda y preservación de metadatos OpenGraph al compartir enlaces en LinkedIn o redes técnicas.

### 4. Experiencia Interactiva y Optimización de Activos
- **Modal y Visor de Galería Personalizado:** Visualizador interactivo de proyectos con soporte de navegación táctil y por teclado (`Esc`, flechas) sin recurrir a dependencias pesadas de carruseles de terceros.
- **Carga Diferida y Compresión de Medios:** Capturas, diagramas de arquitectura y miniaturas servidos en formato moderno `.webp` con evaluación perezosa (*lazy loading*) para garantizar tiempos de carga iniciales mínimos y métricas óptimas de Core Web Vitals.

---

## Estructura del Repositorio

```text
├── public/
│   ├── cvs/                  # Currículum en PDF según idioma (ES / EN)
│   └── projects/             # Galerías y miniaturas optimizadas en WebP
└── src/
    ├── components/
    │   ├── layout/           # Cascarón global (Navbar, Footer, Grilla de fondo)
    │   ├── ui/               # ProjectCard, ProjectModal, Vitrina de soluciones
    │   ├── ScrollToTop.jsx   # Controlador de scroll ante cambios de ruta
    │   └── SEO.jsx           # Inyector reactivo de etiquetas head y metadatos
    ├── data/
    │   └── projects/         # Definiciones modulares de proyectos (Clean Architecture)
    ├── i18n/
    │   ├── config.js         # Configuración y orquestación de namespaces en i18next
    │   └── locales/          # Diccionarios de traducción divididos (es / en)
    └── pages/                # Vistas de enrutamiento (Home, Projects, Resume, Contact)
```

---

## Stack Tecnológico del Repositorio

- **Framework Frontend:** React 18, Vite
- **Enrutamiento:** React Router DOM
- **Estilos y Sistema Visual:** Tailwind CSS
- **Animaciones e Iconos:** Framer Motion, Lucide React
- **Motor de Internacionalización:** i18next, react-i18next, i18next-browser-languagedetector
- **Despliegue y Analítica:** Vercel, Vercel Web Analytics

---

## Proyectos y Casos de Estudio Documentados

La plataforma expone el ciclo completo de entrega y arquitectura a lo largo de mi perfil técnico:

1. **Base de Datos Estadística Cantonal (CPC):** Modelado relacional en **Microsoft SQL Server**, migración de datos y automatización de cálculos mediante **Stored Procedures** (sustituyendo flujos manuales de hojas de cálculo), alojado en **Microsoft Azure**.
2. **Santodex (PWA):** Aplicación web progresiva móvil construida con **React**, **PostgreSQL / Supabase**, sincronización de colecciones en tiempo real y autenticación con Google OAuth y código por correo.
3. **Sistema Administrativo ACADEMA:** Plataforma web de control y gestión respaldada por una **API RESTful en .NET (C#)**, **SQL Server**, autenticación de roles y cliente en **React**.
4. **yourFirstJob:** Aplicación móvil multiplataforma desarrollada en **.NET MAUI**, respaldada por una **Web API en C#** y **Azure SQL**.
5. **Goyenaga Arquitectura (`goyenaga.com`):** Plataforma web de alto rendimiento visual implementada con **Astro**, **Sanity Headless CMS** y CDN en **Cloudflare**.
6. **Portal de Climatización R&S (`airerys.net`):** Plataforma comercial que integra **APIs REST** y webhooks en **Make.com** para flujos desatendidos de publicación.

---

## Ejecución en Entorno Local

```bash
# Clonar el repositorio
git clone [https://github.com/NachoGoyenaga/goyenaga.dev.git](https://github.com/NachoGoyenaga/goyenaga.dev.git)

# Instalar dependencias
npm install

# Iniciar servidor local de desarrollo
npm run dev

# Compilar para producción
npm run build
```

---

## Autor

**Ignacio Goyenaga Castro**  
*Ingeniero en Sistemas Computacionales — Full Stack Engineer especializado en Backend (.NET / C#) y Bases de Datos (SQL Server / Azure)*

- **Portafolio:** [goyenaga.dev](https://goyenaga.dev)
- **LinkedIn:** [linkedin.com/in/ignacio-goyenaga-a9616a22b](https://www.linkedin.com/in/ignacio-goyenaga-a9616a22b)
- **Ubicación:** Heredia, Costa Rica
- **Contacto:** [nacho.goyenaga@gmail.com](mailto:Ignacio@goyenaga.dev)
