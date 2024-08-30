const express = require("express");
const router = express.Router();

const {
  getAll,
  getCod,
  getId,
} = require("../controllers/alunosControllers.js");

router.get("/", getAll);
router.get("/:cod", getCod);
router.get("/editar/:cod", getId);

// rota de edição de alunos
router.get("/edit/:cod", (req, res) => {
  console.log(`Editando o aluno: ${req.params.cod}`);
  res.send("<h3> Rota de Edição de Alunos  </h3>");
});

// rota de exclusão de alunos
router.get("/delete/:cod", (req, res) => {
  console.log(`Excluindo o aluno: ${req.params.cod}`);
  res.send("<h3> Rota de Exclusão de Alunos  </h3>");
});

// rota sobre
router.get("/sobre", (req, res) => {
  console.log("Rota Sobre Encontrada!!!");
  res.send(
    "<h3> Rota Sobre Encontrada! <br> Saiba Mais Sobre a Nossa Empresa </h3>"
  );
});

// rota para página não encontrada
router.get("*", (req, res) => {
  res.status(404).send("<h3>Página Não Encontrada!</h3><p> Erro 404</p>");
});

module.exports = router;
