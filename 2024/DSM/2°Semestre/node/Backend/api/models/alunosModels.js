const alunos = require("../../dados.json");

function getAllAlunos() {
  return alunos;
}

function getByIdAlunos(id) {
  return alunos.find((aluno) => aluno.id === id);
}

module.exports = {
  getAllAlunos,
  getByIdAlunos,
};
