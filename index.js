const express = require('express');
const app = express();

// Middleware para registrar detalles de la solicitud
app.use((req, res, next) => {
    const currentDate = new Date();
    
    console.log(`--- Nueva solicitud ---`);
    console.log(`Método: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`IP del cliente: ${req.ip}`);
    console.log(`Fecha y hora de la solicitud: ${currentDate.toISOString()}`);
    console.log(`Navegador y sistema operativo: ${req.headers['user-agent']}`);
    console.log(`Tipo de contenido esperado: ${req.headers['accept']}`);
    console.log(`Referer: ${req.headers['referer'] || 'No disponible'}`);
    
    // Si la solicitud es POST, se muestran los datos del cuerpo
    if (req.method === 'POST') {
        console.log(`Datos del cuerpo: ${JSON.stringify(req.body)}`);
    }
    
    console.log('--- Fin de la solicitud ---\n');
    next();  // Pasa la solicitud al siguiente middleware o ruta
});

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});

// Ruta para recibir datos (POST)
app.post('/enviar-datos', (req, res) => {
    const datos = req.body; // Datos enviados por el cliente
    console.log('Datos recibidos:', datos);
    res.send('Datos recibidos correctamente');
});

// Middleware para manejar solicitudes 404 (cuando no se encuentra la ruta)
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Configuración del puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
