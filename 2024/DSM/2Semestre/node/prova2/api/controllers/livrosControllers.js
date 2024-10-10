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

function getById(req, res) {
  const id = req.params.id;

  console.log(
    "Controller - iniciando leitura dos dados do livro na Model...\n"
  );

  livrosModels.getById(id, function (erro, resultado) {
    if (erro) {
      console.log("Controller - erro ao ler os dados do livro: " + erro);
      res.status(500).send(erro);
    } else {
      res.status(200).json(resultado);
    }
  });
}

// function create(req, res) {
//   let dados = req.body;
//   console.log("Adicionando livros");
//   console.log(req.body);
//   dados.liv_codigo = 0;

//   livrosModels.create(dados, function (err, resultado) {
//     if (err) {
//     throw err;
//       console.log("Erro ao inserir livro: " + err);
//     } else {
//       console.log("Livro inserido com sucesso");
//       res.redirect("/");
//     }
//   });
// }

function create(req, res) {
  let dados = req.body;
  console.log("Adicionando livros");
  console.log(req.body);
  dados.liv_codigo = 0;

  livrosModels.create(dados, function (err, resultado) {
    if (err) {
      console.log("Erro ao inserir livro: " + err);
      res.status(500).send("Erro ao inserir livro: " + err);
    } else {
      console.log("Livro inserido com sucesso");
      // res
      //   .status(201)
      //   .json({ message: "Livro inserido com sucesso", resultado });
      res.redirect("/");
    }
  });
}

function update(req, res) {
  console.log("Alterando registro de livros");
  let id = req.params.id;
  console.log(req.body);
  let dados = req.body;

  livrosModels.update(dados, id, function (err, resultado) {
    if (err) {
      console.log("Erro ao alterar livro: " + err);
      res.status(500).send("Erro ao alterar livro: " + err);
    } else {
      console.log("Livro alterado com sucesso");
      res
        .status(200)
        .json({ message: "Livro alterado com sucesso", resultado });
    }
  });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};
