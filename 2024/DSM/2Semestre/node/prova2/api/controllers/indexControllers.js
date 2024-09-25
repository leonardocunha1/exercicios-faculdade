module.exports = {
  index,
  indexLogin,
  indexNotFound,
};

function index(req, res) {
  console.log("Rota Raiz Encontrada!");
  res.send(
    `
    <h3> Rota Raiz Encontrada! Olá Mundo </h3> 
    <p>Meu nome é: Leonardo Cunha</p>
    <p>RA: 1091392413016</p>
    <p>Avaliação de Web II - Back-End</p>
    `
  );
}

// talvez na prova não há necessidade de usar o EJS, mas de qualquer maneira segue o código conforme as aulas
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
