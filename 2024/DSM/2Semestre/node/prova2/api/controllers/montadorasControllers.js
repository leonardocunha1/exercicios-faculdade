const montadorasModels = require("../models/montadorasModels");

const montadoras = montadorasModels.getAllMontadoras();

function getAll(req, res) {
  console.log("Lendo montadoras...\n", montadoras);
  return res.json(montadoras);
}

function getId(req, res) {
  let id = Number(req.params.id);
  const montadora = montadorasModels.getMontadoraById(id);

  if (montadora) {
    console.log("Código da montadora: ", montadora);
    return res.json(montadora);
  } else {
    return res.status(404).json({ message: "montadora não encontrado" });
  }
}

function montadoraHome(req, res) {
  res.render("montadora.ejs", {
    title: "Montadoras",
    mensagem: "Bem-vindo à página de montadoras",
    montadoras: montadoras,
  });
}

module.exports = {
  getAll,
  getId,
  montadoraHome,
};
