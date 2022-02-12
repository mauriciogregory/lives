const express = require("express");
const api = express();
const PORT = 8081;

api.get("/", (req, res) => {
    res.send("<h1>Página inicial</h1><h2>Vamos construir uma API para uma url.</h2>")
});

api.listen(PORT, () => {
    console.log(`Servidor de pé em: http://localhost:${PORT}`);
    console.log("Pressione ctrl + c para parar o server!!!");
});
