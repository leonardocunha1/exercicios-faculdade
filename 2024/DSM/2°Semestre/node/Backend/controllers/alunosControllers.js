const alunosModels = require("../models/alunosModels");

function getAll(req, res) {
  const alunos = alunosModels.getAllAlunos();
  console.log("Lendo alunos...\n", alunos);
  return res.json(alunos);
}

function getCod(req, res) {
  let codigo = Number(req.params.cod);
  const aluno = alunosModels.getByIdAlunos(codigo);
  if (aluno) {
    console.log("Localizado o aluno: ", aluno);
    return res.json(aluno);
  } else {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }
}

function getId(req, res) {
  let id = Number(req.params.cod);
  const aluno = alunosModels.getByIdAlunos(id);
  if (aluno) {
    console.log("Localizado o aluno: ", aluno);
    return res.json(aluno);
  } else {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }
}

module.exports = {
  getAll,
  getCod,
  getId,
};
