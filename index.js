const express = require('express');
const app = express();

// Middleware para leer datos enviados como JSON
app.use(express.json());

// Ruta para recibir datos
app.post('/enviar-datos', (req, res) => {
    const datos = req.body; // Datos enviados por el cliente
    console.log('Datos recibidos:', datos);
    res.send('Datos recibidos correctamente');
});
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});
// Iniciar servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
