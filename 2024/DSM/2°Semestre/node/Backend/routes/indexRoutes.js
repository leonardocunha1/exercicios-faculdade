const express = require("express");
const router = express.Router();

const controllersIndex = require("../controllers/indexControllers.js");

// Rota para favicon.ico (evitar rota * ser acionada por engano)
router.get("/favicon.ico", (req, res) => res.status(204));

// rota raiz do projeto
router.get("/", controllersIndex.indexLogin);

// rota para página não encontrada (deve ser a última)
router.get("*", controllersIndex.indexNotFound);

module.exports = router;
