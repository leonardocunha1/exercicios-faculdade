const livrosModels = require("../models/livrosModels");

// const livros = livrosModels.getAllCandidatos();

function getAll(req, res) {
  console.log(
    "Controller - iniciando leitura dos dados dos livros na Model...\n"
  );

  console.time("lerLivros"); // Inicia o temporizador com o rótulo "lerLivros"

  livrosModels.getAll(function (erro, resultado) {
    if (erro) {
      console.log("Controller - erro ao ler os dados dos livros: " + erro);
      res.status(500).send(erro);
    } else {
      console.log(
        "Controller - dados dos livros lidos com sucesso: " + resultado
      );
      console.timeEnd("lerLivros"); // Finaliza o temporizador com o rótulo correspondente
      res.status(200).json(resultado);
    }
  });
}

module.exports = {
  getAll,
};
