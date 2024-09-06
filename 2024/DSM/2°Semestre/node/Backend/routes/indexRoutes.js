const express = require("express");
const router = express.Router();

// aqui poderia desestruturar o objeto e pegar somente as funções. Por exemplo:
// const { indexLogin, indexNotFound } = require("../controllers/indexControllers.js");
const controllersIndex = require("../controllers/indexControllers.js");

// rota raiz do projeto
router.get("/", controllersIndex.index);
router.get("/login", controllersIndex.indexLogin);

// Rota para favicon.ico (evitar rota * ser acionada por engano)
router.get("/favicon.ico", (req, res) => res.status(204));

// rota para página não encontrada
router.get("*", controllersIndex.indexNotFound);

module.exports = router;
