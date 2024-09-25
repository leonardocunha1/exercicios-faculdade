const candidatos = require("../../candidatos.json");

function getAllCandidatos() {
  return candidatos;
}

function getCandidatoById(id) {
  return candidatos.find((candidato) => candidato.id === id);
}

module.exports = {
  getAllCandidatos,
  getCandidatoById,
};
