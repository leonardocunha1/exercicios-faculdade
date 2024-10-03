const conexao = require("../config/conexao");

console.log("Acessando Models dos Livros");

function getAll(callback) {
  console.log("Model - iniciando leitura dos dados dos livros...\n");

  const sql = "SELECT * FROM livros";

  conexao.query(sql, callback);
}

function getById(id, callback) {
  console.log("Model - iniciando leitura dos dados dos livros...\n");

  const sql = `SELECT * FROM livros WHERE liv_codigo = ${id}`;

  conexao.query(sql, callback);
}

module.exports = {
  getAll,
  getById,
};
