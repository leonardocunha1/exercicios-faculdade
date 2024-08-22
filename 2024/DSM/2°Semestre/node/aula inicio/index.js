const express = require("express");
const app = express();
const port = 3000;

// Rota do projeto
app.get("/", (req, res) => {
  console.log("Rota Raiz Encontrada!!!");
  res.send("<h3> Rota Raiz Encontrada! <br> Olá Mundo </h3>");
});

app.get("/sobre", (req, res) => {
  console.log("Rodando no Sobre!!!");
  res.send("<h3>Hud Esta Aqui. </h3>");
});

app.get("/dados", (req, res) => {
  console.log("Rodando no Dados!!!");
  res.send("<h3>Hudson <br> mikael. </h3>");
});

app.get("*", function (requisicao, resposta) {
  console.log("Pagina Nao Encontrada - 404");
  resposta.send("<h3>PAgina Nao Encontrada - <br> <br> Erro gostoso 404</h3>");
});

// Servidor Rodando
app.listen(port, () => {
  console.log(`Aplicativo Rodando na porta ${port}`);
});
