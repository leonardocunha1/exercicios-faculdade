module.exports = {
  index,
  indexLogin,
  indexNotFound,
};

function index(req, res) {
  console.log("Rota Raiz Encontrada!!! TESTANDO MANEIRO");
  res.send("<h3> Rota Raiz Encontrada! <br> Olá Mundo </h3>");
}

function indexLogin(req, res) {
  res.render("login.ejs", {
    title: "Login",
    mensagem: "Senha do usuário",
  });
}

function indexNotFound(req, res) {
  console.log("Página não Encontrada - 404");
  res.send("<h3>Página Não Encontrada!</h3><p> Erro 404</p>");
}
