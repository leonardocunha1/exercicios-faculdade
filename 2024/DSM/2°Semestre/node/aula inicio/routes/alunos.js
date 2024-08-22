const express = require("express");
const router = express.Router();

const alunos = [
  { id: 1, nome: "Fulano Silva", idade: 27 },
  { id: 2, nome: "Ciclano Silva", idade: 32 },
];

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      alunos: alunos,
    },
  });
});

app.get("/:id", (req, res) => {
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
