const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Capturar información básica
    const userAgent = req.headers['user-agent']; // Información del dispositivo/navegador
    const ip = req.ip; // Dirección IP
    const language = req.headers['accept-language']; // Idioma del dispositivo

    // Mostrar la información en la respuesta
    res.send(`
        <h1>Información recolectada</h1>
        <p><b>Dispositivo/Navegador:</b> ${userAgent}</p>
        <p><b>Dirección IP:</b> ${ip}</p>
        <p><b>Idioma:</b> ${language}</p>
        <p>Gracias por participar en esta demostración.</p>
    `);

    // Imprimir en consola para que puedas verlo en tu computadora
    console.log('Nueva visita:');
    console.log(`  Dispositivo: ${userAgent}`);
    console.log(`  IP: ${ip}`);
    console.log(`  Idioma: ${language}`);
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});