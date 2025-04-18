const express = require("express");

// Inicializamos la app de Express.

const app = express();

// Middleware para parsear JSON.

app.use(express.json());

// Ruta de bienvenida

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Usuarios");
});

const PORT = 3010;

app.listen(PORT, () => {
  console.log(`Servirodr corriendo en http://localhost:${PORT}`);
});

