const express = require("express");
const path = require("path"); // Importa o módulo path
const app = express();

const montadora = require("./api/routes/montadorasRoutes");
const candidato = require("./api/routes/candidatosRoutes");
const index = require("./api/routes/indexRoutes");

app.use(express.json());

// Definir a engine de visualização como EJS
app.set("view engine", "ejs");

// Definir o diretório onde os arquivos .ejs estão localizados
app.set("views", path.join(__dirname, "api/views"));

// Configura os diretórios estáticos de maneira robusta usando path
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "estilos")));
app.use(express.static(path.join(__dirname, "imagens")));
app.use(express.static(path.join(__dirname, "js")));

const port = 3000;

// Rotas
app.use("/montadora", montadora);
app.use("/candidato", candidato);
app.use("/", index);

// Servidor rodando
app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});

const conexao = require("./api/config/conexao.js");

module.exports = app;
