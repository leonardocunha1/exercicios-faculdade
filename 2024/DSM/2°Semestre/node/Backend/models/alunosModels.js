const alunos = [
  { id: 1, nome: "Fulano Silva", idade: 27 },
  { id: 2, nome: "Ciclano Almeida", idade: 32 },
  { id: 7, nome: "José de Assis", idade: 97 },
];

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
