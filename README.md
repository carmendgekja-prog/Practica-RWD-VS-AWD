# Práctica de Laboratorio: RWD vs. AWD 

Este repositorio contiene el código fuente de la práctica de laboratorio enfocada en el diseño, implementación y evaluación de estrategias de entrega de interfaces web. La práctica compara el rendimiento de una arquitectura **Responsive Web Design (RWD)** frente a una arquitectura **Adaptive Web Design (AWD)** mediante la simulación de un Catálogo de Hardware.

##  Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3 (Grid, Flexbox, Media Queries), JavaScript Vanilla.

* **Backend (AWD):** Node.js, Express.js.

* **Motor de Plantillas:** EJS (`desktop.ejs`, `mobile.ejs`).

* **Detección de Agente:** `express-useragent`.

* **Optimización de Imágenes:** `<picture>`, WebP, AVIF.

##  Estructura del Proyecto

```
/
├── views/
│   ├── desktop.ejs   # Plantilla completa para escritorio (AWD)
│   └── mobile.ejs    # Plantilla ligera sin gráficos/tablas (AWD)
├── IMG-JPG/          # Imágenes de alta resolución
├── IMG-WebP/         # Imágenes optimizadas para web móvil
├── styles.css         # Hoja de estilos con enfoque Mobile First
├── server.js         # Servidor Express con renderizado condicional
├── package.json      # Dependencias del proyecto
└── README.md         # Documentación del proyecto

```

##  Requisitos Previos

Para ejecutar este proyecto de manera local, asegúrate de tener instalado:

* [Node.js](https://nodejs.org/) (Versión 14.x o superior)

* NPM (Normalmente se instala junto a Node.js)

##  Instalación y Arranque Local

Sigue estos pasos para clonar y arrancar el proyecto en tu entorno local:

1. **Clonar el repositorio:**

   ```
   git clone [URL_DE_TU_REPOSITORIO]
   cd [NOMBRE_DE_LA_CARPETA]
   
   ```

2. **Instalar dependencias:**
   Ejecuta el siguiente comando en tu terminal para instalar Express, EJS y Express-UserAgent:

   ```
   npm install
   
   ```

3. **Arrancar el servidor:**
   Inicia el servidor Node.js ejecutando:

   ```
   node server.js
   
   ```

4. **Acceder a la aplicación:**

   * **Versión AWD (Renderizado Condicional):** Abre tu navegador en `http://localhost:3000/adaptive`. Si accedes desde un móvil (o simulador de DevTools), el servidor entregará un DOM reducido. Si accedes desde PC, entregará el catálogo completo.

## Auditoría y Pruebas (DevTools)

Para comprobar la optimización AWD, se recomienda abrir **Google Chrome DevTools (F12)** y configurar el entorno de la siguiente manera:

1. Activar el **Device Toolbar** (Simulación móvil a 390x844px).

2. En la pestaña *Network*, habilitar **Fast 3G** y *Disable Cache*.

3. En la pestaña *Performance*, habilitar **4x CPU Slowdown**.

Al recargar la ruta `/adaptive` bajo estas condiciones, se podrá observar la reducción significativa en el payload inicial, número de peticiones y tiempos de renderizado (LCP) frente al envío estático tradicional.