const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let salida = {
    nombre: "Felipe",
    edad: 33,
    url: req.url
  };
  res.send(salida);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});
