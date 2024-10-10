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

function create(dados, callback) {
  let msql = "INSERT INTO LIVROS SET ? ";
  conexao.query(msql, dados, callback);
}

function update(dados, id, callback) {
  let msql = `UPDATE livros SET liv_titulo = '${dados.liv_titulo}', liv_edicao = '${dados.liv_edicao}' WHERE liv_codigo = '${id}'`;
  conexao.query(msql, callback);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};
