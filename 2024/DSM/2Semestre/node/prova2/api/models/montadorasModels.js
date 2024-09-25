const montadoras = require("../../montadoras.json");

function getAllMontadoras() {
  return montadoras;
}

function getMontadoraById(id) {
  return montadoras.find((montadora) => montadora.id === id);
}

module.exports = {
  getAllMontadoras,
  getMontadoraById,
};
