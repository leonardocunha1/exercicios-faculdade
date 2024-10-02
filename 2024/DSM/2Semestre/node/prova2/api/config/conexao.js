let mysql = require("mysql2");
let database = "livros";

let conexao = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: "3306",
  password: "fatec123@",
});

conexao.connect((erro) => {
  if (erro) {
    console.log("Erro ao conectar ao banco de dados");
    return;
  }

  conexao.query("USE " + database);
  console.log("\nConectado ao banco de dados");
});

module.exports = conexao;
