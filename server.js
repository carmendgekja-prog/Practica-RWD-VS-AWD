const express = require('express');
const useragent = require('express-useragent');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar EJS como motor de plantillas[cite: 2]
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (tu CSS y las imágenes)
app.use(express.static(__dirname));

// Middleware para detectar el dispositivo[cite: 2]
app.use(useragent.express());

// Ruta AWD solicitada en la Fase 3[cite: 2]
app.get('/adaptive', (req, res) => {
    // Renderizado condicional basado en el agente[cite: 2]
    if (req.useragent.isMobile || req.useragent.isTablet) {
        console.log(" Dispositivo móvil detectado. Sirviendo mobile.ejs");
        res.render('mobile'); // Envía el HTML ligero[cite: 2]
    } else {
        console.log(" Dispositivo de escritorio detectado. Sirviendo desktop.ejs");
        res.render('desktop'); // Envía el HTML completo[cite: 2]
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor AWD corriendo en http://localhost:${PORT}/adaptive`);
});