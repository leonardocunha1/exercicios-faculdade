/*
const express = require("express");
const app = express();

const aluno = require("./routes/alunosRoutes");
const index = require("./routes/indexRoutes");

app.use(express.json());

app.set("views", "./api/views");
app.set("view engine", "ejs");

// configurar o diretório estático
app.use("static", express.static(__dirname + "/public"));
app.use(express.static("public"));
app.use(express.static("estilos"));
app.use(express.static("imagens"));
app.use(express.static("js"));

const port = 3000;

app.use("/aluno", aluno);
app.use("/", index);

//servidor rodando
app.listen(port, () => {
  console.log(`Aplicativo Rodando na Porta ${port}`);
});

module.exports = app;
*/

const express = require("express");
const path = require("path"); // Importa o módulo path
const app = express();

const aluno = require("./api/routes/alunosRoutes");
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
app.use("/aluno", aluno);
app.use("/", index);

// Servidor rodando
app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});

module.exports = app;
