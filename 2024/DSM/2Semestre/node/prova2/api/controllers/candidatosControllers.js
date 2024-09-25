const candidatosModels = require("../models/candidatosModels");

const candidatos = candidatosModels.getAllCandidatos();

function getAll(req, res) {
  console.log("Lendo candidatos...\n", candidatos);
  return res.json(candidatos);
}

function getCod(req, res) {
  let codigo = Number(req.params.cod);
  let candidatoCodigo = candidatos[codigo];

  if (candidatoCodigo) {
    console.log("Localizado o candidato: ", candidatoCodigo);
    return res.json(candidatoCodigo);
  } else {
    return res.status(404).json({ message: "candidato não encontrado" });
  }
}

function getId(req, res) {
  let id = Number(req.params.id);
  const candidato = candidatosModels.getCandidatoById(id);

  if (candidato) {
    console.log("Código do candidato: ", candidato);
    return res.json(candidato);
  } else {
    return res.status(404).json({ message: "candidato não encontrado" });
  }
}

function getSobre(req, res) {
  console.log("Rota Sobre Encontrada!!!");
  res.send(
    "<h3> Rota Sobre Encontrada! <br> Saiba Mais Sobre os candidatos </h3>"
  );
}

module.exports = {
  getAll,
  getCod,
  getId,
  getSobre,
};
