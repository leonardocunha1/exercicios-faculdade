const express = require("express");
const app = express();
const port = 3000;

const alunos = [
  { id: 1, nome: "Fulano Silva", idade: 27 },
  { id: 2, nome: "Ciclano Silva", idade: 32 },
];

// Rota do projeto
app.get("/", (req, res) => {
  console.log("Rota Raiz Encontrada!!!");
  res.send("<h3> Rota Raiz Encontrada! <br> Olá Mundo </h3>");
});

app.get("/sobre", (req, res) => {
  console.log("Rodando no Sobre!!!");
  res.send("<h3>Hud Esta Aqui. </h3>");
});

app.get("/Dados", (req, res) => {
  console.log("Rodando no Dados!!!");
  res.send("<h3>Hudson <br> mikael. </h3>");
});

app.get("/aluno", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      alunos: alunos,
    },
  });
});

app.get("/aluno/:id", (req, res) => {
  const id = parseInt(req.params.id); // Converte o id para número
  const aluno = alunos.find((aluno) => aluno.id === id); // Busca o aluno pelo id

  if (aluno) {
    res.status(200).json({
      status: "success",
      data: {
        aluno: aluno,
      },
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: "Aluno não encontrado",
    });
  }
});

app.get("*", function (requisicao, resposta) {
  console.log("Pagina Nao Encontrada - 404");
  resposta.send("<h3>PAgina Nao Encontrada - <br> <br> Erro gostoso 404</h3>");
});

// Servidor Rodando
app.listen(port, () => {
  console.log(`Aplicativo Rodando na porta ${port}`);
});
