module.exports = {
  indexLogin,
  indexNotFound,
};

function indexLogin(req, res) {
  console.log("Entrou na função indexLogin");
  res.send("<h3> Rota Raiz Encontrada! <br> Olá Mundo </h3>");
}

function indexNotFound(req, res) {
  console.log("Entrou na função indexNotFound");
  res.send("<h3>Página Não Encontrada!</h3><p> Erro 404</p>");
}
