const alunosModels = require("../models/alunosModels");

function getAll(req, res) {
  const alunos = alunosModels.getAllAlunos();
  console.log("Lendo alunos...\n", alunos);
  return res.json(alunos);
}

function getCod(req, res) {
  let codigo = Number(req.params.cod); // Convertendo para número
  const aluno = alunosModels.getByIdAlunos(codigo);
  if (aluno) {
    console.log("Localizado o aluno: ", aluno);
    return res.json(aluno);
  } else {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }
}

function getId(req, res) {
  let id = Number(req.params.cod); // Convertendo para número
  const aluno = alunosModels.getByIdAlunos(id);
  if (aluno) {
    console.log("Localizado o aluno: ", aluno);
    return res.json(aluno);
  } else {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }
}

function getEdit(req, res) {
  console.log("Rota de Edição de Alunos Encontrada!!!");
  res.send("<h3> Rota de Edição de Alunos  </h3>");
}

function getDelete(req, res) {
  console.log(`Excluindo o aluno: ${req.params.cod}`);
  res.send("<h3> Rota de Exclusão de Alunos  </h3>");
}

function getSobre(req, res) {
  console.log("Rota Sobre Encontrada!!!");
  res.send(
    "<h3> Rota Sobre Encontrada! <br> Saiba Mais Sobre a Nossa Empresa </h3>"
  );
}

module.exports = {
  getAll,
  getCod,
  getId,
  getEdit,
  getDelete,
  getSobre,
};
